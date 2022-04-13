import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => {
  const router = useRouter()

  return (
      <Layout location={router}>
        <StyledMainContainer className="fillHeight">
          <Hero />
          <About />
          <Jobs />
          <Contact />
        </StyledMainContainer>
      </Layout>
    
  );
};

export default IndexPage;
