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

I’m a ${age}-year-old from Toronto deeply interested in investing and startups to solve hard, non-obvious problems and impact billions using exponential technologies, currently interested in healthcare, fintech and infrastructure software. 

I’ve recently been exploring: the intersection of technology and public policy, modern antitrust law frameworks and economic development in emerging markets.

I’m an aspiring marathonist, and enjoy skiing, cycling, backpacking and Nolan movies.

-----

*Currently,*

**->** Joining [Meter](https://www.meter.com/) as a generalist in Feb 2024 (and moving to SF!)

**->** Exploring unintentional technology consequences of legacy policy

**->** Building a summer fellowship program for Canadian university students to taste startups via high-impact generalist-like internships

**->** Trying to strengthen my analytical muscle for evaluating companies from a VC lens (and how it differs from a founding/building lens)

**->** Travelling and hanging out with friends

*(Updated Jan 4 2024)*

  `;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default AboutPage
  
