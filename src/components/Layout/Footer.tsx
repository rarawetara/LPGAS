import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #ddd;
    transition: color 0.3s;
    
    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 2rem;
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #ddd;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <h3>О компании</h3>
            <ul>
              <li><a href="/about">О нас</a></li>
              <li><a href="/about#team">Наша команда</a></li>
              <li><a href="/about#history">История</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Каталог</h3>
            <ul>
              <li><a href="/catalog?category=new">Новинки</a></li>
              <li><a href="/catalog?category=popular">Популярное</a></li>
              <li><a href="/catalog">Все товары</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Контакты</h3>
            <ul>
              <li>Телефон: +7 (123) 456-7890</li>
              <li>Email: info@reactapp.com</li>
              <li>Адрес: г. Москва, ул. Примерная, 123</li>
            </ul>
          </FooterSection>
        </FooterContent>
        <Copyright>
          © {year} ReactApp. Все права защищены.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer; 