import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }

  p {
    line-height: 1.7;
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const TeamSection = styled.section`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
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

const MemberImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const MemberPosition = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: var(--text-color);
`;

const AboutPage = () => {
  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: 'Иван Иванов',
      position: 'Генеральный директор',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Екатерина Смирнова',
      position: 'Руководитель отдела продаж',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 3,
      name: 'Алексей Петров',
      position: 'Технический директор',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 4,
      name: 'Мария Васильева',
      position: 'Маркетолог',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  ];

  return (
    <AboutContainer>
      <Title>О нас</Title>
      
      <Section id="about">
        <h2>Наша компания</h2>
        <p>
          Мы молодая и динамично развивающаяся компания, которая специализируется на продаже 
          высококачественных товаров по доступным ценам. Основанная в 2010 году, наша компания 
          быстро завоевала репутацию надежного поставщика и партнера.
        </p>
        <p>
          Наша миссия — делать качественные товары доступными для каждого. Мы тщательно выбираем 
          поставщиков и следим за качеством каждого товара в нашем каталоге.
        </p>
        <p>
          За годы работы мы сформировали команду профессионалов, которые любят свое дело и стремятся 
          предоставить нашим клиентам лучший сервис и лучшие товары.
        </p>
      </Section>
      
      <Section id="history">
        <h2>История</h2>
        <p>
          История нашей компании началась в 2010 году, когда группа единомышленников решила создать 
          онлайн-магазин, который бы отличался от конкурентов качеством обслуживания и ассортиментом.
        </p>
        <p>
          В 2012 году мы открыли наш первый офлайн-магазин, а к 2015 году наша сеть выросла до 10 
          магазинов в разных городах России.
        </p>
        <p>
          В 2018 году мы запустили собственную линию продукции, которая быстро стала популярной 
          среди наших покупателей.
        </p>
        <p>
          Сегодня мы продолжаем расти и развиваться, открывая новые магазины и расширяя ассортимент.
        </p>
      </Section>
      
      <TeamSection id="team">
        <h2>Наша команда</h2>
        <TeamGrid>
          {teamMembers.map(member => (
            <TeamMember key={member.id}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>
      
    </AboutContainer>
  );
};

export default AboutPage; 