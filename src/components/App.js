import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import NewFeed from "../pages/NewFeed";
import NavBar from "./Header/Navbar";
import ForumBreed from "../pages/ForumBreed";
import Forum from "../pages/Forum"
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/store";
import Register from "../pages/Register";
import Createpost from "../pages/Createpost";
import ForumCrop from "../pages/ForumCrop";
import ForumBuySell from "../pages/ForumBuySell";
import { useDispatch } from "react-redux";
import { postFetch } from "./features/posts/postFetch";
import Post from "../pages/Post";
import Profile from "../pages/Profile";
import Setting1 from "../pages/Setting1";
import Setting2 from "../pages/Setting2";
import { getAllUsers } from "./features/users/allUserAction";
import { answerFetch } from "./features/answers/answersFetch";
import { commentFetch } from "./features/comments/commentFetch";
function App() {
  const dispatch = useDispatch();
  dispatch(postFetch());
  dispatch(getAllUsers());
  dispatch(answerFetch());
  dispatch(commentFetch());
  
  const persistor = persistStore(store);
  return (
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<NavBar/>} >
            <Route index element = {<NewFeed />} />
            <Route path="forum" element = {<Forum/>}/>
            <Route path={`uploadpost/accessUserId=:userId`} element = {<Createpost/>} />
            <Route path="forumbreed">
              <Route index element={<ForumBreed />} />
            </Route>
            <Route path="forumcrop">
              <Route index element={<ForumCrop />}/>
            </Route>
            <Route path="buysell" >
              <Route index element={<ForumBuySell />} />
            </Route>
            <Route path="profile" >       
              <Route index element={<Profile/>}/>
            </Route>
            <Route path="profilesetting/:userId">
              <Route index element={<Setting1/>}/>
            </Route>
            <Route path="postsetting/:userId">
              <Route index element={<Setting2/>}/>
            </Route>
            <Route path={"post/:postId"} element={<Post />}/>
          </Route>
          <Route path="login" element = {<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </PersistGate>
  );
}

export default App;