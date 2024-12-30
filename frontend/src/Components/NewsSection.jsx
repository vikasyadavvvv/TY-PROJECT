import React, { useState, useEffect } from 'react';

const NewsSection = () => {
  const [newsArticles, setNewsArticles] = useState([]); // State to store the news articles

  // Fetch news from backend
  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news'); // Adjust URL if needed
      if (response.ok) {
        const data = await response.json();
        setNewsArticles(data); // Update the state with the latest news
      } else {
        console.error('Failed to fetch news');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews(); // Fetch the news when the component is mounted
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <span className="text-2xl font-semibold font-serif border-red-500 bg-red-600 text-white">
          Latest News
        </span>
        <marquee behavior="scroll" className="font-serif text-lg" direction="left" scrollamount="5">
          {newsArticles.length > 0 ? (
            newsArticles.map((article, index) => (
              <span key={index} className="mx-4">
                <strong>{article.title}:</strong> {article.content} <em>({article.date})</em>
              </span>
            ))
          ) : (
            <span>No latest news available</span>
          )}
        </marquee>
      </div>
    </div>
  );
};

export default NewsSection;
