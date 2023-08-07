import { useEffect } from 'react';
import { config } from '../core/config';

export interface PageProps extends React.PropsWithChildren {
  title: string;
}

export const Page: React.FC<PageProps> = (props) => {
  useEffect(() => {
    document.title = `${config.APP_NAME} - ${props.title}`;
    return () => {
      document.title = config.APP_NAME;
    };
  }, [props.title]);

  return (
    <main>
      <h1 data-testid="page-title">{props.title}</h1>
      {props.children && <main>{props.children}</main>}
    </main>
  );
};
