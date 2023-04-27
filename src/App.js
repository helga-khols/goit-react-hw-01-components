import Profile from './components/Profile'
import FriendList from './components/FriendList'
import Statistics from './components/Statistics'
import TransactionList from './components/TransactionList'
import user from './user';
import items from './friends';
import data from "./data";
import transactionsData from './transactions 2'

export default function App() {
    return <div>
        <Profile 
        url={user.avatar} 
        name={user.username} 
        tag={user.tag}  
        location={user.location} 
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />  
        <Statistics title="Upload stats" stats={data}/> 

        <FriendList friends={items}/> 

        <TransactionList transactions={transactionsData}/>
        
    </div>
}
