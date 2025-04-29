import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 100vh;
  background: white;
  color: black; /* Установим черный цвет текста по умолчанию для этой секции */
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    display: block;
    font-size: 2.5rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    span {
      font-size: 2rem;
    }
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.primary ? '#000281' : 'transparent'}; /* Более выразительный цвет для primary */
  color: ${props => props.primary ? 'white' : 'black'}; /* Белый текст на primary, черный на secondary */
  border: ${props => props.primary ? 'none' : '2px solid black'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: ${props => props.primary ? '#000066' : 'rgba(0, 0, 0, 0.05)'}; /* Более темный оттенок при hover */
  }
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const ProductsSection = styled.section`
  padding: 6rem 2rem;
  background: white;
  color: black; /* Установим черный цвет текста по умолчанию для этой секции */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ProductIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  line-height: 1.6;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>
              LPG Vaporizers
              <span>High-performance Solutions</span>
            </HeroTitle>
            <HeroDescription>
              Discover our premium range of industrial LPG vaporizing systems,
              engineered for reliability and exceptional performance in demanding environments.
            </HeroDescription>
            <ButtonGroup>
              <Button primary onClick={goToCatalog}>Explore Catalog</Button>
              <Button onClick={() => navigate('/contact')}>Contact Us</Button>
            </ButtonGroup>
          </HeroContent>
          <HeroImage>
            <img src="/vaporizer-hero.png" alt="LPG Vaporizer" />
          </HeroImage>
        </HeroContainer>
      </HeroSection>

      <ProductsSection>
        <SectionTitle>Our Solutions</SectionTitle>
        <ProductsGrid>
          <ProductCard>
            <ProductIcon>🔧</ProductIcon>
            <ProductTitle>Electric Vaporizers</ProductTitle>
            <ProductDescription>
              High-efficiency electric vaporizers designed for consistent performance
              and reliable operation in industrial applications.
            </ProductDescription>
          </ProductCard>
          <ProductCard>
            <ProductIcon>⚡</ProductIcon>
            <ProductTitle>Hydronic Systems</ProductTitle>
            <ProductDescription>
              Advanced hydronic vaporizing units with integrated pressure regulation
              for optimal gas delivery and system efficiency.
            </ProductDescription>
          </ProductCard>
          <ProductCard>
            <ProductIcon>🛠️</ProductIcon>
            <ProductTitle>Custom Solutions</ProductTitle>
            <ProductDescription>
              Tailored vaporizing solutions engineered to meet your specific
              industrial requirements and performance needs.
            </ProductDescription>
          </ProductCard>
        </ProductsGrid>
      </ProductsSection>
    </>
  );
};

export default HomePage;