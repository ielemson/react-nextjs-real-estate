import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const  fetchApi = async(url)=>{
const {data} = await axios.get((url),{

    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '620872a72dmshbe0681f6ec14dcfp19fb20jsnfd835e039c8e'
      }
});
return data;
}

