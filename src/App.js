import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App;
