"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

export interface JobPosting {
  title: string;
  location: string;
  company: {
    name: string;
    description: string;
  };
  salary: {
    currency: string;
    min: number;
    max: number;
    period: "month" | "year";
    notes?: string;
  };
  about_us: string;
  position: {
    title: string;
    description: string;
  };
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  how_to_apply: string;
  apply_now: string;
  equal_opportunity: string;
  slug: string;
}

const jobs: JobPosting[] = [
  {
    title: "Business Development Executive",
    slug: "business-development-executive",
    location: "Remote (Candidates must reside in Bangladesh)",
    company: {
      name: "Cookspace Technologies Limited",
      description:
        "Cookspace Technologies Limited is a Canada-based tech company powering innovative ventures like Munchies—a fast-growing food and essentials delivery platform in Bangladesh.",
    },
    salary: {
      currency: "CAD",
      min: 800,
      max: 1500,
      period: "month",
      notes: "based on experience and performance",
    },
    about_us:
      "Cookspace Technologies Limited is a Canada-based tech company powering innovative ventures like Munchies—a fast-growing food and essentials delivery platform in Bangladesh. As we scale across the country and internationally, we are looking for passionate and skilled individuals to join our remote team in Bangladesh.",
    position: {
      title: "Business Development Executive",
      description:
        "As a Business Development Executive, you will be the key connection between Cookspace Technologies and our Munchies franchise partners in Bangladesh. Your role will be vital in helping new franchisees set up operations, understand our systems, and grow their business sustainably.",
    },
    responsibilities: [
      "Act as the main point of contact for franchisees in different cities.",
      "Assist franchise partners in setting up their operations, onboarding staff, and understanding company tools and systems.",
      "Develop and implement strategies to help franchisees grow their revenue and reach.",
      "Monitor franchisee performance and provide ongoing business support.",
      "Coordinate with the central team to ensure smooth execution of campaigns, training, and marketing efforts.",
    ],
    requirements: [
      "Proven experience in business development, operations, or franchise management is highly preferred.",
      "Strong communication, leadership, and problem-solving skills.",
      "Ability to work independently and manage multiple stakeholders remotely.",
      "Comfortable with digital tools, reporting, and coordination via online platforms.",
      "Must be based in Bangladesh and fluent in Bangla and English.",
    ],
    benefits: [
      "A competitive monthly salary (800–1500 CAD depending on experience).",
      "Flexible, fully remote work environment.",
      "The opportunity to be part of a growing international tech company.",
      "Career growth and exposure to global operations and expansion.",
    ],
    how_to_apply:
      "If you’re a proactive and capable professional ready to make an impact in a fast-paced, franchise-driven business, we want to hear from you!",
    apply_now: "Apply now",
    equal_opportunity:
      "Cookspace Technologies Limited is committed to building a diverse and inclusive team. We encourage individuals of all backgrounds to apply.",
  },
];

export default function JobPage() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);
  const [tab, setTab] = useState("details");

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
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <div className="h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center sm:text-3xl">
          {job.title}
        </h1>
        <p className="text-md text-gray-300 mt-1 text-center sm:text-sm">
          {job.location} • {job.salary.currency} {job.salary.min}–
          {job.salary.max} / {job.salary.period}
        </p>
        {job.salary.notes && (
          <p className="text-sm text-gray-400 mt-1">{job.salary.notes}</p>
        )}
      </div>

      <Tabs value={tab} onValueChange={(val) => setTab(val)} className="mt-6">
        <TabsList className="grid grid-cols-2 gap-5 bg-transparent text-white">
          <TabsTrigger
            value="details"
            className="data-[state=active]:bg-black data-[state=active]:text-white text-white border-0 rounded-none"
          >
            Job Details
          </TabsTrigger>
          <TabsTrigger
            value="apply"
            className={`border-0 rounded-none bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] hover:from-[#2657e0] hover:to-[#a540cd] text-white font-semibold transition duration-300"`}
          >
            {tab === "apply" ? "Application" : "Apply Now"}
          </TabsTrigger>
        </TabsList>
        <Separator />
        {/* Job Details Tab */}
        <TabsContent value="details">
          <div className="mt-8 space-y-6 text-gray-200">
            <section>
              <h2 className="text-2xl font-bold mb-2">About Us</h2>
              <p>{job.about_us}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">Position</h2>
              <h3 className="text-xl font-semibold">{job.position.title}</h3>
              <p>{job.position.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">Responsibilities</h2>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">Requirements</h2>
              <ul className="list-disc list-inside">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">Benefits</h2>
              <ul className="list-disc list-inside">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">Equal Opportunity</h2>
              <p>{job.equal_opportunity}</p>
            </section>
            <section className="pt-6 text-center">
              <Button
                onClick={() => setTab("apply")}
                className="bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] hover:from-[#2657e0] hover:to-[#a540cd] rounded-full text-white font-semibold px-6 py-2 shadow-lg transition duration-300"
              >
                Apply Now
              </Button>
            </section>
          </div>
        </TabsContent>

        {/* Application Tab */}
        <TabsContent value="apply">
          <div className="mt-8 border-gray-700 pt-8">
            <h2 className="text-2xl font-bold mb-6">Apply for this position</h2>
            <p className="mb-4 text-gray-300">{job.how_to_apply}</p>
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
            <p className="mt-4 text-gray-400 text-sm">{job.apply_now}</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
