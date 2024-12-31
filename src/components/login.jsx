
import './login.css'
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

function Login() {
    // const navigate = useNavigate();

  return (
    <>
    <div class="login-container">
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>Don't have an account? </p>
       
       
      </form>
      {/* <button onClick={() => navigate('/')}>Go to signup page</button> */}
      <Link to="/"><button>Go to Page signup</button></Link>
    </div>
    </>
  )
}

export default Login
