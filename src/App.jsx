import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { UpdateCnpj } from "./Components/UpdateCnpj";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from "./styles/global";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      
      <Switch>
        <Route path="/UpdateCnpj">
          <UpdateCnpj />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>

      <GlobalStyles />
    </>
  );
}

export default App;
