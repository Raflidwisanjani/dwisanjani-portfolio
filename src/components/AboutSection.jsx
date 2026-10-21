import {ChartNoAxesCombined, ChartPie, Bot} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-screen px-4 relative">
      {" "}
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Science Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Hi, I'm Rafli, an industrial engineering graduate with a passion for uncovering
              patterns in data and turning them into meaningful solutions.
              I'm fascinated by how a messy dataset can tell a clear story once you
              look at it the right way.
            </p>

            <p className="text-muted-foreground">
              I work with machine learning, data analysis, and
              visualization to answer real-world questions.
              I'm always learning, experimenting with new tools, and looking for
              projects where data can make a positive impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/CV_Mochamad Rafli Dwisanjani.pdf"
                download="Mochamad Rafli Dwisanjani_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartNoAxesCombined className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Analyzing complex datasets to extract insights and drive data-informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartPie className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Visualization</h4>
                  <p className="text-muted-foreground">
                    Creating compelling visual representations of data to inform decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Developing and deploying machine learning models to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
