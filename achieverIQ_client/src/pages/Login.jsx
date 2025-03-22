const Login = () => {
    return (
      <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <h2>Login</h2>
        <input placeholder="Email" style={{ width: '100%', marginBottom: '1rem' }} />
        <input placeholder="Password" type="password" style={{ width: '100%', marginBottom: '1rem' }} />
        <button style={{ width: '100%', background: 'black', color: 'white', padding: '0.75rem' }}>Login</button>
      </div>
    );
  };
  
  export default Login;
  