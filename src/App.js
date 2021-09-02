import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NavTop from './components/Nav'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavTop />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
