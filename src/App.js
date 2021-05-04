import './App.css';
import { Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AuthService from './services/auth.service';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import TodoList from './components/pages/TodoList/TodoList';

function App() {
  const authService = new AuthService();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService.isLoggedIn()
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        console.error('NO USER')
      })
  }, [])

  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" render={() => !loading ? user ? <TodoList user={user}  handleUser={setUser} /> : <Home />: ''} />
          <Route path="/todos" render={() => !loading ? user ? <TodoList user={user}  handleUser={setUser}/> : <Home />: ''} />
          <Route path="/login" render={props => <Login handleUser={setUser} {...props} />} />
          <Route path="/signup" render={props => <Signup handleUser={setUser} {...props} />} />
        </Switch>
      </main>
    </>
  )
}

export default App;
