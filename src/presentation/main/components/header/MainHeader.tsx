import { Layout } from 'antd';
import './MainHeader.scss';
import {
  useMediaController,
  useTranslationController,
} from '../../../../core/app-settings';

const { Header } = Layout;

export const MainHeader = () => {
  const { GlobalAssets } = useMediaController();
  const { translationBundle } = useTranslationController();

  return (
    <Header className="main-header">
      <div className="logo-container">
        <img
          src={GlobalAssets.HEADER.LOGO}
          alt={translationBundle?.HEADER.ALT_LOGO}
        />
      </div>
      <div className="app-name">{translationBundle?.HEADER.APP_NAME}</div>
    </Header>
  );
};
