import {
  DialogProps,
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  IconButton,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { Dispatch, SetStateAction } from 'react';
import CloseIcon from '@material-ui/icons/Close';

// TODO: colocar a handleConformButton para disparar quando clicar no botão de confirmar
export interface ConfirmDialogModalProps extends DialogProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  contentText: string;
}

const ConfirmDialogModal: React.FC<ConfirmDialogModalProps> = (props) => {
  const { open, setOpen, title, contentText, ...rest } = props;

  return (
    <Dialog open={open} {...rest} fullWidth>
      <DialogTitle>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={() => setOpen(false)} edge="end">
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => setOpen(false)} color="secondary" autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialogModal;