import React from 'react';
import './Styles/App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import CreatEditPage from "./Helpers/Pages/CreatEditPage"
import Page from "./Helpers/Pages/Page"
//import QueryBuilderPage from "./Components/Pages/QueryBuilderPage";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={CreatEditPage} />
                  <Route path="/page" component={Page} />
                  {/*<Route path="/builder" component={QueryBuilderPage} />*/}
                  <Route path="*" render={() => <h1>page not found</h1>} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
