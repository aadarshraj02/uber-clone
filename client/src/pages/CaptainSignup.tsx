import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    console.log(newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-black text-white px-8 py-4 text-center sm:text-left">
        <Link to="/" className="px-4 text-3xl">
          Uber Captain
        </Link>
      </div>
      <div className="flex flex-grow sm:items-center my-5 justify-center">
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
                  className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white"
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
                className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white"
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
                className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="vehiclePlate" className="block text-xl mb-2">
                Vehicle Plate Number
              </label>
              <input
                id="vehiclePlate"
                type="text"
                value={vehiclePlate}
                required
                placeholder="e.g., ABC-1234"
                className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white"
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <label htmlFor="vehicleColor" className="block text-xl mb-2">
                  Vehicle Color
                </label>
                <input
                  id="vehicleColor"
                  type="text"
                  value={vehicleColor}
                  required
                  placeholder="e.g., Red"
                  className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white"
                  onChange={(e) => setVehicleColor(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="vehicleCapacity" className="block text-xl mb-2">
                  Vehicle Capacity
                </label>
                <input
                  id="vehicleCapacity"
                  type="number"
                  value={vehicleCapacity}
                  required
                  min={1}
                  placeholder="e.g., 4"
                  className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white appearance-none"
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="vehicleType" className="block text-xl mb-2">
                Vehicle Type
              </label>
              <select
                id="vehicleType"
                value={vehicleType}
                required
                className="w-full px-4 py-2 rounded-md border bg-zinc-200 focus:bg-white"
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="Car">🚗 Car</option>
                <option value="Bike">🏍️ Bike</option>
                <option value="Auto">🛺 Auto</option>
              </select>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </form>
          <div className="rounded-md px-8 space-y-4">
            <div className="sm:text-right text-center">
              <Link
                to="/captain-login"
                className="text-blue-600 hover:underline text-sm"
              >
                Existing Captain? Login here
              </Link>
            </div>
            <p className="text-xs text-gray-500 my-16">
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

export default CaptainSignup;
