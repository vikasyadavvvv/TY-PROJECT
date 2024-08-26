import React from 'react';

const testimonials = [
  {
    name: "Yash",
    image: "https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
    quote: "The faculty here are truly outstanding and have helped me grow academically and personally.",
    title: "Computer Science Graduate"
  },
  {
    name: "Chirag",
    image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png",
    quote: "I have had an amazing experience, thanks to the supportive community and excellent programs.",
    title: "Business Administration Student"
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-serif">
            Discover the experiences of our students and alumni who have thrived in our academic environment.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
              <div className="flex items-center mb-6">
                <img className="h-16 w-16 rounded-full object-cover border-4 border-indigo-600 shadow-md" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
