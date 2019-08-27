// Responsive Nav
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const section = document.getElementsByClassName('section');
  const links = document.getElementsByClassName('myLink');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  // current link style
  for (i = 0; i < links.length; i++) {
    // attach event listener to all links
    links[i].addEventListener('click', clickMyLink);
  }
  // event listener function
  function clickMyLink(e) {
    //Call Smooth Scroll Function
    smoothScroll(event);

    if (nav.classList.contains('nav-active')) {
      // Close navbarMenu in smaller screens
      burger.click();
    }

    for (j = 0; j < section.length; j++) {
      // deactivate all links
      links[j].classList.remove('current');
      // hide all section
      section[j].classList.remove('current');
    }
    // activate current myLink
    e.currentTarget.classList.add('current');
  }
  // smooth scrolling
  function smoothScroll(event) {
    // console.log(event.target);
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    let destination = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: destination,
      behavior: 'smooth'
    });
  }

  // Scroll Up / Back To Top Image
  const scrollBtn = document.getElementById('scrollUp');
  const section1 = document.getElementById('section1');
  scrollBtn.addEventListener('click', e => {
    e.preventDefault();
    let destination = section1.offsetTop;
    window.scrollTo({
      top: destination,
      behavior: 'smooth'
    });
  });
};

// Parallax Effect
const parallaxEffect = () => {
  const parallax = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    for (let i = 0; i < parallax.length; i++) {
      parallax[i].style.backgroundPositionY =
        (offset - parallax[i].offsetTop) * 0.7 + 'px';
    }
  });
};

const pageFunction = () => {
  navSlide();
  parallaxEffect();
};

pageFunction();
