import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { projects } from '../lib/data';

const projectImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwc2lnbmFnZSUyMGx1eHVyeXxlbnwxfHx8fDE3Njk2MzI0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '2': 'https://images.unsplash.com/photo-1758813237985-f2259be96b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBsb2dvJTIwc2lnbnxlbnwxfHx8fDE3Njk2MzI0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '3': 'https://images.unsplash.com/photo-1768203634248-defe7e2e6ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZXh0ZXJpb3IlMjBzaWduJTIwbmlnaHR8ZW58MXx8fHwxNzY5NjMyNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  '4': 'https://images.unsplash.com/photo-1764885449345-d0d6629bf7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2VudGVyJTIwd2F5ZmluZGluZyUyMHNpZ25hZ2V8ZW58MXx8fHwxNzY5NjMyNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  '5': 'https://images.unsplash.com/photo-1658317707213-6e193ce678ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMHN0b3JlZnJvbnQlMjB3aW5kb3d8ZW58MXx8fHwxNzY5NjMyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  '6': 'https://images.unsplash.com/photo-1763663501401-00c4f2704dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3Njk1MzY4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '7': 'https://images.unsplash.com/photo-1724220635197-88733234958c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwc2lnbmFnZSUyMG1vZGVybnxlbnwxfHx8fDE3Njk2MzI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '8': 'https://images.unsplash.com/photo-1769490314920-0fdd432f1b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBuZW9uJTIwc2lnbiUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3Njk2MzI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '9': 'https://images.unsplash.com/photo-1645833752297-bdd63db489f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGxldHRlciUyMHNpZ24lMjBtZXRhbHxlbnwxfHx8fDE3Njk2MzI0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
};

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#06b6d4] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8b5cf6] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#06b6d4] text-sm font-semibold mb-6"
          >
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of premium signage installations across various industries and applications.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-gray-200 sticky top-16 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white'
                    : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={projectImages[project.id]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="inline-block px-3 py-1 bg-[#06b6d4] rounded-full text-xs font-semibold mb-3">
                          {project.category}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-2">{project.client}</p>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:hidden">
                    <div className="inline-block px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-xs font-semibold mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
