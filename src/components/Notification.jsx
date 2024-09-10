import { useState } from "react";
import { FaBell } from "react-icons/fa";
import './NotificationStyles.css';

function Notification(props){

    let notifications = [{"NotificationType": "sampleType","NotificationContent":"lorem-ipsum","date":"15"}];


    const [active,setActive] = useState(false);

    const toggleNotifications = () => {
       setActive(!active);
    }

    return(
        <div>
  

            <FaBell onClick={toggleNotifications}/>

            <div className="DropDownNotifications">

            {active && (
                
                notifications.map((notification,index) => (
                   <a key={index}>{notification.NotificationType} + " " + {notification.NotificationContent} + "" + {notification.date} </a>
                    
                ))
            )}
            </div>

            <div>

            </div>

        </div>
    )
}


export default Notification;