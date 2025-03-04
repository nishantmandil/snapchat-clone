import React, { useEffect } from 'react';
import './App.css';
import WebcamCaptube from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
          <img className="app__logo" src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt="" 
          />

          <div className="app__body">
       <div className="app__bodyBackground" >
       <Switch>
          <Route path="/chats/view">
            <ChatView />
          </Route>

          <Route path="/chats">
            <Chats />
          </Route>

          <Route path="/preview">
            <Preview />
          </Route>

          <Route exact path="/">
            <WebcamCaptube />
          </Route>
        </Switch>
        </div>
      </div>
      </>
        )}
      
    </Router>

      
    </div>
  );
}

export default App;
