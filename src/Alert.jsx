import {useContext} from 'react'
import AlertContext from './AlertContext'

export const Alert=()=>{

    const alert = useContext( AlertContext )
    
    return(
        <>
        
        {alert && <div className="bg-green-300 h-20 w-full"> <span className=" mr-10"> {alert.alertMessage}  <button onClick={ ()  => alert.setAlertMessage('')}> X </button> </span></div>}
        
        </>
    )
}