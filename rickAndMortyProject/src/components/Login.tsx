const Login = () => {
  return(
    <>
    <header>
      <h1>Welcome to Rick and Mortypédia</h1>
    </header>
    <main>     
      <section id='loginContainer'>
        <img src="/src/images/loginPageImage.jpg" alt="" />
        <form>
          <div>
          <h2>Login:</h2>
          <input type="text" />
          <h2>E-mail:</h2>
          <input type="email" name="email" id="" />
          </div>
          <button>Login</button>
        </form>        
      </section>
    </main>
    </>
  )
}

export default Login;