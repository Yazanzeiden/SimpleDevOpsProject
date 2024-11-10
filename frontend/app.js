// const root = document.getElementById("root");

// // Fetching data from the backend API
// fetch('http://backend:5000/api/')  // API URL from the backend container
//     .then(response => response.json())
//     .then(data => {
//         root.innerHTML = `<h1>${data.message}</h1>`;
//     })
//     .catch(error => {
//         root.innerHTML = `<h1>Error fetching data</h1>`;
//         console.error("Error:", error);
//     });



const root = document.getElementById("root");

// Fetching data from the backend API
fetch('/api/')  // API URL from the backend container
    .then(response => response.text())  // Get the raw response as text
    .then(data => {
        root.innerHTML = `<h1>${data}</h1>`;  // Directly display the raw response in the HTML
    })
    .catch(error => {
        // Display the error message directly in HTML
        root.innerHTML = `<h1>${error.message}</h1>`;  // Shows the error message directly in the HTML
        console.error("Error:", error);  // Logs the error in the console as well
    });


