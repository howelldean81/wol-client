// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react"
import SiteBar from './home/Navbar'
import Auth from './Auth'
import WorkoutIndex from './Workouts/WorkoutIndex'

function App() {
  const [sessionToken, setSessionToken] = useState('') //1

  useEffect(() => { //2
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => { //3
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    console.log(sessionToken)
  }
  
  const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
      <SiteBar clickLogout={clearToken} />
      {protectedViews()}
      {/* <Auth updateToken={updateToken}/> */}
    </div>
  );
}

export default App;
