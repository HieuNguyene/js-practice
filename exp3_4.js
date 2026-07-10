function randomDelay(){
    return Math.floor(Math.random()*2000)+1000;
}//delay random 1-3s 

function fetchUser(){
    return new Promise((resolve)=>{
        const delay = randomDelay();

        setTimeout(()=>{
            resolve({
                id : 1,
                name: 'Hieu'
            });
        },delay);
    });
}

function fetchPost(){
    return new Promise((resolve)=>{
        const delay = randomDelay();

        setTimeout(()=>{
            resolve([
                "Post 1",
                "Post 2 ",
                "Post 3"
            ]);
        },delay);
    });
}

function fetchComments(){
    return new Promise((resolve)=>{
        const delay = randomDelay();

        setTimeout(()=>{
            resolve([
                "Comment 1",
                "Comment 2",
                "Comment 3"
            ]);
        },delay);
    });
}


Promise.all([
    fetchUser(),
    fetchPost(),
    fetchComments() 
])
.then(([user,post,comment])=>{
    console.log("User:",user);
    console.log("Post: " ,post);
    console.log("Comment: ", comment);

})