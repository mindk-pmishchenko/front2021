import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from '@mui/material/Button';
import {useMutation} from "react-query";
import {login} from "./api/auth";

const LoginForm = () => {

    const schema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
    })

    const {mutate: sendLogin} = useMutation(['auth'], (data) => login(data));

    const onFormSubmit = async (data) => {
        console.log(data);
        // wait for the auth result from the API
        await sendLogin(data);
        const result = {user: {id: 123}, accessToken: 'fsdgsfgfgfg', refreshToken: 'fsdgdsfsg'};

        if (result?.user) {
            // save user and token to the context
        }
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={onFormSubmit}
            validationSchema={schema}
        >
            {({errors, handleSubmit}) =>
                    <Form onSubmit={handleSubmit}>
                        <div>Errors: {JSON.stringify(errors)}</div>

                        <Field type="email" name="email"/>
                        <Field type="password" name="password"/>

                        <Button variant="contained" type="submit">Login</Button>
                    </Form>
            }
        </Formik>
    );
}

export default LoginForm;