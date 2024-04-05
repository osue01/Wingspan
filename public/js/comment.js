const commentFormEl = document.querySelector("#commentForm")
const commentFormHandler = async (event) => {
event.preventDefault();

const comment = document.querySelector('#comment-text').value;
const postId = document.querySelector('#postId').value;
 // Make a POST request to the backend to submit the comment
 const response = await fetch(`/api/posts/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment_text: comment }),
  });

  if (response.ok) {
    // Handle successful comment submission
    console.log('Comment submitted successfully', response); 
  } else {
    // Handle error in comment submission
    console.error('Failed to submit comment');
  }
}
commentFormEl.addEventListener("submit", commentFormHandler)
