//for first flex

var data=[
    {
        firstpara:"All participants will receive a Certificate of Participation."
}
];


var allElements = document.getElementsByClassName("typeing");
for (var j = 0; j < allElements.length; j++) 
{
  var currentElementId = allElements[j].id;
//   console.log(currentElementId);
  var currentElementIdContent = data[0][currentElementId];
//   console.log(currentElementIdContent);
  var element = document.getElementById(currentElementId);
//   console.log(element);
  var devTypeText = currentElementIdContent;
//   console.log(devTypeText);


  // type code
  var i = 0, isTag, text;
  (function type() {
    text = devTypeText.slice(0, ++i);
    if (text === devTypeText) return;
    element.innerHTML = text;
    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;
    if (isTag) return type();
    setTimeout(type, 60);
  })();
}


//for second flex
var data1=[
    {
        secondpara:"The top 3 teams will be featured on our website and social media platforms."
}
];


var allElements1 = document.getElementsByClassName("typwing2");
for (var j = 0; j < allElements1.length; j++) 
{
  var currentElementId1 = allElements1[j].id;
//   console.log(currentElementId);
  var currentElementIdContent1 = data1[0][currentElementId1];
//   console.log(currentElementIdContent);
  var element1 = document.getElementById(currentElementId1);
//   console.log(element);
  var devTypeText1 = currentElementIdContent1;
//   console.log(devTypeText);


  // type code
  var i = 0, isTag1, text1;
  (function type1() {
    text1 = devTypeText1.slice(0, ++i);
    if (text1 === devTypeText1) return;
    element1.innerHTML = text1;
    var char1 = text1.slice(-1);
    if (char1 === "<") isTag1 = true;
    if (char1 === ">") isTag1 = false;
    if (isTag1) return type1();
    setTimeout(type1, 60);
  })();
}