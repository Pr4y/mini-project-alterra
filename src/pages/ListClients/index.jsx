import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import {  useQuery, useMutation  } from "@apollo/client";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { getClients, inputClients, deleteClients } from "../../GraphQL/Clients";
import Loading from "./Loading";




const ListClients = () => {
    const token = JSON.parse(localStorage.getItem("Token"));

    //Get Client List Query ---------------------------------------------------
    const { data, loading, error, refetch } = useQuery(getClients, {
        variables: {
            id : token.id
        }
    })
    const baseData = {
        clientName: "", 
        clientAddress: "",
    }
    const [dataInput, setDataInput] = useState(baseData)
    // Delete Mutation ----------------------------------------------
    const [deleteMemberById, { loading: loadingDeleteMember }] = useMutation(deleteClients, {
        onCompleted: (client) => {
            refetch();

            Swal.fire(
                "Berhasil!",
                "Anggota tim berhasil dihapus.",
                "success"
            );
        },
        onError: (error) => {
            console.log(error);

            Swal.fire(
                "Ada Error!",
                "",
                "error"
            );
        }
    });

    // Handle Delete Clients
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This can't be undo",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMemberById({
                    variables: {
                        id
                    }
                });
            }
        });
    };


    // handle Input Clients -------------------------------------------------------------------
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDataInput({
            ...dataInput,
            [name]: value
        })
    }
    
    // Inser Clients -----------------------------------------------------------------------
    const [insertClient, {loading: loadingInsert}] = useMutation(inputClients, {
        onCompleted: () => {
            Swal.fire(
                "Success!",
                "Client added.",
                "success"
            );
        },
        onError : (error) => {
            console.log(error)
            Swal.fire(
                "Something went wrong",
                "",
                "error"
            );
        },
        refetchQueries: [getClients],
        awaitRefetchQueries: true,
    })

    // Sumbit Clients----------------------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        insertClient({
            variables: {
                object: {
                    clientName: dataInput.clientName,
                    clientAddress: dataInput.clientAddress,
                    user_id: JSON.parse(localStorage.getItem("Token")).id,
                }
            }
        })
        resetData()
      }
      const resetData = () => {
        setDataInput(baseData)
      }
      

    


    if (loading) return <Loading/>;
    if (loadingInsert) return <Loading/>

    return ( 
        <div>
            <Navbar/>
            <Link to="/app">
            <button className="mb-3 mt-3 bg-blue-500 
              text-white font-bold py-2 px-8 
                rounded shadow border-2 border-blue-500 
                hover:bg-transparent hover:text-blue-500 
                transition-all duration-300 ml-4">Back To Dashboard</button></Link>
            {/* Client Input */}
            
            <div className="relative border-8 overflow-x-visible mx-10 mt-5 sm:rounded-lg">
                <p className="font-bold ml-4">Input New Client</p>
                <div className="flex flex-col mt-2 ml-4">
                <label htmlFor="clientName">Client's Name :</label>
                <input 
                  type="text" 
                  name="clientName" 
                  id="clientName" 
                  placeholder="Enter your client name" 
                  autoComplete="off" 
                  value={dataInput.clientName}  
                  onChange={handleChange}
                  required
                />
                </div>

                <div className="flex flex-col ml-4">
                <label htmlFor="clientAddress">Client's Address :</label>
                <input 
                  type="text" 
                  name="clientAddress" 
                  id="clientAddress" 
                  placeholder="Enter your client address" 
                  autoComplete="off" 
                  value={dataInput.clientAddress}  
                  onChange={handleChange}
                  required
                />
                </div>
                <button type="submit" onClick={handleSubmit} className="mb-3 mt-3 bg-blue-500 
        text-white font-bold py-2 px-8 
        rounded shadow border-2 border-blue-500 
        hover:bg-transparent hover:text-blue-500 
        transition-all duration-300 ml-4">Submit</button>
                </div>


            {/* Client Output */}
            <p className="flex flex-col items-center justify-center font-bold mt-4 border">Your Clients :</p>
            <div className="relative overflow-x-auto mx-10  sm:rounded-lg">
    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID Client
                </th>
                <th scope="col" className="px-6 py-3">
                    Client Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        
            <tbody>
            {data.clientDetail.map((client, clientIdx) => (
            <tr key={clientIdx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {client.id}
                </td>
                <td className="px-6 py-4">
                    {client.clientName}
                </td>
                <td className="px-6 py-4">
                    {client.clientAddress}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleDelete(client.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        
        
    </table>
</div>
        </div>
     );
}
 
export default ListClients;