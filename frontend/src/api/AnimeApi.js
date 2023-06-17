import axios from 'axios'

class AnimeApi{
    static getAnimeInfoById = (id) =>{
        axios({
            method:"post",
            url:"http://127.0.0.1:8000/api/get_anime/${id}"
        })
        .then((response) => {
            console.log(response.data)
        })
    }
}

new AnimeApi()