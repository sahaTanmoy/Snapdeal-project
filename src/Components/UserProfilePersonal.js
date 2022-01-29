import React from 'react';

function UserProfilePersonal(props6) {
    return <div>
            <div><h1>Contact Details:</h1></div>
            
            <div>
                <p>Mobile: {props6.phone}</p>
                <p>Email-Id: {props6.email}</p>
            </div>
            
        
    </div>;
}

export default UserProfilePersonal;
