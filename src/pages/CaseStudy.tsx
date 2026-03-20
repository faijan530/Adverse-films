import { projects } from "../data/projects";

export default function CaseStudy() {
  // Get the ID from URL path
  const pathParts = window.location.pathname.split('/');
  const id = pathParts[pathParts.length - 1];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The case study you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.location.href = '/work'}
            className="bg-accent text-black px-8 py-4 text-lg font-black tracking-wider shadow-2xl shadow-accent/30 hover:shadow-accent/50 transform hover:scale-105 transition-all duration-500"
          >
            View All Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">

      {/* 🎬 HERO VIDEO */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src={project.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black"></div>

        <div className="relative z-10 flex items-end h-full max-w-7xl mx-auto px-6 pb-20">
          <div>
            <p className="text-accent font-bold tracking-wider uppercase mb-4">{project.category}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
              {project.title}
            </h1>
            <div className="w-32 h-1 bg-accent"></div>
          </div>
        </div>
      </section>

      {/* ❗ PROBLEM */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/60 mb-6 backdrop-blur-sm bg-white/5">
              THE CHALLENGE
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              <span className="text-red-500">PROBLEM</span>
            </h2>
            <div className="w-24 h-1 bg-red-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            {project.problem}
          </p>
        </div>
      </section>

      {/* 💡 IDEA */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/60 mb-6 backdrop-blur-sm bg-white/5">
              BREAKTHROUGH
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              <span className="text-yellow-500">IDEA</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            {project.idea}
          </p>
        </div>
      </section>

      {/* 🎥 EXECUTION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/60 mb-6 backdrop-blur-sm bg-white/5">
              PRODUCTION
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              <span className="text-blue-500">EXECUTION</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            {project.execution}
          </p>
        </div>
      </section>

      {/* 📈 RESULT */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/60 mb-6 backdrop-blur-sm bg-white/5">
              IMPACT
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              <span className="text-green-500">RESULTS</span>
            </h2>
            <div className="w-24 h-1 bg-green-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            {project.result}
          </p>
        </div>
      </section>

      {/* 📩 CTA */}
      <section className="relative py-32 px-6 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/2 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/60 mb-6 backdrop-blur-sm bg-white/5">
              LET'S CREATE
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="text-white">Let's create something</span>
              <span className="block text-accent">people remember.</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-12"></div>
          </div>

          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Every great project starts with a conversation. Let's discuss how we can bring your 
            cinematic vision to life with our expertise and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button 
              onClick={() => window.location.href = '#contact'}
              className="bg-accent text-black px-16 py-6 text-xl font-black tracking-wider shadow-2xl shadow-accent/30 hover:shadow-accent/50 transform hover:scale-105 transition-all duration-500"
            >
              START A PROJECT
            </button>
            <button 
              onClick={() => window.location.href = '/work'}
              className="px-16 py-6 text-xl font-black tracking-wider border-2 border-white/30 hover:border-accent hover:bg-accent hover:text-black backdrop-blur-xl transform hover:scale-105 transition-all duration-500"
            >
              VIEW MORE WORK
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
