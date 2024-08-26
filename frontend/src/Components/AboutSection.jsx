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

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision & Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our <span className="font-semibold text-blue-600">vision</span> is to contribute to society through the pursuit of education. We strive to provide qualitative education that fosters overall personality development, aiming to shape our students into capable, responsible individuals.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our <span className="font-semibold text-blue-600">mission</span> is to offer valuable educational services to those in need, focusing on the development of skills, capabilities, and talents. We are committed to creating a supportive and inclusive environment that encourages community engagement and social responsibility.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Objectives</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We aim to <span className="font-semibold text-blue-600">educate</span> and uplift underprivileged students, develop essential <span className="font-semibold text-blue-600">skills</span> and <span className="font-semibold text-blue-600">talents</span>, and promote <span className="font-semibold text-blue-600">regularity</span>, <span className="font-semibold text-blue-600">punctuality</span>, and <span className="font-semibold text-blue-600">discipline</span>. Our objective is to foster a supportive and inclusive environment while encouraging active community engagement and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
