import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = () => {
  const [counters, setCounters] = useState({
    doctors: 0,
    reviews: 0,
    patients: 0,
    staff: 0
  });

  const sectionRef = useRef(null);
  const animationStarted = useRef(false);

  const finalValues = {
    doctors: 199,
    reviews: 467,
    patients: 1900,
    staff: 300
  };

  const duration = 2000; // Animation duration in milliseconds
  const startAnimation = () => {
    if (animationStarted.current) return;
    animationStarted.current = true;

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        doctors: Math.floor(progress * finalValues.doctors),
        reviews: Math.floor(progress * finalValues.reviews),
        patients: Math.floor(progress * finalValues.patients),
        staff: Math.floor(progress * finalValues.staff)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 text-center py-16 px-4" ref={sectionRef}>
    <h1 className="text-2xl font-bold mb-2">We Provide Best Medical Services</h1>
    <p className="text-gray-600 max-w-xl mx-auto mb-12 text-sm">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl mb-3">📋</div>
        <span className="text-3xl font-bold">{counters.doctors}+</span>
        <span className="text-gray-600 mt-2">Total Doctors</span>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl mb-3">⭐️⭐️⭐️</div>
        <span className="text-3xl font-bold">{counters.reviews}+</span>
        <span className="text-gray-600 mt-2">Total Reviews</span>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl mb-3">🧑‍⚕️</div>
        <span className="text-3xl font-bold">{counters.patients}+</span>
        <span className="text-gray-600 mt-2">Patients</span>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl mb-3">👥</div>
        <span className="text-3xl font-bold">{counters.staff}+</span>
        <span className="text-gray-600 mt-2">Total Staffs</span>
      </div>
    </div>
  </div>
  );
};

export default AnimatedCounter;