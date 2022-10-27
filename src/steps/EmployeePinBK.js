import React, { Component } from "react";
import Wizard from '../Wizard';
import { Form, Field } from 'react-final-form'
// import WizardForm from 'react-wizard-form';
// import workOrderForm from './Work-order.js';
// import permitForm from './Permit.js';
// import agreementForm from './Agreement.js';
// import camera from './Camera.js';
// import editCamera from './EditCamera.js';
// import signin from './Signin.js';

import { useHistory } from "react-router-dom";

export default function EmployeePin(){
  function validate(value){
    return value ? undefined : 'Required';
  }
  const handleSubmit = values =>{
    console.log(values);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
          console.log('returned');
          let history = useHistory();
          history.push("/main");
        });
  }
  return(<Form
    initialValues={{}}
    validate={validate}
    onSubmit={handleSubmit}
  >
    {({ handleSubmit, submitting, values }) => (
      <form onSubmit={handleSubmit}>
        <label>Please enter employee pin:</label>
        <Field
          name="EmployeePin"
          component="input"
          type="text"
          placeholder="Employee Pin"
          validate={validate}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    )}
  </Form>);
}

// class EmployeePin extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       values: props.initialValues || {}
//     }
//   }
//   render() {
//     return (
//       <Form
//         initialValues={{}}
//         validate={this.validate}
//         onSubmit={this.handleSubmit}
//       >
//         {({ handleSubmit, submitting, values }) => (
//           <form onSubmit={handleSubmit}>
//             <label>Please enter employee pin:</label>
//             <Field
//               name="EmployeePin"
//               component="input"
//               type="text"
//               placeholder="Employee Pin"
//               validate={this.validate}
//             />
//             <button type="submit">
//               Submit
//             </button>
//           </form>
//         )}
//       </Form>
//     )
//   }
//   validate(value){
//     return value ? undefined : 'Required';
//   }
//   handleSubmit = values =>{
//     console.log(values);
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => {
//           console.log('returned');
//           window.locate.replace('/main');
//         });
//   }
// }
 
// export default EmployeePin;