const loadComments = () => {

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayUsers(data))

}

const displayUsers = comments => {
    // console.log(comments);

    const comments20 = comments.slice(0, 20);

    console.log(comments20);

    const commentContainer = document.getElementById('comment-container');


    comments20.forEach(comment => {

        // console.log(comment.email);

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('col');

        commentDiv.innerHTML = `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Name: ${comment.name}</h5>
    <h5 class="card-title">Email: ${comment.email}</h5>
    <h5 class="card-title">Postid: ${comment.postId}</h5>
    <h5 class="card-title">Id: ${comment.id}</h5>

    <p class="card-text">${comment.body.slice(0, 80)}</p>
    <button onclick="loadpost(${comment.postId})" class="btn btn-primary">Go to Post</button>
  </div>
</div>
        `;

        commentContainer.appendChild(commentDiv);
    });



}

const loadpost = postid => {
    // console.log(postid);

    const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => diplayLoadPost(data))


}

const diplayLoadPost = post => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ``;
    const postdiv = document.createElement('div');
    postdiv.classList.add('card');
    postdiv.innerHTML = `

  <div class="card-body">
    <h5 class="card-title">Name: ${post.title}</h5>
    <h5 class="card-title">Userid: ${post.userId}</h5>
    <h5 class="card-title">Id: ${post.id}</h5>

    <p class="card-text">Body: ${post.body.slice(0, 80)}</p>
  </div>

`;
    postContainer.appendChild(postdiv);

}

loadComments();