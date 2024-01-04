import React from 'react';
import ReactMarkdown from 'react-markdown';

const WritingsPage = () => {
    const markdownContent = 

`
[Intentional thoughts on tech + startups](https://www.blog.swaritdholakia.com/pub/swarit/p/intentional-thoughts-on-tech-startups?r=2r6p2&utm_campaign=post&utm_medium=web)

[Extreme operating excellence in life](https://www.blog.swaritdholakia.com/pub/swarit/p/extreme-operating-excellence-in-life?r=2r6p2&utm_campaign=post&utm_medium=web)

[What hot air balloons teach us about fintech growth](https://www.blog.swaritdholakia.com/pub/swarit/p/what-hot-air-balloons-teach-us-about?r=2r6p2&utm_campaign=post&utm_medium=web)

[A Hidden Gift in Being Grounded: Lessons from my 18 Years](https://swarit.medium.com/a-hidden-gift-in-being-grounded-lessons-from-my-18-years-5fda72b1491a)

[A Freshman’s Reflections on University](https://swarit.medium.com/no-i-dont-like-university-484e21b464f5)

[How I Failed at my First Internship](https://swarit.medium.com/how-i-failed-in-my-first-internship-975d192b5b00)

[Red Means Stop: Classifying Traffic Lights for Driverless Vehicles](https://swarit.medium.com/red-means-stop-traffic-lights-for-driverless-vehicles-f972b14990e3)

[Designing for Trust in Self-Driving Cars](https://swarit.medium.com/designing-for-trust-in-self-driving-cars-4bef4187a545)

[How Canadian telecom companies rob 30 million people every day](https://swarit.medium.com/how-canadian-telecom-companies-rob-30-million-people-every-single-day-part-1-41933d46801e)

[How 15-cent stickers can save Walmart over $125 million](https://swarit.medium.com/how-15-cent-stickers-can-save-walmart-over-125-million-551450673a2)

`;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default WritingsPage
  
