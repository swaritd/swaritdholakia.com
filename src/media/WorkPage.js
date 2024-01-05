import React from 'react';
import ReactMarkdown from 'react-markdown';

const WorkPage = () => {
    const markdownContent = 

` 
**SWE Intern @ [Float Financial](https://www.floatcard.com)**   
*Apr 2022 to Aug 2022 - Toronto, Canada* 

- Built across the stack: microservices, UI components, data investigations, etc
- Performed tasks as needed: roadmap prioritization, handled customer issues
- Selected to be in [Susa Ventures](https://susaventures.com/)' Summer Fellows Program

**Logistics Lead @ [HackWestern](https://www.hackwestern.com/)**   
*Jul 2022 to Mar 2023 - London, Canada* 
  
- Led the planning, organization and operation of a 400+ person IRL hackathon at Western University
- Co-led a team with a $60k budget to coordinate logistics: food, security and transportation

**Senior Associate @ [Front Row Ventures](https://frontrow.ventures/)**   
*May 2020 to Apr 2022 - Toronto, Canada* 
  
- Led a team of 10 student investors to perform due diligence and hold investment decision meetings
- Met with founders, researched industries, wrote deal memos and led the funding of 2 startups

**Data Science Intern @ TD Bank**   
*Jun 2019 to Aug 2019 - Toronto, Canada* 
  
- Analyzed +700m payments data points with unsupervised machine learning techniques
- Presented findings to senior executives on customer churn, leading to $2mm in savings

-----

**BESc. Software Engineering @ Western University**   
*Sep 2019 to Jun 2023 - London, Canada* 
  
- Ivey Fintech Pro-Bono Consulting Program
- Ivey Technology Club

`;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default WorkPage
  