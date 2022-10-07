import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import About from "../pages/About";
import NewFeed from "../pages/NewFeed";
import RegisterForm from "./Register";
function App() {

  return (
    <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="newfeed" element = {<NewFeed />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;