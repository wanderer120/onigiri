import React, {useState} from 'react'
import { render } from 'react-dom'
import Styles from './Styles';
import { useLocation } from "react-router-dom";
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { createRoot } from 'react-dom/client';
import EmployeePin from './steps/EmployeePin.js';
import WorkOrder from './steps/Work-order.js';
import Permit from './steps/Permit.js';
import Camera from './steps/Camera.js';
import EditCamera from './steps/EditCamera';
import "./index.css";
import Agreement from './steps/Agreement';
import Signin from './steps/Signin';
import globalVar from './global.js';
//https://codesandbox.io/s/km2n35kq3v

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert("Checked in!");
  window. location. reload(false); 
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

const App = () => {
  const [isVenueValidated, setIsVenueValidate] = useState("");
  if(!isVenueValidated){
    const url = new URL(window.location.href)
    console.log(`co:${url.searchParams.get('co')}`);
    console.log(`client:${url.searchParams.get('client')}`);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        globalVar.venue = 'Client\'s place 1';
        setIsVenueValidate(true);
    });
  }
  // const location = useLocation()
  // const params1 = new URLSearchParams(location.search)
  // console.log(`co:${params1.get("co")} client:${params1.get("client")}`);

  return(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Styles>
      <div>
        <img src='data:image/png;base64,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'/>
      </div>
      <div>{globalVar.venue}</div>
      {isVenueValidated&&(<Wizard
        initialValues={{ WorkOrder:"1" }}
        onSubmit={onSubmit}
      >
        <EmployeePin/>
        <WorkOrder/>
        <Permit/>
        <Agreement/>
        <Camera/>
        <EditCamera/>
        <Signin/>
      </Wizard>)}
      {!isVenueValidated&&(
        <div>Loading...</div>
      )}
      <div>version:27.10.2022.3</div>
    </Styles>
  </MuiThemeProvider>
)}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

