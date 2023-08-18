import { Link, useNavigate } from "react-router-dom";
import pix from "../../assets/dummy.jpg";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerAPI } from "../../api/authAPI";

const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string>(pix);
  const [avatar, setAvatar] = useState<string>("");

  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setImage(localImage);
    setAvatar(saveImage);
  };

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
     password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit((data: any) => {
    const { name, email, password } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", image);

    registerAPI(formData).then(() => {
      navigate("/sign-in");
    });
  });
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#C53DF1]">
      {/* form */}
      <form
        onSubmit={onHandleSubmit}
        className="w-[80%] h-[100%] justify-between flex items-center"
      >

        {/* profile */}
        <div className="w-[600px]  h-[500px] flex justify-center flex-col items-center ">
          <img
            src={avatar}
            className={`w-[300px] h-[300px] object-cover rounded-[50%] border-[3px] border-[silver]`}
          />

          <label
            htmlFor="image"
            className="py-[10px] px-[25px] bg-slate-300 my-3 rounded-md cursor-pointer hover:scale-[1.09] transition-all duration-300 capitalize "
          >
            upload image
          </label>
          <input
            type="file"
            accept="image/jpeg image/jpg image/png"
            className="hidden"
            id="image"
            onChange={onHandleImage}
          />
        </div>
        
        <div className="w-[600px] bg-white rounded-md flex flex-col items-center p-10 min-h-[200px]">
          <div className="w-full">
            <span className="text-[15px] capitalize">
              already registered?{" "}
              <Link to="/sign-in">
                <span className="text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 capitalize">
                  sign in
                </span>
              </Link>
            </span>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-[35px] mt-4 pl-2 outline-slate-400"
            {...register("name")}
          />
          <div className="flex w-full justify-end">
            {errors.name?.message && (
              <span className="text-rose-400">error</span>
            )}
          </div>
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
          <input
            type="text"
            placeholder="Re-type password"
            className="w-full h-[35px] mt-4 pl-2 outline-slate-400"
            {...register("confirm")}
          />
          <div className="flex w-full">
            {errors.confirm?.message && (
              <span className="text-rose-400">error</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full h-[45px] mt-4 bg-[#C53DF1] capitalize font-medium text-[18px] text-[white]"
          >
            join us
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
