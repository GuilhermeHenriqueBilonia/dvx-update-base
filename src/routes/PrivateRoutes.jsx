import { Route, Redirect } from "react-router-dom";
import {isAuthenticated} from '../auth'
import { Header } from "../Components/Header";

export function PrivateRoute({component: Component,...rest}){
    debugger
    return (
        <Route {...rest} render={props => (
            isAuthenticated() ? (
                <>
                    <Header />
                    <Component {...props}/>
                </>
            )
            : 
            (<Redirect to={{pathname: '/login', state: {from: props.location}}} />)
        )}/>
    )
}