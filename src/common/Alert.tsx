import { BiInfoCircle } from "react-icons/bi";
const Alert = ({alertText}: {alertText: string}) => {
    return (  <div className="w-full flex items-center gap-1.5 bg-sky-100 text-sky-500 px-4 py-3 rounded-xl"><BiInfoCircle className="stroke-sky-500 size-5"/>{alertText}</div> );
}
 
export default Alert;