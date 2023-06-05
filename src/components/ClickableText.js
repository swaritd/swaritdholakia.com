import React from 'react';

const ClickableText = ({ text, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <span
      className="clickable-text"
      onClick={handleClick}
    >
      {text}
    </span>
  );
};

export default ClickableText;