import { useState, useEffect } from 'react';
import styled from 'styled-components';
import catalogData, { Category, Subcategory, Product, ProductType } from '../../data/catalogData';

const CatalogContainer = styled.div`
  padding: 1rem;
`;

const SearchBarContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  
  input {
    width: 100%;
    padding: 10px 40px 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(58, 110, 165, 0.2);
    }
  }
  
  .search-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    cursor: pointer;
  }
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : '#ddd'};
  border-radius: 4px;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#f5f5f5'};
  }
`;

const CatalogContent = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CatalogSidebar = styled.div`
  width: 250px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CatalogMain = styled.div`
  flex: 1;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const CategoryItem = styled.li<{ active: boolean }>`
  padding: 0.8rem 1rem;
  cursor: pointer;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: 1px solid #eee;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#f5f5f5'};
  }
`;

const SubcategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const SubcategoryItem = styled.li<{ active: boolean }>`
  padding: 0.6rem 0.8rem 0.6rem 1.5rem;
  cursor: pointer;
  background-color: ${props => props.active ? '#eef5fb' : 'transparent'};
  color: var(--text-color);
  font-weight: ${props => props.active ? '500' : '400'};
  border-left: 3px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  
  &:hover {
    background-color: #eef5fb;
  }
`;

const CategoryHeader = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  font-size: 1.8rem;
`;

const SubcategoryHeader = styled.h3`
  margin-bottom: 1rem;
  color: var(--secondary-color);
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const ProductTypeHeader = styled.h4`
  margin: 1.5rem 0 1rem;
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: var(--primary-color);
`;

const ProductDetail = styled.div`
  font-weight: 500;
  color: var(--secondary-color);
  font-size: 0.9rem;
  display: inline-block;
  background-color: #f5f9fc;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

