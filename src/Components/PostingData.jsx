import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from '../Components/Loading'
import {useFetch} from '../hooks/useFetch';
import {useForm} from '../hooks/useForm';

function PostingData() {
    
    const initialValues = { title: '', body: '', userId: 1 };
  
    const onSubmit = (postData) => {
      return fetch('/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
        .then(response => response.json());
    }
  
    const { values, response, handleChange, handleSubmit, handleReset } = useForm(initialValues, onSubmit);
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={values.body}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {response && (
          <div>
            <p>Response:</p>
            <p>Title: {response.title}</p>
            <p>Body: {response.body}</p>
            <button onClick={handleReset}>Go Back</button>
          </div>
        )}
      </div>
    );
};
  
export default PostingData;