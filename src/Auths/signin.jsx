import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/shared/navbar/Navbar";
import Footer from "../Components/shared/footer/Footer";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const SigninForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN IN

  const signInAccount = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error("An error occurred:");
      toast({ title: "Incorrect Email and Password" });
      setLoading(isLoading);
      // toast({ title: "Login failed. Please try again."});
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row ml-12">
        <div className="flex flex-col gap-5 ml-12 my-12 w-full">
          <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-12">
            Log in to your account
          </h2>
          <p className="text-primary_A2 small-medium md:base-regular mt-2">
            Welcome back! Please enter your details.
          </p>
          <div className="flex flex-col gap-5 w-full mt-4">
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="......54@gmail.com"
                className="border rounded p-2 w-full"
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
                className="border rounded p-2 w-full"
                required
              />
            </div>

            <button
              type="submit"
              onClick={signInAccount}
              className="bg-black text-white p-3 rounded-md"
            >
              {isLoading ? (
                <div className="flex gap-3 justify-center items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                  Loading...
                </div>
              ) : (
                "Log in"
              )}
            </button>

            <p className="text-small-regular text-light-2 text-left mt-2">
              Don&apos;t have an account?
              <Link
                to="/sign-up"
                className="text-[blue] text-small-semibold ml-1"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
      <Footer />
    </>
  );
};

export default SigninForm;
