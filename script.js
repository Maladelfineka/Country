let root = document.querySelector('.root');

var headers = new Headers();
headers.append("X-CSCAPI-KEY", "a0o0bjBHUVdhWVcxVE5LcVNVUHloSmRJbkJrbFV6NDJEbGc4cjBuMQ==");

function panstwa(r){

    let temp = ''
    for(let i of r){
        temp+=`
        <div class='karta'>
        <p>${i.id}. ${i.name} - ${i.iso2}</p>
        </div>
        `;
    }

    root.innerHTML=temp
}
var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(response => response.json())
.then(result => {

    panstwa(result);
})
.catch(error => console.log('error', error));