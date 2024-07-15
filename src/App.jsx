
import './App.css'
import Login from './components/LogIn'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>idek why context api is so hard</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App