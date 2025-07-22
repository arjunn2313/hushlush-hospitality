import { useParams } from "react-router-dom";
import productData from "./product";
import PortfolioDetailsArea from "./PortfolioDetailsArea";

interface ProductType {
  id: string;
  productName: string;
  category: string;
  brand: string;
  description: string;
  features: string[];
  idealFor: string;
  images: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: ProductType | undefined = productData.find((item) => item.id === id);

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

