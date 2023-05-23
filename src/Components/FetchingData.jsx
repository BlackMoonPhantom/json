import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from '../Components/Loading'
import useFetch  from '../hooks/useFetch';

//Display a list of posts
const FetchingData = () => {
  const {data, loading, error}=useFetch('posts');
  
  if (error){
    return <p>Error: {error}</p>;
  }
  
  if(loading){
    return <Loading/>
  }
  return (
    <>
      {data.posts && (
        data.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
        );
      })
    )}
    </>
  );

};

export default FetchingData;
