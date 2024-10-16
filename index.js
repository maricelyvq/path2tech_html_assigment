
document.getElementById("mybutton").onclick = function(){

   let user = document.getElementById("fname").value;
   let lname = document.getElementById("lname").value;
   let userRole = document.getElementById("role").value;
   let u_mail = document.getElementById("email").value;
   let form = document.getElementById("myform");
   console.log(user);

   document.getElementById("mylabel").innerHTML = "<td>"+user+"</td> <td>"+lname+"</td><td>"+ userRole+"</td><td>"+u_mail+"</td></tr>"
   
   event.preventDefault();
   form.fname.value = "";
   form.lname.value = "";
   form.role.value = "";
   form.email.value = "";
  
} 
