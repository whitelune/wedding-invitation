import '../css/Common.css';
import '../css/Main.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef, any } from 'react';

function SubHeader( {headerTitle, nav, refs} ) {

    const [isMenuOpen, setMenu] = useState(false)
    const [showButton, setShowButton] = useState(false);
    const [classNameForTopBtn, setClassNameForTopBtn] = useState('Common-fixed-top-btn');

    const toggleMenu = () => {
      setMenu(isMenuOpen => !isMenuOpen); // on,off 개념 boolean
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToEntry = (ref) => {
      console.log('ref:' + ref);
      toggleMenu();
      ref.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
      const ShowButtonClick = () => {
        if (window.scrollY > 10) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }

        let scrollTop = document.documentElement.scrollTop;
        let bodyLimit = document.body.scrollHeight - window.innerHeight - 50;

        if (scrollTop > bodyLimit) {
          setClassNameForTopBtn("Common-absolute-top-btn");
        } else {
          setClassNameForTopBtn("Common-fixed-top-btn");
        }
      }
      window.addEventListener("scroll", ShowButtonClick)
      return () => {
        window.removeEventListener("scroll", ShowButtonClick)
      }
  }, [])

    return (
      <div className="Common-all Common-sub-header">

          <Link to="/">
            <div className={headerTitle === '' ? "":"Common-home-btn"}></div>
          </Link>
          <div className="Common-menu-btn" onClick={()=>toggleMenu()}></div>
          {
                            headerTitle !== "" && headerTitle !== null ? 
                            
                            <div className="Common-top-title">
                            <div className="Common-empty-5vh" />
                            <div className="Common-title-border" />
                            <div>
                              {headerTitle}
                            </div>
                            <div className="Common-empty-30" />
                     
                            </div>
                            : null
           }

          {showButton &&
          <div>
            <div className={classNameForTopBtn} onClick={scrollToTop} />
          </div>
          }

          <div className={isMenuOpen ? "Common-menu-background" : ""} onClick={()=>toggleMenu()}/>

          <div className={isMenuOpen ? "Common-show-menu" : "Common-hide-menu"}>

            <div className="Common-close-btn" onClick={()=>toggleMenu()}/>
            <div className="Common-empty-20" />

            {
              headerTitle == '' ? 
              <div className="Common-nav-title">메뉴</div>
              : <div className="Common-nav-title">{headerTitle}</div>

            }
            <div className="Common-empty-20" />
            {
              nav.map(function(entry, index) {
                return (
                  <div>
                    {
                      headerTitle == '예식 순서' || headerTitle == '셀프 인터뷰' ?
                      <div className="Common-nav-content" onClick={()=>scrollToEntry(refs.current[index])}>{entry.title}</div>
                      :
                      <div className="Common-nav-content" onClick={()=>scrollToEntry(refs.current[index])}>{(index+1) + ". " + entry.title}</div>
                    }
                  </div>

                );
              })
            }

            <div className="Common-menu-border" />

          </div>
      </div>
      
    )
};

export default SubHeader;
