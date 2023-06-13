import React from 'react';
import ReactMarkdown from 'react-markdown';

const ValuesPage = () => {
    const markdownContent = 

` 
- First Principles Thinking
`;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default ValuesPage
  