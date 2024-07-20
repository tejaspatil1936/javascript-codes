async function logMovies() {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch("https://random-word-api.herokuapp.com/all")
    // .then((s)=>console.log("success",s.body))
    // .catch((e)=>console.log(e));


    // setTimeout(()=>{console.log(response)},2000)
    const movies = await response.json();
    console.log(movies);
}

logMovies();
