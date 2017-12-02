$(document).ready(function() {
	var submit = document.getElementById("submit");

//Onclick
submit.addEventListener("click", function() {
		//Input from user (subject)
		var keyword = document.getElementById("keyword");
    
    if (keyword.value === ""){
      var courseName = document.getElementById("courseName");
      var courseTitle = document.getElementById("courseTitle");
      var courseDes = document.getElementById("courseDes");
      
      courseName.textContent = "Nothing found...";
      courseTitle.textContent = "Input a valid subject";
      courseDes.textContent = "";
    } else {
    	getCourses(keyword.value);
    }
    
    center.style.visibility='hidden';
    result.style.visibility='visible';
    
  }, true);

tryagain.addEventListener("click", function() {
     var courseName = document.getElementById("courseName");
     var courseTitle = document.getElementById("courseTitle");
     var courseDes = document.getElementById("courseDes");
      	
    courseName.textContent = "";
    courseTitle.textContent = "";
   	courseDes.textContent = "";
    center.style.visibility='visible'
    result.style.visibility='hidden';
    
  }, true);

$("#keyword").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit").click();
    }
});
function getCourses(courseCode){
  var courseAPI = "https://api.uwaterloo.ca/v2/courses/" + courseCode + ".json?key=c8a3cf45a8addd718daa0a5877da23cc";
  $.getJSON(courseAPI, function (json) {
  
      var courseName = document.getElementById("courseName");
      var courseTitle = document.getElementById("courseTitle");
      var courseDes = document.getElementById("courseDes");
  
      if (json.data.length == 0) {
      	
        courseName.textContent = "Nothing found...";
      	courseTitle.textContent = "Input a valid subject";
      	courseDes.textContent = "";
      
      } else {
      
      var undergrad = 0;
      
      while(json.data[undergrad].academic_level == "undergraduate" && undergrad < json.data.length){
      	undergrad++;
      }
      var random = Math.floor((Math.random()*undergrad));
      
      courseName.textContent = courseCode.toUpperCase() + "" + json.data[random].catalog_number;
      courseTitle.textContent = json.data[random].title;
      courseDes.textContent = json.data[random].description;
      }
  });
  
}
});
