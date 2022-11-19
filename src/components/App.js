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
import Createpost from "../pages/Createpost";
import ForumCrop from "../pages/ForumCrop";
import ForumBuySell from "../pages/ForumBuySell";

function App() {

  const persistor = persistStore(store);
  return (
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<NavBar/>} >
            <Route index element = {<NewFeed />} />
            <Route path="forum" element = {<Forum/>}/>
            <Route path={`uploadpost/accessUserId=:userId`} element = {<Createpost/>} />
            <Route path="forumbreed" element={<ForumBreed />} />
            <Route path="forumcrop" element={<ForumCrop />} />
            <Route path="buysell" element={<ForumBuySell />} />
          </Route>
          <Route path="login" element = {<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </PersistGate>
  );
}

export default App;