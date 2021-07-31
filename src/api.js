import axios from 'axios';
const jsonp = require('jsonp');
const url = "https://superheroapi.com/api/10159645997876060";
const urlSearch = "https://superheroapi.com/api/10159645997876060/search";

var optionAxios = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export default class API {
    //obtener un héroe
    static async getHeroeById(id) {
        
        const res = await axios.get(`${url}/${id}`, optionAxios);
        console.log(res);
        return res.jsonp(data);
    }

    //buscar un héroe por nombre
    static async searchHeroeByName(name) {
        const res = await axios.get(`${urlSearch}/${name}`);
        return res.data;
    }

    

}