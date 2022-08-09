

let api_key = '7Cnk_CMJpR7NPGQwPYM1NeFdiv6-GmWrwNszhXpwkDnslFs9Z-Yg69JQkQXLJRJ5qShQkV0fKHQj2prJIP_6xIqHbztVhPUm6JekHnJEyx0_nFkyzdCjbHDEWnjuYnYx';

/**postman*****var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 7Cnk_CMJpR7NPGQwPYM1NeFdiv6-GmWrwNszhXpwkDnslFs9Z-Yg69JQkQXLJRJ5qShQkV0fKHQj2prJIP_6xIqHbztVhPUm6JekHnJEyx0_nFkyzdCjbHDEWnjuYnYx");
myHeaders.append("mode", "no-cors");
myHeaders.append("Access-Control-Allow-Origin", "*");

var requestOptions = {
  method: 'GET',
  headers: myHeaders
};

fetch("https://api.yelp.com/v3/businesses/search?location= San Jose, CA 95127&term=restaurants", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/


  
/*AJAX POKUSAJ*/
/*****var settings = {
    "url": "https://api.yelp.com/v3/businesses/search?location= San Jose, CA 95127&term=restaurants",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "mode": "no-cors",
      "Authorization": "Bearer 7Cnk_CMJpR7NPGQwPYM1NeFdiv6-GmWrwNszhXpwkDnslFs9Z-Yg69JQkQXLJRJ5qShQkV0fKHQj2prJIP_6xIqHbztVhPUm6JekHnJEyx0_nFkyzdCjbHDEWnjuYnYx"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });*/


/*
 let response = fetch('https://api.yelp.com/v3/businesses/search?location= San Jose, CA 95127&term=restaurants', { 
   method: 'GET', 
   headers: new Headers({
     'Authorization': 'Bearer ' & api_key
   }),
    mode: "no-cors"
 }).then((response) => {
  return response.json();
  
 }).then(data => {
  console.log(data);
});*/

/*let request = fetch('https://api.yelp.com/v3/businesses/search?location= San Jose, CA95127&term=restaurants', {
  method: 'GET', 
   headers: new Headers({
     'Authorization': 'Bearer ' + api_key}),
    mode:"no-cors"
}).then (response => response.json()).then(data => {
  console.log(data);
}); */

/*let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function (){
  if(this.readyState == 4 && this.status == 200){
    console.log(xhttp.responseText);
  }
  xhttp.open('GET','https://api.yelp.com/v3/businesses/search?location= San Jose, CA95127&term=restaurants', true);
  xhttp.setRequestHeader('Authorization', 'Bearer EbWhw8lU_Hf5pRHkuCP2wzOMiAxChYJxYAPwYfdk9gNTQb0joLdk4gc5oYQKcs3zZHIpFS8Jin7ijRBXlISNUoGbflOZxNcY6AyPg5fK44hzN4ravqs-5qFe8YfuYnYx');
  xhttp.send();
}*/

/*var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://api.yelp.com/v3/businesses/search?location= San Jose, CA95127&term=restaurants', false ); // false for synchronous request
    xmlHttp.setRequestHeader('Authorization', 'Bearer EbWhw8lU_Hf5pRHkuCP2wzOMiAxChYJxYAPwYfdk9gNTQb0joLdk4gc5oYQKcs3zZHIpFS8Jin7ijRBXlISNUoGbflOZxNcY6AyPg5fK44hzN4ravqs-5qFe8YfuYnYx');
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);*/



/*DRUGA API URL*/
let api = fetch('https://fakestoreapi.com/products').then((data) =>{
  return data.json();
}).then((completedata) =>{
  //console.log(completedata);

  let data1="";
  completedata.map((values) => {
    data1 +=` <a href=${values.image} target="_blank"><div class="card " category=${values.category}>
    <img src=${values.image} alt="#Name" style="width:50%">
    <h1 class="title" style="margin-left: 25%; margin-right: 25%;">${values.title}</h1>
    <hr>
    <p>
    <div class="cena">
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span> | 
    <span class="price">${values.price}</span>
    </div>
    </p>
    <p><a href=${values.image} target="_blank"><button id="addbtn">VIEW</button></a></p>
    </div></a></a>`
  });
  document.getElementById("rowCard").innerHTML = data1;

});




const sortCat = (button) => {
  
  let category = button.getAttribute('data-category');
  console.log(category);
  let catItems = document.querySelectorAll('.card');
  
  console.log(catItems);
  catItems.forEach((item) => {
    item.style.display = 'none';
  });

  if (category === 'all'){
    catItems.forEach((item) => {
      item.style.display= 'block';
    });
  } else {
    catItems.forEach((item) => {
      console.log(item.getAttribute('category'))
      // console.log(item)
      
      if (item.getAttribute('category').includes(category)){
        item.style.display= 'block';
      }
    });
  }

  // catItems.forEach((item) => {
  //   if (item.getAttribute('data-category').includes(category)){
  //     item.style.display = 'block';
  //   }
  // });
}
  /*Sekelton Animacija */


