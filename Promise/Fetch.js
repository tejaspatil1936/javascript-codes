// // const { default: fetch } = require("node-fetch");
import fetch from "node-fetch";

const f =async () =>{
   await fetch('https://api.github.com/users/tejaspatil1936')
.then((response) => {
    console.log(response);
    return response.json()
})
// .then((data) => {
//     console.log(data);
// })
.catch((error) => console.log(error))
}
const res=f()
console.log(res);

// async function fetchdata() {
//     try {
//         const response = await
//         fetch('https://api.github.com/users/tejaspatil1936');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchdata();