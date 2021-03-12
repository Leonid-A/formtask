import React, {useEffect, useState} from "react";
import {Props} from "../Types/TabsTypes";

const ActivityView: React.FC<Props>  = (props) => {
    const [tabConfig, setTabConfig]=useState<Props>(props);
    const [renderConfigs,setRenderConfigs]=useState([]);

    useEffect(() => {
        let newRenderConfigs=[];
        for (let key in tabConfig){
            newRenderConfigs.push([key, tabConfig[key]]);
        }
        setRenderConfigs(newRenderConfigs)
    }, [tabConfig])

    return(
        <div className="p-3 mb-2 bg-secondary text-white border-dark rounded">
            { renderConfigs.map((item)=>{
                let renderedItem: JSX.Element;
                switch (item[0]) {
                    case "component":
                        renderedItem =  <div className="row" key={item[0]}>
                            <div className="col-1">
                                <label htmlFor={item[0]} className="mr-2">{item[0]}</label>
                            </div>
                            <div className="col-4">
                                <select name={item[0]}  defaultValue={item[1]}>
                                    <option value="DetailsView">DetailsView</option>
                                    <option value="NotesView">NotesView</option>
                                    <option value="ActivityView">ActivityView</option>
                                </select>
                            </div>
                        </div>
                        break;
                    case "properties":
                        renderedItem =  <div className="row" key={item[0]}>

                        </div>
                        break;
                    default:
                        renderedItem = <div className="row" key={item[0]}>
                            <div className="col-1">
                                <label htmlFor={item[0]} className="mr-2">{item[0]}</label>
                            </div>
                            <div className="col-4">
                                <input type="text" name={item[0]}  defaultValue={item[1]}/>
                            </div>
                        </div>
                }
                return renderedItem

            })}
        </div>
    )
}

export default ActivityView;