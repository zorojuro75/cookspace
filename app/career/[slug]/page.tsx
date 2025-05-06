"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Senior Frontend Developer",
    slug: "senior-frontend-developer",
    location: "Remote",
    type: "Full-time",
    description: `
### Position Overview
Join our product team to build beautiful, responsive interfaces for our suite of applications that serve restaurants, cloud kitchens, and delivery companies worldwide.

### Key Responsibilities
* Design and develop responsive user interfaces using modern frontend technologies
* Collaborate with designers to transform mockups into functional interfaces
* Implement complex UI components and interactions that enhance user experience
* Ensure cross-browser compatibility and responsive design principles
* Write clean, reusable code and optimize for maximum performance
* Integrate with backend APIs and services
* Mentor junior developers and contribute to code reviews

### Requirements
* 5+ years of experience in frontend development
* Expert knowledge of JavaScript, HTML5, and CSS3
* Proficiency with React and state management solutions
* Strong understanding of responsive design principles
* Experience with testing frameworks and version control
* Knowledge of performance optimization techniques

### Preferred Qualifications
* Experience with TypeScript and Next.js
* Understanding of UI/UX design principles
* Prior work in food tech or logistics industries
* Experience with real-time applications

We offer competitive compensation, flexible remote work, professional development opportunities, comprehensive benefits, and a collaborative team environment.
`,
  },
  {
    title: "Backend Engineer",
    slug: "backend-engineer",
    location: "Remote",
    type: "Full-time",
    description: `
### Position Overview
Help us scale our infrastructure and build robust APIs to power our growing platform that processes thousands of delivery operations daily.

### Key Responsibilities
* Design and develop scalable backend services and APIs
* Architect database schemas that support our complex business logic
* Build efficient data processing pipelines for real-time delivery optimization
* Create microservices that handle critical business operations
* Implement authentication, authorization, and security measures
* Optimize query performance and application efficiency
* Collaborate with frontend engineers on service integration
* Participate in on-call rotations and technical documentation

### Requirements
* 3+ years experience in backend development
* Strong proficiency in at least one backend language (Node.js, Python, Go)
* Experience with RESTful API design and implementation
* Knowledge of SQL and NoSQL database technologies
* Understanding of caching, message queues, and async processing
* Experience with cloud services (AWS, GCP, or Azure)
* Familiarity with containerization and CI/CD pipelines

### Preferred Qualifications
* Experience with event-driven architectures
* Knowledge of geospatial data processing
* Understanding of optimization algorithms
* Familiarity with logistics or delivery systems
* Experience with GraphQL or serverless architectures

Join our team to solve complex technical challenges in the food delivery space with competitive compensation, flexible work arrangements, and comprehensive benefits.
`,
  },
  {
    title: "Product Designer",
    slug: "product-designer",
    location: "Remote",
    type: "Full-time",
    description: `
### Position Overview
Create intuitive and delightful user experiences for our complex delivery applications, helping food entrepreneurs worldwide operate more efficiently and profitably.

### Key Responsibilities
* Design user-centered interfaces for web and mobile applications
* Create wireframes, prototypes, and high-fidelity mockups
* Develop user flows, journey maps, and information architecture
* Conduct user research and usability testing to inform design decisions
* Collaborate with product managers and engineering teams
* Contribute to and maintain our design system
* Analyze user feedback to continuously improve experiences

### Requirements
* 3+ years of experience in product or UX/UI design
* Strong portfolio demonstrating design process and problem-solving
* Proficiency in design tools (Figma, Sketch, Adobe XD)
* Experience designing for both web and mobile platforms
* Understanding of accessibility and responsive design principles
* Knowledge of user research methodologies
* Ability to translate complex requirements into simple interfaces

### Preferred Qualifications
* Experience designing for complex systems or logistics applications
* Knowledge of design systems and component libraries
* Basic understanding of frontend development principles
* Experience with data visualization design
* Background in food tech, delivery, or logistics industries

We offer a creative environment with competitive compensation, remote flexibility, comprehensive benefits, and opportunities for professional growth.
`,
  },
];

export default function JobPage() {
    const { slug } = useParams();
    const job = jobs.find((j) => j.slug === slug);
  
    const [form, setForm] = useState({
      name: "",
      email: "",
      resume: "",
      message: "",
    });
  
    if (!job) return notFound();
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted", form);
    };
  
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-white">
        <div className="h-[60vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center sm:text-3xl">{job.title}</h1>
          <p className="text-md text-gray-300 mt-1 text-center sm:text-sm">
            {job.location} • {job.type}
          </p>
        </div>
  
        <div className="mt-8 space-y-8 text-gray-200">
          {job.description.split("\n###").map((section, index) => (
            <div key={index} className="space-y-4">
              {section.split("\n").map((line, lineIndex) => {
                if (line.startsWith("###")) {
                  return (
                    <h3 key={lineIndex} className="text-2xl font-bold mt-6 sm:text-xl">
                      {line.replace("###", "")}
                    </h3>
                  );
                }
                if (line.startsWith("#### ")) {
                  return (
                    <h4 key={lineIndex} className="text-xl font-semibold mt-6">
                      {line.replace("#### ", "")}
                    </h4>
                  );
                }
                if (line.startsWith("#####")) {
                  return (
                    <h5 key={lineIndex} className="text-lg font-medium mt-4">
                      {line.replace("#####", "")}
                    </h5>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={lineIndex} className="ml-4 list-disc list-inside">
                      {line.replace("- ", "")}
                    </li>
                  );
                }
                if (line.startsWith("* ")) {
                  return (
                    <li key={lineIndex} className="ml-4 list-none">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-gray-400 mr-2" />
                      {line.replace("* ", "")}
                    </li>
                  );
                }
                if (line.startsWith("**")) {
                  const parts = line.split("**");
                  return (
                    <p key={lineIndex} className="mt-2">
                      <strong>{parts[1]}</strong> {parts.slice(2).join("")}
                    </p>
                  );
                }
                return (
                  <p key={lineIndex} className="mt-2">
                    {line}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
  
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-bold mb-6">Apply for this position</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-6 rounded-lg"
          >
            <Input
              className="bg-gray-700 text-white placeholder-gray-400"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-gray-700 text-white placeholder-gray-400"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="url"
              name="resume"
              placeholder="Resume Link (e.g. Google Drive)"
              className="bg-gray-700 text-white placeholder-gray-400"
              value={form.resume}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Cover Letter / Message"
              className="bg-gray-700 text-white placeholder-gray-400"
              value={form.message}
              onChange={handleChange}
              rows={5}
            />
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 transition"
            >
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    );
}
