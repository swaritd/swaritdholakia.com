import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReadsPage = () => {
    const markdownContent = 

` 
In the peak of Covid, my friends and I started a group notes to keep track of interesting books we've seen online and get recommended that we hope to read. 

A lot of it is a result of rabbitholes and phases each of us dive into over the course of new experiences and readings. We noticed quickly that it's pretty cool to have a sample of other people's minds' wanderings as measured by the books they find interesting at any given time. 

It's sort of a natural but orchestrated discovery process. 

*Below is that list (updated every now and then):*

**Pyschology**
- Influence: Science and Practice
- Influence: Pyschology of Persuasion
- Emotional Intelligence

**The World**
- How Asia Works
- Ninety Percent of Everything
- Before Babylon, Beyond Bitcoin
- The Ascent of Money
- The Wealth of Nations
- Debt: The First 5000 Years
- Too Big to Fail
- Lords of Finance
- This Time is Different
- Evolution of Money
- Scale: The Universal Laws of Life, Growth, and Death in Organisms, Cities, and Companies
- Outside the Box: How Globalization Changed from Moving Stuff to Spreading Ideas
- A Short History of Nearly Everything
- The Changing World Order

**Ideas + Mindsets**
- Finite and Infinite Games
- The Evolution of Everything
- Courage to be Disliked
- Antifragile
- Originals
- Think Again
- The Art of Doing Science and Engineering
- The Inner Game of Tennis
- Atomic Habits
- Outliers
- Good to Great
- Art of War
- Weapons of Math Destruction
- Grinding it Out
- The Infinite Game
- Thinking in Systems: A Primer
- Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts
- Wanting: The Power of Mimetic Desire
- The Scout Mindset
- Man's Search for Meaning
- Probabilistic Thinking: Presenting Plural Perspectives
- The End of Average
- Principles
- Let My People Go Surfing: The Education of a Reluctant Businessman
- Walt Disney: The Triumph of the American Imagination
- Extreme Ownership: How U.S. Navy SEALs Lead and Win
- The End of Average: How We Succeed in a World That Values Sameness
- Range: Why Generalists Triumph in a Specialized World
- How Will You Measure Your Life?

**Biographies + Stories**
- Creativity Inc
- No Rules Rules
- Shoe Dog
- Becoming
- A Promised Land
- Steve Jobs
- Eiffel's Tower
- Into Thin Air
- Autobiography of Andrew Carnegie
- Titan: The Life of John D. Rockefeller, Sr.
- Alexander Hamilton
- House of Morgan
- The Contrarian: Peter Thiel and Silicon Valley's Pursuit of Power
- Losing my Virginity
- How to Turn Down a Billion Dollars: The Snapchat Story
- The Third Door
- Pour Your Heart into It
- Super Pumped
- Amazon Unbound
- The Everything Store
- Elon Musk by Ashlee Vance
- Overnight Success: Federal Express
- Kochland: The Secret History of Koch Industries and Corporate Power in America
- Vanderbilt: The Rise and Fall of an American Dynasty
- The Rise of Theodore Roosevelt 
- (Biographies by Robert Caro)
- Burn Rate: Launching a Startup and Losing My Mind

**Science**
- Why We Sleep
- How to Avoid a Climate Disaster
- Deadliest Enemy
- Design of Everyday Things
- Lifespan
- The Grid: The Fraying Wires Between Americans and Our Energy Future

**Startups + Business**
- Zero to One
- Linchpin
- Breakthrough Advertising
- What Got You Here Won’t Get You There
- How to Lie with Statistics
- Jobs to be Done: Theory to Practice
- Competing Against Luck
- Loonshots
- The Upstarts
- Why Mexicans Don't Drink Molson

**Technology**
- Electronic Value Exchange
- The Innovation Stack 

`;
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  };

export default ReadsPage
  