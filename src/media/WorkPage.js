import React from 'react';
import ReactMarkdown from 'react-markdown';

const WorkPage = () => {
    const markdownContent = 

` 
- **SWE Intern @ [Float Financial](https://www.floatcard.com)**   
*April 2022 to August 2022 - Toronto, Canada* 

  - Built across the stack: microservices, UI components, data investigations, etc
  - Performed tasks as needed: roadmap prioritization, handled customer issues

- **Logistics Lead @ [HackWestern](https://www.hackwestern.com/)**   
*July 2022 to March 2022 - London, Canada* 
  
  - Led the planning, organization and operation of a 400+ person IRL hackathon at Western University
  - Co-led a team and $60k budget to coordinate logistics: food, security and transportation

- **Senior Associate @ [Front Row Ventures](https://frontrow.ventures/)**   
*May 2020 to April 2022 - Toronto, Canada* 
  
  - Led a team of 10 student investors to perform due diligence and hold investment meetings
  - Met with founders, researched industries, wrote deal memos and led the funding of 2 startups

- **Data Science Intern @ TD Bank**   
*June 2019 to August 2019 - Toronto, Canada* 
  
  - Analyzed +700m payments data points with unsupervised machine learning techniques
  - Presented findings to senior executives on customer churn, leading to $2mm in savings

-----

- **BESc. Software Engineering @ Western University**   
*September 2019 to June 2023 - London, Canada* 
  
  - Ivey Fintech Pro-Bono Consulting Program
  - Sample coursework: New Venture Creation, Accounting and Business Analysis, Algorithms and Data Structures, 
  Software Testing & Maintenance

`;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default WorkPage
  