const NoResults = styled.div`
  padding: 2rem;
  text-align: center;
  color: #666;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(catalogData);
  
  useEffect(() => {
    if (catalogData.length > 0 && activeCategory === '') {
      setActiveCategory(catalogData[0].category);
      if (catalogData[0].subcategories.length > 0) {
        setActiveSubcategory(catalogData[0].subcategories[0].name);
      }
    }
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCategories(catalogData);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    
    // Filter categories based on search term
    const filtered = catalogData.map(category => {
      // Check if category name matches
      const categoryMatches = category.category.toLowerCase().includes(searchTermLower);
      
      // Filter subcategories
      const filteredSubcategories = category.subcategories.map(subcategory => {
        // Check if subcategory name matches
        const subcategoryMatches = subcategory.name.toLowerCase().includes(searchTermLower);
        
        // Filter products
        const filteredProducts = subcategory.products.map(product => {
          if (Array.isArray(product)) return product;
          
          if ('type' in product) {
            // Handle product types (for REGO products)
            const productType = product as ProductType;
            const typeMatches = productType.type.toLowerCase().includes(searchTermLower);
            
            // Filter items within the product type
            const filteredItems = productType.items.filter(item => 
              item.name.toLowerCase().includes(searchTermLower) ||
              (item.id && item.id.toLowerCase().includes(searchTermLower))
            );
            
            // Return the product type if either the type matches or any items match
            if (typeMatches || filteredItems.length > 0) {
              return {
                ...productType,
                items: filteredItems.length > 0 ? filteredItems : productType.items
              };
            }
            
            // If no matches, return null to filter out
            return null;
          } else {
            // Handle regular products
            const simpleProduct = product as Product;
            
            // Check if product matches search term
            const productMatches = 
              simpleProduct.name.toLowerCase().includes(searchTermLower) ||
              (simpleProduct.id && simpleProduct.id.toLowerCase().includes(searchTermLower));
            
            return productMatches ? simpleProduct : null;
          }
        }).filter(Boolean) as (Product | ProductType)[];
        
        // Return subcategory if it matches or has matching products
        if (subcategoryMatches || filteredProducts.length > 0) {
          return {
            ...subcategory,
            products: filteredProducts
          };
        }
        
        // If no matches, return null to filter out
        return null;
      }).filter(Boolean) as Subcategory[];
      
      // Return category if it matches or has matching subcategories
      if (categoryMatches || filteredSubcategories.length > 0) {
        return {
          ...category,
          subcategories: filteredSubcategories
        };
      }
      
      // If no matches, return null to filter out
      return null;
    }).filter(Boolean) as Category[];
    
    setFilteredCategories(filtered);
    
    // If there are filtered results, update active selections if needed
    if (filtered.length > 0) {
      const currentCategoryExists = filtered.some(c => c.category === activeCategory);
      
      if (!currentCategoryExists) {
        setActiveCategory(filtered[0].category);
        
        if (filtered[0].subcategories.length > 0) {
          setActiveSubcategory(filtered[0].subcategories[0].name);
        } else {
          setActiveSubcategory('');
        }
      } else {
        // Check if current subcategory still exists
        const categoryObj = filtered.find(c => c.category === activeCategory);
        if (categoryObj) {
          const subcategoryExists = categoryObj.subcategories.some(s => s.name === activeSubcategory);
          
          if (!subcategoryExists && categoryObj.subcategories.length > 0) {
            setActiveSubcategory(categoryObj.subcategories[0].name);
          }
        }
      }
    }
  }, [searchTerm, activeCategory, activeSubcategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const categoryObj = filteredCategories.find(c => c.category === category);
    if (categoryObj && categoryObj.subcategories.length > 0) {
      setActiveSubcategory(categoryObj.subcategories[0].name);
    } else {
      setActiveSubcategory('');
    }
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setActiveSubcategory(subcategory);
  };

  const renderProducts = (products: (Product | ProductType)[]) => {
    if (products.length === 0) {
      return <NoResults>No products available in this category.</NoResults>;
    }

    // Check if products are grouped by type
    if ('type' in products[0]) {
      // Render grouped products
      return products.map((productType, index) => {
        const typedProduct = productType as ProductType;
        return (
          <div key={index}>
            <ProductTypeHeader>{typedProduct.type}</ProductTypeHeader>
            <ProductGrid>
              {typedProduct.items.map((item, itemIndex) => (
                <ProductCard key={item.id || `${index}-${itemIndex}`}>
                  {item.image && <ProductImage src={item.image} alt={item.name} />}
                  <ProductInfo>
                    <ProductTitle>{item.name}</ProductTitle>
                    {item.power && <ProductDetail>Power: {item.power}</ProductDetail>}
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductGrid>
          </div>
        );
      });
    } else {
      // Render simple products
      return (
        <ProductGrid>
          {products.map((product, index) => {
            const simpleProduct = product as Product;
            return (
              <ProductCard key={simpleProduct.id || index}>
                {simpleProduct.image && <ProductImage src={simpleProduct.image} alt={simpleProduct.name} />}
                <ProductInfo>
                  <ProductTitle>{simpleProduct.name}</ProductTitle>
                  {simpleProduct.power && <ProductDetail>Power: {simpleProduct.power}</ProductDetail>}
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductGrid>
      );
    }
  };

  const renderContent = () => {
    if (filteredCategories.length === 0) {
      return <NoResults>No matching products found. Try adjusting your search term.</NoResults>;
    }

    const category = filteredCategories.find(c => c.category === activeCategory);
    if (!category) return null;

    const subcategory = category.subcategories.find(s => s.name === activeSubcategory);
    if (!subcategory) return null;

    return (
      <div>
        <CategoryHeader>{category.category}</CategoryHeader>
        <SubcategoryHeader>{subcategory.name}</SubcategoryHeader>
        {renderProducts(subcategory.products)}
      </div>
    );
  };

  return (
    <CatalogContainer>
      <SearchBarContainer className="search-bar">
        <SearchWrapper className="search-wrapper">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </SearchWrapper>
      </SearchBarContainer>
      
      <CatalogContent>
        <CatalogSidebar>
          <CategoryList>
            {filteredCategories.map(category => (
              <CategoryItem 
                key={category.category}
                active={activeCategory === category.category}
                onClick={() => handleCategoryClick(category.category)}
              >
                {category.category}
              </CategoryItem>
            ))}
          </CategoryList>
          
          {activeCategory && (
            <SubcategoryList>
              {filteredCategories
                .find(c => c.category === activeCategory)
                ?.subcategories.map(subcategory => (
                  <SubcategoryItem 
                    key={subcategory.name}
                    active={activeSubcategory === subcategory.name}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                  >
                    {subcategory.name}
                  </SubcategoryItem>
                ))}
            </SubcategoryList>
          )}
        </CatalogSidebar>
        
        <CatalogMain>
          {renderContent()}
        </CatalogMain>
      </CatalogContent>
    </CatalogContainer>
  );
};

export default CatalogPage; 