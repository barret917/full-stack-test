import { Menu, Button } from "antd";
import { LeftOutlined, MailOutlined, RightOutlined } from "@ant-design/icons";
import * as Styled from "./styled";
import { items } from "../model/constants";
import { useNavbar } from "../hooks/useNavbar";

export function Navbar() {
  const { collapsed, handleMenuClick, toggleCollapsed, selectedMenuItem } =
    useNavbar();

  return (
    <Styled.NavbarWrapper>
      <Menu
        style={{
          width: collapsed ? 80 : 256,
          height: "calc(100vh - 40px)",
        }}
        items={items}
        mode="inline"
        expandIcon={<MailOutlined />}
        inlineCollapsed={collapsed}
        onClick={handleMenuClick}
        selectedKeys={[selectedMenuItem]}
      />

      <Button variant="filled" type="text" onClick={toggleCollapsed}>
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </Button>
    </Styled.NavbarWrapper>
  );
}
