import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const AboutPage = () => {

  const [age, setAge] = useState(22);

  useEffect(() => {
    const currentDate = new Date();
    const birthDate = new Date('2001-02-24');
    const diff = currentDate - birthDate;
    const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(ageInYears);
  }, []);

  const markdownContent = 

` 
**Hi! I'm Swarit.**

I’m a ${age}-year-old from Toronto deeply interested in startups that'll solve hard, non-obvious problems and impact billions using exponential technologies and am currently interested in global freight, primary healthcare, and consumer fintech. 

I’ve also recently been exploring: the intersection of technology and public policy, modern antitrust law frameworks, economic development in emerging markets and borderless digital value transfer.

I’m an aspiring triathlete and marathonist, and enjoy skiing, backpacking and Nolan movies.

-----

*Currently,*

**->** Graduated from studying software engineering at Western University

**->** Re-discovering areas I truly want to spend my time in: currently very interested in venture studios as a way to build for problems with breadth

**->** Exploring unintentional technology concequences of legacy policy

**->** Learning about institutional and growth investing (and becoming more interested in the idea of money as an tool for impact)

**->** Studying the stories of non-technology companies, leaders, and investors (some examples: LVMH, Jamie Dimon, Reliance)

**->** Training for my first marathon and hanging out with friends

*(Updated June 15 2023)*

  `;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default AboutPage
  