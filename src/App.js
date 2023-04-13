import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.init';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()


  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(google => {
        const user = google.user
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

  const handleFBSignIn = () => {
    signInWithPopup(auth, facebookProvider)

      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .error(error => {
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
        user.uid ? <>
          <button onClick={signOutButton}>Sign out </button>

          <h1>Name: {user.displayName}{user?.reloadUserInfo?.screenName}</h1>
          <h5>Email: {user.email}</h5>
          <img src={user.photoURL} alt="" />
        </> :
          <>
            <button onClick={handleSignIn}>Google sign in </button>
            <button onClick={handleFBSignIn}>Facebook sign in </button>
            <button onClick={handleGitSignIn} >GitHub sign in</button>
          </>
      }



    </div>

  );
}

export default App;
