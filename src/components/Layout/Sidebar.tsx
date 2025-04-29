import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// Example: Importing an icon library
// import { FaBars, FaEnvelope } from 'react-icons/fa';

const SidebarContainer = styled.aside`
  width: var(--sidebar-width, 200px);
  background-color: var(--primary-color, rgb(59, 60, 229));
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuButton = styled.button<{ id?: string }>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s;
  background-color: transparent;
  border: none;
  font-weight: 500;
  color: white; /* Ensuring consistent white text for better contrast */

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Slightly increased hover contrast */
  }

  .menu-icon {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const ContactInfo = styled.div<{ visible: boolean }>`
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;

  a {
    color: white;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.7);
    display: inline-block;
    margin: 0 5px;
  }
`;

const Sidebar = () => {
  const [contactVisible, setContactVisible] = useState(false);
  const navigate = useNavigate();

  const showCatalog = () => {
    navigate('/catalog');
  };

  const toggleContactInfo = () => {
    setContactVisible(!contactVisible);
  };

  return (
    <SidebarContainer> {/* Removed className */}
      <MainMenu> {/* Removed className */}
        <MenuButton id="catalogBtn" onClick={showCatalog}>
          {/* Example using an icon library */}
          {/* <FaBars className="menu-icon" /> */}
          <span className="menu-icon">☰</span>
          <span className="menu-text">Catalogue</span>
        </MenuButton>
        <MenuButton id="contactBtn" onClick={toggleContactInfo}>
          {/* Example using an icon library */}
          {/* <FaEnvelope className="menu-icon" /> */}
          <span className="menu-icon">✉</span>
          <span className="menu-text">Contact Us</span>
        </MenuButton>
      </MainMenu>

      <ContactInfo visible={contactVisible}> {/* Removed className */}
        <a href="tel:+971503420523">+971 (50) 342-0523</a>
        <span>|</span>
        <a href="mailto:info@lpgas.ae">info@lpgas.ae</a>
      </ContactInfo>
    </SidebarContainer>
  );
};

export default Sidebar;