import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const [focusedField, setFocusedField] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };
    setUserData(newUser);
    console.log(userData)
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-black text-white px-8 py-4 text-center sm:text-left">
        <Link to="/" className="px-4 text-3xl">
          Uber
        </Link>
      </div>
      <div className="flex flex-grow sm:items-center mt-5 sm:mt-0 justify-center">
        <div className="w-full max-w-md">
          <form className="rounded-md px-8 space-y-6" onSubmit={submitHandler}>
            <div>
              <label htmlFor="fullname" className="block text-xl mb-2">
                Enter your Full Name
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  required
                  placeholder="First Name"
                  className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                    focusedField === "firstName" ? "bg-white" : "bg-zinc-200"
                  }`}
                  onFocus={() => setFocusedField("firstName")}
                  onBlur={() => setFocusedField("")}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  required
                  placeholder="Last Name"
                  className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                    focusedField === "lastName" ? "bg-white" : "bg-zinc-200"
                  }`}
                  onFocus={() => setFocusedField("lastName")}
                  onBlur={() => setFocusedField("")}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xl mb-2">
                Enter your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                placeholder="email@example.com"
                className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                  focusedField === "email" ? "bg-white" : "bg-zinc-200"
                }`}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xl mb-2">
                Enter your Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                required
                placeholder="Your password"
                className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                  focusedField === "password" ? "bg-white" : "bg-zinc-200"
                }`}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField("")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </form>
          <div className="rounded-md px-8 space-y-4">
            <div className="sm:text-right text-center">
              <Link
                to="/login"
                className="text-blue-600 hover:underline text-sm"
              >
                Existing user? Login here
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By proceeding, you consent to get calls, WhatsApp, or SMS/RCS
              messages, including by automated means, from Uber and its
              affiliates to the number provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
