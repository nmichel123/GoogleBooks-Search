import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import SaveBook from './pages/SaveBook';
import SearchBooks from './pages/SearchBooks';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path = "/" component = {SaveBook}></Route>
        <Route exact path = "/search" component = {SearchBooks}></Route>
      </div>
    </Router>
  );
}

export default App;
