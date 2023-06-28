import { server_calls } from "../api/server"
import { useGetData } from "../custom_hook/FetchData";
import Button from "./Button"
import { useState } from 'react'
import Modal from "./Modal";



const  createData =  async () => {    
    const response = await server_calls.get()



    console.log(response['1']['make'])
}

 function testFunc(id:number){

    console.log(id)
}


const DataTable = () => {
// // TODO: Make data table integrate with server.calls - data
    const  { carData, getData } = useGetData();
    const [ open, setOpen ] = useState(false);




    
  return (<div >
      
    <Modal 
        open = {open}
        onClose = {() => setOpen(false)}
        
    />

    <div onClick= {(e) => {e.stopPropagation()}}><Button onClick={(() => setOpen(true))}> Click me</Button></div>

        
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-purple-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Make                        
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Model
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Year
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                </tr>
            </thead>
            <tbody>
                
                {carData.map((car, index) => (
                <tr onClick={()=>testFunc(car['id'])} className="bg-gray-200 hover:bg-amber-200 dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {car['make']}
                    </th>
                    <td className="px-6 py-4">
                        {car['model']}
                    </td>
                    <td className="px-6 py-4">
                        {car['year']}
                    
                    </td>
                    <td className="px-6 py-4">
                        {car['make']}
                    </td>
                </tr>                                    
                ))
                }        
            </tbody>
        </table>
      </div>
    
  </div>



  )
}

export default DataTable


