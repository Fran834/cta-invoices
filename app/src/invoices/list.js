import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import {makeStyles} from '@mui/styles';
import { Button, Paper, Snackbar, Alert, AlertTitle, typographyClasses } from '@mui/material';
import {Link} from 'react-router-dom'
import { QUERY_INVOICES } from './querys-mutations';
import DeleteDialog  from './delete';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: 0
  },
  div: {
    paddingTop: theme.spacing(1)
  },
  link: {
    textDecoration: 'none !important',
    paddingRight: theme.spacing(1),
  },
  button: {
    marginRight: theme.spacing(1) + ' !important',
  }
}))

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'number', headerName: 'Number', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  {
    field: 'client_id',
    headerName: 'Client ID',
    type: 'number',
    width: 90,
  },
  {
    field: 'client_name',
    headerName: 'Client name',    
    width: 320,
  },
  {
    field: 'total',
    headerName: 'Total',
    type: 'number',
    minWidth: 120,
    flex:1
  },
];

export default function InvoicesList() {

  const classes = useStyles();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [linkToSelectedRow, setLinkToSelectedRow] = React.useState('/invoices/invoice/0');
  const [showMessageError, setShowMessageError] = React.useState(false);

  //const selection = useRef({});
  // const currentlySelectedRow_antes = (selections) => {
  //   selection.current = "/invoices/invoice/" + selections.toString();
  //   console.log(selection.current);
  // }

  //Load data
  const [dataInvoices, setDataInvoices] = React.useState([]);
  const {loading, error, data} = useQuery(QUERY_INVOICES, {
    pollInterval: 0,
    fetchPolicy: "network-only",   // Used for first execution
    nextFetchPolicy: "no-cache", // Used for subsequent executions
    onCompleted() {
      setDataInvoices(data.invoices);
    }
  })
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const removeRow = () => {
    // console.log(data.invoices);
    // console.log(data.invoices.filter((r) => r.id !== parseInt(linkToSelectedRow.toString().replace('/invoices/invoice/', ''))));
    setDataInvoices(dataInvoices.filter((r) => r.id !== parseInt(linkToSelectedRow.toString().replace('/invoices/invoice/', ''))));
  }
  //

  //Update selectedRow
  const currentlySelectedRow = (selections) => {
     if (linkToSelectedRow !== selections) { // I didn't write it in but you'll need to do object comparison here
       setLinkToSelectedRow(`/invoices/invoice/${selections.toString()}`);
       setShowMessageError(false);
     }
  }

  //SomeRowSelected
  const someRowSelected = () => {
    if (linkToSelectedRow === '/invoices/invoice/0') return false;
    return true;
  }

  //Modify invoice if some row are selected
  const ModifyInvoice = (event) => {
    //console.log(linkToSelectedRow);
    if (!someRowSelected()) setShowMessageError(true); 
    if (someRowSelected()) navigate(linkToSelectedRow);
  }

  //Prompt message to user to confirm delete 
  const handleClickOpen = () => {
    if (!someRowSelected()) setShowMessageError(true); 
    if (someRowSelected()) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [deleteInvoice] = useMutation(MUTATION_DELETE_INVOICE, {
  //   variables: {
  //     id: parseInt(linkToSelectedRow.toString().replace('/invoices/invoice/'), '')
  //   },
  //   onCompleted(data) {
  //     console.log('Borrado');
  //   }
  // });

  // const HandleConfirm = () => {   
  //   const invoice = {
  //     id: parseInt(linkToSelectedRow.toString().replace('/invoices/invoice/'), '')
  //   }
  //   deleteInvoice({
  //     variables: invoice
  //   });
  // };


  //Return page
  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h6" noWrap component="div">
        My Invoices
      </Typography>
      <div style={{ height: 570, width: '100%' }}>
      {showMessageError && <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={showMessageError} autoHideDuration={6000} onClose={() => setShowMessageError(false)}>
                      <Alert severity="error" onClose={() => setShowMessageError(false)}>
                        <AlertTitle>Error</AlertTitle>
                        You must to <strong>select a invoice</strong>
                      </Alert>
                    </Snackbar>}
      <DataGrid
            rows={dataInvoices}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onSelectionModelChange={currentlySelectedRow}
            rowHeight={42}
          />     
      </div>
      <div className={classes.div}>
        <Link className={classes.link} to="/invoices/invoice">
          <Button variant="outlined">Add invoice</Button>
        </Link>
        <Button className={classes.button} variant="outlined" onClick={ ModifyInvoice }>Modify invoice</Button>
        <Button variant="outlined" onClick={ handleClickOpen }>Delete invoice</Button>
      </div>
      <DeleteDialog open={open} setOpen={setOpen} removeRow={removeRow} id={parseInt(linkToSelectedRow.toString().replace('/invoices/invoice/', ''))} />  
    </Paper>
  );
}
