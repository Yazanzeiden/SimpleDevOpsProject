const root = document.getElementById("root");

fetch("/api")
    .then(response => response.json())
    .then(data => {
        root.innerHTML = `<h1>${data.message}</h1>`;
    })
    .catch(error => {
        root.innerHTML = `<h1>Error fetching data</h1>`;
        console.error("Error:", error);
    });
