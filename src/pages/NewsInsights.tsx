import React from 'react';
import Layout from '../components/layout/Layout';
import { blogPosts } from '../data/blogPosts';
import Button from '../components/ui/Button';
import { Calendar, User, Tag } from 'lucide-react';
import NewsletterSignup from '../components/ui/NewsletterSignup';

const NewsInsights: React.FC = () => {
  return (
    <Layout pageTitle="News & Insights">
      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg text-gray-600">
              Stay informed with the latest trends, news, and insights in healthcare recruitment and the broader healthcare sector.
            </p>
          </div>
          
          {/* Featured Article */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Featured Article"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary-900 mb-3">
                  The Changing Landscape of Healthcare Recruitment in 2024
                </h2>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>20 April 2024</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>Dr. Emma Williams</span>
                  </div>
                  <div className="flex items-center">
                    <Tag size={16} className="mr-1" />
                    <span>Industry Analysis</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  The healthcare recruitment sector is undergoing significant transformation driven by technological advances, changing workforce expectations, and the aftermath of global health challenges. This comprehensive analysis explores the key trends shaping recruitment in 2024 and beyond.
                </p>
                <Button to="/news/changing-landscape" variant="primary" size="sm">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-primary-500 font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">
                        By {post.author}
                      </span>
                      <Button to={`/news/${post.slug}`} variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-12 bg-primary-50 rounded-lg p-8 border border-primary-100">
              <div className="max-w-xl mx-auto text-center">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Stay Updated with Our Newsletter
                </h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to receive the latest healthcare recruitment insights, industry news, and career advice directly to your inbox.
                </p>
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsInsights;