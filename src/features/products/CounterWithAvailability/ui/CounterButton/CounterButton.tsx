import { FC } from "react";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

interface Props {
  handleAddToCart(): void;
  handleRemoveCart(): void;
  quantity: number;
}

const CounterButton: FC<Props> = ({
  handleAddToCart,
  handleRemoveCart,
  quantity,
}) => {
  return (
    <Button.Group className="w-full">
      <Button onClick={handleRemoveCart} block>
        <MinusOutlined />
      </Button>
      <Button className="cursor-auto" block>
        {quantity}
      </Button>
      <Button onClick={handleAddToCart} block>
        <PlusOutlined />
      </Button>
    </Button.Group>
  );
};

export default CounterButton;
