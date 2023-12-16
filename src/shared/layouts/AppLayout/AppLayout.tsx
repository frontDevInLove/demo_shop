import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import "./AppLayout.scss";
import Loading from "@/shared/ui/Loading/Loading";
import Header from "@/widgets/Header/Header";
import Footer from "@/shared/ui/Footer/Footer";

interface Props {}

const AppLayout: FC<Props> = () => {
  return (
    <div className="Layout">
      <div className="Header">
        <Header />
      </div>
      <div className="Content Wrapper">
        <Suspense fallback={<Loading />}>
          <Row className="h-full">
            <Col span={20} offset={2}>
              <Outlet />
            </Col>
          </Row>
        </Suspense>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};
export default AppLayout;
