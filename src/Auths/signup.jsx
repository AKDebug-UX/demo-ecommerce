import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../firebase-config";
import {
  addDoc,
  collection,
  Timestamp,
  // doc,
  // serverTimestamp,
  // updateDoc,
} from "firebase/firestore";
// import { getDownloadURL, ref, uploadString } from "firebase/storage";

const SignupForm = () => {
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
      toast.success("Signup successful", {
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
    <>
      <div className="flex w-full sm:w-[60%] mx-auto mt-[5em] p-5 justify-center items-center flex-col">
        {/* <img src="/assets/images/logo.svg" alt="logo" /> */}

        <h2 className="text-[30px] text-white font-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className="text-primary_A2 small-medium md:base-regular mt-2">
          To use SquareMax, Please enter your details
        </p>

        <div className="flex flex-col gap-5 w-full mt-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Akorede Salaudeen"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="akorede123"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="......54@gmail.com"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            onClick={createUserAccount}
            className="bg-primary_A1 text-white p-3 rounded-md"
          >
            {isLoading ? (
              <div className="flex gap-3 justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/"
              className="text-primary_A2 text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
