import './signup.css'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'

function Signup() {
    const {
        register,
        handleSubmit,
        setError,    
        formState: { errors, isSubmitting },
      } = useForm();
      // const navigate = useNavigate()
      
    
    //   const delay = (d)=>{
    //     return new Promise((resolve, reject)=>{
    //       setTimeout(() => {
    //         resolve()
    //       }, d * 1000);
    //     })
    //   }
    
    
      const onSubmit = async (data) => {
        // await delay(2) // simulating network delay
        let r = await fetch("http://localhost:3000/signup", {method: "POST",  headers: {
          "Content-Type": "application/json", 
        }, body: JSON.stringify(data)})
        let res = await r.text()
        console.log(data, res)
        // if(data.username !== "shubham"){
        //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
        // }
        // if(data.username === "rohan"){
        //   setError("blocked", {message: "Sorry this user is blocked"})
        // }
      }
    return (
      <>
      <div className="signup-container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="First Name" {...register("firstname")}/>
        <input type="text" placeholder="Last Name" {...register("lastname")}/>
        <input type="text" placeholder="Email" {...register("email")}/>
        <input type="text" placeholder="Password" {...register("password",{minLength: {value: 7, message: "Min length of password is 7"},})}/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <button type="submit">Sign Up</button>
      </form>
      {/* <button onClick={() => navigate('/login')}>Go to Page login</button> */}
      <Link to="/login"><button>Go to login page</button></Link>
    </div>
      </>
    )
  }
  
  export default Signup
