import React, { Component } from "react";
import Wizard from '../Wizard';
import { Field } from 'react-final-form';
import { Radio } from "final-form-material-ui";
import { RadioGroup, FormControl, FormControlLabel } from "@material-ui/core";
import Error from './Error'
import globalVar from '../global.js'
// import WizardForm from 'react-wizard-form';
// import workOrderForm from './Work-order.js';
// import permitForm from './Permit.js';
// import agreementForm from './Agreement.js';
// import camera from './Camera.js';
// import editCamera from './EditCamera.js';
// import signin from './Signin.js';

class WorkOrder extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      isVerified: false,
      values: props.initialValues || {}
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState(state =>({
        isVerified:true
      }));
    })
  }
  render() {
    return (
      this.state.isVerified &&
        (<Wizard.Page>
          <div>
            <div>
              <label>Select your work order:</label>
              <label>
                <Field name="WorkOrder" type="radio" value="1">
                    {({ input }) => {
                      return (
                        <>
                          <input
                            name={input.name}
                            type="radio"
                            value="1"
                            checked={input.checked}
                            onChange={input.onChange}
                          />
                        </>
                      );
                    }}
                  </Field>
                  Program / Scheduled Works
              </label>
              <label>
                <Field name="WorkOrder" type="radio" value="2">
                    {({ input }) => {
                      return (
                        <>
                          <input
                            name={input.name}
                            type="radio"
                            value="2"
                            checked={input.checked}
                            onChange={input.onChange}
                          />
                        </>
                      );
                    }}
                  </Field>
                  Other
              </label>
            </div>
          </div>
            
          <Error name="WorkOrder" />
        </Wizard.Page>)
    );
  }
  validate(value){
    return value ? undefined : 'Required';
  }
}
 
export default WorkOrder;