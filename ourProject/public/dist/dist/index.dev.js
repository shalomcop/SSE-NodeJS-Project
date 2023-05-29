"use strict";

exports.__esModule = true;

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
      alert(data.error);
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleAddPost(ev) {
  try {
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log("xxxxx");
    console.log(ev.target.elements);
    var title = ev.target.elements.title.value;
    var description = ev.target.elements.description.value;
    var mainPicture = ev.target.elements.mainPicture.value;
    var mainText = ev.target.elements.mainText.value;
    var metaAuthorId = ev.target.elements.metaAuthorId.value;
    var metaDate = ev.target.elements.metaDate.value;
    if (!title) throw new Error("No title");
    if (!description) throw new Error("No description");
    if (!mainPicture) throw new Error("No main picture");
    if (!mainText) throw new Error("NO main test");
    if (!metaAuthorId) throw new Error("No Author");
    if (!metaDate) throw new Error("no date");
    var newPost = {
      title: title,
      description: description,
      mainPicture: mainPicture,
      mainText: mainText,
      metaAuthorId: metaAuthorId,
      metaDate: metaDate
    };
    console.log(newPost); //send to server:

    fetch("/add-post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
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

function handleGetPosts() {
  console.log("test");

  try {
    fetch("/getPosts").then(function (res) {
      return res.json();
    }).then(function (_a) {
      var posts = _a.posts;

      try {
        if (!posts) throw new Error("didnt find users");
        console.log(posts);
        renderPosts(posts);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function handleGetPost(Postid) {
  try {
    console.log(Postid);
    fetch("/get-post", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Postid: Postid
      })
    }).then(function (res) {
      return res.json();
    }).then(function (_a) {
      var post = _a.post;
      renderPost(post);
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function renderPosts(posts) {
  try {
    if (!posts) throw new Error("No users");
    var html = "";
    posts.map(function (post) {
      return renderPost(post);
    }).join(" ");
    var postsElement = document.querySelector("#posts");
    if (!postsElement) throw new Error("coundnt find users element on DOM");
    postsElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderPost(post) {
  try {
    console.log(post);
    return "<div class=\"PostCard\">\n              " + post.title + "\n                          \n            </div>";
  } catch (error) {
    console.error(error);
    return null;
  }
}