import React, { Component } from "react";
import Wizard from '../Wizard';
import { Field } from 'react-final-form'
import Error from './Error'
import Toggle from 'material-ui/Toggle'
// import Toggle from '@mui/material/ToggleButton'
// import Toggle from '@material-ui/utils/Toggle';
// import WizardForm from 'react-wizard-form';
// import workOrderForm from './Work-order.js';
// import permitForm from './Permit.js';
// import agreementForm from './Agreement.js';
// import camera from './Camera.js';
// import editCamera from './EditCamera.js';
// import signin from './Signin.js';

class Permit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: false,
            switchButton: "Off"
        }
    }
    handleClick() {
        this.setState({
            status: !this.state.status,
            switchButton: !this.state.status ? 'ON' : 'OFF'
        })
    }
    render() {
        return (
            <Wizard.Page>
                <label>Indicate which of the following that you require a permit for:</label><br/>
                <Field
                    name="hotwork"
                    label="Hot Work"
                    component={ToggleAdapter}
                    labelPosition="left"
                />
                <Field
                    name="energyIsolation"
                    label="Enegy Isolation - Gas, Water, Electricity"
                    component={ToggleAdapter}
                    labelPosition="left"
                />
            <Error name="EmployeePin" />
            </Wizard.Page>
        );
    }
    validate(value){
        return value ? undefined : 'Required';
    }
}

const ToggleAdapter = ({ input: { onChange, value }, label, ...rest }) => (
    
    <Toggle
        style={{
            width:'90%'
          }}
        label={label}
        toggled={!!value}
        onToggle={(event, isInputChecked) => onChange(isInputChecked)}
        {...rest}
    />
  )

export default Permit;