
function homeRedirect(){
    location.href = "home.html";
}

function contact_us(){
  location.href="contact_us.html";
}


function about(){
    let out = "<div id='about_para' style='margin-right:250px '><h1 style='background-color:gray  '  id='first-heading'>Skills are the key to unlocking potential</h1><p id='first-content'>Whether you want to learn a new skill, train your teams, or share what you know with the world, youre in the right place. As a leader in online learning, were here to help you achieve your goals and transform your life.<p></br><h2  style='background-color:gray' id='second-heading'>Work with us At LearningHub</h2><div id='second-content'>were all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</div></br><br><h3  style='background-color:gray' id='third-heading'>See our research</h3><div id='third-content'>Were committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.</div></div>";

    
    $(document).ready(function(){
        $("#first-heading").click(function(){
          $("#first-content").slideToggle("slow");
        });
        
      $("#second-heading").click(function(){
        $("#second-content ").slideToggle("slow");
      });
      $("#third-heading").click(function(){
        $("#third-content").slideToggle("slow");
      });
    });
    document.getElementById("main-container").innerHTML = out;
}
