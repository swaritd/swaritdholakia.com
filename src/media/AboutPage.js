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

I’m a ${age}-year-old from Toronto deeply interested in investing and startups to solve hard, non-obvious problems that impact billions. 

I’m an aspiring marathonist and enjoy skiing, cycling, backpacking, and Nolan movies. I'm currently based in SF.

-----

*Currently,*

**->** Work at [Meter](https://www.meter.com/) as a technical generalist on business teams; building a modern utility for physical internet infrastructure

**->** Building a summer fellowship program for Canadian university students to taste startups via high-impact generalist-like internships

**->** Trying to strengthen my analytical muscle for evaluating companies from a VC lens (and how it differs from a founding/building lens)

**->** Travelling and hanging out with friends

*(Updated Oct 19 2024)*

  `;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default AboutPage
  
