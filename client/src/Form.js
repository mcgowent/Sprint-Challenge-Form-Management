import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import Onboarded from './Onboarded'


export function sumOfTwoNum(num1, num2) {
    return num1 + num2
}


const Forms = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);

    return (
        <div className="animal-form">
            <h1>Log In</h1>
            <Form>
                <Field type="text" name="username" placeholder="Username" />
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}


                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}


                <button type="submit">Submit</button>
            </Form>
            <div>
                {console.log(users)}
                {users.map(users => users.map(users => {
                    return <Onboarded key={users.name} data={users} />
                }))}
            </div>
        </div>
    )
}
// 
const FormikForm = withFormik({
    mapPropsToValues({ username, password, }) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username Required'),
        password: Yup.string().required('Password Required'),
    }),


    handleSubmit(values, { setStatus, resetForm }) {
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                // console.log(res.data)
            })
            .catch(err => err);

        axios
            .get('http://localhost:5000/api/restricted/data')
            .then(res => {
                setStatus(res.data);
                console.log(res.data)
            })
            .catch(err => err);

        resetForm()
    }
})(Forms); // currying functions in Javascript

export default FormikForm;