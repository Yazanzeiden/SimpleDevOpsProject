const root = document.getElementById("root");

// Fetching data from the backend API
fetch('http://backend:5000/api')  // API URL from the backend container
    .then(response => response.json())
    .then(data => {
        root.innerHTML = `<h1>${data.message}</h1>`;
    })
    .catch(error => {
        root.innerHTML = `<h1>Error fetching data</h1>`;
        console.error("Error:", error);
    });
