
import useUsers from "./useUsers";
import userServices, { User } from "./user-services";

function App() {

  const {users, isLoading, error, setUsers, setError} = useUsers();




// Create a new User

const handleAddUser = () => {

  const ogrinalUsers = [...users] ; // Incase we have error
  const newUser = {
    id: 0,
    name:'Umair'
  }

  setUsers([newUser, ...users]);

  // Call  the server

  userServices.create(newUser).
  then(res => setUsers([res.data, ...users])).
  catch(err => {
    setError(err.message)
    setUsers(ogrinalUsers)
  }

  
  );
}

// Delete user
 const handleDeleteUser = (u: User) => {
  const ogrinalUsers = [...users]
  // Optimistic update

  setUsers(users.filter(user => user.id !== u.id));

  userServices.delete(u.id).
  catch(err => {
    setError(err.message);
    setUsers(ogrinalUsers);
  })
};

// Updating users
const updateUsers = (user:User) => {
  const ogrinalUsers = [...users]
  const updatedUser = {
    id: user.id,
    name: user.name + "!",
  }

  setUsers(users.map(u => u.id === user.id ? updatedUser : u));

 userServices.update(updatedUser).
  catch(error => {
    setError(error.message);
    setUsers(ogrinalUsers)
  });
}


  

  return (
    <>

    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
     <ul>
      {users.map(user => <li key={user.id}>{user.name}
      <button onClick={() => handleDeleteUser(user)}>Delete</button>
      <button onClick={() => updateUsers(user)}>Update</button>
      </li>
      )
      
      }
      
      <button onClick={handleAddUser}>Add</button>
     
     </ul>
    </>
  )
}

export default App
