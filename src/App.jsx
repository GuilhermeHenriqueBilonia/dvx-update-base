
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from "./styles/global";
import { Routes } from './routes/routes';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (  
    <>
      <ReactNotification />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
