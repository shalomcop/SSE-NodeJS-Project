import { Post } from "../API/posts/postModel";
import { User } from "../API/users/userModel";

function hendelAddUser(ev: any) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements)
    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    const newUser: any = { name, password };
    console.log(newUser)
    
    //send to server:
    fetch("/add-user", {
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

function handleLogin(ev: any): void {
  try {
    ev.preventDefault();
    console.log(ev.target.elements)
    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    
    const newUser: any = { name, password };

      
      fetch("/login", {
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
          if (data.error){
            alert(data.error);
          }
          else {
            window.location.href = "homepage.html";
          }
        })
        .catch((error) => {
          console.error(error);
        });
  } catch (error) {
    console.error(error);
  }
}

function handleAddPost (ev: any) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements)
    const title = ev.target.elements.title.value;
    const description = ev.target.elements.description.value;
    const mainPicture = ev.target.elements.mainPicture.value;
    const post = ev.target.elements.post.value;
    const metaAuthorId = ev.target.elements.metaAuthorId.value;
    const metaDate = ev.target.elements.metaDate.value;

    if (!title) throw new Error("No title");
    if (!description) throw new Error("No description");
    if (!mainPicture) throw new Error ("No main picture")
    if (!post) throw new Error ("NO post");
    if (!metaAuthorId) throw new Error ("No Author")
    if (!metaDate) throw new Error ("no date");
    
    const newPost: any = { title, description, mainPicture, post, metaAuthorId, metaDate };
    console.log(newPost)
    
    //send to server:
    fetch("/add-post", {
      method: "POST",
      headers: {
          Accept: "application/json",
                  "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data)
        window.location.href = "homepage.html";
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}



function handleGetPosts() {
  console.log("test");
  try {
    fetch("/get-posts")
      .then((res) => res.json())
      .then(({ posts }) => {
        try {
          if (!posts) throw new Error("didnt find posts");
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

function handleGetPost(Postid:string){
  try {
      console.log(Postid);
  
      fetch("/get-post", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Postid}),
      })
        .then((res) => res.json())
        .then(({ post }) => {
          renderPost(post);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }  
}

function renderPosts(posts: Array<Post>) {
  try {
    if (!posts) throw new Error("No users");

    const html = ""
    posts.map((post) => {
        return renderPost(post);
      })
      .join(" ");
    const postsElement = document.querySelector("#posts");
    if (!postsElement) throw new Error("coundnt find users element on DOM");

    postsElement.innerHTML = html;
  } catch (error) {
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

function renderPost(post){
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
          return `
          <div class="boxMain__container__boxes roommateDiv roommatePage__container">
          <img class="boxMain__container__boxes__img"
           src= ${post.mainPicture} alt="roommate Img">
          <h4>${post.title}</h4>
          <p>Area: ${post.description}</p>
          <p>Rooms: up to ${post.metaAuthorId}</p>
          <p>floor: up to ${post.metaDate}</p>
          </div>
          `;
        // })
        // .join(" ");
      // console.log(`html ${html}`);
      // const element = document.querySelector(".roommate");
      // if (!element) throw new Error("Couldnt find element in the DOM");
      // element.innerHTML = html;

    } catch (error) {
      console.error(error);
    }
}