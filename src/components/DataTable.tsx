import { useGetData } from "../custom_hook/FetchData";
import Button from "./Button"
import { useState } from 'react'
import Modal from "./Modal";






const DataTable = () => {
// // TODO: Make data table integrate with server.calls - data
    const  { carData, getData } = useGetData();
    const [ open, setOpen ] = useState(false);
    const [ carId, setCarId ] = useState('')


    const updateCar = (id : string) => {
        setCarId(id)
        setOpen(true)
        getData

    }

    
  return (<div>
      
    <Modal 
        open = {open}
        onClose = {() => {setOpen(false); setCarId('') }}
        id = {carId}

        
    />

    <div className = 'flex justify-center' onClick= {(e) => {e.stopPropagation()}}><Button onClick={(() => setOpen(true))}> Create Car</Button></div>
    <div className="pb-4 text-gray-900 flex justify-center">(Click on a car to edit/delete)</div>
        
      <div className="relative overflow-x-auto flex justify-center">
        <table className="w-3/4 text-sm text-left  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-slate-700  dark:bg-gray-700 dark:text-gray-400">
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
                
                {carData.map((car,index) => (
                        
                        <tr key = {index} onClick={() => updateCar(car['id'])} className="bg-gray-200 hover:bg-gray-400 dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {car['make']}
                            </th>
                            <td className="px-6 py-4 text-gray-900">
                                {car['model']}
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                {car['year']}
                            
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                {car['color']}
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


