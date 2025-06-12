import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-full ">
      <h1 className="text-4xl font-md font-md mb-5">Service Detail..</h1>

      <div className="w-[80%] h-fit lg:w-[50%] ">
        <h2 className="text-2xl font-normal overflow-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          pariatur iure quibusdam, ut ipsam magnam, a inventore culpa,
          architecto illo tempore. Magnam nostrum unde ipsum.
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="py-2 px-4 bg-red-400 rounded text-xl active:scale-95 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
