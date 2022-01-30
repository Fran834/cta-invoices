import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {makeStyles} from '@mui/styles';
import { Button, FormControl, Paper, FormLabel, InputLabel, FormHelperText, Input, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    margin: 0
  },
  link: {
    textDecoration: 'none !important'
  },
  div: {
    padding: theme.spacing(3)
  },
}))

const MUTATION_ADD_INVOICE = gql`
    mutation addInvoice (
      $number: String!
      $date: date!
      $client_id: Int!
      $client_name: String
      $client_vat: String
      $base: numeric!
      $vat: numeric!
      $total: numeric!
    ) {
      insert_invoices(objects: {
        number: $number,
        date: $date,
        client_id: $client_id
        client_name: $client_name
        client_vat: $client_vat
        base: $base
        vat: $vat
        total: $total
      }) {
        affected_rows
      }
    }
`


function InvoicesInsert() {

  const navigate = useNavigate();
  const classes = useStyles();
  //const resUsers = useQuery(QUERY_USERS)

  const [addInvoice, { data, loading, error }] = useMutation(MUTATION_ADD_INVOICE)

  const initialState = {
    number: '',
    date: new Date(),
    client_id: 0,
    client_name: '',
    client_vat: '',
    base: 0,
    vat: 0,
    total: 0
  }

  const [formState, setFormState] = useState(initialState)

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = event => {

    event.preventDefault();

    addInvoice({
      variables: formState,
    });

    setFormState(initialState);
    navigate('/invoices');

  }

  return (
    <Paper className={classes.root} elevation={4}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Grid item>
            <FormControl>
              <TextField id="number" 
                label="Number"
                value={formState.number} 
                onChange={(e) => setFormState({ ...formState, number: e.target.value })} 
                type="text"  
                variant="standard"/>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField id="date" 
                label="Date"
                value={formState.date} 
                onChange={(e) => setFormState({ ...formState, date: e.target.value })} 
                type="date"  
                variant="standard" />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField id="client_id" 
                label="Client ID"
                value={formState.client_id} 
                onChange={(e) => setFormState({ ...formState, client_id: e.target.value })} 
                type="number"  
                variant="standard"/>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField id="client_name" 
                label="Client Name"
                value={formState.client_name} 
                onChange={(e) => setFormState({ ...formState, client_name: e.target.value })} 
                type="text"  
                variant="standard"/>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <FormControl>
              <TextField id="client_vat" 
                label="Client VAT"
                value={formState.client_vat} 
                onChange={(e) => setFormState({ ...formState, client_vat: e.target.value })} 
                type="text"  
                variant="standard"/>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField id="base" 
                label="Base"
                value={formState.base} 
                onChange={(e) => setFormState({ ...formState, base: e.target.value })} 
                type="number"  
                variant="standard"/>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField id="vat" 
                label="Taxes"
                value={formState.vat} 
                onChange={(e) => setFormState({ ...formState, vat: e.target.value })} 
                type="number"  
                variant="standard"/>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField id="total" 
                label="Total"
                value={formState.total} 
                onChange={(e) => setFormState({ ...formState, total: e.target.value })} 
                type="number" 
                variant="standard"/>
            </FormControl>
          </Grid> 
                            
          <div className={classes.div}>
            <Button variant="outlined" type="submit">Save</Button>
          </div>
        </Grid>   
      </form>         
    </Paper>
  )
}

export default InvoicesInsert;