import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import "./css/login.css"
import { loginuser } from './features/userSlice';
import { auth } from './Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


function Login() {

    const [signup, setSignup] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
   
    const register = (e)=>{
        e.preventDefault();
        if(!name){
            return alert("Name is required.")
        }
        if(!photoURL){
            return alert("Copy any image address and paste it.")
        }
        if(!email){
            return alert("Email is required.")
        }
        if(!password){
            return alert("Password is required.")
        }

        createUserWithEmailAndPassword(auth,email,password).then((user)=>{
            dispatch(loginuser({
             email:user.email,
             uid:user.uid,
             photoURL:user.photoURL,
             displayName:user.displayName
            }))
         }).catch(error=>alert(error))

        setEmail("");
        setName("");
        setPassword("");
        setPhotoURL("");
    }

    const signin=(e)=>{
        e.preventDefault();
        if(!email){
            return alert("Email is required.")
        }
        if(!password){
            return alert("Password is required.")
        }

        signInWithEmailAndPassword(auth,email,password).then((user)=>{
           dispatch(loginuser({
            email:user.email,
            uid:user.uid,
            photoURL:user.photoURL,
            displayName:user.displayName
           }))
        }).catch(error=>alert(error))

    }

  return (
<>
    <div className='loginScreen'>
        <img src="https://brand.linkedin.com/etc.clientlibs/settings/wcm/designs/gandalf/clientlibs/resources/images/og-social-share-image.jpg" alt=''/>
    {
        signup===true ? (<form onSubmit={register}>
            <input type="text" placeholder="Enter your Full Name" value={name} onChange={e=>setName(e.target.value)}/>
            <input type="text" placeholder="Paste your Profile Picture URL" value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
            <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign Up"/>
            <h4>Already a member ? <span onClick={e=>setSignup(false)}>Login Here</span></h4>

        </form>) : (<form onSubmit={signin}>
            
            <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign In"/>
            <h4>Not a member ? <span onClick={e=>setSignup(true)}>Sign Up Here</span></h4>

        </form>)
    }
 
    </div>
    </>
  )
}

export default Login
