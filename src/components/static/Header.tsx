import { useDispatch } from "react-redux";
import { logOut } from "../../global/globalState";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-[70px] bg-slate-100 justify-center fixed items-center border-b-[silver] border-[1px]">
      <div className="w-[95%] flex justify-between items-center">
        <span className="font-semibold text-[40px]">
          PartnerShipWorkFlow.io
        </span>
        <div>
          <button
            onClick={() => {
              navigate("/sign-in");
            }}
            className="py-[10px] px-[40px] capitalize hover:scale-[1.09] transition-all duration-300 rounded-md bg-rose-400 text-white "
            type="submit"
          >
            signin
          </button>
          <button
            onClick={() => {
              dispatch(logOut());
            }}
            className="py-[10px] px-[40px] ml-5 capitalize hover:scale-[1.09] transition-all duration-300 rounded-md bg-rose-400 text-white "
            type="submit"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
