var submit = document.getElementById("submit");

//Onclick
submit.addEventListener("click", function() {
		//Input from user (subject)
		var keyword = document.getElementById("keyword"); 
    console.log(keyword.value);
    
    if (keyword.value === ""){
    	getCourses(keyword.value);
    } else {
      
      console.log("meow");
      var courseName = document.getElementById("courseName");
      var courseTitle = document.getElementById("courseTitle");
      var courseDes = document.getElementById("courseDes");
      
      courseName.textContent = "Input a valid subject";
      courseTitle.textContent = "";
      courseDes.textContent = "";
      
    }
    
    center.style.visibility='hidden';
    result.style.visibility='visible';
    
  }, true);

tryagain.addEventListener("click", function() {
		//Input from user (subject)
    center.style.visibility='visible'
    result.style.visibility='hidden';
    
  }, true);


function getCourses(courseCode){
  var courseAPI = "https://api.uwaterloo.ca/v2/courses/" + courseCode + ".json?key=c8a3cf45a8addd718daa0a5877da23cc";
  $.getJSON(courseAPI, function (json) {
  		
      var undergrad = 0;
      while(json.data[undergrad].academic_level == "undergraduate" && undergrad < json.data.length){
      	undergrad++;
      }
      var random = Math.floor((Math.random()*undergrad));
      
      //Output values
      var courseName = document.getElementById("courseName");
     var courseTitle = document.getElementById("courseTitle");
      var courseDes = document.getElementById("courseDes");
      
      courseName.textContent = courseCode.toUpperCase() + "" + json.data[random].catalog_number;
      courseTitle.textContent = json.data[random].title;
      courseDes.textContent = json.data[random].description;
      
  });
  
}
