fetch("https://reqres.in/api/users?page=2")
  .then((result) => {
    // console.log(result);
    let myData = result.json();
    // console.log(myData);
    return myData;
  })
  .then((myData) => {
    // console.log(myData.data[0]);
    if (cardContainer) {
      document.getElementById("card-container").replaceWith(cardContainer);
      return;
    }

    cardContainer = document.getElementById("card-container");
    myData.data.forEach((data) => {
      createCard(data);
    });
  });

//bootstrap card
let cardContainer;

let createCard = (data) => {
  let card = document.createElement("div");
  card.className = "col-lg-4 col-md-6 p-2 card shadow cursor-pointer";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let fullName = document.createElement("h5");
  fullName.innerText = data.first_name + " " + data.last_name;
  fullName.className = "card-fullName";

  let img = document.createElement("img");
  img.src = data.avatar;

  let email = document.createElement("div");
  email.innerText = data.email;
  email.className = "card-color";

  cardBody.appendChild(fullName);
  cardBody.appendChild(img);
  cardBody.appendChild(email);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);
};
