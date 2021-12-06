import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {

  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user =  useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // the user is logged in
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>

    {!user ? (
      <Login/>
    ): (
      <div className="app">
        <Header />
      
        <div className="app__body">
        <Sidebar />
        
          <Routes>
            <Route path="/mail" element={<Mail />}>
            </Route>
            <Route path="/" element={<EmailList />}>
            </Route>
          </Routes>
        </div>
        
        { sendMessageIsOpen && <SendMail />}
      </div>
    )}
    </Router>
  );
}

export default App;
