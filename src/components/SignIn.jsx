import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import logo from "../assets/login/white-logo.svg";
import blackLogo from "../assets/signup/logo.svg";
import star from "../assets/login/star.svg";
import bar from "../assets/login/bar.svg";
import circle1 from "../assets/login/Ellipse 521.svg";
import circle2 from "../assets/login/Ellipse 522.svg";
import circle3 from "../assets/login/Ellipse 523.svg";
import googleLogoColourful from "../assets/signup/google logo colorful.svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  // const handleLogin = async () => {
  //   setLoading(true);
  //   try {
  //     // Handle Google login here (you might need to integrate with Google OAuth)
  //   } catch (error) {
  //     console.error("Google login error:", error);
  //   }
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (
        formData.email === storedUser.email &&
        formData.password === storedUser.password
      ) {
        console.log("Login successful!");
        navigate('/home')
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("No user found. Please sign up first.");
    }
    
    setLoading(false);
  };

  return (
    <div className="container max-w-screen-2xl">
      <div className="relative py-[62px] min-h-[943px] bg-primary overflow-hidden 2xl:bg-[#7839EE]/10 2xl:bg-gradient-to-r from-[#FFFFFF] from-10% to-[#7839EE]/20 t0-1% xs:px-4 md:p-[62px]">
        <div className="container max-w-[522px] max-h-[673px] m-auto">
          {/* logo */}
          <div className="flex justify-center items-center">
            <div className="flex gap-[7.41px] items-center">
              <img
                className="w-[29.62px] 2xl:hidden"
                src={logo}
                alt="grocliq logo"
              />
              <img
                className="w-[29.62px] hidden 2xl:block"
                src={blackLogo}
                alt="grocliq logo"
              />
              <h1 className="w-[89px] h-[31px] text-[24.68px] font-[500] text-[#ffffff] 2xl:text-[#000000] leading-[31.1px]">
                Grocliq's
              </h1>
            </div>
          </div>

          {/* login form */}
          <div className="relative md:py-[59px] md:px-[77px] px-4 py-4 bg-[#ffffff] mt-[40px] font-primary rounded-xl">
            <div className="max-w-[368px] flex flex-col gap-[45px]">
              <h1 className="text-secondry font-[500] leading-[50.4px] text-center text-[40px]">
                Login
              </h1>

              {error && (
                <div className="text-red-500 text-center mb-4">{error}</div>
              )}

              <div className="flex flex-col z-10 gap-[30px]">
                {/* Signup with Google */}
                <div>
                  <button
                    // onClick={handleLogin}
                    className="font-primary hover:bg-gray-100/30 outline flex justify-center items-center bg-[#ffffff] text outline-1 w-full rounded-lg"
                  >
                    <div className="flex p-[15px] gap-[15px]">
                      <img
                        src={googleLogoColourful}
                        alt="google"
                        className="h-6 w-6"
                      />
                      <h4 className="font-[500] text-[20px] leading-[25.2px] text-[#999999]">
                        Continue with Google
                      </h4>
                    </div>
                  </button>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div className="border-b-2 w-[45%] border-[#cccccc]"></div>
                  <span className="text-[#B3B3B3] text-[12px] font-[400] leading-[18px]">
                    OR
                  </span>
                  <div className="border-b-2 w-[45%] border-[#cccccc]"></div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="text-left flex flex-col gap-[30px]"
                >
                  <div>
                    <label htmlFor="email">
                      <h1 className="mb-2 text-[16px] leading-[24px] font-[400] text-[#4D4D4D]">
                        Email
                      </h1>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Lorem@gmail.com"
                      className="w-full px-[16px] py-[12px] rounded-lg text-[14px] border-[1px] focus:outline-[3px] focus:outline-[#277DFE] border-[#B3B3B3] placeholder:leading-[22px] placeholder:font-[400] placeholder-[#000000]"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="password" className="flex justify-between">
                      <h1 className="mb-2 text-[16px] leading-[24px] font-[400] text-[#4D4D4D]">
                        Password
                      </h1>
                      <h1 className="mb-2 text-[16px] leading-[24px] font-[400] text-[#277DFE]">
                        Forgot ?
                      </h1>
                    </label>
                    <input
                      id="password"
                      name="password"
                      onChange={handleChange}
                      placeholder="Enter your password"
                      autoComplete="off"
                      className="w-full px-[16px] py-[12px] rounded-lg text-[14px] border-[1px] focus:outline-[3px] focus:outline-[#277DFE] border-[#B3B3B3] placeholder:leading-[22px] placeholder:font-[400] placeholder-[#999999] pr-10"
                      type={passwordShown ? "text" : "password"}
                    />
                    <i
                      onClick={togglePasswordVisibility}
                      className="absolute top-3/4 w-[24px] h-[24px] right-[16px] transform -translate-y-1/2 cursor-pointer"
                    >
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5 text-gray-500" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                      )}
                    </i>
                  </div>
                  <div className="flex flex-col gap-[24px]">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex rounded-lg justify-center items-center p-[16px] w-full font-[500] text-[20px] leading-[25.2px] text-[#FFFFFF] bg-primary hover:bg-primary/80"
                    >
                      {loading ? (
                        <div className="flex items-center gap-4 justify-center">
                          <Spinner className="h-6 w-6" color="black" />
                          <h1 className="text-black">Logging...</h1>
                        </div>
                      ) : (
                        "Login now"
                      )}
                    </button>
                    <h1 className="text-center text-[#B3B3B3] font-[400] text-[16px] leading-[24px]">
                      Don't have an account?
                      <a
                        href="/"
                        className="text-[#277DFE] font-[400] text-[16px] leading-[24px] pl-2"
                      >
                        Sign up
                      </a>
                    </h1>
                  </div>
                </form>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute 2xl:hidden right-[-40px] max-w-[35.39px] max-h-[42.13px] bottom-[-45px]">
              <img className="w-full object-cover" src={bar} alt="bar" />
            </div>
            <div className="absolute hidden 2xl:block top-[20%] right-[-180px] max-w-[358.69px] max-h-[358.69px]">
              <img className="w-full object-cover" src={circle1} alt="circle-1" />
            </div>
            <div className="absolute hidden 2xl:block top-[5%] right-[-290px] max-w-[524.23px] max-h-[524.23px]">
              <img className="w-full object-cover" src={circle2} alt="circle-2" />
            </div>
            <div className="absolute hidden 2xl:block top-[50%] right-[-350px] max-w-[575px] max-h-[575px]">
              <img className="w-full object-cover" src={circle3} alt="circle-3" />
            </div>
          </div>
        </div>
        <div className="absolute max-w-[1278px] max-h-[1278px] left-0 bottom-0">
          <img className="w-full object-cover" src={star} alt="star" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;