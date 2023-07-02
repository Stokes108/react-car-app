
interface ButtonType{
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;

}



const Button = (props : ButtonType) => {
  return (
    <div className="pt-4">
        <button onClick = {props.onClick} type="button" className="text-gray-800 bg-gray-400 hover:text-white  border-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {props.children}
        </button>

    </div>
  )
}

export default Button
