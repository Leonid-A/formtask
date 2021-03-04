import React from "react";
interface Props {
    config: {
        path: string;
        title: string;
        component: string;
        icon: string;
        properties: object;
    }

}
const ActivityView: React.FC<Props>  = (props) => {
    return(
        <div className="p-3 mb-2 bg-secondary text-white border-dark rounded col-6 d-flex">
            <h3>{props.config.title}</h3>
            <span className="p-2">ICON: {props.config.icon}</span>
            <button className="btn btn-primary m-2" type="button" >Add Props</button>
        </div>
    )
}

export default ActivityView;