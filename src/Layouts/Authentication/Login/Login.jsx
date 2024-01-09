import React, { useState } from 'react';

// React Router
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

// Material UI
import { Box } from '@mui/material';

import { toast } from 'react-toastify';

// Theme
import useStyles from './Theme';

const Login = () => {
    const { classes } = useStyles();
    const [inputs, setInputs] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();
    const Navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const onSubmit = () => {
        localStorage.access_token = Math.random().toString(36).substring(2);
        localStorage.LANG = 'en';
        toast.success('Logged In Successfully', { position: toast.POSITION.TOP_RIGHT });
        setTimeout(() => {
            Navigate('/');
        }, 50);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='email'>Enter your email:</label>
                    <input id='email' type="email" name="email" defaultValue={inputs.email || ""} onChange={handleChange}
                        {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'error message' } })} />
                    {errors.email?.type === 'required' && <p>Email is required</p>}
                    <label htmlFor='password'>Enter your password:</label>
                    <input id='password' type="password" name="password" defaultValue={inputs.password || ""} onChange={handleChange}
                        {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/ })} />
                    {errors.password?.type === 'required' && <p>Password is required</p>}
                    <button type="submit">Login</button>
                </form>
            </Box>
        </Box>
    )
}

export default Login;