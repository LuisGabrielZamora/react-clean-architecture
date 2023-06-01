import { theme } from 'antd';

export const useViewTemplate = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return {
    colorBgContainer,
  };
};
