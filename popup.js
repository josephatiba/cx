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

getJSON('https://www.kimonolabs.com/api/8vxwsdyg?apikey=pyYBq6V9vfETkm5a623NvgQ65PnWAzuR', function(data) {
  console.log(data.results.collection1);
  collection1 = data.results.collection1;

  var organizer = function(array) {
    for(var i = 0; i < array.length; i++){
      organizedArray.push([array[i]["post-picture"]["src"], array[i]["post-picture"]["href"], array[i]["property4"]["text"]]);
      var newDiv = document.createElement("div");
      var newTitle = document.createTextNode(organizedArray[i][2]);
      newDiv.appendChild(newTitle);
      var currentDiv = document.getElementById("div1"); 
      document.body.insertBefore(newDiv, currentDiv); 
    }
      console.log(organizedArray);

      return organizedArray;
  };



  organizer(collection1);

}, function(status) {
  alert('Something went wrong.');
});

// var imageAdder = function(array) {
//   for(var i = 0; i < array.length; i++) {
//     var newDiv = document.createElement("div");
//     var newImg = document.createElement("img");
//     var newTitle = document.createTextNode(array[i][2]);
//     newDiv.appendChild(newTitle);
//     var currentTag = document.getElementById("theH1");
//     document.body.insertBefore(newDiv, currentTag);
//     console.log("yup");
//   }
// };

console.log(organizedArray);


// document.body.appendChild(organizedArray[0][0]);


