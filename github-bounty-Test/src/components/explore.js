'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Bell } from 'lucide-react';
// Mock data for bounties
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

export default function ExploreBounties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Recent');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

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

  const getImagePlaceholder = (bountyId) => {
    const gradId = `grad-${bountyId}`;
    const patterns = [
      // Data visualization - flowing curves
      <svg key={`svg-${bountyId}`} viewBox="0 0 200 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${gradId}-1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#1e40af', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <path d="M0,60 Q50,20 100,60 T200,60" stroke={`url(#${gradId}-1)`} strokeWidth="3" fill="none" />
        <path d="M0,80 Q50,40 100,80 T200,80" stroke={`url(#${gradId}-1)`} strokeWidth="2" fill="none" opacity="0.7" />
      </svg>,
      // ML/AI - circular nodes
      <svg key={`svg-${bountyId}`} viewBox="0 0 200 120" className="w-full h-full">
        <defs>
          <radialGradient id={`${gradId}-2`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{stopColor:'#0ea5e9', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#0284c7', stopOpacity:1}} />
          </radialGradient>
        </defs>
        <circle cx="100" cy="60" r="25" fill={`url(#${gradId}-2)`} />
        <circle cx="60" cy="40" r="15" fill={`url(#${gradId}-2)`} opacity="0.8" />
        <circle cx="140" cy="40" r="15" fill={`url(#${gradId}-2)`} opacity="0.8" />
        <circle cx="60" cy="80" r="15" fill={`url(#${gradId}-2)`} opacity="0.8" />
        <circle cx="140" cy="80" r="15" fill={`url(#${gradId}-2)`} opacity="0.8" />
      </svg>,
      // Algorithm - geometric shapes
      <svg key={`svg-${bountyId}`} viewBox="0 0 200 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${gradId}-3`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#7c3aed', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#a855f7', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <polygon points="100,20 120,50 100,80 80,50" fill={`url(#${gradId}-3)`} />
        <polygon points="60,30 80,60 60,90 40,60" fill={`url(#${gradId}-3)`} opacity="0.7" />
        <polygon points="140,30 160,60 140,90 120,60" fill={`url(#${gradId}-3)`} opacity="0.7" />
      </svg>,
      // Documentation - lines/text
      <svg key={`svg-${bountyId}`} viewBox="0 0 200 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${gradId}-4`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#059669', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#10b981', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="140" height="8" fill={`url(#${gradId}-4)`} rx="4" />
        <rect x="30" y="50" width="120" height="8" fill={`url(#${gradId}-4)`} rx="4" opacity="0.8" />
        <rect x="30" y="70" width="100" height="8" fill={`url(#${gradId}-4)`} rx="4" opacity="0.6" />
        <rect x="30" y="90" width="80" height="8" fill={`url(#${gradId}-4)`} rx="4" opacity="0.4" />
      </svg>,
      // UI/UX - layered rectangles
      <svg key={`svg-${bountyId}`} viewBox="0 0 200 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${gradId}-5`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#dc2626', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#ef4444', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <rect x="40" y="30" width="120" height="60" fill={`url(#${gradId}-5)`} rx="8" />
        <rect x="50" y="40" width="100" height="40" fill={`url(#${gradId}-5)`} rx="6" opacity="0.8" />
        <rect x="60" y="50" width="80" height="20" fill={`url(#${gradId}-5)`} rx="4" opacity="0.6" />
      </svg>,
      // Tutorial - step indicators
      <svg key={`svg-${bountyId}`} viewBox="0 0 200 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${gradId}-6`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#ea580c', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#f97316', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="60" r="12" fill={`url(#${gradId}-6)`} />
        <circle cx="100" cy="60" r="12" fill={`url(#${gradId}-6)`} opacity="0.8" />
        <circle cx="150" cy="60" r="12" fill={`url(#${gradId}-6)`} opacity="0.6" />
        <line x1="62" y1="60" x2="88" y2="60" stroke={`url(#${gradId}-6)`} strokeWidth="2" />
        <line x1="112" y1="60" x2="138" y2="60" stroke={`url(#${gradId}-6)`} strokeWidth="2" opacity="0.7" />
      </svg>
    ];
    
    const index = parseInt(bountyId) - 1;
    return patterns[index % patterns.length];
  };

  const filteredBounties = mockBounties.filter(bounty => {
    const matchesSearch = bounty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bounty.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || bounty.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Header */}
      <header className="bg-[#0c0c0c] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                MLSC Bounties
              </Link>
              
              {/* Navigation */}
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Explore
                </Link>
                <Link href="/my-bounties" className="text-gray-300 hover:text-white transition-colors">
                  My Bounties
                </Link>
                <Link href="/create-bounty" className="text-gray-300 hover:text-white transition-colors">
                  Create Bounty
                </Link>
              </nav>
            </div>

            {/* Search and Profile */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 bg-gray-800 text-gray-300 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                <Bell className="w-4 h-4 text-gray-300" />
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Explore Bounties</h1>
          <p className="text-gray-400">Find the perfect bounty to contribute to and earn rewards.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800 text-white px-4 py-2 pr-8 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="Recent">Sort by: Recent</option>
                <option value="Popular">Sort by: Popular</option>
                <option value="Difficulty">Sort by: Difficulty</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="appearance-none bg-gray-800 text-white px-4 py-2 pr-8 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="All">Difficulty: All</option>
                <option value="Easy">Difficulty: Easy</option>
                <option value="Medium">Difficulty: Medium</option>
                <option value="Hard">Difficulty: Hard</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Popularity Filter */}
            <div className="relative">
              <select className="appearance-none bg-gray-800 text-white px-4 py-2 pr-8 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option value="All">Popularity: All</option>
                <option value="High">Popularity: High</option>
                <option value="Medium">Popularity: Medium</option>
                <option value="Low">Popularity: Low</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bounty Cards */}
        <div className="space-y-6">
          {filteredBounties.map((bounty) => (
            <div
              key={bounty.id}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Content */}
                <div className="flex-1">
                  {/* Difficulty Badge */}
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getDifficultyColor(bounty.difficulty)}`}>
                      Difficulty: {bounty.difficulty}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">
                    {bounty.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {bounty.description}
                  </p>

                  {/* View Details Button */}
                  <Link
                    href={`/bounty/${bounty.id}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    View Details
                  </Link>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-full md:w-48 h-32 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full">
                      {getImagePlaceholder(bounty.id)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBounties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No bounties found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}