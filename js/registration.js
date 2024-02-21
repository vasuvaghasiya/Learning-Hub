$(document).ready(function(){
    $("#submit").click(function () {
      var validation_holder = 0;
      var email = $("form#login-form input[name='email']").val();
      var email_regex = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // reg ex email check

      var password = $("form#register_form input[name='password']").val();

      var city = $("form#register_form input[name='city']");

      if (email == "") {
        $("span.val_email")
          .html("Email ID is required.")
          .addClass("validate");
        validation_holder = 1;
      } else {
        if (!email_regex.test(email)) {
          // if invalid email

          $("span.val_email").html("Invalid Email!").addClass("validate");

          validation_holder = 1;
        } else {
          $("span.val_email").html("");
        }
      }

      if (password == "") {
        $("span.val_pass")
          .html("Password is required.")
          .addClass("validate");

        validation_holder = 1;
      } else {
        $("span.val_pass").html("");
      }

      if (city == "") {
        $("span.val_city").html("city is required.").addClass("validate");
        validation_holder = 1;
      } else {
        $("span.val_city").html("");
      }

      if (validation_holder == 1) {
        // if have a field is blank, return false
        $("p.validate_msg").slideDown("slow");
        return false;
      }
      if (validation_holder == 0) {
        // else return true
        alert(email + ", You have registered successfully",location.href="home.html");
      }
    });
  });
