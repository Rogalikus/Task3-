import axios from "axios";


export const searchAPI = {
    getInfo (name, country)  {
        return axios.get(`http://universities.hipolabs.com/search?name=${name}&country=${country}`
        )
    }
}