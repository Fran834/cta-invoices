import { gql, useQuery } from '@apollo/client';
import { SELECT_INVOICE } from './querys-mutations';

export function ReadInvoice(id) {

  //console.log(`id: ${id}`);
  const {loading, error, data} = useQuery(SELECT_INVOICE, {
    variables: { id },
    pollInterval: 0,
    fetchPolicy: "network-only",   // Used for first execution
  })

  if (data) {
    //console.log(data.invoices_by_pk);
    return data.invoices_by_pk;
  }
  
  return undefined;
}

