import React from 'react'
import ApiPost from './ApiPost'

export default function ApiHandle() {
    const [error, setError] = React.useState(null)
    const [isloading, setIsloading] =React.useState(false)
    const [data, setData] = React.useState([])
    React.useEffect
    const apicall=async ()=>{
        setIsloading(true)
        setError(null)
        try {
            const response = await fetch("https://swapi.dev/api/peopless/")
            // if(!response){
            //     throw new Error("Something went wrong ....Retrying")
            // }
            const data = await response.json()
            console.log(data.results)
            setData(data.results)
            setIsloading(false)
        } catch (error) {
            setError(error.message)
            setIsloading(false)
        }
    }
    // React.useEffect(()=>apicall,[])
    let content = "Nothing availbale"
    if (isloading) {
        content = "Loading..."
    }
    if(error){
        content = error
    }
    if( data.length>0) {
        content = data.map(item=>(
            <div key={item.name} className='border-2 m-7 rounded-3xl border-gray-500 shadow-xl shadow-gray-900 '>
                <p>NAME: {item.name}</p>
                <p>HEIGHT: {item.height}</p>
                <p>SKIN: {item.skin_color}</p>
            </div>
        ))
    }
  return (
    <div className='text-center'>
        <ApiPost/>
      <button onClick={apicall} className='border-2 p-3 m-6 rounded-4xl shadow-xl shadow-gray-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-green-300 hover:to-gray-600'>API CAll</button>
        {content}
    </div>
  )
}
