import React from 'react';
import { useFormik } from 'formik';
import Layout from '../../components/layout/Layout';
import styles from './SignupForm.module.scss'
import axios from 'axios';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            axios.post("http://localhost:5000/users", {values})
            .then(res => {
                alert(`Qeydiyyat uğurludur. Xoş gəldiniz ${values.firstName}`);
            });
            formik.resetForm();
        },
    });
    return (
        <Layout>
            <div className={styles.container}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder='Name'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder='Surname'
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default SignupForm