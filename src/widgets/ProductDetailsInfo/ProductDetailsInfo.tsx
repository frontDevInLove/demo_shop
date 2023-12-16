import { Row, Col, Select } from "antd";
import CounterWithAvailability from "@/features/products/CounterWithAvailability/CounterWithAvailability";
import useProductOptions from "@/features/products/CounterWithAvailability/hooks/useProductOptions";
import { Product, ProductItem } from "@/entities/products/models";
import { FC, useEffect, useState } from "react";
import useSizeSelect from "@/features/products/CounterWithAvailability/hooks/useSizeSelect";

interface Props {
  product: Product;
  position: ProductItem;
  onColorChange(positionId: number): void;
}
const ProductDetailsInfo: FC<Props> = ({
  product,
  position,
  onColorChange,
}) => {
  // Обработчик изменения цвета
  const handleColorChange = (positionId: number) => {
    onColorChange(positionId);
  };

  const [optionsColors, setOptionsColors] = useState<
    { label: string; value: number }[]
  >([]);

  useEffect(() => {
    // Если продукт не содержит цветов
    if (!product.colors.length) return;

    // Преобразуем цвета продукта в формат для Select
    const colors = product.colors.map((color) => {
      return {
        label: color.name,
        value: color.id,
      };
    });

    setOptionsColors(colors);
  }, [product]);

  const { selectedSize, sizeSelect } = useSizeSelect({
    position,
  });

  // Создаем объект для передачи в компонент CounterWithAvailability
  const optionsAddToCardBtn = useProductOptions({
    selectedSize,
    position,
    product,
  });

  return (
    <div style={{ maxWidth: 280 }} className="text-lg">
      <p className="text-2xl font-bold">
        {product.name} / {position.name}
      </p>

      <p>Цена: {position.price}₽</p>

      <p>{position.description}</p>

      <Row gutter={[16, 16]} align="middle">
        <Col span={10}>Цвет:</Col>
        <Col span={14}>
          <Select
            value={position.id}
            onChange={handleColorChange}
            options={optionsColors}
            className="w-full"
          />
        </Col>

        <Col span={10}>Размер:</Col>
        <Col span={14}>{sizeSelect}</Col>

        <Col span={24}>
          {optionsAddToCardBtn && (
            <CounterWithAvailability
              options={optionsAddToCardBtn}
              available={!!position.sizes.length}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailsInfo;
