import PropTypes from 'prop-types'; 
import Trasaction from './Transaction';

export default function TransactionList ({transactions}) {
    return (
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  {transactions.map(transaction => (
          <tbody key={transaction.id}>
   <Trasaction 
   type={transaction.type}
   amount={transaction.amount}
   currency={transaction.currency}
   />
          </tbody>
        ))}

</table>
    )
}

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape(
            {id: PropTypes.string.isRequired}
            )
        )
}