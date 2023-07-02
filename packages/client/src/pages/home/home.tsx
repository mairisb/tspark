import styled from 'styled-components';
import { Page } from '../page';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div``;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <Page name="Home" />
    </StyledHome>
  );
}
