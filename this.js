function print() {
    let a = 10
    console.log(a);
}
print()

const info = {
    Name: "tejas",
    age: 17,

    welcome: function () {
        console.log(this.Name);
    }
}

info.welcome()