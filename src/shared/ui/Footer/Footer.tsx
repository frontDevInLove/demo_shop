import { FC, useMemo } from "react";
import { Col, Row } from "antd";

interface Props {}

const Footer: FC<Props> = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <Row className="Wrapper py-3 text-right">
      <Col span={20} offset={2}>
        <div>Made with frontDevInLove ©{currentYear}</div>
      </Col>
    </Row>
  );
};

export default Footer;
