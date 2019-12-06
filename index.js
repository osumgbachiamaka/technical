/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */

    let current_page = 1;
    const records_per_page = 10;

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

    dataLength(data)
}

//looping through array to display data
// const showData = (data) => {

//     const table = document.querySelector('table tbody')
    
//     data.forEach(element => {
//         const {name, symbol, price_usd, tsupply} = element;

//         const tableRow = `
//             <tr>
//             <td>${name}</td>
//             <td>${symbol}</td>
//             <td>${price_usd}</td>
//             <td>${tsupply}</td>
//             </tr>
//         `;

//         table.insertAdjacentHTML("beforeend", tableRow);
//     })
// }
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

const dataLength =(data) => {
    return data.length;
}

const calculateLength = () => {
    return Math.ceil(dataLength() / records_per_page);
}

const changePage = (page) => {
    const listingTable = document.getElementById('listingTable');

    if (page < 1) {
        page = 1;
    } 
    if (page > (calculateLength() -1)) {
        page = calculateLength();
    }
 
    listingTable.innerHTML = "";

    for(let i = (page -1) * records_per_page; i < (page * records_per_page) && i < dataLength(); i++) {
        listingTable.innerHTML += "<div class='objectBlock'>" + objJson[i].adName + "</div>";
    }
    checkButtonOpacity();
    selectedPage();
}
//https://api.coinlore.com/api/tickers/