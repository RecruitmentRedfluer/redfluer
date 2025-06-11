import React from 'react';
import Carousel from '../../ui/Carousel';
import { testimonials } from '../../../data/testimonials';

const TestimonialCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Hear directly from healthcare providers about their experience working with RedFluer Recruitment.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-primary-900">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;