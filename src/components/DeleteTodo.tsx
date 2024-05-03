import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface DeleteTodoProps {
  handleDeleteItem: () => void;
  handleClose: () => void;
  showConfirm: boolean;
}

export default function DeleteTodo({
  handleDeleteItem,
  handleClose,
  showConfirm,
}: DeleteTodoProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      fullScreen={fullScreen}
      open={showConfirm}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Delete"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure to delete this task?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancle
        </Button>
        <Button onClick={handleDeleteItem} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
