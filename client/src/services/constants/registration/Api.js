

const api = 'http://localhost:8090/api/v1';

export const postToDb = async (userValues)=>{

    const requestOptions ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userValues)
    };

    localStorage.removeItem("token");
    const response = await fetch(api+'/auth/register', requestOptions)
    if (!response.ok) {
        throw new Error('Data coud not be fetched!')
    } else {
        return response;
    }

}

export const  Authenticate = async (userValues)=>{
    let authenticate = false;

    const requestOptions ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userValues)
    };
    localStorage.removeItem("token");

    const response = await fetch(api+'/auth/authenticate', requestOptions);
    if (!response.ok) {
        throw new Error('Data coud not be fetched!')
    } else {
        return response;
    }

}

