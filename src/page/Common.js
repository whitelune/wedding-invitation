import '../css/Common.css';
import '../css/Main.css';
import SubHeader from './SubHeader';
import React, { useRef } from 'react';
import { Fade } from "react-awesome-reveal";

function Common({title, description, json}) {

    const contentRefs = useRef([]);
    const onclickHandler = (e) => {
        e.target.style.display = 'none';        
        e.target.nextSibling.style.display = 'block';        
        // e.target.nextSibling.style.visibility = 'visible';     
        // e.target.nextSibling.style.height = 'fit-content';
    };
    const onclickHandlerClose = (e) => {
        e.target.parentNode.style.display = 'none';        
        e.target.parentNode.previousSibling.style.display = 'inline-block';        
        // e.target.parentNode.style.visibility = 'hidden';        
        // e.target.parentNode.style.height = '0vh';        
        // e.target.parentNode.previousSibling.style.display = 'inline-block';        
    };

    return (
      <div className="Common-all Common-position-relative">
                      <div className="Common-empty-50" />

        <SubHeader headerTitle={title} nav={json} refs={contentRefs}/>

        <body className="Common-body">


<div className="Common-content-background-2">

<div className="Common-empty-30" />
        <div className="Common-sub-description Common-content-background-2">
            {description}
        </div>
        <div className="Common-empty-30" />

        </div>

        {
            json.map(function(entry, index) {
                return (

                    <div  key={index} ref={ (element) => {contentRefs.current[index] = element} } >
                    
                    <Fade>

                    <div className="Common-content-block">


                      <div className={index % 2 == 0 ? 'Common-content-background-1' : 'Common-content-background-2'}>
                      <div className="Common-empty-30" />

                        {
                            title == '예식 순서' || title == '셀프 인터뷰' ?
                            <div className="Common-sub-title">{entry.title}</div>
                            :
                            <div className="Common-sub-title">{(index+1) + ". " + entry.title}</div>
                        }

                        <div className="Common-empty-30" />

                        {
                             entry.pic != "" && entry.pic != null ? 
                                <div><img className="Common-content-img" src={entry.pic} style={{width:entry.picWidthSize}}/> </div> : null
                        }
                        <div className="Common-sub-content">{entry.content}</div>

                        {
                            entry.type == "comment" ?
                            <div>
                                <div className="Common-empty-30" />
                                <iframe style={{border:'none'}} src="https://comment-blog.tistory.com/1" className="Common-comment-area"/>
                            </div>
                            : null
                        }

                        {
                             entry.more != "" && entry.more != null ? 
                                <div>   

                                    <div className="Common-empty-20" />
                                    <div className="Common-content-more-btn" onClick={(e) => onclickHandler(e)}>더보기</div>                                     
                                    <div className="Common-content-more-content">
                                        <div className="Common-border-80" />
                                        <div className="Common-empty-30" />
                                        <div>{entry.more}</div>    
                                        {
                                            entry.moreImage != "" && entry.moreImage != null ? 
                                            <div>
                                                <div className="Common-empty-30" />
                                                <img className="Common-content-img" src={entry.moreImage} /> 
                                            </div> : null
                                        }

                                        {
                                            entry.moreVideo != "" && entry.moreVideo != null ? 
                                            <div>
                                                <div className="Common-empty-30" />
                                                <img className="Common-content-img" src={entry.moreImage} /> 
                                                <iframe width="80%" height="300px" src={entry.moreVideo}
                                                title="YouTube video player" 
                                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                                ></iframe>
                                            </div> : null
                                        }
                                        {
                                            entry.moreEndText != "" && entry.moreEndText != null ? 
                                            <div>
                                                <div className="Common-empty-30" />
                                                <div>{entry.moreEndText}</div> 
                                            </div> : null
                                        }
                                        <div className="Common-empty-30" />
                                        <div className="Common-content-more-btn" onClick={(e) => onclickHandlerClose(e)}>더보기 닫기</div>                                     

                                    </div>
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
    )
};

export default Common;
