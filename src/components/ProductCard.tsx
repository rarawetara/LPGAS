import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const ProductTitle = styled.h3`
  color: var(--primary-color, rgb(59, 60, 229));
  font-size: 1.2rem;
  margin: 0 0 8px 0;
`;

const ProductInfo = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

interface ProductCardProps {
  title: string;
  power: string;
  imageUrl: string;
  onClick?: () => void;
}

const ProductCard = ({ title, power, imageUrl, onClick }: ProductCardProps) => {
  return (
    <Card onClick={onClick}>
      <ProductImage src={imageUrl} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductInfo>Power: {power}</ProductInfo>
    </Card>
  );
};

export default ProductCard; 