const languages = ["js", "cpp", "py", "c"]

languages.forEach(function (shortcut) {
    console.log(shortcut);
})

languages.forEach((shortcut) => {
    console.log(shortcut);
});

function printme(item) {
    console.log(item);
}

languages.forEach(printme)

languages.forEach((shortcut, index, array) => {
    console.log(shortcut, index, array);
})

// +++++++++++++ on objects +++++++++++++++


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {

    console.log(item.languageName);
})