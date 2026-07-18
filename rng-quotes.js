let quotes = [];

        async function loadQuotes() {
            try {
                const response = await fetch('https://cdn.jsdelivr.net/gh/daknux/assets@latest/quotes-x.json');
                quotes = await response.json();
                
                if (Array.isArray(quotes) && quotes.length > 0) {
                    displayRandomQuote();
                    
                    // Change quote every 5 seconds
                    setInterval(displayRandomQuote, 5000);
                } else {
                    document.getElementById('rainbowText').textContent = '❌ No quotes found';
                }
            } catch (error) {
                console.error('Error loading quotes:', error);
                document.getElementById('rainbowText').textContent = '❌ Error loading quotes';
            }
        }

        function displayRandomQuote() {
            if (quotes.length === 0) return;
            
            // Pick random index
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            
            // Handle different JSON structures
            const text = quote.text || quote.quote || quote.message || quote;
            
            document.getElementById('rainbowText').textContent = text;
        }

        // Load on page start
        loadQuotes();
