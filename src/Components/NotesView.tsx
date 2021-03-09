import React from "react";
import {Props} from "../Types/TabsTypes";

const NotesView: React.FC<Props>  = (props) => {
    return(
        <div className="p-3 mb-2 bg-secondary text-white border-dark rounded col-6">
            <div className="d-flex">
                <h3>{props.title}</h3>
                <span className="p-2">ICON: {props.icon}</span>
                <button className="btn btn-primary m-2" type="button" >Add Props</button>
            </div>
            <div>
                <label htmlFor={`${props.title}Path`} className="mr-2">Path</label>
                <input type="text" id={`${props.title}Path`} name={`${props.title}Path`}  value={props.path}/>
            </div>
            <div>
                <textarea className="col-10"></textarea>
            </div>
        </div>
    )
}

export default NotesView;