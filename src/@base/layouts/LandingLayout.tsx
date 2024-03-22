import React, { useEffect, useRef, useState } from 'react';
import Footer from './elements/Footer';
import Header from './elements/Header';
import Nav from './elements/Nav';
import Cursor from './elements/Cursor';

interface IProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<IProps> = ({ children }) => {
  const navRef = useRef(null);
  const [isCollapsed, setCollapsed] = useState(true);

  const handleNav = (e) => {
    if ((navRef.current && !(navRef.current as any).contains(e.target)) || e.target.attributes.href) setCollapsed(true);
  };

  useEffect(() => {
    const targetElem = document.getElementById('__main');
    targetElem.addEventListener('click', handleNav);

    return () => targetElem.removeEventListener('click', handleNav);
  }, []);

  return (
    <Cursor>
      <Header />
      <Nav navRef={navRef} isCollapsed={isCollapsed} setCollapsed={() => setCollapsed((prev) => !prev)} />
      {children}
      <Footer />
    </Cursor>
  );
};

export default LandingLayout;
