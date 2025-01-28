const list = document.getElementById("list");

for (i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            list.innerHTML += `<li>${data.response}</li>`
        })
        .catch(error => {
            console.error(error)
        })
}