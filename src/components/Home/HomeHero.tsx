import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { Button } from '../ui/button';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#home-hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay the slideshow
    autoplaySpeed: 3000 // Change slide every 3 seconds
  };

  return (
    <section id="home-hero" className="relative h-[80vh] min-h-[600px] w-full">
      <img
        src="/images/image2.jpg"
        alt="Adjumani Community"
        className="object-cover brightness-50 w-full h-full"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              isVisible ? 'zoom-in' : ''
            }`}
          >
            Restoring Hope to Adjumani: Transforming Lives Through Faith,
            Healthcare, and Education
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isVisible ? 'zoom-in' : ''
            }`}
          >
            Join us in making a lasting impact in the Adjumani community through
            holistic development and spiritual growth.
          </p>
          <div className="flex space-x-4 items-center justify-center">
            <a href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8715" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Donate Now
              </Button>
            </a>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={openModal}
            >
              View Project
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Slideshow"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal">
          Close
        </button>
        <Slider {...settings}>
          <div>
            <img src="/images/adj/adj1.jpg" alt="Project 1" />
          </div>
          <div>
            <img src="/images/adj/adj2.jpg" alt="Project 2" />
          </div>
          <div>
            <img src="/images/adj/adj3.jpg" alt="Project 3" />
          </div>
          <div>
            <img src="/images/adj/adj4.jpg" alt="Project 4" />
          </div>
          <div>
            <img src="/images/adj/adj5.jpg" alt="Project 5" />
          </div>
          <div>
            <img src="/images/adj/adj6.jpg" alt="Project 6" />
          </div>
          <div>
            <img src="/images/adj/adj7.jpg" alt="Project 7" />
          </div>
          <div>
            <img src="/images/adj/adj8.jpg" alt="Project 8" />
          </div>
          <div>
            <img src="/images/adj/adj9.jpg" alt="Project 9" />
          </div>
          <div>
            <img src="/images/adj/adj10.jpg" alt="Project 10" />
          </div>
          <div>
            <img src="/images/adj/adj11.jpg" alt="Project 11" />
          </div>
          <div>
            <img src="/images/adj/adj12.jpg" alt="Project 12" />
          </div>
          <div>
            <img src="/images/adj/adj13.jpg" alt="Project 13" />
          </div>
          <div>
            <img src="/images/adj/adj14.jpg" alt="Project 14" />
          </div>
          <div>
            <img src="/images/adj/adj15.jpg" alt="Project 15" />
          </div>
          <div>
            <img src="/images/adj/adj16.jpg" alt="Project 16" />
          </div>
          <div>
            <img src="/images/adj/adj17.jpg" alt="Project 17" />
          </div>
        </Slider>
      </Modal>
    </section>
  );
};

export default HomeHero;
