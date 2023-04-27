import PropTypes from 'prop-types'; 
export default function FriendListItem ({
    avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    name,
    isOnline=true
}) 

    {
    return (
        <li>
        <span>{isOnline ? 'онлайн' : 'офлайн'}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        </li>
    );

};

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired
}