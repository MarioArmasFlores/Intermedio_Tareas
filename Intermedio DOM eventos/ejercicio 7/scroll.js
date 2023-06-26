window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 200) {
      document.body.style.backgroundColor = "#312344";
    } else {
      document.body.style.backgroundColor = "#b40406";
    }
  });