import React, {useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Logo from '../../assets/logo.svg'
import { ButtonLoader } from '../loaders/loaders'
import './login.css'
import { Redirect, useHistory, Link } from 'react-router-dom'

const Login = () =>
{
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	return(
		<div className="my-8 mx-2">
			<div className="flex justify-center items-center">
				<Link to='/'>
					<img src={Logo} alt='logo' className="w-10 md:w-24" />
					<h1 className="text-xl">Project Z</h1>
				</Link>
			</div>
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => {
					console.log("Logging in", values);
					sessionStorage.setItem('auth-keys', Math.random())
					sessionStorage.setItem('authenticated', true)
					history.push('/')
				}}

				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email()
						.required("Required"),
					password: Yup.string()
						.required("No password provided.")
						.min(8, "Password is too short - should be 8 chars minimum.")
						.matches(/(?=.*[0-9])/, "Password must contain a number.")
				})}	
			>
			{props => {
				const {
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit
				} = props;
				return (
					<form onSubmit={handleSubmit} className="mt-4 p-2 md:p-6 h-120 w-full md:  border-2 rounded-sm border-solid border-gray-300">
						<label htmlFor="email">Email</label>
						<input
							name="email"
							type="text"
							placeholder="Enter your email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.email && touched.email && "error"}
						/>
						{errors.email && touched.email && (
							<div className="input-feedback">{errors.email}</div>
						)}
						<label htmlFor="email">Password</label>
						<input
							name="password"
							type="password"
							placeholder="Enter your password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.password && touched.password && "error"}
						/>
						{errors.password && touched.password && (
							<div className="input-feedback">{errors.password}</div>
						)}
						<button type="submit" disabled={isSubmitting}>
							Login
							{loading && <ButtonLoader />}
						</button>
					</form>
				);
			}}
			</Formik>
		</div>
	)
	
}

export default Login
