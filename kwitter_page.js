var firebaseConfig = {
      apiKey: "AIzaSyBsRKWEuUoGv4VBWvrXngsRUgYoK_6LYZ4",
      authDomain: "kwitter-5590c.firebaseapp.com",
      databaseURL: "https://kwitter-5590c-default-rtdb.firebaseio.com",
      projectId: "kwitter-5590c",
      storageBucket: "kwitter-5590c.appspot.com",
      messagingSenderId: "1039282007925",
      appId: "1:1039282007925:web:2829936dafa36385d5ed3c"
    };

    firebase.initializeApp(firebaseConfig)
//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
 username=message_data['name']
 message=message_data['message']
 like=message_data['like']
 name_with_tag="<h4> "+username+"<img class='user_tick' src='tick.png'> </h4>";
 message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
 button_part_1="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 button_part_2="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button>";
 row=name_with_tag+message_with_tag+button_part_1+button_part_2;
 document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

     window.location="index.html"
 }


 function send(){
      msg=document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      })

 }


 function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes) +1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes
      })
 }