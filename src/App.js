import React from 'react';
import Navbar from './component/navbar'
import HomePages from './pages/home'
import AboutPages from './pages/about'
import ContactPages from './pages/contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HomePage from './pages/home';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPages} />
        <Route path="/contact" exact component={ContactPages} />
      </div>
    </Router>
  );
}

export default App;
