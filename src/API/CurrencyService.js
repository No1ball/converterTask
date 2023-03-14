import axios from "axios";

export default class FetchData{
    static async getCurrency(){
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        return response.data
    }

}