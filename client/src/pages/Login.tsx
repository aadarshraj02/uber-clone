import { Link } from "react-router-dom";
import { useState } from "react";

const Login = (): JSX.Element => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-black text-white px-8 py-4">
        <Link to="/" className="px-4 text-3xl">
          Uber
        </Link>
      </div>
      <div className="flex flex-grow sm:items-center justify-center ">
        <form className=" rounded-md p-8 w-full max-w-md space-y-6" action="">
          <div>
            <label htmlFor="email" className="block text-xl mb-2">
              What's your email?
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="email@example.com"
              className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                emailFocused ? "bg-white" : "bg-zinc-200"
              }`}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xl mb-2">
              Enter your password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Your password"
              className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                passwordFocused ? "bg-white" : "bg-zinc-200"
              }`}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Login
          </button>

          <p className="text-xs text-gray-500 mt-4">
            By proceeding, you consent to get calls, WhatsApp, or SMS/RCS
            messages, including by automated means, from Uber and its affiliates
            to the number provided.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
