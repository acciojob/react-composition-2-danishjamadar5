import React,{useState} from "react";

const Modal=()=>{

const [status,setStatus]=useState(false)
    return(
        <div className="modal-overlay">
            <button className="modal-p" onClick={()=>setStatus(true)}>Show Modal</button>
            {
                status? 
                <div className="content" onClick={()=>setStatus(false)}>
                <button className="modal-close" onClick={()=>setStatus(false)}>Close Modal</button>
                <p>This is the content of the modal</p>
                </div>:
                null

            }
            </div>

    )
}

export default Modal;
