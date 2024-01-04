import apiClient from "./api-Client";

interface Entity {
    id: number;
}

export interface User{
    id: number;
    name: string;
}


  
class HttpServices {

    endPoint: string;
    constructor(endPoint: string) {
        this.endPoint = endPoint
    }
    
    getAll<T> ()  {

    const controller = new AbortController();
    const request =  apiClient.get<T[]>(this.endPoint, {signal:controller.signal });
    return {request, cancel: () => controller.abort()};



    
    }

    create <T> (entity: T) {
      return  apiClient.post(this.endPoint, entity)
    }

    delete (id: number) {
        return apiClient.delete(this.endPoint + '/' + id)
    }

    // We create interface for this bz we were getting error that id is not exist on entity service.
    update <T extends Entity>(entity: T){
        return  apiClient.patch(this.endPoint + '/' + entity.id, entity)
    }

}

// This will not genric any more
// export default  HttpServices('users')
const create  = (endPoint: string)=> new HttpServices(endPoint);

export default  create;