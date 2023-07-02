import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomePageProps {}

const StyledHomePage = styled.div`
  color: pink;
`;

export const HomePage: React.FC = () => {
  return (
    <StyledHomePage>
      <h1>Welcome to HomePage!</h1>
    </StyledHomePage>
  );
};
