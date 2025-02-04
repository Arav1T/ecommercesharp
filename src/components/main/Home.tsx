import React from 'react'

const data=[
    {date:new Date().toDateString(),country:"India",location:"water park"},
    {date:new Date().toDateString(),country:"India",location:"water park"},
    {date:new Date().toDateString(),country:"India",location:"water park"},
    {date:new Date().toDateString(),country:"India",location:"water park"},
    {date:new Date().toDateString(),country:"India",location:"water park"},
    {date:new Date().toDateString(),country:"India",location:"water park"},

]
export default function Home() {
  return (
    // <div className=' text-center '>
    //   <div className=' text-center '>hello</div>
    //   <div>
    //     <div className='flex justify-center'><h2 className='font-bold size-9  '>TOURS</h2></div>
    //     <div >
    //         {data.map((item,i)=>(<div key={i}>
    //             <p>{item.date}</p>
    //             <p>{item.country}</p>
    //             <p>{item.location}</p>
    //             <button>Buy Ticket</button>
    //         </div>))}
    //     </div>
    //   </div>
    // </div>
    <div className="text-center">
      {/* "Hello" at the top of the header */}
      <div className="absolute top-6 z-20 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-md rounded-md">
        hello
      </div>

      <div>
        <div className="flex justify-center">
          <h2 className="font-bold text-2xl">TOURS</h2>
        </div>
        <div className=''>
          {data.map((item, i) => (
            <div key={i} className="p-2 my-2 flex justify-center space-x-5 items-center border-b-2" >
              <p>{item.date}</p>
              <p>{item.country}</p>
              <p>{item.location}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
                Buy Ticket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
