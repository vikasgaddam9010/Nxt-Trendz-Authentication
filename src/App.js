import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </>
)

export default App
