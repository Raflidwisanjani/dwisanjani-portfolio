import {BookOpen, Code, Cpu} from "lucide-react";

const skills = [
  // Coursework
  { name: "Coursework",
    icon: BookOpen,
    points: [
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Neural Networks",
    ]},

  // General
  { name: "General",
    icon: Code,
    points: [
      "Python",
      "SQL",
      "Github",
      "Power BI",
    ]},

  // Data Science
  { name: "Data Science",
    icon: Cpu,
    points: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
    ]},

];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => {
            const Icon = skill.icon;

            return (
              <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-12 w-12 text-primary" />
                </div>

                <h3 className="font-semibold text-lg text-center mb-4">{skill.name}</h3>

                <ul className="list-disc pl-5 space-y-1 text-left text-base text-muted-foreground marker:text-primary">
                  {skill.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
