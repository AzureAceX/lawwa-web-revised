function updateCounter(){
    fetch('https://api.countapi.xyz/update/LawwaWebsiteVistors/visitor/?amount=1')
    .then(res => res.json())
    .then(data => counterDisplay.innerHTML = data.value)
}

updateCounter()


counterDisplay = document.getElementsByClassName('counterDisplay')[0];

/*
//creating namespace
https://api.countapi.xyz/create?namespace=LawwaWebsiteVistors&key=visitor&value=0

//get namespace value
https://api.countapi.xyz/get/LawwaWebsiteVistors/visitor

//update namespace key value
https://api.countapi.xyz/update/LawwaWebsiteVistors/visitor/?amount=1

*/
