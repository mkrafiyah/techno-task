import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { user,  googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

  const handleGoogle = ()=>{
    googleSignIn()
    .then((result)=>{
        console.log(result.user)
        navigate('/')

    })
  }
    return (
        <div>
        <hr />
                     
                     <div className="form-control mt-6">
                         <button onClick={handleGoogle} className="btn bg-sky-500 text-white">Google Login</button>
                     </div>
    </div>
    );
};

export default SocialLogin;