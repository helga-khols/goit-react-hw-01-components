import PropTypes from 'prop-types';

export default function Trasaction ({type, amount, currency}) {
    return (
        <tr> 
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
    );
};

Trasaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};