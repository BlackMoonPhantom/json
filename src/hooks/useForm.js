import { useState, useEffect } from "react";
import axios from "axios";

// Define a custom hook to manage the form state
function useForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);
    const [response, setResponse] = useState(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(values)
        .then(data => {
          setResponse(data);
          setValues(initialValues);
        })
        .catch(error => console.error(error));
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues(prevValues => ({
        ...prevValues,
        [name]: value
      }));
    }

    const handleReset = () => {
      setValues(initialValues);
      setResponse(null);
    }

    return {
      values,
      response,
      handleChange,
      handleSubmit,
      handleReset
    };
  }