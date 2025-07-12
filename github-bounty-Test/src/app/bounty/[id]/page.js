'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, DollarSign, Clock, Star, MessageSquare, User } from 'lucide-react';

const mockBounties = [
  {
    id: '1',
    title: 'Implement a new feature for the data visualization library',
    description: 'Contribute to the open-source data visualization library by implementing a new feature that allows users to create interactive charts. This bounty requires knowledge of JavaScript, D3.js, and modern web development practices.',
    difficulty: 'Medium',
    image: '/api/placeholder/300/200',
    slug: 'implement-feature-data-visualization',
  },
  {
    id: '2',
    title: 'Fix a bug in the machine learning model',
    description: 'Help improve the accuracy of the machine learning model by fixing a bug that has been identified in the code. This requires expertise in Python, TensorFlow, and debugging machine learning algorithms.',
    difficulty: 'Hard',
    image: '/api/placeholder/300/200',
    slug: 'fix-bug-ml-model',
  },
  {
    id: '3',
    title: 'Develop a new algorithm for image recognition',
    description: 'Create an innovative algorithm for image recognition that can accurately identify objects in images. This bounty involves developing a new algorithm from scratch using computer vision techniques.',
    difficulty: 'Hard',
    image: '/api/placeholder/300/200',
    slug: 'develop-algorithm-image-recognition',
  },
  {
    id: '4',
    title: 'Write documentation for the API',
    description: 'Create comprehensive documentation for our REST API that explains how to use it effectively. This includes examples, best practices, and troubleshooting guides.',
    difficulty: 'Easy',
    image: '/api/placeholder/300/200',
    slug: 'write-api-documentation',
  },
  {
    id: '5',
    title: 'Create a tutorial for using the library',
    description: 'Develop a step-by-step tutorial that helps new users understand how to use our library effectively. This should include code examples and practical use cases.',
    difficulty: 'Easy',
    image: '/api/placeholder/300/200',
    slug: 'create-tutorial-library',
  },
  {
    id: '6',
    title: 'Design a new user interface for the application',
    description: 'Create a modern, intuitive user interface that improves user experience and accessibility. This involves UI/UX design principles and modern frontend technologies.',
    difficulty: 'Medium',
    image: '/api/placeholder/300/200',
    slug: 'design-new-user-interface',
  },
];

export default function BountyDetails({ params }) {
  const bounty = mockBounties.find(bounty => bounty.id === params.id);

  if (!bounty) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Bounty not found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-600';
      case 'Medium':
        return 'bg-yellow-600';
      case 'Hard':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Header */}
      <header className="bg-[#0c0c0c] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              MLSC Bounties
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Explore
          </Link>
        </div>

        {/* Bounty Details */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getDifficultyColor(bounty.difficulty)}`}>
                Difficulty: {bounty.difficulty}
              </span>
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">Posted 2 days ago</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{bounty.title}</h1>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Reward</h3>
              </div>
              <p className="text-2xl font-bold text-green-400">$500</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Applicants</h3>
              </div>
              <p className="text-2xl font-bold text-blue-400">12</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Deadline</h3>
              </div>
              <p className="text-2xl font-bold text-yellow-400">7 days</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{bounty.description}</p>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Experience with modern web development frameworks</li>
              <li>Knowledge of JavaScript and related technologies</li>
              <li>Understanding of best practices in software development</li>
              <li>Ability to work independently and meet deadlines</li>
              <li>Strong communication skills for collaboration</li>
            </ul>
          </div>

          {/* Apply Button */}
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Apply for Bounty
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Save
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mt-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Comments</h2>
          </div>
          
          {/* Sample Comments */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-white">John Doe</span>
                  <span className="text-gray-400 text-sm">2 hours ago</span>
                </div>
                <p className="text-gray-300">This looks like an interesting project! I have experience with D3.js and would love to contribute.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-white">Jane Smith</span>
                  <span className="text-gray-400 text-sm">5 hours ago</span>
                </div>
                <p className="text-gray-300">Could you provide more details about the specific chart types you're looking to implement?</p>
              </div>
            </div>
          </div>

          {/* Add Comment */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <div className="flex-1">
                <textarea
                  className="w-full bg-gray-800 text-white rounded-lg p-4 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="Add a comment..."
                />
                <div className="flex justify-end mt-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

