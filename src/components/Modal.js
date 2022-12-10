import { Close } from '@mui/icons-material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';

export const Modal = ({
  open,
  title,
  maxWidth,
  handleClose,
  children
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mt: 3 }}
        >
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ px: 6 }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
