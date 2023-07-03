import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PageProps extends React.PropsWithChildren {
  title: string;
}

const StyledPage = styled.main``;

export function Page(props: PageProps) {
  return (
    <StyledPage>
      <h1>{props.title}</h1>
      {props.children && <main>{props.children}</main>}
    </StyledPage>
  );
}
