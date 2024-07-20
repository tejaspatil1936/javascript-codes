import fetch from "node-fetch";

const obj = {

    "userid": 12,
    "id": 123,
    "title": "quas fugiat ut perspiciatis vero provident",
    "body": "eum non blanditiis soluta porro"
}
const fn = async () => {
    try {
        const response = await
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-type": "application/json"
                }
            })
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fn();

