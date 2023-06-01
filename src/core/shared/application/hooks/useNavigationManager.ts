import { useNavigate } from 'react-router-dom';

export const useNavigationManager = () => {
  const navigate = useNavigate();

  const navigateToRoute = (route: string) => {
    navigate(route);
  };

  return { navigateToRoute };
};
