import PropTypes from 'prop-types'; 
import FriendListItem from './FriendListItem'

export default function FriendList ({friends}) {

    return(
<div>
    {friends.map(friend => (
        <ul key={friend.id}> 
                <FriendListItem 
                    avatar={friend.avatar} 
                    name={friend.name} 
                    isOnline={friend.isOnline}
                /> 
        </ul>
    ))}
</div>
)


};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape(
            {id: PropTypes.number.isRequired}
            )
        )
}