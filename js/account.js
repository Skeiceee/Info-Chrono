const card = document.getElementById('account-info');

const getConnectionAccount = () => {

    const account = URL = "https://api.chrono.gg/account"

    let h = new Headers()
    h.append('Accept','application/json)')
    h.append('Authorization','{Insert here token}')

    let req = new Request(URL,{
      method: 'GET',
      headers: h,
      mode: 'cors'
    });
    fetch(req)
        .then(response => response.json())
        .then(response =>{
          drawInfo(response);
        });
};


const drawInfo = (response) => {
  const info = `
          <li class="list-group-item text-white color">Balance: ${response.coins.balance}</li>
          <li class="list-group-item text-white color">Spins: ${response.coins.spins}</li>
          <li class="list-group-item text-white color">Legendaries: ${response.coins.legendaries}</li>
        `;
  card.insertAdjacentHTML('beforeEnd',info);
};

getConnectionAccount();
