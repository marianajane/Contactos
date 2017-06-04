  $(document).ready(function(){

    $(".modal").modal();


    $("#add").click(function() {
    
    var blankName = $(".name").val();
    var blankPhone = $(".phone").val();
    var blankEmail = $(".email").val();
    
    var newName = $("<p></p>");
    var newPhone = $("<p></p>");
    var newEmail = $("<p></p>");
    var containerList = $("#contactList");

    var contact = $("<li class='collection-item avatar'</li>");
    var image = $("<img class='circle' src='assets/img/avatar.png'>");
    var star = $("<a class='secondary-content'<i class='material-icons'>grade</i></a>");
    var formatList = $(".collection");

    formatList.append(contact);
    contact.append(image);
    contact.append(star);
    contact.append(newName);
    newName.text(blankName);
    contact.append(newPhone);
    newPhone.text(blankPhone);
    contact.append(newEmail);
    newEmail.text(blankEmail);
    containerList.append(formatList);


    console.log(blankName);
  });

    $("#delete").click(function(){
      containerList.remove();
    });
});

