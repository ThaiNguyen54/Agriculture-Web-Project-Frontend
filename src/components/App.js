import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import About from "../pages/About";
import NewFeed from "../pages/NewFeed";
import RegisterForm from "./Register";
import NavBar from "./Navbar";
import ForumBreed from "../pages/ForumBreed";
import Forum from "../pages/Forum"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/store";
function App() {

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<NavBar/>} >
            <Route index element = {<NewFeed />} />
            <Route path="forum" element = {<Forum/>}/>
            <Route path="forumbreed" element = {<ForumBreed />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="login" element = {<Login />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;