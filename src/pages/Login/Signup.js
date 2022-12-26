import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        // const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero min-h-screen  mb-24 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-2/3' src={img} alt="" />
                </div>
                <form onSubmit={handleSignup} className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body gap-6">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <label >
                            Already have account <Link className='text-primary' to='/login'>Login</Link>
                        </label>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signup" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;