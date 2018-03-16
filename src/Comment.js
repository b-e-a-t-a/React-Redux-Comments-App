import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, addComment}) => 
	<li>
		{text} <span>votes: {votes}</span> 
		<button onClick={() => thumbUpComment(id)}>Thumb Up</button>
		<button onClick={() => thumbDownComment(id)}>Thumb Down</button>
		<button onClick={() => removeComment(id)}>Remove</button>
		<button onClick={() => addComment(text)}>Add comment</button>
	</li>;

export default Comment;