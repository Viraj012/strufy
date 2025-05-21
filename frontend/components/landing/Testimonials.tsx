"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Frontend Developer",
    company: "TechSolutions Inc.",
    avatar: "/avatar1.png",
    testimonial: "Arqit saved me hours of planning and documentation work. I described my app idea and got a complete blueprint that I could start building immediately. The task breakdown was especially helpful.",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "Startup Founder",
    company: "NovaTech",
    avatar: "/avatar2.png",
    testimonial: "As a non-technical founder, I struggled to communicate my vision to developers. Arqit bridged that gap perfectly. The blueprints it generated helped me find the right development team and accelerated our timeline.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "InnovateCorp",
    avatar: "/avatar3.png",
    testimonial: "The database schema and API specifications that Arqit generated were spot-on. It helped our team align on the technical approach before writing a single line of code. Highly recommend!",
    rating: 4
  },
  {
    name: "David Patel",
    title: "Full-Stack Developer",
    company: "Freelancer",
    avatar: "/avatar4.png",
    testimonial: "I use Arqit for all my client projects now. It helps me understand requirements better and creates a solid foundation for development. The AI-generated plans are comprehensive and save me days of work.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Join thousands of developers and founders who are accelerating their development process with Arqit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-full z-0 opacity-60" />
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
