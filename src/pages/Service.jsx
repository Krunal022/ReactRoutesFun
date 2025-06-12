import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
     <div className="w-screen h-full py-[18%] px-[5%] sm:py-[7%]">
      <h1 className="text-6xl font-thin wrap- font-md mb-5">Services!</h1>

      <div>
        <h2 className="text-xl font-thin ">View More Services</h2>
        <button
          onClick={() => navigate("/service/detail")}
          className="py-2 px-4  bg-emerald-400 rounded text-lg active:scale-95 cursor-pointer"
        >
          view detail.
        </button>
      </div>
      <hr className="border-[1px]-black m-5" />
      <Outlet />
    </div>
  );
};

export default Service;
