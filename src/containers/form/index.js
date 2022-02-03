import React from 'react';
import UserForm from '../../components/form';

const FormContainer = () => {
    const userData = {
        name: 'Jhon',
        email: 'jhon@google.com',
        age: '30',
        imgSrc: 'http://localhost:9200/images/avatar.jpg'
    };

    return (
        <UserForm userData={userData} />
    );
}

export default FormContainer;