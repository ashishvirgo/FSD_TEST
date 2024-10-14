import "/app.css";
const Loginbody=(props)=>{
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const navigate = useNavigate()
    return(
        <div class="login-body">
            <div class="input-container">
            <h1>LOGIN PAGE</h1>
            <label for="name">Name:</label>
            <input type="text" name="name" placeholder="Enter Your Name" value={name}required/>
            <br/><label for="name">Email:</label>
            <input type="email" name="email" placeholder="Enter Your Email" value={email} required/>
            <br/>
            <label for="name">Password:</label>
            <input type="password" name="pass" placeholder="Enter Your Password" value={password} required/>
            <br/>
            <input type="submit" value="Login"/>
            <input type="button" value="Show Password" onChange={(ev) => setEmail(ev.target.value)}/>
            </div>
        </div>
    );
}

export default Loginbody;