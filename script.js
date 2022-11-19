// question no 1
var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));

// question no 2 & 3
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);
    for (i = 0; i < result.length; i++) {
        console.log(result[i].name);
    }
    for (i = 0; i < result.length; i++) {
        console.log(result[i].region);
    }
    for (i = 0; i < result.length; i++) {
        console.log(result[i].subregion);
    }
    for (i = 0; i < result.length; i++) {
        console.log(result[i].population);
    }
}