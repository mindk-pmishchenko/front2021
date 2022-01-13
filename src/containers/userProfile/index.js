import React from 'react';
import PropTypes from 'prop-types';

import {UserProfile} from "../../components/userProfile";

const UserProfileContainer = ({ firstName, lastName, middleName, birthdayYear, add, string, children, user }) => {
    const fullName = `${firstName} ${lastName} (${middleName})`;
    const age = 2021 - birthdayYear;

    return (<>
        {children}
        <UserProfile fullName={fullName} age={age} />
        <button onClick={add}>Click me ADD!</button>
        <div>string: {string}</div>
    </>);
}

UserProfileContainer.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    birthdayYear: PropTypes.number.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        avatar: PropTypes.shape({
            path: PropTypes.string
        })
    })
};

UserProfileContainer.defaultProps = {
    middleName: 'N/A'
};

export default UserProfileContainer;