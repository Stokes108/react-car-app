
interface TextField{
    name: string, 
    placeholder?: string,
    original?: string,
    editable: boolean,
    label: React.ReactNode,
    register: any
}

const Input = (props : TextField) => {
  return (
    <div>
    { props.editable ? (
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="make">{props.label}</label>
            <input {...props.register(props.name)} type='text' defaultValue={props.original}  contentEditable='true' className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' name ={props.name} />
        </div>
    ):(
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="make">{props.label}</label>
            <input {...props.register(props.name)} className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' name ={props.name} placeholder={props.placeholder} />
        </div>
    )}
    </div>
  )
}

export default Input
