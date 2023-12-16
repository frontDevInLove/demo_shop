import { ProductItem, Size } from "@/entities/products/models";
import { useEffect, useState } from "react";
import { useSizes } from "@/entities/products/hooks/useSizes";
import { Select } from "antd";

interface Props {
  position?: ProductItem;
  onSizeChange?: (size: Size) => void;
}
const useSizeSelect = ({ position, onSizeChange }: Props) => {
  const { sizes } = useSizes();

  const [optionsSizes, setOptionsSizes] = useState<
    { label: string; value: string }[]
  >([]);
  const [selectedSize, setSelectedSize] = useState<Size>();

  useEffect(() => {
    // Если нет позиции или размеров
    if (!position || !sizes) return;

    // Преобразуем размеры позиции в формат для Select
    const s = position.sizes.map((key) => {
      return {
        label: sizes[key].label,
        value: JSON.stringify(sizes[key]),
      };
    });

    if (!selectedSize || !position.sizes.includes(selectedSize.id)) {
      setSelectedSize(sizes[position.sizes[0]]);
    }

    setOptionsSizes(s);
  }, [position, sizes]);

  const handleSizeChange = (size: string) => {
    const parsedSize = JSON.parse(size) as Size;
    setSelectedSize(parsedSize);
    onSizeChange && onSizeChange(parsedSize);
  };

  return {
    selectedSize,
    sizeSelect: (
      <Select
        disabled={!optionsSizes.length}
        value={JSON.stringify(selectedSize)}
        onChange={handleSizeChange}
        placeholder="Размер"
        options={optionsSizes}
        className="w-full"
      />
    ),
  };
};

export default useSizeSelect;
