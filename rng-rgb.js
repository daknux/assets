 // Fetch and display text from JSON
        async function loadJSONText() {
            try {
                // Replace this URL with your JSON file
                const response = await fetch('data.json');
                const data = await response.json();
                
                // Get the text from JSON
                const textToDisplay = data.text || data.message || Object.values(data)[0];
                
                // Update the element
                document.getElementById('rainbowText').textContent = textToDisplay;
            } catch (error) {
                console.error('Error loading JSON:', error);
                document.getElementById('rainbowText').textContent = '❌ Error loading data';
            }
        }

        // Load on page start
        loadJSONText();
