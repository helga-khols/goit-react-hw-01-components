import PropTypes from 'prop-types';
export default function StatsItems ({
    label,
    percentage
})

{
    return(
        <li>
            <span>{label} </span>
            <span>{percentage}%</span>
        </li>
    );
};

StatsItems.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}