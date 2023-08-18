import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinAPI } from "../../api/authAPI";
import { useDispatch } from "react-redux";
import { signin } from "../../global/globalState";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit((data: any) => {
    const { email, password } = data;
    console.log(data)
    signinAPI({ email, password }).then((res) => {
      navigate("/");
      dispatch(signin(res));
      console.log(res)
    });
  });
  return (
    <div className="w-100% h-[100vh] flex justify-center ">

          <div className=" w-[90%] flex justify-center items-center bg-[#C53DF1]">

                  {/* form */}
      <form
        onSubmit={onHandleSubmit}
        className="w-[600px] bg-white rounded-md flex flex-col items-center p-10 min-h-[200px]"
      >
        <div className="w-full">
          <span className="text-[15px] capitalize">
            never registered?{" "}
            <Link to="/register">
              <span className="text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 capitalize">
                sign up
              </span>
            </Link>
          </span>
        </div>
        {/* input email */}
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full h-[35px] mt-4 pl-2 outline-slate-400"
          {...register("email")}
        />
        <div className="flex w-full">
          {errors.email?.message && (
            <span className="text-rose-400">error</span>
          )}
        </div>
        {/* password */}
        <input
          type="text"
          placeholder="Enter your password"
          className="w-full h-[35px] mt-4 pl-2 outline-slate-400"
          {...register("password")}
        />

        <div className="flex w-full justify-end">
          {errors.password?.message && (
            <span className="text-rose-400">error</span>
          )}
        </div>
        {/* button */}
        <button
          type="submit"
          className="w-full  h-[40px] font--[45px] mt-4 bg-[#C53DF1] capitalize font-medium text-[18px] text-[white] p-1"
        >
          Welcome back
        </button>
      </form>
          </div>
    </div>
  );
};

export default SignIn;
