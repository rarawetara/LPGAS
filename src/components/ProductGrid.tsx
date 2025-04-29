import styled from 'styled-components';
import ProductCard from './ProductCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
`;

// Using placeholder images for now
const getPlaceholderImage = (id: string) => {
  // Using different placeholder images based on power level
  const powerLevel = id.includes('5') || id.includes('8') ? 'low' :
                    id.includes('18') ? 'high' : 'medium';
  
  return `https://placehold.co/600x400/e6e6e6/3a3ce6?text=FAS+Generator%0A${powerLevel}+power`;
};

const products = [
  {
    id: 'fas-5-1lm',
    title: 'FAS-5/1LM (5 kW)',
    power: 'Low',
    imageUrl: getPlaceholderImage('fas-5-1lm')
  },
  {
    id: 'fas-8-1lm',
    title: 'FAS-8/1LM (8 kW)',
    power: 'Low',
    imageUrl: getPlaceholderImage('fas-8-1lm')
  },
  {
    id: 'fas-8-1vp',
    title: 'FAS-8-1/VP (8 kW)',
    power: 'Low',
    imageUrl: getPlaceholderImage('fas-8-1vp')
  },
  {
    id: 'fas-10-1vp',
    title: 'FAS-10-1/VP (10 kW)',
    power: 'Medium',
    imageUrl: getPlaceholderImage('fas-10-1vp')
  },
  {
    id: 'fas-10-3vp',
    title: 'FAS-10-3/VP (10 kW)',
    power: 'Medium',
    imageUrl: getPlaceholderImage('fas-10-3vp')
  },
  {
    id: 'fas-13-1vp',
    title: 'FAS-13-1/VP (13 kW)',
    power: 'Medium',
    imageUrl: getPlaceholderImage('fas-13-1vp')
  },
  {
    id: 'fas-13-3vp',
    title: 'FAS-13-3/VP (13 kW)',
    power: 'Medium',
    imageUrl: getPlaceholderImage('fas-13-3vp')
  },
  {
    id: 'fas-15-3lm',
    title: 'FAS-15/3LM (15 kW)',
    power: 'Medium',
    imageUrl: getPlaceholderImage('fas-15-3lm')
  },
  {
    id: 'fas-15-1vr',
    title: 'FAS-15-1/VR (15 kW)',
    power: 'Medium',
    imageUrl: getPlaceholderImage('fas-15-1vr')
  },
  {
    id: 'fas-15-3vr',
    title: 'FAS-15-3/VR (15 kW)',
    power: 'Medium',
    imageUrl: getPlaceholderImage('fas-15-3vr')
  },
  {
    id: 'fas-18-1vr',
    title: 'FAS-18-1/VR (18 kW)',
    power: 'High',
    imageUrl: getPlaceholderImage('fas-18-1vr')
  },
  {
    id: 'fas-18-3vr',
    title: 'FAS-18-3/VR (18 kW)',
    power: 'High',
    imageUrl: getPlaceholderImage('fas-18-3vr')
  }
];

const ProductGrid = () => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          power={product.power}
          imageUrl={product.imageUrl}
        />
      ))}
    </Grid>
  );
};

export default ProductGrid; 