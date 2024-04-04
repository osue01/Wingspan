const comment = document.querySelector('#comment-text').value;
 // Make a POST request to the backend to submit the comment
 const response = await fetch('/api/post/:id/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: commentText }),
  });

  if (response.ok) {
    // Handle successful comment submission
    console.log('Comment submitted successfully');
  } else {
    // Handle error in comment submission
    console.error('Failed to submit comment');
  }
