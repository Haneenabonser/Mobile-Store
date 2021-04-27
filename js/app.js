'use strict';


// create constructor 

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let mobiles = [];

function Mobile(user, type) {
    this.user = user;
    this.type = type;
    this.price = random(100, 500);

    mobiles.push(this);
    settingData();
}

// setting data
function settingData() {
    localStorage.setItem('mobiles', JSON.stringify(mobiles));
}

// create the table and rendering

let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);

let headerArray = ['User', 'Type', 'Price', 'Condition'];

let headerRow = document.createElement('tr');
table.appendChild(headerRow);


for (let i = 0; i < headerArray.length; i++) {
    let headerData = document.createElement('th');
    headerRow.appendChild(headerData);
    headerData.textContent = headerArray[i];
}


//render

Mobile.prototype.render = function () {

    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let userData = document.createElement('td');
    dataRow.appendChild(userData);
    userData.textContent = this.user;

    let typeData = document.createElement('td');
    dataRow.appendChild(typeData);
    typeData.textContent = this.type;

    let priceData = document.createElement('td');
    dataRow.appendChild(priceData);
    priceData.textContent = this.price;

    let conditionData = document.createElement('td');
    dataRow.appendChild(conditionData);
    if (this.price < 200) {
        conditionData.textContent = 'Used';
    } else {
        conditionData.textContent = 'New';
    }

}


// activating the form

let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

    let user = event.target.user.value;
    let type = event.target.type.value;

    let newObj = new Mobile(user, type);
    // console.log(newObj);
    newObj.render();
}

// getting data from LS 
function gettingData() {
    let parseData = JSON.parse(localStorage.getItem('mobiles'));
    // console.log(parseData);

    if (parseData) {
        for (let i = 0; i < parseData.length; i++) {
            let newObj = new Mobile(parseData[i].user, parseData[i].type);
            newObj.render();
            // console.log(newObj);
        }

    }
}
gettingData();

for (let i = 0; i < mobiles.length; i++){
    mobiles[i].render;
}
