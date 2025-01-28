const list = document.getElementById("list");

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {
    console.log(data)
    list.innerHTML += `<li>${data.response}</li>`
})
.catch(error => {
    console.error(error)
})