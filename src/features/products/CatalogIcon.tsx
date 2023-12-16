import { FC } from "react";
import { ShopOutlined } from "@ant-design/icons";
import { Grid, Space } from "antd";

interface Props {
  onClick(): void;
}

const { useBreakpoint } = Grid;

const CatalogIcon: FC<Props> = ({ onClick }) => {
  const { md } = useBreakpoint();

  return (
    <>
      <span>
        <Space
          direction={md ? "horizontal" : "vertical"}
          align="center"
          className="cursor-pointer hover:text-primary"
          onClick={onClick}
        >
          <ShopOutlined className="text-3xl" />
          <span className={md ? "text-xl" : ""}>Каталог</span>
        </Space>
      </span>
    </>
  );
};

export default CatalogIcon;
