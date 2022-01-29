import React from 'react';

function UserProfileAddress(props3) {
    return <div>
        <h1>Address Details:</h1>
        <p>
        {props3.number} , {props3.street}, {props3.city}-{props3.zipcode}
        </p>
        {/* <h2>House No.: {props3.number}</h2>
        <h2>Street: {props3.street}</h2>
        <h2>City: {props3.city}</h2>
        <h2>Pin Code: {props3.zipcode}</h2> */}
    </div>;
}

export default UserProfileAddress;
