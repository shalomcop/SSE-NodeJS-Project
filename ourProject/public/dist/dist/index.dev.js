"use strict";

function handleGetUsers() {
  console.log("test");

  try {
    fetch("/get-users").then(function (res) {
      return res.json();
    }).then(function (_a) {
      var users = _a.users;

      try {
        if (!users) throw new Error("didnt find users");
        console.log(users);
        renderUsers(users);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function renderUsers(users) {
  try {
    if (!users) throw new Error("No users");
    var html = "";
    users.map(function (user) {
      return renderUser(user);
    }).join(" ");
    var usersElement = document.querySelector("#users");
    if (!usersElement) throw new Error("coundnt find users element on DOM");
    usersElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderUser(user) {
  try {
    console.log(user);
    return "<div class=\"userCard\">\n              " + user.name + "            \n            </div>";
  } catch (error) {
    console.error(error);
    return null;
  }
}

function handleUserNameUpdate(ev, uid) {
  try {
    console.log(uid);
    var name = ev.target.textContent;
    fetch("/api/users/update-user-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        uid: uid
      })
    });
  } catch (error) {
    console.error(error);
  }
}

function hendelAddUser(ev) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements);
    var name = ev.target.elements.name.value;
    var password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    var newUser = {
      name: name,
      password: password
    };
    console.log(newUser); //send to server:

    fetch("/add-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleLogin(ev) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements);
    var name = ev.target.elements.name.value;
    var password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    var newUser = {
      name: name,
      password: password
    };
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleDeleteUser(_id) {
  try {
    console.log(_id);
    fetch("/api/users/delete-user", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: _id
      })
    }).then(function (res) {
      return res.json();
    }).then(function (_a) {
      var users = _a.users;
      renderUsers(users);
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateUserType(ev, userId) {
  try {
    var userType = ev.target.value;
    console.log(userType);
    fetch("/api/users/update-user-type", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        userType: userType
      })
    }).then(function (res) {
      return res.json();
    }).then(function (_a) {
      var users = _a.users;
      renderUsers(users);
    })["catch"](function (error) {
      console.error(error);
    });
    ;
  } catch (error) {
    console.error(error);
  }
}