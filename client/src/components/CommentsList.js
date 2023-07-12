import React from 'react'

const ComponentsList = ({ comments }) => {
    if (!comments || !Array.isArray(comments)) {
      return <p>No comments available.</p>;
    }
  
    return (
      <>
        <h3 className='sm:text-2xl text-xl fint-bold my-6 text-gray-900'>
          Comments:
        </h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h4 className='text-xl font-bold'>{comment.username}</h4>
            <p className='mt-1 mb-4'>{comment.text}</p>
          </div>
        ))}
      </>
    );
  };
  
export default ComponentsList