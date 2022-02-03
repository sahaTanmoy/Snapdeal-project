import React from 'react';

function UserProfileAddress(props3) {
    return <div>
    <div className='profile'>
        <h1>Address Details:</h1>
        <hr className='hrpersonaliize' />
        <div className='profdetails'><p>
        {props3.number} , {props3.street}, {props3.city}-{props3.zipcode}
        </p>
        </div>
        
    </div>
    </div>;
}

export default UserProfileAddress;
