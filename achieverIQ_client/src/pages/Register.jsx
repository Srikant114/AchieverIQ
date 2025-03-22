const Register = () => {
    return (
      <div className="max-w-md mx-auto p-8">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input className="w-full border p-2 mb-4" placeholder="Full Name" />
        <input className="w-full border p-2 mb-4" placeholder="Email" />
        <input className="w-full border p-2 mb-4" placeholder="Password" type="password" />
        <button className="w-full bg-primary text-black py-2 rounded">Register</button>
      </div>
    );
  };
  
  export default Register;
  