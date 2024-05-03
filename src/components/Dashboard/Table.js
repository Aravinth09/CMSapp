import React from 'react';

const Table = ({ customers, handleEdit, handleDelete }) => {
  customers.forEach((customer, i) => {
    customer.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer, i) => (
              <tr key={customer.id}>
                <td>{i + 1}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{formatter.format(customer.amount)}</td>
                <td>{customer.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(customer.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(customer.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Customers</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
