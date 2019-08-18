import React from 'react';

function SortTable(props) {
  console.log('SortTable', props);

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tbody>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item,i) => (
          <tr key={i}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortTable;