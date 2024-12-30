import React from 'react';

const AboutSection = () => {
  return (
    <section className=" py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Welcome to <span className="text-blue-600">Dnyan Prasarak Shikshan Sanstha</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established on <span className="font-semibold">October 2nd, 1979</span>, our institution has grown to include <span className="font-semibold">5 degree colleges</span>, <span className="font-semibold">1 law college</span>, <span className="font-semibold">1 polytechnic</span>, and a range of other educational centers. We are dedicated to supporting the underprivileged through holistic student development, combining academic, co-curricular, and social activities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's rapidly evolving world, <span className="font-semibold text-blue-600">innovation</span> and <span className="font-semibold text-blue-600">creativity</span> are essential. We encourage our students to continuously adapt and grow, ensuring their success in life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since 2017, we have proudly established a <span className="font-semibold">Women's College</span> at our Badlapur campus, emphasizing <span className="font-semibold text-blue-600">women's empowerment</span> through education.
            </p>
          </div>



        </div>
      </div>
    </section>
  );
};

export default AboutSection;
