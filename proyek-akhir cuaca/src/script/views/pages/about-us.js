const AboutUs = {
  async render() {
    return `
    <div class="container-xxl py-5">
    <div class="container px-lg-5">
        <div class="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h1 class="mb-3">Our Team Members</h1>
            <p class="mb-1">Tim kami merupakan peserta dari Dicoding Academy tahun 2023, dipertemukan melalui open member tim Capstone melalui discord.</p>
        </div>
        <div class="row g-4">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                    <div class="text-center p-4">
                        <img class="img-fluid rounded-circle mb-4" src="img/zudan.png" alt="Ahmad Yanta Fairuz Zudana">
                        <h5 class="fw-bold mb-1">Ahmad Yanta Fairuz Zudana</h5>
                        <small>ID : FO25XB250</small><br>
                        <small>Universitas Negeri Semarang</small>
                    </div>
                    <div class="d-flex justify-content-center bg-primary p-3">
                        <a class="btn btn-square text-primary bg-white m-1" target="_blank" href="https://www.linkedin.com/in/ahmad-yanta-fairuz-zudana/"><i class="bi fw-bold">LinkedIn</i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                    <div class="text-center p-4">
                        <img class="img-fluid rounded-circle mb-4" src="img/aria.jpeg" alt="Aria Fata Abydza">
                        <h5 class="fw-bold mb-1">Aria Fata Abydza</h5>
                        <small>ID : F013XB170</small><br>
                        <small>Universitas Gunadarma</small>
                    </div>
                    <div class="d-flex justify-content-center bg-primary p-3">
                        <a class="btn btn-square text-primary bg-white m-1" target="_blank" href=" https://www.linkedin.com/in/aria-fata-abydza-109160206/"><i class="bi fw-bold">LinkedIn</i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                    <div class="text-center p-4">
                        <img class="img-fluid rounded-circle mb-4" src="img/naufal.jpg" alt="Naufal Angkasah">
                        <h5 class="fw-bold mb-1">Naufal Angkasah</h5>
                        <small>ID : F063XB451</small><br>
                        <small>Universitas Syiah Kuala</small>
                    </div>
                    <div class="d-flex justify-content-center bg-primary p-3">
                        <a class="btn btn-square text-primary bg-white m-1" target="_blank" href="https://www.linkedin.com/in/naufal-angkasah-030401276/"><i class="bi fw-bold">LinkedIn</i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                    <div class="text-center p-4">
                        <img class="img-fluid rounded-circle mb-4" src="img/samuel.jpeg" alt="Samuel Chrisna Adjani">
                        <h5 class="fw-bold mb-1">Samuel Chrisna Adjani</h5>
                        <small>ID : F025XB151</small><br>
                        <small>Universitas Negeri Semarang</small>
                    </div>
                    <div class="d-flex justify-content-center bg-primary p-3">
                        <a class="btn btn-square text-primary bg-white m-1" target="_blank" href="https://www.linkedin.com/in/samuel-chrisna-742a011b5/"><i class="bi fw-bold">LinkedIn</i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


      `;
  },

  async afterRender() {
    (function ($) {
      "use strict";
  
       // Spinner
       var spinner = function () {
          setTimeout(function () {
              if ($('#spinner').length > 0) {
                  $('#spinner').removeClass('show');
              }
          }, 1);
      };
      spinner();
      
      
      // Initiate the wowjs
      new WOW().init();
      
   // Back to top button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
  
  
  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
  });
  
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      dots: true,
      loop: true,
      center: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
  });
  },
};

export default AboutUs;