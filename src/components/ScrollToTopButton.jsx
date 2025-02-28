import React,{useEffect} from 'react'
import icon from "./../assets/arrow_up_Icon.png"
const ScrollToTopButton = ({scrollToTopBtnRef,scrollToTargetRef}) => {
  useEffect(()=>{
    const scrollToTopBtn = scrollToTopBtnRef.current;
    const scrollToTarget = scrollToTargetRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        scrollToTopBtn.classList.toggle("show", !entry.isIntersecting);
      });
    });
    observer.observe(scrollToTarget);
    scrollToTopBtn.onclick = (event) => {
      event.preventDefault();
      scrollToTarget.scrollIntoView({
        behavior: "smooth",
      });
    };
  },[])
  return (
    <button ref={scrollToTopBtnRef} id="scroll-to-top-btn">
      <img src={icon} />
    </button>
  )
}

export default ScrollToTopButton