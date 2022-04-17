import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.init';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()


  const handlaSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleGitSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handlaFBSignIn = ( ) =>{
    signInWithPopup(auth ,facebookProvider)

    .then(result =>{
      const user = result.user 
      setUser(user)
      console.log(user)
    })
    .error(error =>{
      console.log(error)
    })
  }

  const signOutButton = () => {
    signOut(auth)
      .then(() => { 
        setUser({})
      })
      .catch(error => {

      })
  }


  const auth = getAuth(app)
  return (
    <div className="App">
      {
        user.uid ? <button onClick={signOutButton}>Sign out </button> :
          <>
            <button onClick={handlaSignIn}>Google sign in </button>
            <button onClick={handlaFBSignIn}>Facebook sign in </button>
            <button onClick={handleGitSignIn} >GitHub sign in</button>
          </>
      }


      <h1>Name: {user.displayName}</h1>
      <h5>Email: {user.email}</h5>
      <img src={user.photoURL} alt="" />

    </div>

  );
}

export default App;
