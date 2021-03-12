import Lead from "../../jsoncode/layout";
import React, {useState} from "react";
import {Page, Props} from "../../Types/TabsTypes";
import Tab from "../Tab";

const LeadPage = () => {
    const [leadObj, setLeadObj] = useState<Page>(Lead);
    let newTabName = "";
    const [Component, setComponent]=useState<JSX.Element>();

    const takeTabName = (event: React.ChangeEvent<HTMLSelectElement>)=> {
        newTabName = (event.target.value === "select tab") ? "" : event.target.value
    }

    const deleteTab = (index)=>{
        const editLeadObj = JSON.parse(JSON.stringify(leadObj))
        editLeadObj.tabs.splice(index,1);
        setLeadObj(editLeadObj);
    }

    const addNewTab=()=>{
        if (newTabName){
            const editLeadObj = JSON.parse(JSON.stringify(leadObj));
            editLeadObj.tabs.push({title: newTabName});
            setLeadObj(editLeadObj);
            newTabName= "";
        }
    }

    const editCurrentTab = (tab, index)=> {
        if (!Component){
            setComponent(<Tab key={tab.title + index} {...tab}/>)
            /*switch (tab.component) {
                case "DetailsView":
                    setComponent()
                    break;
                case "NotesView":
                    setComponent(<NotesView key={tab.title} {...tab}/>)
                    break;
                case "ActivityView":
                    setComponent(<ActivityView key={tab.title} {...tab} />)
                    break;
                default:
                    setComponent(<p>Something went wrong</p>)
            }*/
        }
    }

    return (
        <div className="container-fluid mt-3">
            <header className='bg-info p-1'>
                <label htmlFor="classId" className="mr-2">Path</label>
                <input type="text" id='classId' name="classId"  defaultValue={leadObj.classId}/>
            </header>
            <section className='bg-warning p-1'>
                <h3>Tabs</h3>
                <select className="form-select" aria-label="Default select example" onChange={takeTabName}>
                    <option>select tab</option>
                    <option>test</option>
                    <option>other</option>
                </select>
                <button className="btn btn-sm btn-primary m-2"
                        type="button"
                        onClick={addNewTab}
                >
                    Add
                </button>
                <table className="m-3 border">
                    <thead>
                        <tr>
                            <th className="border p-1 m-2 text-center">Title</th>
                            <th className="border p-1 m-2 text-center">Delete</th>
                            <th className="border p-1 m-2 text-center">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {leadObj.tabs.map((tab:Props, index:number)=> {
                        return(
                            <tr key={tab.title}>
                                <td className="border p-1">
                                    <h3>{tab.title}</h3>
                                </td>
                                <td className="border p-1">
                                    <button className="btn btn-sm btn-danger m-2"
                                            type="button"
                                            onClick={()=>deleteTab(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td className="border p-1">
                                    <button className="btn btn-sm btn-primary m-2"
                                            type="button"
                                            onClick={ () => editCurrentTab(tab, index) }
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {Component}
            </section>
        </div>
    )
}

export default LeadPage;
