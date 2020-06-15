import axios from "axios";
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})