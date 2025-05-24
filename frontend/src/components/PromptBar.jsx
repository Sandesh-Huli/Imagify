import { useState } from "react";
const PromptBar = () =>{
    const [input,setInput]=useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return(
        <div className="flex items-center bg-gray-600 rounded-full p-1 w-full max-w-xl">
            <input type="text" placeholder="Describe what you want to generate" className="flex-grow bg-transparent text-white placeholder-white outline-none px-4" value={input} onChange={handleChange}/>
            <button className="bg-gray-900 text-white rounded-full px-6 py-2 shadow ">Generate</button>
        </div>
    )
}
export default PromptBar;