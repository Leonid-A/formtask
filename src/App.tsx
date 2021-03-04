import 'bootstrap/dist/css/bootstrap.css';
import React, {FC, useState} from 'react';
import './App.css';
import Data from "./jsoncode/layout";
import DetailsView from "./Components/DetailsView";
import NotesView from "./Components/NotesView";
import ActivityView from "./Components/ActivityView";


interface Tab {
    path: string;
    title: string;
    component: string;
    icon: string;
    properties: {
        sections:{}[]
    };
}

function App() {
  const [components, setComponents]=useState([])

  const addNewTab = (newTab: Tab) => {
      const index = components.findIndex((elem: Tab)  => elem.component === newTab.component)
      if (index === -1){
          const tabs = JSON.parse(JSON.stringify(components));
          tabs.push(newTab);
          setComponents(tabs);
      }
  }

  return (
    <div className="App pl-3" id={Data.classId}>
      <h1>{Data.classId}</h1>
      <div>
          {Data.tabs.map(tab => {
              return <button className="btn btn-primary m-2" key={tab.title} type="button" onClick={()=> addNewTab(tab)}>{tab.title}</button>
          })}
          {components.map((tab: Tab) =>{
              let Component:  JSX.Element;

                  switch (tab.component) {
                      case "DetailsView":
                          Component= <DetailsView key={tab.title} config={tab}/>
                          break;
                      case "NotesView":
                          Component= <NotesView key={tab.title} config={tab}/>
                          break;
                      case "ActivityView":
                          Component= <ActivityView key={tab.title} config={tab}/>
                          break;
                  }

              // @ts-ignore
              return Component;
          })}
      </div>
    </div>
  );
}

export default App;
