
function handleGetPost(Postid:string){
    try {
        console.log(Postid);
    
        fetch("shlomi/get-post", {
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

function renderPost(post:any){}