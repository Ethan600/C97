
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAjAIw8_TMpVq04bMb4YlqFlQiS_Ypps00",
      authDomain: "kwitter-a2193.firebaseapp.com",
      databaseURL: "https://kwitter-a2193-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2193",
      storageBucket: "kwitter-a2193.appspot.com",
      messagingSenderId: "716685397260",
      appId: "1:716685397260:web:f866ee88c40d1dabbb4d29"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
    });
  });

}

getData();

function redirect_to_roomname(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
