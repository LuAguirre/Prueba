const api_url = "https://localhost:44364/api/Persona"

fetch(api_url)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(err => console.log)