const formTea = document.forms.addTea;

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
    window.location.replace('/');
  } else {
    console.log('ERROR');
  }
});
