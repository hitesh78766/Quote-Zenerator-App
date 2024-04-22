let quotes;

//this functuion is fetching the data from the API and add the spinner to the page
const FetchQuoteAndRender = async () => {
    
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    showSpinner(false)
    
    
    const data = await getRendomQuote();
    
    if (data) {
        changeQuote(data.quote, data.author);
        loader.style.display = 'none';        
        showSpinner(true)

        animateContainer();      
    }
}


    const animateContainer = () => {
    const addAnimation = document.querySelector('#quote-container');
    addAnimation.classList.add('container-animated')
    setTimeout(() => {
        addAnimation.classList.remove('container-animated')
    }, 1000);
}


//this function is making for the spinner to show and hide...
const showSpinner = (show) => {
    if(show){
        changeQuoteButton.style.display = 'block';
        quoteImage.style.display = 'block';
        changeQuoteDescription.style.display = 'block';
        changeAuthor.style.display = 'block';
        
    }else{
        changeQuoteButton.style.display = 'none';
        quoteImage.style.display = 'none';
        changeQuoteDescription.style.display = 'none';
        changeAuthor.style.display = 'none';

    }
}


// this function is making for to fetch the data from the API
const getRendomQuote = async function ()
{
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json()
    return data
}


const changeQuoteButton = document.getElementById('btnQuote');
const quoteImage = document.getElementById('quote-image');
const changeQuoteDescription = document.getElementById('quote-description');
const changeAuthor =  document.getElementById('quote-author');

//this function is changing the quote and author in the container-content
const changeQuote = (quote,author) =>
{
    changeQuoteDescription.innerHTML = quote;
    changeAuthor.innerHTML = author
}

changeQuoteButton.addEventListener('click', FetchQuoteAndRender )


FetchQuoteAndRender()    




// const FetchQuoteAndRender = async () => {
//     const data = await getRendomQuote()
//     changeQuote(data.quote,data.author)
// }


