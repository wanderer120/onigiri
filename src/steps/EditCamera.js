import React, { Component,useRef,useEffect } from "react";
import Wizard from '../Wizard';
import { Field } from 'react-final-form'
import Error from './Error'
import globalVar from '../global.js'

// import WizardForm from 'react-wizard-form';
// import workOrderForm from './Work-order.js';
// import permitForm from './Permit.js';
// import agreementForm from './Agreement.js';
// import camera from './Camera.js';
// import editCamera from './EditCamera.js';
// import signin from './Signin.js';

class EditCamera extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <Wizard.Page>
          <Field
            name="EditCamera"
            component={EditCameraComponent}
            values={this.props.values}
          />
          <Error name="EmployeePin" />
        </Wizard.Page>
    );
  }
  validate(value){
    return value ? undefined : 'Required';
  }
}

const EditCameraComponent = ({input:{onChange,value},meta:{touch,error},values})=>{
  console.log("EditCamera:"+globalVar.cameraPic);
  const photoRef = useRef();
  useEffect(() => {
    if (photoRef.current) {
      const canvas = photoRef.current.getContext('2d')
      // do something here with the canvas
      const img = new Image();
      img.onload = function() {
        canvas.drawImage(img, 0, 0);
      };
      img.src = globalVar.cameraPic;
    }
  }, [])

  
  // img.src = value;
  return (<canvas className="editCamera" width={350} height={500} ref={photoRef}></canvas>);
}
export default EditCamera;