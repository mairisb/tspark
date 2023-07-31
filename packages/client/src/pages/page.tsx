export interface PageProps extends React.PropsWithChildren {
  title: string;
}

export const Page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <h1>{props.title}</h1>
      {props.children && <main>{props.children}</main>}
    </main>
  );
};
