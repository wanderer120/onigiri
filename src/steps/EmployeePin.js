import React, { Component } from "react";
import Wizard from '../Wizard';
import { Field } from 'react-final-form'
import Error from './Error'
// import WizardForm from 'react-wizard-form';
// import workOrderForm from './Work-order.js';
// import permitForm from './Permit.js';
// import agreementForm from './Agreement.js';
// import camera from './Camera.js';
// import editCamera from './EditCamera.js';
// import signin from './Signin.js';

class EmployeePin extends React.Component {
  render() {
    // const params = new URLSearchParams(window.location.pathname);
    // console.log(`payload test:${params.get("/payload")}`);
    return (
        <Wizard.Page>
          <label>Employee Pin:</label>
          <Field
            name="EmployeePin"
            component="input"
            type="text"
            placeholder="Employee Pin"
             validate={this.validate}
          />
          <Error name="EmployeePin" />
        </Wizard.Page>
    );
  }
  validate(value){
    return value ? undefined : 'Required';
  }
}
 
export default EmployeePin;