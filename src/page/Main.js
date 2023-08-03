import '../App.css';
import '../css/Common.css';
import '../css/Main.css';
import SubHeader from './SubHeader';
import React, { useState, useCallback, useEffect, useRef, any } from 'react';
import { Fade } from "react-awesome-reveal";

import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { photos } from "../js/Photos";
import main from "../json/main.json";

//function importAll(r) {
//  return r.keys().map(r);
//}
//                  <Fade triggerOnce direction="up">

//const photos = importAll(require.context('./', false, /\.(png|jpg|jpe?g|svg)$/));
//alert(images);
function Main() {

  const contentRefs = useRef([]);
  
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <div className="App">

      <header className="App-header">
      <SubHeader headerTitle={''} nav={main} refs={contentRefs}/>

        <div className="Main-img" />
        </header>
        <body className='Main-background-color Main-text-color'>


        {
            main.map(function(entry, index) {
                return (

                  <div key={index}  ref={ (element) => {contentRefs.current[index] = element} }>
                  <Fade>

                    <div className="Common-content-block" >

                      <div className={index % 2 == 0 ? 'Common-content-background-1' : 'Common-content-background-2'}>

                      <div className="Common-empty-30" />
                        <div className="Common-sub-title">{(index+1) + ". " + entry.title}</div>
                        <div className="Common-empty-30" />
                        {
                             entry.pic != "" && entry.pic != null ? 
                                <div><img className="Common-content-img" src={entry.pic} style={{width:entry.picWidthSize}}/> </div> : null
                        }

{
  entry.contentImportant1 != "" && entry.contentImportant1 != null ? 

    <div>
      <div className='Common-sub-content-important'>{entry.contentImportant1}</div>
      <div className="Common-empty-10" />
      <div className='Common-sub-content-important'>{entry.contentImportant2}</div>
      <div className="Common-empty-30" />
    </div> : null 
}


                        <div className='Common-sub-content'>{entry.content}</div>

                        {
                            entry.type == "gallery" ? 
                            <div>
                              <div className="Common-empty-30" />
                              <Gallery photos={photos} onClick={openLightbox} />
                              <ModalGateway>
                                {viewerIsOpen ? (
                                  <Modal onClose={closeLightbox}>
                                    <Carousel
                                      currentIndex={currentImage}
                                      views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        sizes: x.sizes,
                                        caption: x.title
                                      }))}
                                    />
                                  </Modal>
                                ) : null}
                              </ModalGateway>
                            </div> : null
                        }

                        {
                            entry.type == "comment" ? 
                            <iframe style={{border:'none'}} src="https://comment-blog.tistory.com/1" className="Common-comment-area"/>
                             : null
                        }

                        {
                            entry.link != "" && entry.link != null ? 

                            <div>
                              <div className="Common-empty-30" />
                              <Link to={entry.link} className="Common-link">
                                <div>{entry.linkTitle}</div>
                              </Link>  
                            </div> : null
                        }

                        {
                            entry.externalLink != "" && entry.externalLink != null ? 

                            <div>
                              <div className="Common-empty-30" />

                            <a
                              className="Common-link"
                              href={entry.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {entry.externalLinkTitle}
                            </a> 
                            </div> : null
                        }
                        
                        <div className="Common-empty-30" />

                        </div>

                    </div>
                  </Fade>
                  </div>

                )
            })
        } 

      </body>

    </div>
  );
}
// 이름, 메시지, 시간

export default Main;
