import { cn } from '@lib/utils';
import React, { useEffect, useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

export const Cursor: React.FC<IProps> = ({ children }) => {
  const [isActive, setActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={cn('first_cursor', {
          active: isActive,
        })}
        style={{
          transform: `translate(calc(${cursorPosition.x}px - 50%), calc(${cursorPosition.y}px - 50%)`,
        }}
      />
      <div
        className={cn('second_cursor', {
          active: isActive,
        })}
        style={{
          transform: `translate(calc(${cursorPosition.x}px - 50%), calc(${cursorPosition.y}px - 50%)`,
        }}
      />
      <div onMouseMove={handleMouseMove}>{children}</div>
    </React.Fragment>
  );
};

export default Cursor;
