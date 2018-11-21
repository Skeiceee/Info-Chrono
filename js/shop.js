const table = document.getElementById('tbody');
const i = 0;

const getConnection = (i) => {
    const shop = URL = "https://api.chrono.gg/shop"
    fetch(URL)
        .then(response => response.json())
        .then(response =>{
          response.forEach( e=>{
            if(e.sold_out === false){
              i++;
              drawGame(e, i)
            }
          })
        });
};

const drawGame = (e, i) => {
  const game = `
    <tr>
      <th class="table-light text-center" scope="row">${i}</th>
      <td class="table-light">${e.name}</td>
      <td class="table-light">${e.description}</td>
      <td class="table-light text-center ">
        <img src="https://www.chrono.gg/assets/images/coins/coin--1.76ce3c14.png" class="img-fluid coin-sm" alt="Responsive image">
        <span class="color-yellow">${e.price}</span>
      </td>
      <td href="${e.url}" class="table-light"><a href="${e.url}" target="_blank"><div style="height:100%;width:100%"><span>View game on Steam</span></div></a></td>
    <tr>
  `;
  table.insertAdjacentHTML('beforeEnd',game);
};

getConnection(i);
