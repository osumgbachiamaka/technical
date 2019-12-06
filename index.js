/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */
console.log("working");
 //fetching api
 const fetchApi = () => {
    const api = 'https://api.coinlore.com/api/tickers/';
    fetch(api)
    .then(response => response.json())
    .then((data) => destructureData(data))
    .catch((err) => console.log(`something don happen here - ${err}, oya check`))
}
fetchApi();

//destructuring data retrieved from api
const destructureData = (result) =>{
    const {data} = result;
    
    showData(data)
}

//looping through array to display data
const showData = (data) => {

    const table = document.querySelector('table tbody')
    
    data.forEach(element => {
        const {name, symbol, price_usd, tsupply} = element;

        const tableRow = `
            <tr>
            <td>${name}</td>
            <td>${symbol}</td>
            <td>${price_usd}</td>
            <td>${tsupply}</td>
            </tr>
        `;

        table.insertAdjacentHTML("beforeend", tableRow);
    })
}
//https://api.coinlore.com/api/tickers/