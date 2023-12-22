import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

         signIn(email, password)
            .then(result=>{
             const user = result.user;
             Swal.fire({
                title: "Successfull",
                text: "Login Successfull",
                icon: "success"
              });
            console.log(user)
            navigate('/dashboard')

         })
         .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
             <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full m-4 md:w-1/2 rounded-xl bg-sky-200 p-5">
                    <div className="text-center lg:text-left p-3">
                        <h1 className="text-5xl font-bold text-sky-800">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 p-3">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn bg-sky-500 text-white">Login</button>
                            </div>
                        
                            
                            <p>Do not have an account? Go to <Link className="text-sky-600" to='/registration'>Registration</Link> </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;