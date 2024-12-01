import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = (): JSX.Element => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e: any) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-black text-white px-8 py-4 text-center sm:text-left">
        <Link to="/" className="px-4 text-3xl">
          Uber Captain
        </Link>
      </div>
      <div className="flex flex-grow sm:items-center mt-5 sm:mt-0 justify-center">
        <div className="w-full max-w-md">
          <form
            className="rounded-md px-8 space-y-6"
            onSubmit={(e) => submitHandler(e)}
          >
            <div>
              <label htmlFor="email" className="block text-xl mb-2">
                What's your email?
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                placeholder="email@example.com"
                className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                  emailFocused ? "bg-white" : "bg-zinc-200"
                }`}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xl mb-2">
                Enter your password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                required
                placeholder="Your password"
                className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                  passwordFocused ? "bg-white" : "bg-zinc-200"
                }`}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
              Login
            </button>
          </form>
          <div className="rounded-md px-8 space-y-4">
            <div className="text-center">
              <Link
                to="/captain-signup"
                className="text-blue-600 hover:underline text-sm"
              >
                New here? Create an account
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By proceeding, you consent to get calls, WhatsApp, or SMS/RCS
              messages, including by automated means, from Uber and its
              affiliates to the number provided.
            </p>
            <div className="mt-4 text-center">
              <Link
                to="/login"
                className="inline-block w-full bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                Sign in as User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
