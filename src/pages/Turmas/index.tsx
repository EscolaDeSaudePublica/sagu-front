import { Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import TurmaCardInfo from 'src/components/TurmaCardInfo';
import { Container } from './styles';
import data from './data';

const Turmas: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Turmas | Sagu</title>
      </Helmet>
      <Container>
        <Typography variant="h1" gutterBottom>
          Minhas turmas
        </Typography>
        <Grid container spacing={2}>
          {data.map((turma) => (
            <Grid key={turma.id} item xs={12} sm={6} md={3}>
              <TurmaCardInfo
                numPeríodos={turma.numPeríodos}
                numVagasOcupadas={turma.numVagasOcupadas}
                id={turma.id}
                codigo={turma.codigo}
                nome={turma.nome}
                inicio={turma.inicio}
                fim={turma.fim}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Turmas;
