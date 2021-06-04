import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import GenericContent from 'src/components/GenericContent';
import OfertaInfo from 'src/components/OfertaInfo';
import SearchField from 'src/components/SearchField';
import useOfertas from 'src/hooks/useOfertas';
import useResidentes from 'src/hooks/useResidentes';
import { useDebounce } from 'use-debounce/lib';
import { SaveButton } from './styles';
import CONSTANTS from 'src/config';

interface FaltasRegistroParams {
  idTurma: string;
  idOferta: string;
}

const FaltasRegistro: React.FC = () => {
  const { idTurma, idOferta } = useParams<FaltasRegistroParams>();

  const [searchValue, setSearchValue] = useState('');

  const [searchValueDebaunced] = useDebounce(
    searchValue,
    CONSTANTS.DEBOUNCE_TIME
  );

  const { searchResidentes } = useResidentes({
    idTurma: Number(idTurma),
    idOferta: Number(idOferta),
  });

  const { findOferta } = useOfertas({
    id: Number(idTurma),
  });

  const oferta = findOferta({ id: Number(idOferta) });

  const handleCargaHoraria = useCallback(
    (tipo: string) =>
      oferta?.tipoCargaHoraria.find((elem) => elem.tipo === tipo)?.cargahoraria,
    [oferta]
  );

  return (
    <GenericContent
      helmetText="Registro de faltas | Sagu"
      title="Registro de faltas"
      letfTitleContent={
        <SearchField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      }
    >
      <OfertaInfo
        cod={oferta?.turma.codigoTurma}
        nome={oferta?.nome}
        inicio={oferta?.dataInicio}
        fim={oferta?.dataFim}
        cargaHoraria={oferta?.cargahoraria}
        periodo={oferta?.semestre_descricao}
      />
      <Card>
        <Grid container component={CardContent} spacing={2}>
          <Grid item xs={1}>
            <Typography variant="body1">Foto</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">Residente</Typography>
          </Grid>
          <Grid item xs={2}>
            <Tooltip title="Prática" placement="top-start">
              <Box>
                <Typography variant="body1">Prática</Typography>
                <Typography variant="body2" color="textSecondary">
                  {`(${handleCargaHoraria('P')} Horas)`}
                </Typography>
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={3}>
            <Tooltip title="EAD + presencial" placement="top-start">
              <Box>
                <Typography variant="body1">Teórico-conceitual</Typography>
                <Typography variant="body2" color="textSecondary">
                  {`(${handleCargaHoraria('C')} Horas)`}
                </Typography>
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={3}>
            <Tooltip title="Campo + núcleo" placement="top-start">
              <Box>
                <Typography variant="body1">Teórico-prática</Typography>
                <Typography variant="body2" color="textSecondary">
                  {`(${handleCargaHoraria('T')} Horas)`}
                </Typography>
              </Box>
            </Tooltip>
          </Grid>

          {searchResidentes(searchValueDebaunced).map((residente) => (
            <React.Fragment key={residente.id}>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={1}>
                <Avatar>X</Avatar>
              </Grid>
              <Grid
                container
                item
                xs={3}
                justify="space-between"
                direction="column"
              >
                <Grid item>
                  <Typography>{residente.person.name}</Typography>
                </Grid>
                <Grid item>
                  <Button>Gerar Relatório</Button>
                </Grid>
              </Grid>
              <Grid item xs={2} justify="space-between">
                <TextField fullWidth variant="outlined" />
                <Box m={1} />
                <Button fullWidth startIcon={<AddIcon />}>
                  Observação
                </Button>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth variant="outlined" />
                <Box m={1} />
                <Button fullWidth startIcon={<AddIcon />}>
                  Observação
                </Button>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth variant="outlined" />
                <Box m={1} />
                <Button fullWidth startIcon={<AddIcon />}>
                  Observação
                </Button>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Card>
      <Box m={2} />
      <SaveButton variant="extended" color="secondary">
        <CheckIcon />
        Salvar
      </SaveButton>
    </GenericContent>
  );
};

export default FaltasRegistro;
