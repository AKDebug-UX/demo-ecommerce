import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase-config";
import {
  addDoc,
  collection,
  Timestamp,
  // doc,
  // serverTimestamp,
  // updateDoc,
} from "firebase/firestore";

export default function FormField() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN UP
  const createUserAccount = async () => {
    // setLoading(true);
    if (name === "" || username === "" || email === "" || password === "") {
      return toast({ title: "All fields are required" });
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      console.log(users);

      const user = {
        name: name,
        username: username,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
        appName: "SquareMaX",
      };
      const userRef = collection(db, "users");
      await addDoc(userRef, user);
      toast.success("successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("EMAIL_EXISTS");
      setLoading(false);
    }
  };

  return (
    <form className="px-5">
      <h1 className="text-3xl font-bold mb-5">Billing details</h1>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="first_name" className="block mb-2 text-sm font-medium ">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>
        <div>
          <label for="last_name" className="block mb-2 text-sm font-medium">
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-30 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5"
            required
          />
        </div>
      </div>

      <div>
        <label for="company" className="block mb-2 text-sm font-medium">
          Company Name (Option)
        </label>
        <input
          type="text"
          id="company"
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div>
        <label for="phone" className="block mb-2 text-sm font-medium">
          Country / Region
        </label>
        <select
          type="phone"
          id="email"
          className=" mb-4 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div>
        <label for="website" className="block mb-2 text-sm font-medium">
          Street address
        </label>
        <input
          type="url"
          id="website"
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div>
        <label for="visitors" className="block mb-2 text-sm font-medium">
          Town / City
        </label>
        <input
          type="text"
          id="visitors"
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div class="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium">
          Province
        </label>
        <select
          type="email"
          id="email"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div class="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium">
          Zip code
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          className="block mb-2 text-sm font-medium"
        >
          Phone
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="confirm_password"
          className="block mb-2 text-sm font-medium"
        >
          Email address
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div class="mb-6">
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          placeholder="Additional Information"
          required
        />
      </div>
    </form>
  );
}