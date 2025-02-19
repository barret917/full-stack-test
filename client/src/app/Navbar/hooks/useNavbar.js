import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { items } from '../model/constants';

export function useNavbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState();
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    items.forEach((item) => {
      if (window.location.href.includes(item.link)) {
        setSelectedMenuItem(item.key);
      }
    });
  }, []);

  const handleMenuClick = ({ key }) => {
    const currentItem = items.find((item) => item.key === key);
    navigate(`/${currentItem.link}`);
    setSelectedMenuItem(key);
  };

  return {
    handleMenuClick,
    toggleCollapsed,
    collapsed,
    selectedMenuItem,
  };
}
