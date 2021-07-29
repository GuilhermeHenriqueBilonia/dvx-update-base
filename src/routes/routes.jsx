
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import { Main } from "../Components/Main";
import { UpdateCnpj } from "../Components/UpdateCnpj";
import { UpdateCpf } from "../Components/UpdateCpf";
import { Login } from "../Components/Login";
import { PrivateRoute } from "./PrivateRoutes";

export function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/UpdateCnpj" component={UpdateCnpj} />
            <PrivateRoute exact path="/UpdateCpf" component={UpdateCpf} />
            <PrivateRoute exact path="/" component={Main} />
        </Switch>
    </BrowserRouter>
    )
}