import React from 'react';
import './styles.css';

interface Props {
  /** The children of the card */
  children: React.ReactNode;
  /** The color of the card */
  backgroundColor?: React.CSSProperties['color'];
}

/**
 * Card component
 */
const Card = ({ children, backgroundColor }: Props): React.ReactElement => {
  const cardStyle: React.CSSProperties = {
    backgroundColor,
  };

  return (
    <div className='card' style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
