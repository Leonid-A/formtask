import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import './Styles/App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import CreatEditPage from "./Components/Pages/CreatEditPage"
import LeadPage from "./Components/Pages/LeadPage"
import QueryBuilderPage from "./Components/Pages/QueryBuilderPage";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={CreatEditPage} />
                  <Route path="/Lead" component={LeadPage} />
                  <Route path="/builder" component={QueryBuilderPage} />
                  <Route path="*" render={() => <h1>page not found</h1>} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
