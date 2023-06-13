import React from 'react';
import ReactMarkdown from 'react-markdown';

const NotesPage = () => {
    const markdownContent = 

` 
This page is a public collection of short and intriguing thoughts, facts and content that I come across the internet. 

It's equally a way for me to "record-keep" uncategorized interesting things I want to remember, 
as it is a way to try and make conversation with random strangers (like you) that stumble onto this page! 

- Here
- Here

  `;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default NotesPage
  