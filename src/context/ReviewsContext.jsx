import { createContext, useState, useEffect } from "react";

//const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

    }, []);


    const fetchReviews = async () => {  
        const response = await fetch('http://localhost:5000/reviews?_sort=id&_order=desc');
        const data = await response.json();
        setReviews(data);

    }

}