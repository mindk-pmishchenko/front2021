import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';

const UserForm = ({userData}) => {

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string(),
        age: Yup.number().typeError("Must be a number").required('Age is required!').positive('Age must be > 0').integer('Age must be a number!')
    })


    const onFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <Formik
            initialValues={userData}
            onSubmit={onFormSubmit}
            validationSchema={schema}
        >
            {({errors}) =>
                    <Form>
                        <div>Errors: {JSON.stringify(errors)}</div>
                        <Field type="text" name="name"/>
                        <Field type="text" name="age"/>
                        <Field type="email" name="email"/>
                        <Button variant="contained">Save</Button>
                    </Form>
            }
        </Formik>
    );
}

export default UserForm;