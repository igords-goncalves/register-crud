import { GridContainer } from './style';

interface GridProps {
  direction?: 'grid-template-rows' | null;
  justify?: 'center' | null;
  children: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <GridContainer>{children}</GridContainer>;
};
