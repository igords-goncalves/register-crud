import { MainWrapper } from './style';

interface MainProps {
  children?: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};
