export default function Profile ({url="https://cdn-icons-png.flaticon.com/512/1077/1077012.png", name, tag, location, followers, views, likes}) {
    // const {url, name, tag, location, followers, views, likes} = props;

    return (
    <div>
    <div>
      <img
        src={url}
        alt="User avatar"
        width="240"
      />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  
    <ul>
      <li>
        <span>Followers</span>
        <span> {followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span> {views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span> {likes}</span>
      </li>
    </ul>
  </div>
  );
};