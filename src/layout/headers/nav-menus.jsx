import Link from 'next/link';
import React, {useState} from 'react';
import menu_data from './menu-data';

const NavMenus = () => {
 
  return (
    <div className=''>
  
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i} className={`${menu.has_dropdown ? 'has-dropdown' : ''}
      ${menu.mega_menu ? 'has-mega-menu' : ''}`}>
        
          <Link href={menu.link}>
            <a>{menu.title} {menu.has_dropdown && <i className="fal fa-angle-down"></i>}</a>
          </Link>
         
          {menu.has_dropdown && <ul className="submenu text-start">
            {menu.sub_menus.map((sub_m, i) => (
        
        
    
        <li key={i}>
                  
                <Link href={sub_m.link}>
                  <a>{sub_m.title}</a>
                </Link>
      
                
              </li>
                
            ))}
         
          </ul>}
        
        </li>
      ))}
          </ul>  
    </div>
  );
};

export default NavMenus;