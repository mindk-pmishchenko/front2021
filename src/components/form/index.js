import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import Button from '@mui/material/Button';
import { Box } from "@material-ui/core";

import FormikAutocomplete from '../FormikAutocomplete';

const UserForm = ({userData}) => {

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string(),
        age: Yup.number().typeError("Must be a number").required('Age is required!').positive('Age must be > 0').integer('Age must be a number!')
    })


    const onFormSubmit = (data) => {
        console.log(data);
    }

    const options = [
        { value: 'all', label: 'All people' },
        { value: 'fans', label: 'My fans' },
        { value: 'followers', label: 'My folowers' }
    ];

    const [image, setImage] = useState();
    const [croppedImage, setCroppedImage] = useState();
    const [cropper, setCropper] = useState();

    const handleChange = e => {
        e.preventDefault();
        const file = e.target.files[0];

        if (file.type.match('image.*') && file.size < 10000000) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            console.error('Wrong file format or size!');
        }
    }

    const cropImage = () => {
        if (typeof cropper !== 'undefined') {
            setCroppedImage(cropper.getCroppedCanvas().toDataURL());
            setImage(null);
        }
    }

    const deleteImage = () => {
        setCroppedImage(null);
        setImage(null);
    }

    return (
        <Formik
            initialValues={userData}
            onSubmit={onFormSubmit}
            validationSchema={schema}
        >
            {({errors, onSubmit}) =>
                    <Form onSubmit={onSubmit}>
                        <div>Errors: {JSON.stringify(errors)}</div>
                        <Field type="text" name="name"/>
                        <Field type="text" name="age"/>
                        <Field type="email" name="email"/>
                        <Field component={FormikAutocomplete} name="visibility" label="Visible to" options={options} />

                        <Box margin={5}>
                            {!image && <Button variant="contained" component="label">
                                Choose image
                                <input type="file" hidden onChange={handleChange} />
                            </Button>}
                            {image && <Button variant="contained" onClick={deleteImage}>Delete image</Button>}
                            {image && (
                                <Cropper
                                    src={image}
                                    onInitialized={instance => setCropper(instance)}
                                    rotatable={false}
                                    viewMode={1}
                                />
                            )}
                            {image && (
                                <Button variant="contained" onClick={cropImage}>Crop</Button>
                            )}
                            <img src={userData.imgSrc} />
                        </Box>

                        <Button variant="contained" type="submit">Save</Button>
                    </Form>
            }
        </Formik>
    );
}

export default UserForm;