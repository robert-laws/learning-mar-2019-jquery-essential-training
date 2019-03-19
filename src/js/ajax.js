// ajax


function getData() {
  $.ajax({
    url: "assets/data/info.txt",
    type: "GET",
    dataType: "text",
    success: successFunction,
    error: errorFunction,
    complete: function(xhr, status) {
      console.log("completed ajax request");
    }
  });
}

$(document).ready(function() {
  getData();
});

function successFunction(res) {
  $(".ajax-one div p").append(res);
}

function errorFunction(xhr, status, strError) {
  console.log("error...");
}

// convenience functions
$(".ajax-two div").load("assets/data/info.html #p2");

// working with xml and ajax data

// xml
function getXMLData() {
  $.get("assets/data/person.xml", function(res) {
    var name = res.getElementsByTagName("name")[0];
    var title = res.getElementsByTagName("title")[0];
    var nameVal = name.firstChild.nodeValue;
    var titleVal = title.firstChild.nodeValue;
    $(".ajax-three div").append(nameVal + " - " + titleVal);
  });
}

$(document).ready(function() {
  getXMLData();
});

// json
$(document).ready(function() {
  $.getJSON("assets/data/people.json")
    .done(function(namesData) {
      namesData.names.forEach(function(elem) {
        $(".ajax-four div").append(elem.first_name + " ");
        $(".ajax-four div").append(elem.last_name + " - ");
        $(".ajax-four div").append(elem.title);
        $(".ajax-four div").append("<hr>");
      });
    });
})