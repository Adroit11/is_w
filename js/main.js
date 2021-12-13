'use strict';

const form = document.getElementById('search-form');
let domainName = document.querySelector('.searchWhois');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchWhois();
});

function searchWhois() {

    const domain = domainName.value.trim();

    console.log(domain);

    if(domain === '') {
        // show error
        alert("Please enter a domain name");

    } else {
        fetch(`https://resell.whogohost.com/whois?domain=${domain}`, {
            // mode: 'no-cors',
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json()) 
        .then(json => {
            console.log(json);
        })
        .catch(err => {console.log(err)});
    }
}