import {useState,useRef, useEffect} from 'react';

const users = [
    {name: 'saraah', age:20},
    {name: 'balu', age:22},
    {name:'test', age:23}
]

const UserSeach: React.FC = () => {


   const inputRef = useRef<HTMLInputElement | null>(null);
   const [name,setName] = useState('');
   const [user, setUser] = useState<{name:string, age:number} | undefined>();

   useEffect(() => {
     if(!inputRef.current){
         return;
     }
     inputRef.current.focus();
   }, [])


   const onclick = () => {

       const foundUser = users.find((user)=> {
           return user.name === name;
       });

       setUser(foundUser);
       setName('');

   }

   return <div>
      <input ref={inputRef} type="text" placeholder="name" onChange={e => setName(e.target.value)}></input>
      <button onClick={onclick}>Find User</button>
      {user!==undefined? <div>{user.name}: {user.age} </div>: <div>User not found</div> }
   </div>;
}

export default UserSeach;