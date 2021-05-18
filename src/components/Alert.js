import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert) return null;
    
    console.log(alert)
    return (
        <div 
            className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
            role="alert"
        >
            <p>{alert.text}</p>
            <button type="button" className="btn-close" aria-label="Close" onClick={hide}></button>
        </div>
    )
}