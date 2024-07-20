
randomcolor = () => {
    let hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalid;
let startchangingcolor = () => {
    if (!intervalid) intervalid = setInterval(changeBG, 1000)

    function changeBG() {
        document.body.style.backgroundColor = randomcolor()
    }
}
let stopchangingcolor = () => {
    clearInterval(intervalid)
    intervalid = null;
}
document.getElementById("start").addEventListener("click", startchangingcolor);
document.getElementById("stop").addEventListener("click", stopchangingcolor);