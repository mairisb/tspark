import styled from 'styled-components';
import { Page } from '../page';

/* eslint-disable-next-line */
export interface GameProps {}

const StyledGame = styled.div``;

export function Game(props: GameProps) {
  return (
    <StyledGame>
      <Page name="Game" />
    </StyledGame>
  );
}
