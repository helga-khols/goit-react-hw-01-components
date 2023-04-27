import PropTypes from 'prop-types';
import StatsItems from "./StatsItems"
export default function Statistics ({
    title, 
    stats
}) {

    return(
        <section>
            {title && <h2>{title}</h2>}

            {stats.map(stat => 
            <ul key={stat.id}> 

            <StatsItems 
                label={stat.label}
                percentage={stat.percentage}
            /> 
        </ul>
                )}
            

        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {id: PropTypes.string.isRequired}
            )
        )
}