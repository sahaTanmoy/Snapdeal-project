import React from 'react';

function UserProfilePersonal(props6) {
    return <div className='profile'>
            <div><h1>Contact Details:</h1></div>
            <hr className='hrpersonaliize' />
            <div className='profdetails'>
                <p>Mobile: {props6.phone}</p>
                <p>Email-Id: {props6.email}</p>
            </div>
            
        
    </div>;
}

export default UserProfilePersonal;
