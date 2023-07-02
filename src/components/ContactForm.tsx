
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { server_calls } from "../api/server"
import Input from './Input'


interface ContactFormProps{
    id?: string
}


const ContactForm = (props:ContactFormProps) => {
    const { register, handleSubmit } = useForm({})
    const [ make, setMake ] = useState('')
    const [ model, setModel ] = useState('')
    const [ year, setYear ] = useState('')
    const [ color, setColor ] = useState('')
    const [ deleteCar, setDeleteCar ] = useState(false)



    const get_single_data = async (id: string) => {
        const singleData = await server_calls.getSingle(id)
        setMake(singleData['make'])
        setModel(singleData['model'])
        setYear(singleData['year'])
        setColor(singleData['color'])
        
    }
    // console.log(props.id)

    if(props.id){
        get_single_data(props.id)
        console.log(make, model, year, color);
        console.log(deleteCar);
        
    }
    
    


    const onSubmit = (data : any = {}) =>{
       

        if(props.id && deleteCar){
            server_calls.delete(props.id)
            console.log(`You have delete car ${props.id}`)
            setTimeout(() => {window.location.reload()}, 1000);
        }else if(props.id){
            if(!data.make){
                data.make = make 
            }
            if(!data.model){
                data.model = model 
            }
            if(!data.year){
                data.year = year 
            }
            if(!data.color){
                data.color = color 
            }
            console.log(data.test)
            server_calls.update(props.id, data)
            setTimeout(() => {window.location.reload()}, 1000);

        }else{
            server_calls.create(data)
            setTimeout(() => {window.location.reload()}, 1000);
        }
    }

  return (

        <div className = 'w-full'>
                { props.id ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            register={register}
                            name = 'make'
                            label = 'Make'
                            editable = {true}
                            original = {make}
                        />
                        <Input
                            register={register}
                            name = 'model'
                            label = 'Model'
                            editable = {true}
                            original = {model}
                        />
                        <Input
                            register={register}
                            name = 'year'
                            label = 'Year'
                            editable = {true}
                            original = {year}
                        />
                        <Input
                            register={register}
                            name = 'color'
                            label = 'Color'
                            editable = {true}
                            original = {color}
                        />



                        <div className ='flex justify-between pt-4'>  
                            <div className='flex p-1 justify-end'>
                                <button onClick= {()=>setDeleteCar(true)}
                                    className = 'flex justify-start bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'
                                    >
                                    Delete
                                </button>
                            </div>
                            <div className='flex p-1 justify-start'>
                                <button
                                    className = 'flex justify-start bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'
                                    >
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                ):(
                    <form onSubmit={handleSubmit(onSubmit)}>

            
                        <Input
                            register={register}
                            name = 'make'
                            label = 'Make'
                            editable = {false}
                            placeholder = 'Make'
                        />
                        <Input
                            register={register}
                            name = 'model'
                            label = 'Model'
                            editable = {false}
                            placeholder = 'Model'
                        />
                        <Input
                            register={register}
                            name = 'year'
                            label = 'Year'
                            editable = {false}
                            placeholder = 'Year'
                        />
                        
                        
                        <Input
                            register={register}
                            name = 'color'
                            label = 'Color'
                            editable = {false}
                            placeholder = 'Color'
                        />
                        <div className='flex p-1 justify-end pt-4'>
                            <button 
                                className = 'flex justify-start bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'
                                >
                                Create
                            </button>
                        </div>
                    </form>
                
                )}
    </div>
  )
            
}

export default ContactForm
