import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import About from "../pages/About";
import NewFeed from "../pages/NewFeed";
import RegisterForm from "./RegisterForm";
import NavBar from "./Navbar";
import ForumBreed from "../pages/ForumBreed";
import Forum from "../pages/Forum"
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/store";
import Register from "../pages/Register";
function App() {

  const persistor = persistStore(store);
  return (
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<NavBar/>} >
            <Route index element = {<NewFeed />} />
            <Route path="forum" element = {<Forum/>}/>
            <Route path={`uploadpost/accessUserId=:userId`} element = {<ForumBreed />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="login" element = {<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </PersistGate>
  );
}

export default App;