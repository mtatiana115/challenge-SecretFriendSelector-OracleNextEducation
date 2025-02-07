let friends = [];

//Capture the input field value
function addFriend() {
    let friendName = document.getElementById("friend").value.trim();

    //validate the empty input
    if (friendName === "") {
        alert("Please enter a friend name");
        return;
    }
    //add the list of friends
    friends.push(friendName);
    //update and clear the input field
    updateFriendsList();
    document.getElementById("friend").value = "";
}

function updateFriendsList() {
    let friendList = document.getElementById("friendList");
    friendList.innerHTML = "";
    friends.forEach(function (friend) {
        let li = document.createElement("li");
        li.innerText = friend;
        friendList.appendChild(li);
    });
}

//Sort the list of friends
function drawSecretFriend() {

    if (friends.length === 0) {
        alert("Please add at least one friend");
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends.length);
    let secretFriend = friends[randomIndex];
    friends.splice(randomIndex, 1);

    updateFriendsList();
    document.getElementById("result").innerHTML = secretFriend;
}

