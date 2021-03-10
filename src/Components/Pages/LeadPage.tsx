import Lead from "../../jsoncode/layout";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Page, Props} from "../../Types/TabsTypes";
import Classes from "../../jsoncode/classes";
import DetailsView from "../DetailsView";
import NotesView from "../NotesView";
import ActivityView from "../ActivityView";


const LeadPage = () => {
    const [leadObj, setLeadObj]=useState<Page>(Lead);
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

    const editCurrentTab = (tab)=> {
        if (!Component){
            switch (tab.component) {
                case "DetailsView":
                    setComponent(<DetailsView key={tab.title} {...tab}/>)
                    break;
                case "NotesView":
                    setComponent(<NotesView key={tab.title} {...tab}/>)
                    break;
                case "ActivityView":
                    setComponent(<ActivityView key={tab.title} {...tab} />)
                    break;
                default:
                    setComponent(<p>Something went wrong</p>)
            }
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
                <button className="btn btn-sm btn-primary m-2" type="button" onClick={addNewTab}>Add</button>
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
                                            onClick={ () => editCurrentTab(tab) }
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

/*
<div className='row'>
    <table className="m-3 border">
        <thead>
        <tr>
            <th className="border p-1 m-2 text-center">Properties</th>
            <th className="border p-1 m-2 text-center">Values</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td className="border p-1">
                <p>Path</p>
            </td>
            <td className="border p-1">
                <input type="text" id={`tab_path_${index}`} name="path"  defaultValue={tab.path}/>
            </td>
        </tr>
        <tr>
            <td className="border p-1">
                <p>Title</p>
            </td>
            <td className="border p-1">
                <input type="text" id={`tab_title_${index}`} name="title"  defaultValue={tab.title}/>
            </td>
        </tr>
        <tr>
            <td className="border p-1">
                <p>Icon</p>
            </td>
            <td className="border p-1">
                <input type="text" id={`tab_icon_${index}`} name="icon"  defaultValue={tab.icon}/>
            </td>
        </tr>
        <tr>
            <td className="border p-1">
                <p>Component</p>
            </td>
            <td className="border p-1">
                <select id={`tab_component_${index}`} name="component"  defaultValue={tab.component}>
                    <option value="DetailsView">DetailsView</option>
                    <option value="NotesView">NotesView</option>
                    <option value="ActivityView">ActivityView</option>
                </select>
            </td>
        </tr>
        </tbody>
    </table>
    <div className='container text-left'>
        <h4>Properties</h4>
        <div className="row m-0">
            <h5>Section</h5>
        </div>
    </div>
</div>*/


{/* <h1>{Data.classId}</h1>
      <div>
          {Data.tabs.map((tab: Props) => {                  // drawing buttons for tabs
              return <button className="btn btn-primary m-2"
                             key={tab.title}
                             type="button"
                             onClick={()=> addNewTab(tab)}>
                        {tab.title}
                    </button>
          })}
          {components.map((tab: Props) =>{                          // drawing clicked tabs
              let Component: JSX.Element;
                  switch (tab.component) {
                      case "DetailsView":
                          Component= <DetailsView key={tab.title} {...tab}/>
                          break;
                      case "NotesView":
                          Component= <NotesView key={tab.title} {...tab}/>
                          break;
                      case "ActivityView":
                          Component= <ActivityView key={tab.title} {...tab} />
                          break;
                      default:
                          Component= <p>Something went wrong</p>
                  };
              return Component;
          })}
      </div>*/}
