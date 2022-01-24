import React from 'react';
import UserForm from '../../components/form';

const FormContainer = () => {
    const userData = {
        name: 'Jhon',
        email: 'jhon@google.com'
    };

    return (
        <UserForm userData={userData} />
    );
}

export default FormContainer;