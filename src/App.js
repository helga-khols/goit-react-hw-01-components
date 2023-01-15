import Profile from './components/Profile'
import data from './user';
export default function App() {
    return <div>
        <Profile 
        url={data.avatar} 
        name={data.username} 
        tag={data.tag}  
        location={data.location} 
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
        /> 
    </div>
}
