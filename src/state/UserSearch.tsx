import {useState} from 'react';

const users = [
    {name: 'saraah', age:20},
    {name: 'balu', age:22},
    {name:'test', age:23}
]

const UserSeach: React.FC = () => {

   const [name,setName] = useState('');
   const [user, setUser] = useState<{name:string, age:number} | undefined>();

   const onclick = () => {

       const foundUser = users.find((user)=> {
           return user.name === name;
       });

       setUser(foundUser);
       setName('');

   }

   return <div>
      <input type="text" placeholder="name" onChange={e => setName(e.target.value)}></input>
      <button onClick={onclick}>Find User</button>
      {user!==undefined? <div>{user.name}: {user.age} </div>: <div>User not found</div> }
   </div>;
}

export default UserSeach;