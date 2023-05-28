// interface User {
//   name: string;
//   password: string;
// }

// tinymce.init({
    //   selector: '#myTextarea'
    // });

function handleGetUsers() {
    console.log("test");
    try {
      fetch("/get-users")
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
  
      const html = ""
      users.map((user) => {
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
                ${user.name}            
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
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