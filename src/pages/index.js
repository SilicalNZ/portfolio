import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import { featured, projects } from "@config";

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
          {featured?.length > 0 && <Featured />}
          {projects?.length > 0 && <Projects />}
          <Contact />
        </StyledMainContainer>
      </Layout>
    
  );
};

export default IndexPage;
