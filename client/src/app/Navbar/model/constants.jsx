import {
  AppstoreOutlined,
  AreaChartOutlined,
  TruckOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const items = [
  {
    key: "1",
    label: "Дашборды",
    icon: <AppstoreOutlined />,
    link: "dashboard",
  },
  {
    key: "2",
    label: "Аналитика",
    icon: <AreaChartOutlined />,
    link: "analytics",
  },
  {
    key: "3",
    label: "Курьеры",
    icon: <UserOutlined />,
    link: "couriers",
  },
  {
    key: "4",
    label: "Доставки",
    icon: <TruckOutlined />,
    link: "deliveries",
  },
];
