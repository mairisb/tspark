import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GameProps {}

const StyledGame = styled.div`
  color: pink;
`;

export const Game: React.FC = (props: GameProps) => {
  return (
    <StyledGame>
      <h1>Welcome to Game!</h1>
    </StyledGame>
  );
};
