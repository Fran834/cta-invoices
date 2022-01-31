import * as React from 'react';
import PropTypes from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useMutation } from '@apollo/client';
import { MUTATION_DELETE_INVOICE } from './querys-mutations';

export default function DeleteDialog(props) {
  //const [open, setOpen] = React.useState(props.openInicio);

  const handleClose = () => {
    props.setOpen(false);
  };

  const variables = {
    id: parseInt(props.id)
  }

  const [deleteInvoice] = useMutation(MUTATION_DELETE_INVOICE);/* , {
    variables: variables,
    onCompleted(data) {
      props.setOpen(false);
      console.log('Borrado');
    }
  }); */

  const del = () => {
    //console.log(variables);
    deleteInvoice({
      variables: variables,
    });
    props.removeRow();
    props.setOpen(false);
  }

  return (
    <div>
      <Dialog
          open={props.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Remove invoice?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to remove the selected invoice?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={del} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  setOpen: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired
}