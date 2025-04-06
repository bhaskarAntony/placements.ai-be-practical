import React from 'react';
import { Brain, Users, Code2, Database, Cloud, Terminal, BarChart as ChartBar, Globe, Laptop, Target, Rocket, Award, MessageSquare, Building2, Star, BookOpen, Calendar, Video, Briefcase, GraduationCap, Mic, FileText, FolderKanban, Gauge, UserCheck, ClipboardCheck, Sparkle, LayoutDashboard, Bot, MessageCircle } from 'lucide-react';
import PlacementCarousel from './PlacementCarousel';

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

  const placementPartners = [
    {
      name: "AI Fermion",
      logo: "https://via.placeholder.com/100", // Replace with actual logo URL
      description: "AI-based tech firm actively hiring full-stack & ML developers.",
    },
    {
      name: "Linupex",
      logo: "https://via.placeholder.com/100", // Replace with actual logo URL
      description: "DevOps & Cloud consulting firm hiring across domains.",
    },
    {
      name: "TCS iON",
      logo: "https://via.placeholder.com/100",
      description: "National-level recruitment partner for freshers and interns.",
    },
    {
      name: "Infosys Springboard",
      logo: "https://via.placeholder.com/100",
      description: "Training & placement support through Infosys programs.",
    },
    {
      name: "Tech Mahindra",
      logo: "https://via.placeholder.com/100",
      description: "Tier-1 hiring partner for Java and Cloud engineers.",
    },
    {
      name: "Capgemini",
      logo: "https://via.placeholder.com/100",
      description: "Global tech firm recruiting through campus connect drives.",
    },
    // Add more partners as needed
  ];
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1581091870622-2f5ce43d6875?auto=format&fit=crop&q=80"
      alt="Background"
      className="w-full h-full object-cover opacity-20"
    />
  </div>
  <div className="container mx-auto px-4 z-10 text-center">
    <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
      Placements.AI by Be Practical
    </h1>
    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
      Unlock job success with AI-driven mock interviews, smart resume builder, skill-based job recommendations, and real-time mentorship – all under one roof.
    </p>
    <div className="flex gap-4 justify-center">
      <a href="https://be-practical.com/book-demo" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
        Try Placement.AI
      </a>
      <a href="https://be-practical.com" className="border-2 border-green-400 hover:bg-green-400/10 px-8 py-4 rounded-full text-lg font-semibold transition-all">
        Learn More
      </a>
    </div>
  </div>
