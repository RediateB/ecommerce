import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Products from "./components/Products/Products";

const App = () => {
    return(
        <Router >
      <Route>
        <Route path='/' exact component={Products} />
      </Route>
    </Router>
    );
}


export default App;