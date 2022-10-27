import React, { Component } from "react";
import Wizard from '../Wizard';
import { Field } from 'react-final-form'
import Error from './Error'
import globalVar from '../global.js';
// import WizardForm from 'react-wizard-form';
// import workOrderForm from './Work-order.js';
// import permitForm from './Permit.js';
// import agreementForm from './Agreement.js';
// import camera from './Camera.js';
// import editCamera from './EditCamera.js';
// import signin from './Signin.js';

class Signin extends React.Component {
  render() {
    // const params = new URLSearchParams(window.location.pathname);
    // console.log(`payload test:${params.get("/payload")}`);
    return (
        <Wizard.Page>
            <label>{"Approved. Please sign in"}</label><br/>
            <label>{"Employee 1"}</label><br/>
            <label>Pin ID: {"123456"}</label><br/>
            <label>Company: {globalVar.venue}</label>
        </Wizard.Page>
    );
  }
  validate(value){
    return value ? undefined : 'Required';
  }
}
 
export default Signin;