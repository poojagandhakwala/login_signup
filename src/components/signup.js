import React, { useState } from "react";
import image from "../images/image.avif";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password || !contact) {
      alert("Please fill all the values!");
    }
  };

  return (
    <div
      className="signup"
      data-aos="fade-zoom-in"
      data-aos-once="true"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <form className="mt-5 bg-light container">
        <div className="row m-auto ">
          <img className="col-lg-6" src={image} height={500} width={200} />
          <div className="mb-3 col-lg-5 pt-4">
            <h1 className="text-center">Sign Up</h1>
            <label htmlFor="exampleInputEmail1" className="form-label mt-3">
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
              <label htmlFor="exampleInputNumber1" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputNumber1"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>

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

            <button
              type="submit"
              className="mt-3 btn btn-primary w-100"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
            <div id="emailHelp" className="form-text">
              We'll never share your details with anyone else.
            </div>
            <h6 className="text-end mt-4">
              <a href="/login">Log In</a>
            </h6>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
