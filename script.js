document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.querySelector(".navbar-collapse");

  // Scroll event: add/remove class based on scroll position
  window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
          navbar.classList.add("scrolled");
      } else {
          // Remove only if menu is NOT open
          if (!collapse.classList.contains("show")) {
              navbar.classList.remove("scrolled");
          }
      }
  });

  // Toggle event: add/remove class when toggler clicked
  toggler.addEventListener("click", function () {
      // Use a slight delay to wait for collapse to toggle 'show' class
      setTimeout(() => {
          if (collapse.classList.contains("show")) {
              navbar.classList.add("scrolled");
          } else {
              // Remove scrolled if page not scrolled yet
              if (window.scrollY === 0) {
                  navbar.classList.remove("scrolled");
              }
          }
      }, 350); // Bootstrap collapse animation time ~350ms
  });
});


// Slider Navigation
$(document).ready(function () {
    let scrolled = false;

    $(window).on("scroll", function () {
      let scrollTop = $(window).scrollTop();

      if (scrollTop > 50 && !scrolled) {
        scrolled = true;
        $(".navbar").stop().animate({ marginTop: "0px" }, 300);
      } else if (scrollTop <= 50 && scrolled) {
        scrolled = false;
        $(".navbar").stop().animate({ marginTop: "10px" }, 300);
      }
    });
  });




//   up buutton

  // Scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scrollUpBtn').fadeIn();
    } else {
      $('#scrollUpBtn').fadeOut();
    }
  });

  $('#scrollUpBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });



  // main background slider


  $(document).ready(function () {
    var images = [
        'url("slide_1.jpg")',
        'url("slide_2.jpg")',
    ];
    var currentIndex = 1;

    function updateBackground() {
        $('.main-section')
            .fadeOut(400, function () {
                $(this).css('background-image', images[currentIndex]);
            })
            .fadeIn(400);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    }

    $('#next').click(showNextImage);

    $('#prev').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBackground();
    });

    updateBackground();

    // 🔁 Auto slide every 5 seconds
    setInterval(showNextImage, 10000);
});



//  slider up animation for main text an button



// close button for menu

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const nav = document.querySelector("#navbarNav");

  nav.addEventListener("shown.bs.collapse", function () {
    toggler.classList.add("open");
  });

  nav.addEventListener("hidden.bs.collapse", function () {
    toggler.classList.remove("open");
  });
});


// testimonials slide

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Jabin Kane",
    role: "CEO, topsmmpanel.com",
    text: "Testimonial from Jabin Kane about quality services."
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sara Lee",
    role: "Manager, BestBuy",
    text: "Sara found the team supportive and responsive."
  },
  {
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Mike Ross",
    role: "Lawyer, Pearson Hardman",
    text: "Mike recommends the platform for its speed."
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Rachel Zane",
    role: "HR, GlobalTech",
    text: "Rachel praised the user-friendly interface."
  },
  {
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Harvey Specter",
    role: "Senior Partner, Pearson Hardman",
    text: "Harvey trusts the team with his brand."
  }
];

let currentIndex = 0;

function updateDisplay() {
  // Get 3 indexes: prev, current, next in loop
  const total = testimonials.length;
  const prev = (currentIndex - 1 + total) % total;
  const current = currentIndex;
  const next = (currentIndex + 1) % total;

  const visible = [prev, current, next];

  // Inject images
  $('#clientImages').html('');
  visible.forEach((i, idx) => {
    const isActive = i === current ? 'active' : '';
    $('#clientImages').append(
      `<img src="${testimonials[i].img}" class="client-img ${isActive}" alt="${testimonials[i].name}">`
    );
  });

  // Inject testimonial details
  $('#testimonialText').text(testimonials[current].text);
  $('#testimonialName').text(testimonials[current].name);
  $('#testimonialRole').text(testimonials[current].role);
}

$('#nextBtn').click(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateDisplay();
});

$('#prevBtn').click(() => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateDisplay();
});

$(document).ready(function () {
  updateDisplay();
});




// subscribe form

$(document).ready(function () {
  $('#subscribeForm').on('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission
    
    const email = $(this).find('input[type="email"]').val();

    if (email.trim() !== '') {
      $('#subscribeMessage')
        .text('Thank you for subscribing!')
        .fadeIn()
        .delay(3000)
        .fadeOut();

      $(this).trigger("reset"); // Clear the form
    }
  });
});


// for contact form

$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    e.preventDefault(); // Stop actual form submission

    // Optional: You could validate more fields here

    $('#contactSuccessMsg')
      .text('Your message has been sent successfully!')
      .fadeIn()
      .delay(3000)
      .fadeOut();

    // Clear form
    $(this).trigger("reset");
  });
});