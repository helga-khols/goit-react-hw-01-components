import { createRoot} from 'react-dom/client';

import data from './user.json' 

const user = data[0];

// const element = (
// <div class="profile">
//   <div class="description">
//     <img 
//       src={user.avatar}
//       alt="User avatar"
//       class="avatar"
//       width="240"
//     />
//     <p class="name">{user.username}</p>
//     <p class="tag">@{user.tag}</p>
//     <p class="location">{user.location}</p> </div>

//     <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{user.stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{user.stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{user.stats.likes}</span>
//     </li>
//   </ul>
// </div>
  
  
//   )

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);