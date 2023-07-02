import ContactForm from "./ContactForm";


type Props  = {
    id?: string;
    open: boolean;
    onClose: () => void;

}

const Modal = ( props: Props ) => {

    if ( !props.open ) return (<></>);
    return (
        <div 
            onClick={ props.onClose } 
            className="absolute w-full h-full flex overflow-auto z-10
            justify-center align-middle bg-black bg-opacity-50"
        >
            <div 
                className = ' max-w-600px w-2/5 fixed flex z-10 bg-gray-100 shadow-xl rounded overflow-auto h-4/5'
                onClick={ (e) =>{
                    e.stopPropagation()
                }} 

            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart justify-end">
                        <p className="flex justify-start m-3 bg-gray-300 p-2 rounded hover:bg-slate-800 text-black hover:text-white"
                        onClick = {props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <ContactForm  id={props.id} />
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Modal
