"use strict";
exports.__esModule = true;
// let value:any = ""
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// value = urlParams.get('value');
// console.log(value)
// if (value == handleGetPosts) {
//   handleGetPosts()
// }
function hendelAddUser(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No Password");
        var newUser = { name: name, password: password };
        console.log(newUser);
        //send to server:
        fetch("/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleLogin(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No Password");
        var newUser = { name: name, password: password };
        fetch("/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            if (data.error) {
                alert(data.error);
            }
            else {
                window.location.href = "/homepage.html";
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddPost(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var title = ev.target.elements.title.value;
        var description = ev.target.elements.description.value;
        var mainPicture = ev.target.elements.mainPicture.value;
        var post = ev.target.elements.post.value;
        var metaAuthorId = ev.target.elements.metaAuthorId.value;
        var metaDate = ev.target.elements.metaDate.value;
        if (!title)
            throw new Error("No title");
        if (!description)
            throw new Error("No description");
        if (!mainPicture)
            throw new Error("No main picture");
        if (!post)
            throw new Error("NO post");
        if (!metaAuthorId)
            throw new Error("No Author");
        if (!metaDate)
            throw new Error("no date");
        var newPost = { title: title, description: description, mainPicture: mainPicture, post: post, metaAuthorId: metaAuthorId, metaDate: metaDate };
        console.log(newPost);
        //send to server:
        fetch("/add-post", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            if (data)
                // window.location.href = "homepage.html";
                handleGetPosts();
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetPosts() {
    console.log("test");
    try {
        fetch("/get-posts")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var posts = _a.posts;
            try {
                if (!posts)
                    throw new Error("didnt find posts");
                console.log(posts);
                renderPosts(posts);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
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
            body: JSON.stringify({ Postid: Postid })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var post = _a.post;
            renderPost(post);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderPosts(posts) {
    console.log("test2");
    try {
        if (!posts)
            throw new Error("No users");
        var html = "";
        posts.map(function (post) {
            return renderPost(post);
        })
            .join(" ");
        var postsElement = document.querySelector("#posts");
        if (!postsElement)
            throw new Error("coundnt find users element on DOM");
        console.log(posts);
        postsElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// function renderPost(post) {
//   try {
//     console.log(post);
//     return `<div class="PostCard">
//               ${post.title}
//             </div>`;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
function renderPost(post) {
    console.log("test3");
    try {
        if (!post)
            throw new Error("NO post");
        // let tempPost:Post[] = []
        // console.log(`indexStart ${indexStart} indexEnd ${indexEnd}`);
        // for(let i = indexStart; i < indexEnd; i++){
        //     tempUserProfiles.push(users[i])
        //   }
        // console.log('tempUserProfiles');
        // console.log(tempUserProfiles);
        // const html = tempUserProfiles
        //  .map((users) => {
        console.log(post.mainPicture);
        return "\n          <div class=\"boxMain__container__boxes roommateDiv roommatePage__container\">\n          <img class=\"boxMain__container__boxes__img\"\n           src= " + post.mainPicture + " alt=\"roommate Img\">\n          <h4>" + post.title + "</h4>\n          <p>Area: " + post.description + "</p>\n          <p>Rooms: up to " + post.metaAuthorId + "</p>\n          <p>floor: up to " + post.metaDate + "</p>\n          </div>\n          ";
        // })
        // .join(" ");
        // console.log(`html ${html}`);
        // const element = document.querySelector(".roommate");
        // if (!element) throw new Error("Couldnt find element in the DOM");
        // element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
