const card = document.getElementById('account-info');

const getConnectionAccount = () => {

    const account = URL = "https://api.chrono.gg/account"

    let h = new Headers()
    h.append('Accept','application/json)')
    h.append('Authorization','{Insert Token Here}') 

    let req = new Request(URL,{
      method: 'GET',
      headers: h,
      mode: 'cors'
    });
    fetch(req)
      .then(response => response.json())
      .then(response =>{
        response.forEach( e=>{
            drawGame(e)
          }
        })
      });
};


const drawInfo = (e) => {
  const game = `
          <li class="list-group-item">Balance: </li>
          <li class="list-group-item">Spins: </li>
          <li class="list-group-item">Legendaries open: </li>
        `;
  table.insertAdjacentHTML('beforeEnd',game);
};
getConnectionAccount();
