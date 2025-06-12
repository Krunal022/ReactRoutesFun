import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const NavigateHandler = (name) => {
    navigate(`/product/detail/${name}`);
  };
  return (
    <div className="w-screen h-full py-[18%] px-[5%] sm:py-[7%] ">
      <h1 className="text-6xl  font-md mb-5">Products</h1>
      <div>
        <h2 className="text-4xl font-thin ">Product 1</h2>
        <button
          onClick={() => NavigateHandler("Product 1")}
          className="py-2 px-4 mb-7 bg-emerald-400 rounded text-xl active:scale-95 cursor-pointer"
        >
          See Details
        </button>
      </div>
      <div>
        <h2 className="text-4xl font-thin">Product 2</h2>
        <button
          onClick={() => NavigateHandler("Product 2")}
          className="py-2 px-4 mb-7 bg-emerald-400 rounded text-xl active:scale-95 cursor-pointer"
        >
          See Details
        </button>
      </div>
      <div>
        <h2 className="text-4xl font-thin">Product 3</h2>
        <button
          onClick={() => NavigateHandler("Product 3")}
          className="py-2 px-4 mb-7 bg-emerald-400 rounded text-xl active:scale-95 cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;
