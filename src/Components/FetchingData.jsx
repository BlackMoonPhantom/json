import React from "react";
import Loading from '../Components/Loading'
import useFetch from '../hooks/useFetch';

const FetchingData = () => {
  const { data, loading, error } = useFetch('posts');

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {data && data.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default FetchingData;
