import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:rgba(255, 255, 255, 0);
`;

const MainLayout = styled.div`
  display: flex;
  flex: 1;
  background: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainPanel = styled.main`
  flex: 1;
  min-height: calc(100vh - var(--header-height));
  background: transparent;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainLayout className="layout">
        <Sidebar />
        <MainPanel className="main-panel">
          <Outlet />
        </MainPanel>
      </MainLayout>
    </LayoutContainer>
  );
};

export default Layout; 