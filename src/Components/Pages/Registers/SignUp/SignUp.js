import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);

    const handleSignIn = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className='card-actions justify-center my-5'>
                <div>
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
                        <div className='flex justify-start'>
                            <select name="user" id="" className='my-2 text-xl font-semibold'>
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
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
                        {/* {signError && <p className='text-error'>{signError}</p>} */}
                        <p className='' style={{ color: "#675444" }}>Already have an account? <Link to='/login' className='text-yellow-500 font-bold'>Please Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;