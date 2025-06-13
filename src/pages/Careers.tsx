
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "We're looking for an experienced React developer to join our frontend development team and help build amazing user experiences."
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Join our mobile team to develop cutting-edge iOS and Android applications using React Native and native technologies."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Help us create beautiful and intuitive user interfaces that provide exceptional user experiences across all our projects."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="container-padding py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <span className="text-xl font-semibold">Nexmize</span>
            </Link>
            <Link to="/" className="text-neutral-600 hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Join Our Team</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and want to make a difference.
            </p>
          </div>

          <div className="mb-16">
            <Card className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Why Work at Nexmize?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Flexible Work Environment</h3>
                  <p className="text-neutral-600 text-sm">Work remotely or in our modern office spaces with flexible hours that fit your lifestyle.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Growth Opportunities</h3>
                  <p className="text-neutral-600 text-sm">Continuous learning opportunities, mentorship programs, and clear career advancement paths.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Competitive Benefits</h3>
                  <p className="text-neutral-600 text-sm">Comprehensive health coverage, retirement plans, and generous paid time off.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Cutting-Edge Projects</h3>
                  <p className="text-neutral-600 text-sm">Work on innovative projects using the latest technologies and industry best practices.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.title} className="glass-panel p-6 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold">{position.title}</h3>
                        <span className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-xs font-medium">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                      <p className="text-neutral-600 text-sm">{position.description}</p>
                    </div>
                    <Button className="button-primary whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold mb-4">Don't See a Perfect Fit?</h2>
              <p className="text-neutral-600 mb-6">
                We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button className="button-primary">
                Send Your Resume
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;
