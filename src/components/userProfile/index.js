import { useContext } from 'react';
import authContext from '../../authContext';

export function UserProfile({ fullName, age }) {
    const { authenticated, user, setUserData } = useContext(authContext);

    console.log('is authenticated:', authenticated);
    console.log('user:', user);

    const inc = () => {
        setUserData({authenticated: true, user: {id: 2}})
    }

    return (
        <div>
            <p><b>Name:</b>{fullName}</p>
            <p><b>Age:</b>{age}</p>
            <button onClick={inc}>Click me UP!</button>
        </div>
    );
}