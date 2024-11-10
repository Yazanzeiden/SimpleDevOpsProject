import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('/api')  // Relative URL for API
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => {
                console.error("Error fetching data:", error);
                setMessage("Error fetching data");
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
