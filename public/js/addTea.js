const formTea = document.forms.addTea;

function createPartHTML(titleTea, descTea, imgTea) {
  return `
  <div class="cards">
  <div class="card">
      <h2 class="card-title">${titleTea}</h2>
      <img src="${imgTea}" alt="">
      <p class="card-desc">${descTea}</p>
  </div>
</div>
  `;
}

formTea?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const allform = Object.fromEntries(new FormData(formTea));
  const response = await fetch('http://localhost:3000/lk', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(allform),
  });
  if (response.ok) {
    const titleTea = document.querySelector('#tittleTea');
    const descTea = document.querySelector('#descTea');
    // const locationTea = document.querySelector('#locationTea');
    const imgTea = document.querySelector('#imgTea');
    const container = document.querySelector('[data-container]');
    container.insertAdjacentHTML('afterbegin', createPartHTML(titleTea, descTea, imgTea));
    window.location.replace('/lk');
  } else {
    console.log('ERROR');
  }
});
