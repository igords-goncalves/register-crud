import { Main } from '../../components/layout/Main';
import { SideBar } from '../../components/layout/SideBar';
import { Grid } from '../../components/templates/Grid';

export const Home = () => {
  return (
    <Grid>
      <SideBar>
        <h1>Teste</h1>
      </SideBar>
      <Main>
        <h1>teste</h1>
      </Main>
    </Grid>
  );
};
