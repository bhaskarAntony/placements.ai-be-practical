import React from 'react';
import { Brain, Users, Code2, Database, Cloud, Terminal, BarChart as ChartBar, Globe, Laptop, Target, Rocket, Award, MessageSquare, Building2, Star, BookOpen, Calendar, Video, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  const companies = [
    { name: "Wipro", image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", focus: "IT Services" },
    { name: "TCS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s", focus: "Consulting & IT" },
    { name: "Infosys", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png", focus: "Software Solutions" },
    { name: "Mphasis", image: "https://www.mphasis.com/content/dam/mphasis-com/global/logo/mphasis-logo.png.thumb.468.468.png", focus: "Digital Transformation" },
    { name: "HCL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-qdGVHLR1SywCBY93xbZ18R9AM7mCt2gkA&s", focus: "Tech Innovation" },
    { name: "LG Soft", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYPS7GrAuGf5AMvumCUvoXmL7D45V2XpSeQ&s", focus: "Software Development" },
    { name: "Polaris", image: "https://1000logos.net/wp-content/uploads/2021/05/Polaris-logo.png", focus: "Tech Solutions" },
    { name: "RedBus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Redbus_logo.jpg/1200px-Redbus_logo.jpg", focus: "Travel Tech" },
    { name: "IBM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBss61ZSzmBM75JqdYCVqsfqJ4JijX0mt9g&s", focus: "AI & Cloud" },
  ];

  const testimonials = [
    {
      name: "Siddeswarapradeep",
      content: "Be Practical transformed my career! Coming from an MBA background, I learned cutting-edge tech skills and landed a job with the help of amazing faculty and HR Kavitha Mam’s guidance. This is the best platform for anyone starting fresh!",
      role: "Software Developer at YoungMinds Technology",
      rating: 5,
    },
    {
      name: "Naik Harshith",
      content: "As a beginner, I went from zero to hero in the MERN stack course. The instructors were always there, and the hands-on projects gave me the confidence to secure a role in a top company. Highly recommend Be Practical!",
      role: "MERN Developer at Mverve Technologies",
      rating: 5,
    },
    {
      name: "Mohammed Rayan MB",
      content: "The best institute for Full Stack! Trainer Ganesh Sir’s teaching was phenomenal, and the supportive environment helped me excel. Be Practical is where dreams turn into careers!",
      role: "Full Stack Developer at Smartters Software",
      rating: 5,
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Master Tech Skills & Ace Your Interviews
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive tech education platform with AI-powered interview preparation, expert mentorship, and hands-on training in Full Stack Development, Cloud Computing, Data Science, and more.
          </p>
          <div className="flex gap-4 justify-center">
            <a href='https://be-practical.com/book-demo' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Start Learning
            </a>
            <a href='https://be-practical.com' className="border-2 border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-full text-lg font-semibold transition-all">
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* Tech Tracks Overview */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Code2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Complete Tech Career Tracks</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose from our comprehensive learning paths designed by industry experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MERN Stack */}
            <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
              <Database className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">MERN Stack</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• MongoDB for Database</li>
                <li>• Express.js Backend</li>
                <li>• React.js Frontend</li>
                <li>• Node.js Runtime</li>
                <li>• REST API Development</li>
              </ul>
            </div>

            {/* MEAN Stack */}
            <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
              <Database className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">MEAN Stack</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• MongoDB Database</li>
                <li>• Express.js Server</li>
                <li>• Angular Frontend</li>
                <li>• Node.js Backend</li>
                <li>• TypeScript Development</li>
              </ul>
            </div>

            {/* Java Full Stack */}
            <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
              <Terminal className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Java Full Stack</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Spring Boot</li>
                <li>• Hibernate ORM</li>
                <li>• React/Angular Frontend</li>
                <li>• MySQL/PostgreSQL</li>
                <li>• Microservices Architecture</li>
              </ul>
            </div>

            {/* Python Full Stack */}
            <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
              <Terminal className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Python Full Stack</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Django/Flask Backend</li>
                <li>• React/Vue Frontend</li>
                <li>• PostgreSQL Database</li>
                <li>• RESTful APIs</li>
                <li>• Python Web Development</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
              <Cloud className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS/Azure/GCP</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure as Code</li>
                <li>• Cloud Security</li>
              </ul>
            </div>

            {/* Data Science */}
            <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
              <ChartBar className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Data Science</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Python for Data Science</li>
                <li>• Machine Learning</li>
                <li>• Deep Learning</li>
                <li>• Data Visualization</li>
                <li>• Statistical Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Interview Preparation */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Brain className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-4xl font-bold mb-6">AI-Powered Interview Preparation</h2>
              <p className="text-gray-300 text-lg mb-6">
                Practice with our advanced AI system that simulates real interview scenarios and provides instant feedback to improve your performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Technical Interviews</h3>
                  <p className="text-gray-400">Practice coding challenges with AI feedback</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">System Design</h3>
                  <p className="text-gray-400">Learn architecture patterns and best practices</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Behavioral Questions</h3>
                  <p className="text-gray-400">Master STAR method responses</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Mock Interviews</h3>
                  <p className="text-gray-400">Real-time AI evaluation</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="AI Interview"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Terminal className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Technologies You'll Master</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React.js</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js</li>
                <li>Spring Boot</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Database</h3>
              <ul className="space-y-2 text-gray-300">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>Elasticsearch</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">DevOps</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>Git</li>
                <li>AWS/Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Projects */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Laptop className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
              Real-World Projects
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Dive into hands-on, production-grade projects using cutting-edge tech stacks. Build a portfolio that stands out in the industry!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MERN Stack Projects */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Online Learning Platform</h3>
              <p className="text-gray-400 mb-4">Create a scalable e-learning app with video streaming, quizzes, and user progress tracking.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">MongoDB</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Real-Time Chat Application</h3>
              <p className="text-gray-400 mb-4">Build a chat app with group messaging, file sharing, and real-time notifications.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">Express.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">Socket.io</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Food Delivery System</h3>
              <p className="text-gray-400 mb-4">Develop a full-featured food ordering app with live order tracking and payment integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">MongoDB</span>
              </div>
            </div>

            {/* MEAN Stack Projects */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Event Management Portal</h3>
              <p className="text-gray-400 mb-4">Design a platform for event creation, ticket booking, and attendee management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm">Angular</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">MongoDB</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Job Board Application</h3>
              <p className="text-gray-400 mb-4">Build a job listing platform with advanced search, resume uploads, and employer dashboards.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm">Angular</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">Express.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">MongoDB</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Fitness Tracker</h3>
              <p className="text-gray-400 mb-4">Create a fitness app with workout logging, progress charts, and social sharing features.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm">Angular</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">MongoDB</span>
              </div>
            </div>

            {/* Java Full Stack Projects */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Banking System</h3>
              <p className="text-gray-400 mb-4">Develop a secure online banking app with account management and transaction processing.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Healthcare Portal</h3>
              <p className="text-gray-400 mb-4">Build a patient management system with appointment scheduling and medical records.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Angular</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">MySQL</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Inventory Management</h3>
              <p className="text-gray-400 mb-4">Create a system for stock tracking, order processing, and real-time analytics.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* Python Full Stack Projects */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Blogging Platform</h3>
              <p className="text-gray-400 mb-4">Design a dynamic blog site with user authentication, comments, and rich text editing.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Django</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Expense Tracker</h3>
              <p className="text-gray-400 mb-4">Build a personal finance app with budgeting tools, charts, and multi-user support.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Flask</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">SQLite</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">E-Voting System</h3>
              <p className="text-gray-400 mb-4">Develop a secure online voting platform with blockchain-inspired audit trails.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Django</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* Cloud & DevOps Projects */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">CI/CD Pipeline Setup</h3>
              <p className="text-gray-400 mb-4">Automate deployment for a web app using containerization and cloud services.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">Docker</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Jenkins</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">AWS</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Serverless Chatbot</h3>
              <p className="text-gray-400 mb-4">Build a scalable chatbot using cloud functions and natural language processing.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">AWS Lambda</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">API Gateway</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">DynamoDB</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Kubernetes Cluster</h3>
              <p className="text-gray-400 mb-4">Deploy a microservices app with load balancing and auto-scaling on the cloud.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Docker</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">GCP</span>
              </div>
            </div>

            {/* Data Science Projects */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Stock Price Predictor</h3>
              <p className="text-gray-400 mb-4">Build a model to forecast stock prices using historical data and visualizations.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-400 text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Pandas</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">TensorFlow</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Sentiment Analyzer</h3>
              <p className="text-gray-400 mb-4">Create a tool to analyze social media sentiment with real-time dashboards.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-400 text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">NLP</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">Plotly</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Fraud Detection System</h3>
              <p className="text-gray-400 mb-4">Develop an ML model to detect fraudulent transactions in real-time.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-400 text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">Scikit-learn</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">PySpark</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href='https://be-practical.com/book-demo' className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg">
              Start Building Now
            </a>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      {/* <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Industry Partners</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Learn from curriculum designed with top tech companies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold">Google</h3>
              <p className="text-gray-400">Cloud & AI</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold">Microsoft</h3>
              <p className="text-gray-400">Azure & .NET</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold">Amazon</h3>
              <p className="text-gray-400">AWS & DevOps</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold">Meta</h3>
              <p className="text-gray-400">React & Open Source</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Industry Partners
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Join a network of top-tier companies like Wipro, TCS, and IBM. Our curriculum is designed with industry leaders to ensure you’re job-ready!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                <p className="text-gray-400 text-sm">{company.focus}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href='https://be-practical.com/book-demo' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Join with Us
            </a>
          </div>
        </div>
      </section>
      

      {/* Student Success Stories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-spin-slow" />
            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
              Success Stories That Inspire
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Hear from our students who turned their dreams into reality with Be Practical Tech Solutions. Your success story starts here!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.content}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-4">
              Ready to write your own success story?
            </p>
            <a href='https://be-practical.com/book-demo' className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg">
              Join Be Practical Today
            </a>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Comprehensive Learning Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl">
              <Video className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Video Courses</h3>
              <p className="text-gray-400">HD quality tutorials with detailed explanations</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <Terminal className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Code Labs</h3>
              <p className="text-gray-400">Interactive coding environments</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <MessageSquare className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Discussion Forums</h3>
              <p className="text-gray-400">Community support and networking</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <BookOpen className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-gray-400">Comprehensive guides and references</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Support */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Career Support</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Resume Building</h3>
              <p className="text-gray-400">Professional resume review and optimization</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Job Placement</h3>
              <p className="text-gray-400">Direct connections with hiring partners</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Career Coaching</h3>
              <p className="text-gray-400">1-on-1 guidance for career growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Industry Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">AWS Certified</h3>
              <p className="text-gray-400">Cloud Practitioner to Solutions Architect</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Microsoft Azure</h3>
              <p className="text-gray-400">AZ-900 to AZ-304 certifications</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Google Cloud</h3>
              <p className="text-gray-400">Associate to Professional levels</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">MongoDB</h3>
              <p className="text-gray-400">Developer & DBA certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Program */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Users className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-4xl font-bold mb-6">Expert Mentorship</h2>
              <p className="text-gray-300 text-lg mb-6">
                Get personalized guidance from industry veterans with years of experience at top tech companies.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Weekly 1-on-1 sessions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Code reviews and feedback
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Career path guidance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Interview preparation
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80"
                alt="Mentorship"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mock Interview Program */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Calendar className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Comprehensive Interview Preparation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Technical Interviews</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Data Structures & Algorithms</li>
                <li>• System Design</li>
                <li>• Code Reviews</li>
                <li>• Architecture Patterns</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Behavioral Interviews</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Leadership Principles</li>
                <li>• Situation-based Questions</li>
                <li>• Communication Skills</li>
                <li>• Problem-solving Approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <GraduationCap className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Structured Learning Paths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Beginner Track</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Programming Fundamentals</li>
                <li>• Basic Web Development</li>
                <li>• Version Control</li>
                <li>• Database Basics</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Intermediate Track</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Full Stack Development</li>
                <li>• API Design</li>
                <li>• Testing & Deployment</li>
                <li>• Cloud Basics</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Advanced Track</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• System Architecture</li>
                <li>• Microservices</li>
                <li>• DevOps & SRE</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Tech Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who have transformed their careers through our comprehensive tech education platform.
          </p>
          <div className="flex gap-4 justify-center">
            <a href='https://be-practical.com/book-demo' className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Enroll Now
            </a>
            <a href='https://be-practical.com' className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;