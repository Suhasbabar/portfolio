import React, { useEffect, useRef } from 'react'
export const  RevealOnScroll =({children})=> {
    const ref=useRef(null);

    useEffect(()=>{
        const observe = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                ref.current.classList.add("visible");
            }
        },{threshold:0.2 , rootMargin:"0px 0px -50px 0px"}
    );

    if(ref.current) observe.observe(ref.current);

    return()=> observe.disconnect();
    });

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}
