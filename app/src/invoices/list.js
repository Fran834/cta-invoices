import { gql, useQuery } from '@apollo/client';
import React, { useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {makeStyles} from '@mui/styles';
import { Button, Paper } from '@mui/material';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    margin: 0
  },
  div: {
    paddingTop: theme.spacing(1)
  },
  link: {
    textDecoration: 'none !important',
    paddingRight: theme.spacing(3),
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

const QUERY_INVOICES = gql`
      query MyQuery {
          invoices (order_by: {id: asc}) {
              id
              number
              date
              client_id
              client_name
              total
          }
      }
  `
export default function InvoicesList() {
  const classes = useStyles();
   const [selectionstate, setSelection] = React.useState([0]);
  const selection = useRef({});

  function currentlySelected_ante(selections) {
    selection.current = "/invoices/invoice/" + selections.toString();
    console.log(selection.current);
  }

  const {loading, error, data} = useQuery(QUERY_INVOICES, {
    pollInterval: 0,
    fetchPolicy: "network-only",   // Used for first execution
    nextFetchPolicy: "no-cache" // Used for subsequent executions
  })
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  //console.log(data);

  function currentlySelected(selections) {
     if (selectionstate !== selections) { // I didn't write it in but you'll need to do object comparison here
       setSelection(`/invoices/invoice/${selections.toString()}`);
       console.log(selections);
     }
  }

  return (
    <Paper className={classes.root} elevation={0}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
            rows={data.invoices}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onSelectionModelChange={currentlySelected}
          />     
      </div>
      <div className={classes.div}>
        <Link className={classes.link} to="/invoices/invoice">
          <Button variant="outlined">Add invoice</Button>
        </Link>
        <Link className={classes.link} to={`${selectionstate}`} >
          <Button variant="outlined">Modify invoice</Button>
        </Link>
      </div>
    </Paper>)
  ;

    // return (
    //     <ul>
    //         {resInvoices.data && resInvoices.data.invoices.map(invoice => (
    //             <li key={invoice.number}>{invoice.date} | {invoice.client_id} | {invoice.client_name}| {invoice.total}</li>
    //         ))}
    //     </ul>
    // );
}
