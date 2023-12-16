import { FC } from "react";
import { Card, Col, Row } from "antd";
import { Product, ProductItem } from "@/entities/products/models";
import ImgSlider from "@/features/products/ui/ImgSlider/ImgSlider";
import useSizeSelect from "@/features/products/CounterWithAvailability/hooks/useSizeSelect";
import CounterWithAvailability from "@/features/products/CounterWithAvailability/CounterWithAvailability";
import useProductOptions from "@/features/products/CounterWithAvailability/hooks/useProductOptions";

interface Props {
  position: ProductItem;
  product: Product;
  handleDetails: (product: ProductItem) => void;
}

const ProductCard: FC<Props> = ({ position, handleDetails, product }) => {
  const { name, images, price, description } = position;

  // Используем хук для выбора размера
  const { selectedSize, sizeSelect } = useSizeSelect({
    position,
  });

  // Создаем объект для передачи в компонент CounterWithAvailability
  const optionsAddToCardBtn = useProductOptions({
    selectedSize,
    position,
    product,
  });

  // Действия на карточке
  const actionsCard = (
    <Row
      gutter={[16, 16]}
      align="middle"
      className="px-3 cursor-auto text-color"
    >
      <Col span={10}>
        <div
          onClick={() => handleDetails(position)}
          className="
          cursor-pointer
          hover:text-primary-500
          border-1
          hover:border-primary-500
          border-round
          py-1
          "
        >
          Подробнее
        </div>
      </Col>
      <Col span={14}>{sizeSelect}</Col>
      {optionsAddToCardBtn && (
        <Col span={24}>
          <CounterWithAvailability
            options={optionsAddToCardBtn}
            available={!!position.sizes.length}
          />
        </Col>
      )}
    </Row>
  );

  return (
    <Card cover={<ImgSlider images={images} />} actions={[actionsCard]}>
      <Card.Meta title={name} description={description} />

      <div className="py-1">{price}₽</div>
    </Card>
  );
};

export default ProductCard;
