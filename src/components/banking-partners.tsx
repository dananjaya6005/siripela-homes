import React from 'react'


const bankLogos =[
    'https://files.catbox.moe/v6r9f3.png',
    'https://files.catbox.moe/hlq6ad.png',
    'https://files.catbox.moe/pwryf8.png',
    'https://files.catbox.moe/cbs5b7.png',
    'https://files.catbox.moe/raq5x9.png'


]


const BankingPartners = () => {
  return (
    <>
    <div className='container mx-auto px-4 max-w-6xl my-4 mt-'>
        <h1 className="text-center text-5xl font-bold text-gray-900 mb-2">Our Banking Partners</h1>
        <p className="text-center text-gray-500 mb-12">We are proud to be associated with the following banks</p>
        <div 
        className="flex flex-wrap justify-center items-center gap-6"
        >
            {
                bankLogos.map((logo, index) => (
                    <img key={index} src={logo} alt="Bank Logo" className=" w-40 mx-4" />
                ))
            }
        </div>
    </div>

    </>
  )
}

export default BankingPartners;