import { Box, Typography } from '@material-ui/core';

export interface CHPendentesInfoData {
  teoricoPratica: string | number | undefined;
  teoricoConceitual: string | number | undefined;
  pratica: string | number | undefined;
}

export interface CHPendentesInfoProps {
  data: CHPendentesInfoData;
}

const CHPendentesInfo: React.FC<CHPendentesInfoProps> = (props) => {
  const {
    data: { pratica, teoricoConceitual, teoricoPratica },
  } = props;

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography>Teórico-prática: {teoricoPratica} h</Typography>
      <Typography>Teórico-conceitual: {teoricoConceitual} h</Typography>
      <Typography>Prática: {pratica} h</Typography>
    </Box>
  );
};

export default CHPendentesInfo;
