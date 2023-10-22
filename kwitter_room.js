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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

 function addRoom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html";
 }
 function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html";
 }

 
 function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

     window.location="index.html"
 }