function Login() {
    return <div className="container">
        <div className="image-container">
            <img src="https://img.freepik.com/premium-vector/girl-doing-online-shopping-by-smartphone_701961-2321.jpg?w=996" className="img" alt="Login-img"></img>
        </div>
        <div className="form-container">
            <h1 className="main-heading">Login</h1>
            <div className="form-item">
                <span>Username:</span>
                <input className="input-box" type="text" placeholder="Enter username"></input>
            </div>
            <div className="form-item">
                <span>Password:</span>
                <input className="input-box" type="text" placeholder="Enter password"></input>
            </div>
            <div className="checkbox-item">
                <input type="checkbox"></input>
                <span>I agree to all terms and conditions </span>
                <a href="/">Term and conditions</a>
            </div>
            <div className="link-container">
                <a className="links" href="/">forget password</a>
                <a className="links" href="/">Don't have account</a>
            </div>
            <button className="btn" type="submit">Submit</button>
        </div>
    </div>;
}

export default Login