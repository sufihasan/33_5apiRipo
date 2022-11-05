const loadUser = () => {

    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))

}

const displayUsers = users => {

    // console.log(users);

    const usersContainer = document.getElementById('users-container');

    users.forEach(user => {

        console.log(user);

        const userDiv = document.createElement('div');
        userDiv.classList.add('col');

        userDiv.innerHTML = `
    
    <div class="card">
    <img src="${user.picture.thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
      <h5 class="card-title">City Name: ${user.location.city}</h5>
      <h5 class="card-title">Streat: ${user.location.street.name} ${user.location.street.number}</h5>
    </div>
  </div>


    `;

        usersContainer.appendChild(userDiv);

    });







}

loadUser();