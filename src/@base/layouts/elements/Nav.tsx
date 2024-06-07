import { imagePaths, paths } from '@lib/constant';
import { useAppSelector } from '@lib/redux/hooks';
import { $$, cn } from '@lib/utils';
import { Badge, Grid } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBagShopping, FaRegHeart, FaRegUser } from 'react-icons/fa6';
import { RiMenuFoldFill } from 'react-icons/ri';

interface IProps {
  navRef: React.RefObject<HTMLDivElement>;
  isCollapsed: boolean;
  setCollapsed: () => void;
}

const navLinks = [
  {
    name: 'home',
    path: paths.root,
  },
  {
    name: 'shop',
    path: $$.appendPagination(paths.shop, 1, 8),
  },
  {
    name: 'contact',
    path: paths.contact,
  },
];

const Nav: React.FC<IProps> = ({ navRef, isCollapsed, setCollapsed }) => {
  const pathname = usePathname();
  const screens = Grid.useBreakpoint();
  const { cart } = useAppSelector((store) => store.cartSlice);

  return (
    <nav ref={navRef}>
      <div className="container">
        <div className="nav_wrapper">
          <Link href={paths.root} className="block">
            <div className="logo_container">
              <img src={imagePaths.logo} alt="radiomart logo" />
            </div>
          </Link>
          {screens.md || (
            <span
              className={cn('nav_links_toggler', {
                'rotate-180': !isCollapsed,
              })}
              onClick={setCollapsed}
            >
              <RiMenuFoldFill size={24} />
            </span>
          )}
          <div
            className={cn('nav_links_wrapper', {
              xs: screens.xs || !screens.md,
              collapsed: isCollapsed,
            })}
          >
            <ul className="nav_links">
              {navLinks.map((navLink, idx) => {
                const purifiedPath = navLink.path.includes('?')
                  ? navLink.path.slice(0, navLink.path.indexOf('?'))
                  : navLink.path;
                const isActive = pathname === purifiedPath;

                return (
                  <li
                    key={idx}
                    className={cn('nav_link', {
                      active: isActive,
                    })}
                  >
                    <Link href={navLink.path}>{navLink.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="icons_container">
            <li className="icon auth_icon">
              <Link className="inline-block" href={paths.signin}>
                <FaRegUser size={22} />
              </Link>
            </li>
            <li className="icon wishlist_icon">
              <Link className="inline-block" href={paths.favorite}>
                <FaRegHeart size={22} />
              </Link>
            </li>
            <li className="icon bag_icon">
              <Link className="inline-block" href={paths.cart}>
                <Badge size="small" count={cart?.length} color="var(--color-primary)" className="!text-inherit">
                  <FaBagShopping size={22} />
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
