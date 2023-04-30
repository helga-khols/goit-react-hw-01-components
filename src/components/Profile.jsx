import PropTypes from 'prop-types';
import {ProfileBox} from './Profile.styled'
import {Name} from './Profile.styled'
import {Tag} from './Profile.styled'
import {Location} from './Profile.styled'
import {Avatar} from './Profile.styled'
import {Social} from './Profile.styled'
import {SocialData} from './Profile.styled'

export default function Profile ({
  url="https://cdn-icons-png.flaticon.com/512/1077/1077012.png", 
  name, 
  tag, 
  location, 
  followers, 
  views, 
  likes}) 
  {
    // const {url, name, tag, location, followers, views, likes} = props;

    return (
    <ProfileBox>
    <div>
      <Avatar
        src={url}
        alt="User avatar"
        width="240"
      />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </div>
  
    <Social>
      <SocialData>
        <span>Followers</span>
        <span> {followers}</span>
      </SocialData>
      <SocialData>
        <span>Views</span>
        <span> {views}</span>
      </SocialData>
      <SocialData>
        <span>Likes</span>
        <span> {likes}</span>
      </SocialData>
    </Social>
  </ProfileBox>
  );
};

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}