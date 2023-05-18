interface User {
    name: string;
    src: string;
    uid?: string;
    _id?: string;
  }
  
  function handleGetUsers() {
    console.log("test");
    try {
      fetch("/api/users/get-users")
        .then((res) => res.json())
        .then(({ users }) => {
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
  
  function renderUsers(users: Array<User>) {
    try {
      if (!users) throw new Error("No users");
  
      const html = users
        .map((user) => {
          return renderUser(user);
        })
        .join(" ");
      const usersElement = document.querySelector("#users");
      if (!usersElement) throw new Error("coundnt find users element on DOM");
  
      usersElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderUser(user: User) {
    try {
      console.log(user);
  
      return `<div class="userCard">
              <img src="${user.src}" alt="user name is ${user.name}">
              <p contenteditable oninput="handleUserNameUpdate(event, '${user.uid}')">${user.name}</p>
              <button onclick='handleDeleteUser("${user._id}")'>DELETE</button>
              <select defaultValue='student' onchange='handleUpdateUserType(event, "${user._id}")'>
                <option value='student'>Student</option>
                <option value='teacher'>Teacher</option>
              </select>
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  function handleUserNameUpdate(ev: any, uid: string) {
    try {
      console.log(uid);
      const name = ev.target.textContent;
      fetch("/api/users/update-user-name", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, uid }),
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleAddUser(ev: any) {
    try {
      ev.preventDefault();
      console.log(ev.target.elements)
      const name = ev.target.elements.name.value;
      const password = ev.target.elements.password.value;
      if (!name) throw new Error("No name");
      if (!password) throw new Error("No Password");
      const newUser: any = { name, password };
  
      //send to server:
      fetch("/api/users/add-user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleLogin(ev: any) {
    try {
      ev.preventDefault();
      console.log(ev.target.elements)
      const name = ev.target.elements.name.value;
      const password = ev.target.elements.password.value;
      if (!name) throw new Error("No name");
      if (!password) throw new Error("No Password");
      const newUser: any = { name, password };
  
      //send to server:
      fetch("/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleDeleteUser(_id: string) {
    try {
      console.log(_id);
  
      fetch("/api/users/delete-user", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      })
        .then((res) => res.json())
        .then(({ users }) => {
          renderUsers(users);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleUpdateUserType(ev: any, userId: string) {
    try {
      const userType = ev.target.value;
      console.log(userType)
  
      fetch("/api/users/update-user-type", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, userType }),
      })
      .then((res) => res.json())
        .then(({ users }) => {
          renderUsers(users);
        })
        .catch((error) => {
          console.error(error);
        });;
    } catch (error) {
      console.error(error);
    }
  }
  