import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, {useState} from 'react';
import './App.css';
import Lead from "./jsoncode/layout";
import DetailsView from "./Components/DetailsView";
import NotesView from "./Components/NotesView";
import ActivityView from "./Components/ActivityView";
import {Props} from "./Types/TabsTypes";
import Classes from "./jsoncode/classes"

function App() {

    const [pages, setPages]=useState([Lead])
    let newPageName: string;
  /*const [components, setComponents]=useState([])

  const addNewTab = (newTab: Props) => {
      const index = components.findIndex((elem: Props)  => elem.component === newTab.component)
      if (index === -1){
          const tabs = JSON.parse(JSON.stringify(components));
          tabs.push(newTab);
          setComponents(tabs);
      }
  }*/

    const takePageName = (event: React.ChangeEvent<HTMLSelectElement>) => {
        newPageName = event.target.value;

    }

    const addNewPage = () => {
      if (newPageName){
          const pagesArray = JSON.parse(JSON.stringify(pages));
          pagesArray.push({classId:newPageName});
          setPages(pagesArray);
          newPageName= "";
      }
    }

    const editPageProps = (pageName:string) => {

    }

  return (
    <div className="App">
        <h1>Pages</h1>
        <span> Create New Page </span>
        <select className="form-select" aria-label="Default select example" onChange={takePageName}>
            <option> select page </option>
            {Classes.map((obj)=>{
                if (obj.isDocument && !obj.isSystem) {
                    return <option key={obj.name} value={obj.name}>{obj.name}</option>
                }
            })}
        </select>
        <button className="btn btn-sm btn-primary m-2" type="button" onClick={addNewPage}>Add</button>
        <table className="m-3 border">
            <thead>
                <tr>
                    <th className="border p-1 m-2 text-center">Title</th>
                    <th className="border p-1 m-2 text-center">Delete</th>
                    <th className="border p-1 m-2 text-center">Edit</th>
                </tr>
            </thead>
            <tbody>
                {pages.map((page)=> {
                    return(
                        <tr key={page.classId}>
                            <td className="border p-1">
                                <h3>{page.classId}</h3>
                            </td>
                            <td className="border p-1">
                                <button className="btn btn-sm btn-danger m-2"
                                        type="button"
                                    >
                                    Delete
                                </button>
                            </td>
                            <td className="border p-1">
                                <button className="btn btn-sm btn-primary m-2"
                                        type="button"
                                        onClick={()=> editPageProps(page.classId)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
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
    </div>
  );
}

export default App;
