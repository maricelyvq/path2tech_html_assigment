
document.getElementById("mybutton").onclick = function(){
   let user = document.getElementById("fname").value;
   let lname = document.getElementById("lname").value;
   let userRole = document.getElementById("role").value;
   let u_mail = document.getElementById("email").value;

    if (user == "") {
     alert("Name must be filled out");
     return false;} //end if
    else{
      if (lname=="") {
         alert("Last Name must be filled out");
         return false;}
      else {
         if (userRole=="") {
            alert("Role must be filled out");
            return false;}
         else{
            if (u_mail=="" || u_mail=="@npower.net" ) {
               alert("Complete Email with a valid address");
               return false;} 
         }   

       }  //end else 2
      }//end else 1 
  
   let form = document.getElementById("myform");
   console.log(user);  
   document.getElementById("mylabel").innerHTML = "<tr><td>"+user+"</td> <td>"+lname+"</td><td>"+ userRole+"</td><td>"+u_mail+"</td></tr>"

   event.preventDefault();
   document.getElementById("fname").value="";
   document.getElementById("lname").value="";
   document.getElementById("role").value="";
   document.getElementById("email").value="@npower.net";
   
} 
