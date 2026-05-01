/* ===== TESTIMONIAL CAROUSEL ===== */

function initTestimonials() {
  var testimonials = document.querySelectorAll('.testimonial');
  var dots = document.querySelectorAll('.testimonial__dot');
  if (!testimonials.length) return;

  var current = 0;
  var interval;

  function showTestimonial(index) {
    var outgoing = testimonials[current];
    var incoming = testimonials[index];

    if (current === index) return;

    gsap.to(outgoing, {
      opacity: 0,
      y: -15,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: function() {
        outgoing.classList.remove('active');
        incoming.classList.add('active');
        gsap.fromTo(incoming,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        );
      }
    });

    dots[current].classList.remove('active');
    dots[index].classList.add('active');
    current = index;
  }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      showTestimonial(i);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(function() {
      showTestimonial((current + 1) % testimonials.length);
    }, 6000);
  }

  resetInterval();
}
