import React from "react";
import { Link } from "react-router-dom";

// Components -----------------------
import Navbar from '../../components/Navbar'
import Card from "../../components/CardAbout";
import free from './icon/free.png'
import snap from './icon/snap.png'
import automatic from './icon/automatic.png'



export default function Landing() {
  return (
    <>
      <Navbar transparent/>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                        Put your invoicing on auto
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                    Invoicer makes your business invoicing so simple. Easily create, download and print invoices for your clients. No more unsurety, just Invoicer It!
                    </p>
                    <Link to="/register">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3 mt-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Get Started
                    </button>
                    </Link>
                    <Link to="/login">
                    <button className="text-white bg-transparant hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 ml-3 text-center mr-3 md:mr-0 dark:bg-transparant dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Login
                    </button>
                    </Link>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <img src={free} alt="free to use" />
                    </div>
                    <h6 className="text-xl font-semibold">Free To Use</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum recusandae pariatur inventore dignissimos aliquam at iusto architecto aut suscipit, corrupti dolorum a, animi excepturi culpa doloremque hic reiciendis, vitae ipsam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <img src={snap} alt="easy to use" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Easy To Use
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quia harum voluptatem fugit error ipsum. Repellat, fugit excepturi. Perferendis molestiae quis quae asperiores corporis placeat illo repellat ipsam! Deleniti, temporibus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <img src={automatic} alt="full auto" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Just Invoicer it!
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, perspiciatis. Consequuntur quo facilis repudiandae iste perferendis esse delectus distinctio quibusdam doloremque saepe, unde placeat qui dolor. Labore sed eum accusamus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    
        <Card/>   
        
      </main>
    </>
  );
}