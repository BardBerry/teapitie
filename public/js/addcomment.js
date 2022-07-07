const formcom = document.forms.addComents;

formcom?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const myform = Object.fromEntries(new FormData(formcom));
  const formid = document.querySelector('#teaid');
  const { id } = formid.dataset;
  const response = await fetch('http://localhost:3000/tea/:id', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ myform, id }),
  });
  if (response.ok) {
    window.location.replace('/teapitie');
  } else {
    console.log('ERROR');
  }
});
