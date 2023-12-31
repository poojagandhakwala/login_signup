import React, { useState } from "react";
import image from "../images/image.avif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please fill all the values!");
    }
    
  };

  return (
    <div
      className="login my-5 "
      data-aos="fade-zoom-in"
      data-aos-once="true"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <form className="bg-light  container ">
        <div className="row m-auto ">
          <img className="col-lg-6" src={image} height={450} width={200} />
          <div className="mb-3 col-lg-5 pt-4 ">
            <h1 className="text-center">Log In</h1>
            <label htmlFor="exampleInputEmail1" className="form-label  mt-3">
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="mb-3 mt-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="mt-3 btn btn-primary w-100"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
            <h6 className="text-end mt-4">
              <a href="/signup">Sign Up</a>
            </h6>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
