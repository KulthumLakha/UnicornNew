const form = document.getElementById('avatar-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const colorSelect = document.getElementById('color');
  const avatarImg = document.getElementById('avatar');

  const name = nameInput.value;
  const color = colorSelect.value;

  const url = `https://ui-avatars.com/api/?name=${name}&background=${color}`;

  avatarImg.src = url;
});
