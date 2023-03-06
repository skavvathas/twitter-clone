import React, {useState} from "react";
import Link from "next/link";
import Button from "./components/Button";
import md5 from "md5";

export default function Register() {

  const [regUser, setRegUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  });

  function handleChangeRegister(event){
    const { name, value } = event.target; //Destucturing
    // same with :
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    setRegUser((prevValue) => {
      return {
        ...prevValue, // Hold all the previous values the same (firstName, lastName, etc)
        [name]: value // except of [name] -> name = event.target.name and value = event.target.value
      };
    });
  }

  function handleRegister(){}

  return (
    <div className="font-mono h-screen bg-cyan-100">
      <h1 className="text-5xl font-semibold h-10">
        Create Account
      </h1>

      <form action="/api/handler" method="post" className="container mx-auto mt-28 formrose h-[38rem] w-[32rem] shadow-2xl">
        <label htmlFor="firstName" className="text-2xl font-semibold mx-auto">First name:</label>
        <input 
          onChange={handleChangeRegister} 
          name="firstName" 
          placeholder="First Name" 
          value={regUser.firstName}  
          required 
          className="block my-4 text-xl mx-auto"
        />

        <label htmlFor="lastName" className="text-2xl font-semibold mx-auto">Last Name:</label>
        <input 
          onChange={handleChangeRegister} 
          name="lastName" 
          placeholder="Last Name" 
          value={regUser.lastName}  
          required
          className="block my-4 text-xl mx-auto"
        />

        <label htmlFor="email" className="text-2xl font-semibold mx-auto">Email:</label>
        <input 
          onChange={handleChangeRegister} 
          name="email" 
          placeholder="Email" 
          value={regUser.email} 
          required 
          type="email"
          className="block my-4 text-xl mx-auto"
        />

        <label htmlFor="username" className="text-2xl font-semibold mx-auto">Username:</label>
        <input 
          onChange={handleChangeRegister} 
          name="username" 
          placeholder="Username" 
          value={regUser.username} 
          required
          className="block my-4 text-xl mx-auto"
        />

        <label htmlFor="password" className="text-2xl font-semibold mx-auto">Password:</label>
        <input 
          onChange={handleChangeRegister} 
          name="password" 
          placeholder="Password" 
          value={regUser.password} 
          required 
          type="password" 
          pattern="[a-z0-9]{1,15}" 
          title="Password should be digits (0 to 9) or alphabets (a to z)."
          className="block my-4 text-xl mx-auto"
        />
        

        <Button name="Submit" css="btn mt-12 mx-auto bg-cyan-300 hover:bg-cyan-400 block"/>

      </form>

      <Link href="/login" className="text-xl mx-auto underline">Login</Link>
    </div>
  );
}