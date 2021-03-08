function updateCounter(){
    fetch('https://api.countapi.xyz/update/LawwaWebsiteVistorCount/visitosr/?amount=+1')
    .then(res => res.json())
    .then(data => counterDisplay.innerHTML = "Visitors:" + data.value)
}

updateCounter()

counterDisplay = document.getElementsByClassName('counterDisplay')[0];

/*
//creating namespace
// OLD KEY https://api.countapi.xyz/create?namespace=LawwaWebsiteVistors&key=visitor&value=0
https://api.countapi.xyz/create?namespace=LawwaWebsiteVistorCount&key=visitosr&value=0&enable_reset=1

//get namespace value
https://api.countapi.xyz/get/LawwaWebsiteVistors/visitor

//update namespace key value
https://api.countapi.xyz/update/LawwaWebsiteVistors/visitor/?amount=1

*/
