import React from 'react'

const handlePrint = () => {
  window.print()
}
function Header() {
  return (
    <div>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h2 className="font-bold uppercase tracking-wide text-4xl mb-3  ">Invoice</h2>
          </div>
        </header>
    </div>
  )
}

export default Header