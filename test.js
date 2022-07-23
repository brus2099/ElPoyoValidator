const username = document.querySelector('#username');
const save = document.getElementById('save');

save.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(username.value);
});
