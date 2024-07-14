import React from 'react';

const testimonials = [
  {
    name: "Yash",
    image: "https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg", // Replace with actual image URL
    quote: "The faculty here are truly outstanding and have helped me grow academically and personally.",
    title: "Computer Science Graduate"
  },
  {
    name: "Chirag",
    image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png", // Replace with actual image URL
    quote: "I have had an amazing experience, thanks to the supportive community and excellent programs.",
    title: "Business Administration Student"
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-serif">
            Hear from our students and alumni about their experiences at Sandesh College of Arts, Commerce and Science.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex items-center">
                <img className="h-16 w-16 rounded-full object-cover border-2 border-indigo-500" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
