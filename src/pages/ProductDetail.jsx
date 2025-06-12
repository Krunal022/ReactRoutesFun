import { Navigate, useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-full py-[25%] px-[5%] sm:py-[7%]">
      <h1 className="text-6xl font-thin wrap- font-md mb-5">
        Product Detail..
      </h1>

      <div>
        <h2 className="text-4xl font-thin ">{params.name}</h2>
        <button
          onClick={() => navigate(-1)}
          className="py-2 px-4 mb-7 bg-emerald-400 rounded text-xl active:scale-95 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
