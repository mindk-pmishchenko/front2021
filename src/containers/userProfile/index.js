import React from 'react';
import {UserProfile} from "../../components/userProfile";

export function UserProfileContainer({ firstName, lastName, middleName, birthdayYear, add, string, children }) {
    const fullName = `${firstName} ${lastName} (${middleName})`;
    const age = 2021 - birthdayYear;

    return (<>
        {children}
        <UserProfile fullName={fullName} age={age} />
        <button onClick={add}>Click me ADD!</button>
        <div>string: {string}</div>
    </>);
}