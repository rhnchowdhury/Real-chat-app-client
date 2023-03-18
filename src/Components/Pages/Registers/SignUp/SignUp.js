import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../../../hooks/useToken';
import { AuthContext } from '../../../Context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgBB_key;
    console.log(imgHostKey)
    const { createUser, updateUser } = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [signError, setSignError] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignIn = (data, e) => {
        console.log(data.image[0]);
        e.target.reset();
        // setSignError('');

        // upload img in imgBB
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                // if (imgData.success) {

                // }
            })

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name,
                    // photoURL: data.data.display_url
                    // image: data.data.url
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => {
                        console.log(error)
                        setSignError(error.message);
                    })
            });

        const users = {
            name: data.name,
            email: data.email
        }

        fetch('https://real-chat-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(data.email);
                // console.log(data)
            })


    }

    return (
        <section style={{ background: '#dbeafe' }}>

            <div className='card-actions justify-center'>
                <div className='my-5'>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Name</span></label>
                            <input type='text' {...register("name", {
                                required: "Name is required"
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Select Image</span></label>
                            <input type='file' placeholder='' {...register("image")}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Email</span></label>
                            <input type='text' {...register("email", {
                                required: "Email is required",
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Password</span></label>
                            <input type='password' {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password will be at least 6 characters" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn  mt-4 w-full max-w-xs' style={{ background: "#675444" }} value='Sign Up' type="submit" />
                        {signError && <p className='text-error'>{signError}</p>}
                        <p className='' style={{ color: "#675444" }}>Already have an account? <Link to='/login' className='text-yellow-500 font-bold'>Please Login</Link></p>
                    </form>
                </div>
            </div>
            {/* <div className="divider">OR</div>
            <div className='card-actions justify-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full max-w-xs text-error'>CONTINUE WITH GOOGLE</button>
            </div> */}

        </section>
    );
};

export default SignUp;