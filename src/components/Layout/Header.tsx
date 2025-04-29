import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: var(--header-height);
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
`;    

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const Header = () => {
  return (
    <HeaderContainer className="topbar">
      <Logo to="/">LPGAS</Logo>
    </HeaderContainer>
  );
};

export default Header; 