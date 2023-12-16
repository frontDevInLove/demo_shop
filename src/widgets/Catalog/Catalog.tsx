import { FC } from "react";
import { Product, ProductItem } from "@/entities/products/models";
import ProductCard from "@/widgets/Catalog/ui/ProductCard/ProductCard";
import { Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  products: Product[];
}

const { Title } = Typography;

const Catalog: FC<Props> = ({ products }) => {
  const navigate = useNavigate();

  const handleDetails = (product: Product, card: ProductItem) => {
    navigate(`/catalog/${product.id}/position/${card.id}`);
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Title>Категория: {product.name}</Title>

          <Row gutter={[16, 16]}>
            {product.colors.map((card) => (
              <Col span={24} md={12} lg={8} xxl={6} key={card.id}>
                <ProductCard
                  product={product}
                  position={card}
                  handleDetails={(item) => handleDetails(product, item)}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
};

export default Catalog;
