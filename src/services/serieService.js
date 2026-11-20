import api from "./api.js";

export async function getall() {
    try {
        const responce = await api.get("/series");

        return responce.data;
    } catch (error) {
        throw error;
    }
}
export async function getById(id) {
    try {
        const response = await api.get(`/series/${id}`);

        return response.data;

    } catch (error) {
        throw error;
    }
}

export async function create(serie) {
    try {
        const responce = await api.post("/series", serie);
        return responce.data;
    } catch (error) {
        throw error;
    }
}

export async function updateseries(id, serie) {

    try {
        const responce = await api.patch(`/series/${id}`, serie);
    return responce.data;
    } catch (error) {
        throw error
    }
    
}


export async function deleteserie(id) {
    try {
     await api.delete(`/series/${id}`);
    } catch (error) {
       throw error 
    }  
    
}
