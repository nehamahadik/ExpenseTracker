import React from 'react'

const ViewExpenses = () => {
  return (
    <div>
       

  <h5>ViewExpenses</h5>
  <table className="w3-table w3-striped w3-white">
    <tbody>
      <tr>
        <td>
          <i className="fa fa-money w3-text-red w3-large" />
        </td>
        <td>Food</td>
        <td>
          <i>2000</i>
        </td>
      </tr>
      <tr>
        <td>
          <i className="fa fa-money w3-text-red w3-large" />
        </td>
        <td>Travel</td>
        <td>
          <i>1500</i>
        </td>
      </tr>
      
    </tbody>
  </table>


    </div>
  )
}

export default ViewExpenses;