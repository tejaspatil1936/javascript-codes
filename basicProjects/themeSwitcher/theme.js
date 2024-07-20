document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.button').forEach(function(button) {
        button.addEventListener('click', function() {
            const themeClass = this.classList[1];
            console.log('Clicked on:', themeClass); // Log the clicked theme
            setTheme(themeClass);
        });
    });  
});

function setTheme(themeClass) {
    document.body.classList.remove('grey', 'blue', 'black', 'red');
    document.body.classList.add(themeClass);
}