</section>


      {/* Tech Tracks Overview */}
      <section className="py-20 bg-gray-800">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <Brain className="w-16 h-16 text-green-400 mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-6">AI-Powered Placement Tools</h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Advanced placement support system powered by Fermion, LinupX, and custom Be Practical tools to supercharge your career.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* AI Mock Interviews */}
      <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
        <Mic className="w-12 h-12 text-yellow-400 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">AI Mock Interviews</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Live simulation with instant feedback</li>
          <li>• Voice tone analysis for HR rounds</li>
          <li>• Coding + Behavioral interviews</li>
          <li>• Scoring & improvement suggestions</li>
          <li>• Auto-recorded for revision</li>
        </ul>
      </div>

      {/* Smart Resume Builder */}
      <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
        <FileText className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">Smart Resume Builder</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• ATS-ready resume formats</li>
          <li>• AI-based skill highlights</li>
          <li>• Auto-fetch from LinkedIn or input</li>
          <li>• Export PDF / DOC in 1-click</li>
          <li>• Resume score & optimization tips</li>
        </ul>
      </div>

      {/* Job Recommendation Engine */}
      <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
        <Briefcase className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">Job Recommendation Engine</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Skill-matching job alerts</li>
          <li>• Updated daily with real listings</li>
          <li>• Apply with one click</li>
          <li>• Save & track applications</li>
          <li>• Remote + Hybrid jobs included</li>
        </ul>
      </div>

      {/* Project Portfolio Builder */}
      <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
        <FolderKanban className="w-12 h-12 text-purple-400 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">Project Portfolio Builder</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Host class + personal projects</li>
          <li>• Live preview links</li>
          <li>• GitHub integration</li>
          <li>• PDF-ready summary portfolio</li>
          <li>• Showcased on Placement profile</li>
        </ul>
      </div>

      {/* Interview Readiness Score */}
      <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
        <Gauge className="w-12 h-12 text-red-400 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">Interview Readiness Score</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Real-time performance tracking</li>
          <li>• Based on coding, HR, aptitude</li>
          <li>• Daily progress graph</li>
          <li>• Smart suggestions to improve</li>
          <li>• Built with LinupX AI engine</li>
        </ul>
      </div>

      {/* One-on-One Mentorship */}
      <div className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
        <UserCheck className="w-12 h-12 text-indigo-400 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">One-on-One Mentorship</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Book sessions with industry experts</li>
          <li>• Resume review + job guidance</li>
          <li>• Feedback on interview performance</li>
          <li>• Career roadmap planning</li>
          <li>• Personal chat & follow-ups</li>
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
      <Bot className="w-16 h-16 text-blue-500 mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Tech Behind Placements.AI
      </h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Boost your placement readiness with cutting-edge tools powered by AI, industry-standard workflows, and smart automation.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      
      {/* AI Mock Interviews */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <UserCheck className="w-10 h-10 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">AI Mock Interviews</h3>
        <p className="text-gray-400 text-sm">Simulated HR & Tech interviews with real-time voice and behavior feedback.</p>
      </div>

      {/* Resume Builder */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <FileText className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Smart Resume Builder</h3>
        <p className="text-gray-400 text-sm">Create ATS-friendly resumes aligned with current hiring trends and job roles.</p>
      </div>

      {/* Interview Feedback */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <MessageCircle className="w-10 h-10 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Real-time Feedback</h3>
        <p className="text-gray-400 text-sm">Voice, confidence, and facial analysis with improvement suggestions.</p>
      </div>

      {/* Live Dashboard */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <LayoutDashboard className="w-10 h-10 text-pink-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Placement Dashboard</h3>
        <p className="text-gray-400 text-sm">Track interviews, tasks, resume scores, and skill readiness in one place.</p>
      </div>

      {/* Portfolio Generator */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <Sparkle className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Portfolio Generator</h3>
        <p className="text-gray-400 text-sm">Auto-generate a personal portfolio with your projects, skills, and testimonials.</p>
      </div>

      {/* Job Board */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <Briefcase className="w-10 h-10 text-red-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Live Job Board</h3>
        <p className="text-gray-400 text-sm">Curated openings updated daily. Apply directly from the dashboard.</p>
      </div>

      {/* Skill Assessments */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <ClipboardCheck className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Skill Assessments</h3>
        <p className="text-gray-400 text-sm">Topic-wise quizzes and real-world coding assessments for interview readiness.</p>
      </div>

      {/* Code Labs */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all text-center">
        <Code2 className="w-10 h-10 text-orange-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Code Playground</h3>
        <p className="text-gray-400 text-sm">Practice in-browser with support for C, C++, Java, Python, and more.</p>
      </div>

    </div>
  </div>
</section>


      {/* Practical Projects */}
      {/* <section className="py-10 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Briefcase className="mx-auto h-10 w-10 text-blue-600" />
          <h2 className="text-3xl font-bold mt-2">Our Hiring & Placement Partners</h2>
          <p className="text-gray-600 mt-2">
            These industry leaders trust our students and offer real-world opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {placementPartners.map((company, index) => (
            <div key={index} className="hover:shadow-xl transition duration-300">
              <div className="flex flex-col items-center text-center p-6">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold">{company.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <PlacementCarousel/>

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
      {/* <section className="py-20 bg-gray-800">
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
      </section> */}
      

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
      {/* <section className="py-20 bg-gray-800">
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
      </section> */}

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
      <section className="py-20 bg-gray-800 text-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <Calendar className="w-16 h-16 text-red-400 mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-4">Comprehensive Interview Preparation</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Our placement success isn't by chance — it's by design. From coding rounds to real-time HR questions, we train you for everything.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="bg-gray-900 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Technical Interviews</h3>
        <ul className="space-y-4 text-gray-300">
          <li>• Data Structures & Algorithms</li>
          <li>• System Design (Live Scenarios)</li>
          <li>• Real Code Reviews with Mentors</li>
          <li>• High-level Architecture Round Prep</li>
        </ul>
      </div>
      <div className="bg-gray-900 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Behavioral Interviews</h3>
        <ul className="space-y-4 text-gray-300">
          <li>• HR Round Mock Interviews</li>
          <li>• Leadership & STAR Technique</li>
          <li>• How to Handle Gaps & Career Shifts</li>
          <li>• Effective Communication Mastery</li>
        </ul>
      </div>
    </div>

    {/* 🚀 Placement Impact Section */}
    <div className="bg-gray-900 rounded-xl p-10 shadow-lg">
      <h3 className="text-3xl font-bold mb-6 text-center text-red-400">Real Students. Real Placements.</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4 text-gray-300">
            🎯 “I successfully completed the Python Development course at Be Practical Tech Solutions, and it was an amazing learning experience. The training was well-structured, with a strong focus on practical applications. A special thanks to Javeed Sir and Namitha Maam for their excellent guidance and support throughout the course. I highly recommend this institute to anyone looking to build a career in tech!” 
          </p>
          <p className="text-sm text-gray-500 italic">— Sajjad Ahmed</p>
        </div>
        <div>
          <p className="text-lg mb-4 text-gray-300">
            🚀 “I had a good experience at BE Practical Tech Solution Institute while completing my Java Full Stack course. The instructors, Atul Vaibhav Sir and Javed alli Sir provided excellent guidance, making technical concepts easy to understand. The training had a perfect balance between theoretical knowledge and hands-on practical sessions, equipping me with real-world skills. Kavitha Mam and the entire staff were supportive, always ready to assist with any doubts, which made the learning process smooth.”
          </p>
          <p className="text-sm text-gray-500 italic">— 
          SANJAY RAO</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-400 mb-2">And these are just a few...</p>
        <p className="text-white text-xl font-semibold">We’re helping students land roles at companies like TCS iON, Infosys, Capgemini, and Wipro every month!</p>
      </div>
    </div>
  </div>
</section>


      {/* Learning Paths */}
      <section className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <GraduationCap className="w-16 h-16 text-green-400 mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-4">Placements.AI — Real Companies. Real Offers.</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        From freshers to working professionals, we help launch tech careers at leading companies. Your next job starts here.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Development Roles */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-green-500 p-2 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path d="M3 7l6 6-6 6M21 7l-6 6 6 6" /></svg>
          </span>
          <h3 className="text-xl font-semibold">Development & Engineering</h3>
        </div>
        <ul className="space-y-2 text-gray-300">
          <li>• Placed at IBM, TCS Red Bus, and Infosys and more...</li>
          <li>• Frontend, Backend, and Full Stack roles</li>
          <li>• MERN / Java / Python-based projects</li>
        </ul>
      </div>

      {/* Data & AI Roles */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-purple-500 p-2 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12l9-5-9-5-9 5 9 5z" /></svg>
          </span>
          <h3 className="text-xl font-semibold">Data Science & AI</h3>
        </div>
        <ul className="space-y-2 text-gray-300">
          <li>• Hired by Cognizant, Capgemini</li>
          <li>• ML Engineering & AI Support roles</li>
          <li>• Python, TensorFlow, Prompt Engineering</li>
        </ul>
      </div>

      {/* DevOps / Cloud Roles */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-blue-500 p-2 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path d="M3 10h4l3 10 4-18 3 8h4" /></svg>
          </span>
          <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
        </div>
        <ul className="space-y-2 text-gray-300">
          <li>• Placed at Linupex, Wipro, and AWS Partners</li>
          <li>• Roles in DevOps, SRE, and Infra Automation</li>
          <li>• CI/CD, Docker, Kubernetes, AWS</li>
        </ul>
      </div>
    </div>

    {/* Call to Action */}
   <div className="mt-16 text-center">
  <p className="text-lg text-gray-400 mb-4">Want to be our next placement story?</p>
  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition">
    Join Placements
  </button>
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