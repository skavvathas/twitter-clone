import Input from "./components/Input";
import Button from "./components/Button";
import Link from "next/link";
import React, {useState} from "react";


export default function Login() {
  //const router = useRouter();
  const [logUser, setLogUser] = useState({
    username: "",
    password: ""
  });
  //const [user, setUser] = useState(null);

  function handleChangeLogin(event){
    const { name, value } = event.target; //Destucturing
    // same with :
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    setLogUser((prevValue) => {
      return {
        ...prevValue, // Hold all the previous values the same (username or password)
        [name]: value // except of [name] -> name = event.target.name and value = event.target.value
      };
    });
  }

  

  return (
    <div className="font-mono h-screen bg-cyan-100">
      <h1 className="text-5xl font-semibold h-10">
        Log In
      </h1>
      
        <form action="/api/getuser" method="post">
        <div className="container mx-auto mt-28 formrose h-[34rem] w-[32rem] shadow-2xl">
          <label htmlFor="username" className="mx-12 text-2xl font-semibold">Username:</label>
          <input 
            onChange={handleChangeLogin} 
            name="username" 
            placeholder="Username" 
            value={logUser.username} 
            required
            className="block my-4 mx-10 text-xl"
          />

          <label htmlFor="password" className="mx-12 text-2xl font-semibold">Password:</label>
          <input 
            onChange={handleChangeLogin} 
            name="password" 
            placeholder="Password" 
            value={logUser.password} 
            required 
            type="password" 
            pattern="[a-z0-9]{1,15}" 
            title="Password should be digits (0 to 9) or alphabets (a to z)."
            className="block my-4 mx-10 text-xl"
          />
          <button href="/home" className="btn mt-60 mx-auto bg-cyan-300 hover:bg-cyan-400 block" type="submit">Login</button>
          </div>
        </form>
      
        <Link href="/register" className="text-xl mx-auto underline">Register</Link>
    </div>
  );
}


/*export async function handleLogin() {
  //console.log(body.username);
  //console.log(body.password);

  const foundUser = await findUser(logUser.username, logUser.password);

  console.log(foundUser);

  if (!foundUser) {
      // if no user is found, return an error or a default value
      //res.status(404).send('User not found');
      console.log("Noooooooooooooo")
      return 1;
  }

  //res.status(200).json({ foundUser })
  console.log(foundUser);
  return foundUser;
};*/


//<Input onChange={handleChangeLogin} name="username" placeholder="Username" value={logUser.username} type="" pattern="" title=""/>

//<Input onChange={handleChangeLogin} name="password" placeholder="Password" value={logUser.password} type="password" pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)."/>