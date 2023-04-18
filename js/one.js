// Get all the platypus from localstorage and render them
if ((localStorage, allPlats)) {
  const platypusLS = JSON.parse(localStorage.getItem("allPlats"));
  // Loop through the array to render the list
  for (let i = 0; i < platypusLS.length; i++) {
    let newplat = new Platypus(platypusLS[i].name);
    allPlats.push(newplat);
    newplat.render();
  }
}

platiform.addEventListener("submit", handleFormSubmit);
