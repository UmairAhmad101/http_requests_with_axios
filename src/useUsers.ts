import * as React from "react";
import { CanceledError } from "./api-Client";
import userServices, { User } from "./user-services";


const useUsers = () => {
    const [users, setUsers] =  React.useState<User[]>([]);
    const [error, setError] =  React.useState('');
    const [isLoading, setIsLoading] =  React.useState(false);


React.useEffect(() => {


    setIsLoading(true);
    const {request, cancel} =   userServices.getAll<User>();
    request
    .then(res => {
    setUsers(res.data)
    setIsLoading(false);
    }).
    catch((err) => {
    if(err instanceof CanceledError) return;
    setError(err.message)
    setIsLoading(false);
  });
    
      
      // Clean up function
      return () => {
        cancel()
      }

},[]);

 return {users, isLoading, error, setError,setUsers}
}

export default useUsers;