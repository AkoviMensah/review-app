import { createContext, useState, useEffect } from 'react';
import api from './api';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false, });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(api + `?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch(api + '/new', {
      method: 'POST',
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  }

  const deleteFeedback = async (id) => {
    if (window.confirm('Click Ok to Delete')) {
      await fetch(api + `/delete/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(api + `/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? data : item)));

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;