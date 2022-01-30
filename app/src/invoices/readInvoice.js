import { gql, useQuery } from '@apollo/client';

const SELECT_INVOICE = gql`
query MyQuery($id: Int!) {
  invoices_by_pk(id: $id) {
    id
    base
    client_id
    client_name
    client_vat
    date
    number
    total
    vat
  }
}
`

export function ReadInvoice(id) {

  //console.log(`id: ${id}`);
  const {loading, error, data} = useQuery(SELECT_INVOICE, {
    variables: { id },
    pollInterval: 0,
    fetchPolicy: "network-only",   // Used for first execution
  })

  if (data) {
    console.log(data.invoices_by_pk);
    return data.invoices_by_pk;
  }
  
  return undefined;
}

