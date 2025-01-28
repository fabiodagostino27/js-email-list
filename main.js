const list = document.getElementById("list");
const btn = document.getElementById("btn");

function generateEmails() {
    for (i = 0; i < 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                list.innerHTML += `<li class="list-group-item list-group-item-action">${data.response}</li>`
            })
            .catch(error => {
                console.error(error)
            })
    }
}

generateEmails();

btn.addEventListener("click", function() {
    list.innerHTML = "";
    generateEmails();
})

