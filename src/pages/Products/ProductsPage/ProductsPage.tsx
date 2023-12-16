import React from "react";
import { useProducts } from "@/entities/products/hooks/useProducts";
import Catalog from "@/widgets/Catalog/Catalog";
import Loading from "@/shared/ui/Loading/Loading";

interface Props {}

const ProductsPage: React.FC<Props> = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <div>Error loading products</div>;
  } else if (!products) {
    return <div>No products found</div>;
  }

  return <Catalog products={products} />;
};

export default ProductsPage;
