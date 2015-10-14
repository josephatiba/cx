var getJSON = function(url, successHandler, errorHandler) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status == 200) {
      successHandler && successHandler(xhr.response);
    } else {
      errorHandler && errorHandler(status);
    }
  };
  xhr.send();
};

var collection1;
var organizedArray = [];
var elem = document.getElementById("container");
var newDiv;
var newLink;
var newTitle;
var newImg;
var organizer;

getJSON('https://www.kimonolabs.com/api/8vxwsdyg?apikey=pyYBq6V9vfETkm5a623NvgQ65PnWAzuR', function(data) {
  var msnry;
  console.log(data.results.collection1);
  collection1 = data.results.collection1;

  organizer = function(array) {
    for(var i = 0; i < array.length; i++){
      organizedArray.push([array[i]["post-picture"]["src"], array[i]["property4"]["href"], array[i]["property4"]["text"]]);
      newDiv = document.createElement("div");
      newLink = document.createElement("a");
      newTitle = document.createTextNode(organizedArray[i][2]);
      newImg = document.createElement("img");

      
      
      newDiv.appendChild(newLink);
      newLink.appendChild(newImg);
      

      newDiv.className = "grid-item";
      newLink.className = "post-index-link";
      newImg.className = "post-index-tile";
      newTitle.className = "main-page-post-title";

      newLink.href = organizedArray[i][1];
      newLink.target = "_blank";
      newImg.src = organizedArray[i][0];
      newImg.alt = organizedArray[i][2];
      
      elem.appendChild(newDiv);
  
    }
      console.log(organizedArray);

      return organizedArray;
  };

 
  organizer(collection1);


  msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 315
  });

}, function(status) {
  alert('Something went wrong.');
});




