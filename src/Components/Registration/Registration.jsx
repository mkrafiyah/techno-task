import { Link } from "react-router-dom";


const Registration = () => {
    const handleRegister = e =>{
        e.preventDefault();
    }
    return (
        <div>
             <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full m-4  md:w-1/2 rounded-xl bg-sky-200 p-5">
                    <div className="text-center lg:text-left p-3">
                        <h1 className="text-base md:text-5xl font-bold text-sky-800">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 p-3">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 mb-6">
                                <button className="btn bg-sky-500 text-white">Registration</button>
                            </div>
                         
                            <p>Already have an account? Go to <Link className="text-sky-600" to='/login'>Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;