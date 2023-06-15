import React from 'react';
import ReactMarkdown from 'react-markdown';

const AboutPage = () => {
    const markdownContent = 

` 
**Hi! I'm Swarit.**

I’m a 22-year-old from Toronto deeply interested in startups that'll solve hard, non-obvious problems and impact billions using exponential technologies. 

I’m currently interested in global freight, primary healthcare, and consumer fintech. I’ve also been exploring: the intersection of technology and public policy, modern antitrust law frameworks, economic development in emerging markets and borderless digital value transfer.

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
  