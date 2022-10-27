import React from 'react';
import ReactDOM from 'react-dom';
import WizardForm from 'react-wizard-form';
// import EmployeePin from './EmployeePin';
// import EmployeePin from './EmployeePin.js';
// import WorkOrderForm from './Work-order.js';
// import PermitForm from './Permit.js';
// import AgreementForm from './Agreement.js';
// import CameraForm from './Camera.js';
// import EditCameraForm from './EditCamera.js';
// import Signin from './Signin.js';

class CheckinForm extends React.Component {

    render() {
        return (
            <WizardForm>
                <div>asd</div>
                {/* <EmployeePin /> */}
                {/* <WorkOrderForm />
                <PermitForm />
                <AgreementForm />
                <CameraForm />
                <EditCameraForm />
                <Signin /> */}
            </WizardForm>
        )
    }
}

// const yourFormContainer = document.getElementById('your-form-container');
// ReactDOM.render(
//     <CheckinForm />,
//     yourFormContainer
// );

export default CheckinForm;