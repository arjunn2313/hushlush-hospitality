import { useParams } from "react-router-dom";
import productData from "./product";
import PortfolioDetailsArea from "./PortfolioDetailsArea";

const ProductDetails = () => {
  const { id } = useParams();
  /** @type {any} */
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center text-xl p-10">Product not found</div>;
  }

  return (
    <PortfolioDetailsArea
      productName={product.productName}
      category={product.category}
      brand={product.brand}
      description={product.description}
      features={product.features}
      idealFor={product.idealFor}
      images={product.images}
    />
  );
};

export default ProductDetails;
