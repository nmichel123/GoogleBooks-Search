import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBook from './pages/SaveBook';
import SearchBooks from './pages/SearchBooks';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path = "/" component = {SaveBook}></Route>
        <Route exact path = "/saved" component = {SearchBooks}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
