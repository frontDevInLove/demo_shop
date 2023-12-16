import { FC } from "react";
import { Spin } from "antd";

interface Props {}

const Loading: FC<Props> = () => {
  return (
    <div className="w-full h-full flex align-items-center justify-content-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
