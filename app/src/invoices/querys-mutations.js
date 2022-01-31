import { gql } from '@apollo/client';

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

const MUTATION_UPDATE_INVOICE = gql `
  mutation MyMutation (
    $id:Int!, 
    $number: String!
    $date: date!
    $client_id: Int!
    $client_name: String
    $client_vat: String
    $base: numeric!
    $vat: numeric!
    $total: numeric!
  ) {
    update_invoices_by_pk(pk_columns: {id: $id}, 
      _set: {
        number: $number, 
        date: $date, 
        client_id: $client_id, 
        client_name: $client_name, 
        client_vat: $client_vat, 
        base: $base,
        vat: $vat,
        total: $total
      }
  ) {
      id
    }
  }
`

const MUTATION_DELETE_INVOICE = gql`
  mutation MyMutation($id:Int!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`

export {QUERY_INVOICES, 
  SELECT_INVOICE, 
  MUTATION_ADD_INVOICE, 
  MUTATION_UPDATE_INVOICE, 
  MUTATION_DELETE_INVOICE};