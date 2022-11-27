document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
});




function myFunction() {
    var element = document.getElementById("hidden");
    element.classList.toggle("show");
  }
  function myFunction1() {
    var element = document.getElementById("hidden1");
    element.classList.toggle("show");
  }
  function myFunction2() {
    var element = document.getElementById("hidden2");
    element.classList.toggle("show");
  }
  function myFunction3() {
    var element = document.getElementById("hidden3");
    element.classList.toggle("show");
  }

  function myFunction4() {
    var element = document.getElementById("hidden4");
    element.classList.toggle("show");
  }
  function myFunction5() {
    var element = document.getElementById("hidden5");
    element.classList.toggle("show");
  }
  function myFunction6() {
    var element = document.getElementById("hidden6");
    element.classList.toggle("show");
  }






  window.scrollTo ({
    top: 0,
    behavior: 'smooth',

});




    const navbar = document.querySelector('.navbar.is-triggered-on-scroll')
    
    function tirggerScrollNavbar() {
      navbar.classList.add('is-triggered')
    }
    
    function removeScrollNavbar() {
      navbar.classList.remove('is-triggered')
    }
    addEventListener('scroll', function () {
  // 70
  if (document.documentElement.scrollTop >= 70) {
    tirggerScrollNavbar()
  } else {
    removeScrollNavbar()
  }
})