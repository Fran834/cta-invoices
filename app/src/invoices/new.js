import React, { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

// const QUERY_USERS = gql`
//   query getUsers {
//     users {
//       id
//       name
//     }
//   }
// `

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


export default function InvoicesInsert() {

  //const resUsers = useQuery(QUERY_USERS)

  const [addInvoice, { data, loading, error }] = useMutation(MUTATION_ADD_INVOICE)

  const initialState = {
    number: '',
    date: new Date().getDate,
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

    setFormState(initialState)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Number</span>
          <input value={formState.number} onChange={(e) => setFormState({ ...formState, number: e.target.value })} type="text" step={1} />
          {/* <select required value={formState.userId} onChange={(e) => setFormState({ ...formState, userId: parseInt(e.target.value, 10) })}>
            <option value="">Select</option>
            {resUsers.data && <>
              {resUsers.data.users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
            </>}
          </select> */}
        </label>
        <label>
          <span>Date</span>
          <input value={formState.date} onChange={(e) => setFormState({ ...formState, date: e.target.value })} type="date" step={1} />
        </label>
        <label>
          <span>Client ID</span>
          <input value={formState.client_id} onChange={(e) => setFormState({ ...formState, client_id: parseInt(e.target.value, 0) })} type="number" step={1} />
        </label>
        <label>
          <span>Client Name</span>
          <input value={formState.client_name} onChange={(e) => setFormState({ ...formState, client_name: e.target.value })} type="text" step={1} />
        </label>
        <label>
          <span>Client VAT</span>
          <input value={formState.client_vat} onChange={(e) => setFormState({ ...formState, client_vat: e.target.value })} type="text" step={1} />
        </label>
        <label>
          <span>Base</span>
          <input value={formState.base} onChange={(e) => setFormState({ ...formState, base: parseInt(e.target.value) })} type="money" step={1} />
        </label>
        <label>
          <span>Vat</span>
          <input value={formState.vat} onChange={(e) => setFormState({ ...formState, vat: parseInt(e.target.value) })} type="money" step={1} />
        </label>
        <label>
          <span>Total</span>
          <input value={formState.total} onChange={(e) => setFormState({ ...formState, total: parseInt(e.target.value) })} type="money" step={1} />
        </label>        
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
