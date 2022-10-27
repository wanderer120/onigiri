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

class Agreement extends React.Component {
  render() {
    return (
        <Wizard.Page>
          <label>By signing in, I acknowledge I have read and understand the content of the Contractor Information Board</label>
          <Error name="Agreement" />
        </Wizard.Page>
    );
  }
}
 
export default Agreement;