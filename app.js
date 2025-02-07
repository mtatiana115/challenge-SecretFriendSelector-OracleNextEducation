let friends = [];

//Capture the input field value
function addFriend() {
    let friendName = document.getElementById("amigo").value.trim();

    //validate the empty input
    if (friendName === "") {
        alert("Please enter a friend name");
        return;
    }
    //ass the list of friends
    friends.push(friendName);
    //update and clear the input field
    updateFriendsList();
    document.getElementById("amigo").value = "";
}

function updateFriendsList() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    friends.forEach(function (friend) {
        let li = document.createElement("li");
        li.innerText = friend;
        listaAmigos.appendChild(li);
    });
}