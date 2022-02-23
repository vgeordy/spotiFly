import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("TestUser");
  return (
    <div>
      <h1>Login Page</h1>
      <h3>{name}</h3>
    </div>
  );
};

export default Login;
