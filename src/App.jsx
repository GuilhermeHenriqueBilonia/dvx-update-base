import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { UpdateCnpj } from "./Components/UpdateCnpj";
import { UpdateCpf } from "./Components/UpdateCpf";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles, ChackraProv } from "./styles/global";
import theme from './styles/theme'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from "./Components/Login";

function App() {
  return (  
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/UpdateCnpj">
          <Header />
          <UpdateCnpj />
        </Route>
        <Route path="/UpdateCpf">
          <Header />
          <UpdateCpf />
        </Route>
        <Route path="/">
          <Header />
          <Main />
        </Route>
      </Switch>

      <GlobalStyles />
    </>
  );
}

export default App;
