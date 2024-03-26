import React, { useEffect, useRef, useState } from 'react';
import Cursor from './elements/Cursor';
import Footer from './elements/Footer';
import Header from './elements/Header';
import Nav from './elements/Nav';
import Preloader from './elements/Preloader';

interface IProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<IProps> = ({ children }) => {
  const [isPreloader] = useState(true);
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
    <React.Fragment>
      {isPreloader && <Preloader />}
      <Cursor>
        <Header />
        <Nav navRef={navRef} isCollapsed={isCollapsed} setCollapsed={() => setCollapsed((prev) => !prev)} />
        <div className="relative bg-[var(--color-white)] z-10">{children}</div>
        <Footer />
      </Cursor>
    </React.Fragment>
  );
};

export default LandingLayout;
