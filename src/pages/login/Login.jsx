import "./login.css"

export default function Login() {
    return (
        <div className="login">
      <span className="registerTitle">Login</span>
      <form className="registerForm">
        
        <label>Email</label>
        <input className="registerInput" type="email" placeholder="email" />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="password" />
        <button className="registerLoginButton">Login</button>
        
      </form>
      <button className="registerButton">Register</button>
    </div>
    )
}