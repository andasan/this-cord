import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chat from './features/chat/Chat';
import Sidebar from './features/sidebar/Sidebar';
import { selectUser } from './app/user.reducer';
import Login from './component/Login';
import { auth } from './util/firebase'
import { login, logout } from './app/user.reducer';

import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
