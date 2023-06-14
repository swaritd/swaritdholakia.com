import React from 'react';
import ReactMarkdown from 'react-markdown';

const AboutPage = () => {
    const markdownContent = 

` 
**Hi! I'm Swarit.**

I’m a 22-year-old from Toronto deeply interested in startups that'll solve hard, non-obvious problems and impact billions using exponential technologies, and play to spend my life building such. I’m currently interested in global freight, primary healthcare, and consumer fintech.

Lately, I’ve also been exploring other areas, like: the relations between technology and public policy, modern constitutional and antitrust law frameworks, economic development in emerging markets and borderless digital value transfer.

I’m an aspiring triathlete and marathonist, and enjoy skiing, backpacking and Nolan movies.

-----

*Currently,*

**->** Graduated from Western University, where I studied Software Engineering

**->** Am re-exploring areas I truly want to spend my time working in: right now, I'm very interested in venture studios as a way to build for problems with breadth

**->** Exploring unintentional technology concequences of legacy policy in the US

**->** Learning about institutional and growth investing (and becoming more interested in the idea of money as an tool for impact)

**->** Studying the stories and intracies of non-technology companies, founders and CEOs, and investors (some examples: LVMH, Tiger Global, Bob Iger, Reliance, Jamie Dimon, Berkshire, etc)

**->** Training for my first marathon and hanging out with friends

*(Updated June 13 2023)*

  `;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default AboutPage
  