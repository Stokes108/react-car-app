
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import Input from './Input'
// import { chooseName, chooseAddress, chooseEmail, choosePhone } from "../redux/slices/RootSlice"

//interface

interface ContactFormProps{
    id?: string[]
}


const ContactForm = (props:ContactFormProps) => {
    // const { register, handleSubmit } = useForm({})
    // const dispatch = useDispatch();
    // const store = useStore();
    // console.log(props.id)


    // const onSubmit = (data : any, event: any) =>{
    //     console.log(`ID: ${props.id}`);

    //     if (props.id && props.id.length > 0){
    //         server_calls.update(props.id[0], data)
    //         console.log(`Updated: ${ data } ${ props.id }`);
    //         setTimeout(() => {window.location.reload()}, 1000);
    //         event.target.reset()
    //     } else{
    //         //use dispath to update our state in our store
    //         dispatch(chooseName(data.name));
    //         dispatch(chooseEmail(data.email));
    //         dispatch(choosePhone(data.phone_number));
    //         dispatch(chooseAddress(data.address));

    //         server_calls.create(store.getState())
    //         setTimeout( () => (window.location.reload()), 500);

    //     }
    // }



  return (

        <div className = 'w-full'>
                { props.id ? (
                    <form>
                        <Input
                            name = 'make'
                            label = 'Make'
                            editable = {true}
                            original = 'original'
                        />
                        <Input
                            name = 'model'
                            label = 'Model'
                            editable = {true}
                            original = 'original'
                        />
                        <Input
                            name = 'year'
                            label = 'Year'
                            editable = {true}
                            original = 'original'
                        />
                        <Input
                            name = 'color'
                            label = 'Color'
                            editable = {true}
                            original = 'original'
                        />

                        <div contentEditable = 'true'>
                            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="make">God please work</label>
                            <input type='text' value ='john' className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' name = 'work' />
                        </div>

                        <div className ='flex justify-between pt-4'>  
                            <div className='flex p-1 justify-end'>
                                <button
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
                    <form action="">

            
                        <Input
                            name = 'make'
                            label = 'Make'
                            editable = {false}
                            placeholder = 'Make'
                        />
                        <Input
                            name = 'model'
                            label = 'Model'
                            editable = {false}
                            placeholder = 'Model'
                        />
                        <Input
                            name = 'year'
                            label = 'Year'
                            editable = {false}
                            placeholder = 'Year'
                        />
                        
                        
                        <Input
                            name = 'color'
                            label = 'Color'
                            editable = {false}
                            placeholder = 'Color'
                        />
                        <div className='flex p-1 justify-end pt-4'>
                            <button 
                                className = 'flex justify-start bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'
                                >
                                Submit
                            </button>
                        </div>
                    </form>
                
                )}
    </div>
  )
            
}

export default ContactForm
