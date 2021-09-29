import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Register';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('')
  const [state, setState] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/api/user' , {
        method: 'GET',
        headers:{'Content-Type': 'application/json'},
        credentials: 'include',
    })
    .then(res => res.json())
    .then(data => setName(data.name))
    // const data = await res.json()
    // setName(data.name)
  }, [state])

  return (
    <div className="App">
      <Router>
        <Nav name={name} setName={setName}/>
        <main className="form-signin">
          <Route path="/" exact component={() => <Home name={name} />} />
          <Route path="/login" component={() => <Login setState={setState} state={state} />} />
          <Route path="/register" component={Register} /> 
        </main>
      </Router>
      
    </div>
  );
}

export default App;
