import React, { useContext } from 'react'
import { AlertContext } from '../App';

function withAlert(IncomingComponent) {
    function OutgoingComponent(props) {
        const { alert, setAlert, removeAlert } = useContext(AlertContext);

        return <IncomingComponent {...props} alert={alert} setAlert={setAlert} removeAlert={removeAlert}/>
    }
    return OutgoingComponent;
}

export default withAlert;
