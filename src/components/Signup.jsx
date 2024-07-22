import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
// import { GoogleLogin } from '@react-oauth/google';
import logo from "../assets/signup/logo.svg";
import dashboardImage from "../assets/signup/dashboard.svg";
import dashboardminiImage from "../assets/signup/dashboard clip.svg";
import cart from "../assets/signup/cart.svg";
import bar from "../assets/signup/three line icon.svg";
import star from "../assets/signup/star.svg";
import google from "../assets/signup/logo googleg 48dp.svg";
import googleLogoColourful from "../assets/signup/google logo colorful.svg";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      localStorage.setItem("user", JSON.stringify(formData));
      console.log("User signed up:", formData);
      setFormData({
        email: "",
        password: "",
      });
      navigate("/signin");
    } catch (error) {
      console.error("Error saving user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // const onGoogleSuccess = (response) => {
  //   const profile = response?.profileObj || {};
  //   const userData = {
  //     name: profile.name,
  //     email: profile.email,
  //     imageUrl: profile.picture,
  //   };
  //   localStorage.setItem('user', JSON.stringify(userData));
  //   console.log('Google Login Success:', profile);

  // };

  // const onGoogleFailure = (error) => {
  //   console.log('Google Login Failed:', error);
  // };

  return (
    <div className="max-w-screen-2xl container">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="py-[62px] px-4 md:p-[62px] max-w-[720px] max-h-[944px]">
          <div>
            <div className="flex gap-[7.41px] items-center">
              <img className="w-[29.62px]" src={logo} alt="grocliq logo" />
              <h1 className="w-[89px] h-[31px] text-[24.68px] font-[500] text-secondary leading-[31.1px]">
                Grocliq's
              </h1>
            </div>
            <div className="px-16 mt-[141px] max-w-[596px] font-primary max-h-[555px] m-auto">
              <div className="max-w-[468px] flex flex-col gap-[45px]">
                <div>
                  <h1 className="text-secondary font-[500] leading-[50.4px] text-[40px]">
                    Sign up
                  </h1>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div>
                    <button className="font-primary 2xl:hover:bg-gray-100/30 2xl:hover:bg-opacity-30 outline flex justify-center items-center xl:bg-[#277DFE] 2xl:bg-[#ffffff] text outline-1 w-full rounded-lg">
                      <div className="flex p-[15px] top-[2px] gap-[15px]">
                        <img
                          src={google}
                          alt="google"
                          className="h-6 w-6 2xl:hidden"
                        />
                        <img
                          src={googleLogoColourful}
                          alt="google"
                          className="h-6 w-6 xl:hidden 2xl:block"
                        />
                        <h4 className="font-[500] text-[20px] leading-[25.2px] 2xl:text-[#999999] xl:text-[#FFFFFF]">
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
                      <label
                        htmlFor="password"
                        className="flex justify-between"
                      >
                        <h1 className="mb-2 text-[16px] leading-[24px] font-[400] text-[#4D4D4D]">
                          Password
                        </h1>
                        <h1 className="mb-2 text-[16px] leading-[24px] font-[400] text-[#277DFE]">
                          Forgot ？
                        </h1>
                      </label>
                      <input
                        id="password"
                        name="password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="Enter your password"
                        autoComplete="off"
                        className="w-full px-[16px] py-[12px] rounded-lg text-[14px] border-[1px] focus:outline-[3px] focus:outline-[#277DFE] border-[#B3B3B3] placeholder:leading-[22px] placeholder:font-[400] placeholder-[#999999] pr-10"
                        onChange={handleChange}
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
                        className="flex rounded-lg justify-center items-center  p-[16px] w-full font-[500] text-[20px] leading-[25.2px] xl:bg-[#7839EE]/40 xl:text-[#7839EE] xl:hover:bg-[#7839EE]/30 2xl:text-[#FFFFFF] 2xl:bg-primary 2xl:hover:bg-primary/80"
                      >
                        {loading ? (
                          <div className="flex items-center gap-4 justify-center">
                            <Spinner className="h-6 w-6" color="black" />
                            <h1 className="text-black">Signing up...</h1>
                          </div>
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                      <h1 className="text-center text-[#B3B3B3] font-[400] text-[16px] leading-[24px]">
                        Already have an account?
                        <Link
                          to="/login"
                          className="text-[#277DFE] font-[400] text-[16px] leading-[24px] pl-2"
                        >
                          Login
                        </Link>
                      </h1>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:p-[62px] max-w-[720px] max-h-[944px] flex-1 justify-end hidden md:flex">
          <div className="relative 2xl:p-[62px] pt-[62px] pl-[112px] 2xl:max-w-[628px] 2xl:h-[847px] overflow-hidden bg-primary 2xl:rounded-xl">
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#ffffff] font-[500] xl:max-w-[500px] 2xl:w-[510px] text-[40px] leading-[50.4px]">
                  Most Advanced AI SEO Tool
                </h1>
                <h4 className="text-[#ffffff] font-[400] opacity-80 xl:max-w-[500px] 2xl:w-full text-[24px] leading-[30.24px]">
                  From analytics, to integrated sales data to report generating,
                  Scalable has it all.
                </h4>
              </div>
              <div className="absolute 2xl:hidden right-0 top-10">
                <img className="w-full object-cover" src={star} alt="star" />
              </div>
              <div className="xl:mt-[188px] 2xl:mt-[40px] z-10">
                <div className="relative">
                  <div className="absolute 2xl:hidden left-[-40px] max-w-[35.39px] max-h-[42.13px] top-[-45px]">
                    <img className="w-full object-cover" src={bar} alt="bar" />
                  </div>
                  <div className="xl:w-[736px] xl:h-[625px] 2xl:max-w-[502px] 2xl:max-h-[416px]">
                    <img
                      className="w-full object-cover 2xl:ml-[-16px]"
                      src={dashboardImage}
                      alt="dashboard Image"
                    />
                  </div>
                  <div className="absolute hidden 2xl:block bottom-[-150px] drop-shadow-lg right-[-52px]">
                    <img
                      className="w-full object-cover"
                      src={dashboardminiImage}
                      alt="dashboard mini Image"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute 2xl:hidden left-0 bottom-0 xl:max-w-[476.64px] xl:max-h-[510px]">
                <img
                  className="w-full object-cover"
                  src={cart}
                  alt="cart image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
