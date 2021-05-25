const area = document.querySelectorAll("section");

//const by = document.querySelector("body");
const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }else{
            entry.target.querySelector(".image").style.opacity = 1;
            entry.target.querySelector(".content").style.opacity = 1;
            entry.target.querySelector(".image").classList.add("animate__bounceInLeft");
            entry.target.querySelector(".content").classList.add("animate__bounceInRight");
            observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5
    });

area.forEach((el, i) => {
    observer.observe(el);
});

// btnScrollToTop //
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", () =>{
  //window.scrollTo(0,0)

    window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"
    })
})
