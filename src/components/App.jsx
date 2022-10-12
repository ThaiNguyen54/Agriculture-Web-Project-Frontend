import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import About from "../pages/About";
import NewFeed from "../pages/NewFeed";
import RegisterForm from "./Register";
import Forum from "../pages/Forum";
import NavBar from "./Navbar";
function App() {

  return (
    <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="register" element={<RegisterForm />} />
      <Route element={<NavBar/>} >
        <Route path="newfeed" element = {<NewFeed />} />
        <Route path="forum" element = {<Forum />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;