import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Styles from './Styles';
import Wizard from './Wizard';
import WorkOrder from './steps/Work-order.js';
import Permit from './steps/Permit.js';
import Camera from './steps/Camera.js';
import EditCamera from './steps/EditCamera';

//https://codesandbox.io/s/km2n35kq3v

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

export default class MainWiz extends React.Component{
    render(){
        return(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Styles>
            <div>Venue</div>
            <Wizard
                initialValues={{ WorkOrder:"1" }}
                onSubmit={onSubmit}
            >
                
                <WorkOrder/>
                <Permit/>
                <Camera/>
                <EditCamera/>
            </Wizard>
            </Styles>
        </MuiThemeProvider>)
    }
}