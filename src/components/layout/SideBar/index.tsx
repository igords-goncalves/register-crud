import { SideBarWrapper } from './style';

interface SideBarProps {
  children?: React.ReactNode;
}

export const SideBar = ({ children }: SideBarProps) => {
  return <SideBarWrapper>{children}</SideBarWrapper>;
};
