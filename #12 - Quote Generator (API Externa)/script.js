async function loadApp(){
    const quote = document.querySelector('blockquote');
    const author = document.querySelector('span');
    const newQuoteButton = document.querySelector('button');

    let isLoading = true;

    async function displayQuote() {
        isLoading = true;
        toggleSpinner();

        try {
            let quoteData = await getRandomQuote();
            quote.textContent = `"${quoteData[0].q}"`;
            author.textContent = `- ${quoteData[0].a}`;
        } catch (error) {
            quote.textContent = 'Failed to load quote.';
            author.textContent = `Error: ${error.message}`;
        } finally {
            isLoading = false;
            toggleSpinner();
        }
    }

    function toggleSpinner(){
        if(isLoading){
            newQuoteButton.classList.remove('active');
            newQuoteButton.classList.add('disabled');
            newQuoteButton.disabled = true;
            newQuoteButton.textContent = 'Loading...';
        }else{
            newQuoteButton.classList.remove('disabled');
            newQuoteButton.classList.add('active');
            newQuoteButton.disabled = false;
            newQuoteButton.textContent = 'New quote';
        }
    }

    async function getRandomQuote() {
        const response = await fetch('https://corsproxy.io/?https://zenquotes.io/api/random');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

    newQuoteButton.addEventListener('click', displayQuote);
    displayQuote();
}

document.addEventListener('DOMContentLoaded', loadApp);