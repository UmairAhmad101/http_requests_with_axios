import create from "./httpServices";

export interface User{
    id: number;
    name: string;
}


export default create('/users')

  
// class UserServices {
    
    // getAllUsers ()  {

    // const controller = new AbortController();
    //   const request =  apiClient.get<User[]>('/users', {signal:controller.signal });
    //   return {request, cancel: () => controller.abort()};


     
    
    // }

    // createUser (newUser: User) {
    //   return  apiClient.post('/users', newUser)
    // }

    // deleteUser (userId: number) {
    //     return apiClient.delete('/users/' + userId)
    // }

    // updateUsers (updatedUser: User){
    //     return  apiClient.patch('/users/' + updatedUser.id, updatedUser)
    // }

// }

// export default new UserServices();