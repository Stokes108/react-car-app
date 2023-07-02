const api_token = 'eacaf3d22062db23af0898b94794e0fa6d30bc4efb74b91a'

export const server_calls = {
    get : async () => {
        const response = await fetch('https://car-app-0se9.onrender.com/api/cars',
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            }

        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
        
    },
    create : async ( data: any = {}) => {
        const response = await fetch('https://car-app-0se9.onrender.com/api/cars',
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }
        return await response.json() 
    },

    update : async (id:string, data: any = {}) => {
        const response = await fetch(`https://car-app-0se9.onrender.com/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }
        return await response.json() 
    },
    delete : async ( id: string) => {
        const response = await fetch(`https://car-app-0se9.onrender.com/api/car/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
        });
        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }
        return
    },
    getSingle : async ( id: string) => {
        const response = await fetch(`https://car-app-0se9.onrender.com/api/car/${id}`,
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
        });
        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }
        return await response.json() 
    }

}