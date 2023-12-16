import { FC, useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";
import { observer } from "mobx-react-lite";
import { CartStoreContext } from "@/entities/basket/store/cartStore";

interface Props {
  onClick?(): void;
}

const CartIcon: FC<Props> = ({ onClick }) => {
  const { itemCount } = useContext(CartStoreContext);

  return (
    <>
      <Badge count={itemCount} overflowCount={99}>
        <div>
          <Space
            direction="vertical"
            align="center"
            className="cursor-pointer hover:text-primary"
            onClick={onClick}
          >
            <ShoppingCartOutlined className="text-3xl" />
            <span>Корзина</span>
          </Space>
        </div>
      </Badge>
    </>
  );
};

export default observer(CartIcon);
