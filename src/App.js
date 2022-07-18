import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import authContext from './authContext';
import PostsContainer from "./containers/posts";
import FormContainer from "./containers/form";
import AuthContainer from "./containers/auth";
import ProtectedRoute from "./components/auth/components/ProtectedRoute";
import GuestRoute from "./components/auth/components/GuestRoute";

function App() {

  const [userData, setUserData] = useState({authenticated: false, user: null});



  return (
  <div className="App">
    <authContext.Provider value={userData}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<PostsContainer />} />
            <Route path="/form" element={<FormContainer />} />
          </Route>
          {/*<GuestRoute path="login" element={<AuthContainer />}>*/}
          {/*<Route path="/" element={<ProtectedRoute><PostsContainer /></ProtectedRoute>}/>*/}
          {/*<Route path="/form" element={<ProtectedRoute><FormContainer /></ProtectedRoute>}/>*/}
          {/*<Route path="/404" element={<div>404</div>}/>*/}
          <Route path="/login" element={<AuthContainer />}/>
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  </div>
  );
}

export default App;
