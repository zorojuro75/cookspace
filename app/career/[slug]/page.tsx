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
  requirements: {
    education: string[];
    experience: string[];
    skills: string[];
    documenets_required?: string[];
  };
  benefits: string[];
  how_to_apply: string;
  apply_now: string;
  submission_deadline?: string;
  equal_opportunity: string;
  slug: string;
}
type ApplicationForm = {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  cover_letter: File | null;
};
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
    requirements: {
      education: [
        "Minimum Bachelor's degree in Business Administration, Marketing, Management, or a related field.",
        "MBA or relevant post-graduate qualification is a plus.",
      ],
      experience: [
        "Minimum 2 years of experience in business development, franchise operations, client servicing, or a similar role.",
        "Experience in a startup or tech-driven business is preferred.",
      ],
      skills: [
        "Strong communication, leadership, and organizational skills.",
        "Ability to work independently and manage multiple stakeholders remotely.",
        "Proficiency in digital tools, online platforms, and business reporting.",
        "Fluent in both Bangla and English.",
      ],
      documenets_required: [
        "Updated CV/Resume",
        "Scanned copies of educational certificates",
        "Previous job experience documents (if available)",
        "Copy of valid Passport",
        "Current residential address",
        "Any recent utility bill (electricity, gas, water, internet, etc.) that contains the applicant’s name",
      ],
    },
    benefits: [
      "A competitive monthly salary (800–1500 CAD depending on experience).",
      "Flexible, fully remote work environment.",
      "The opportunity to be part of a growing international tech company.",
      "Career growth and exposure to global operations and expansion.",
    ],
    how_to_apply:
      "If you’re a proactive and capable professional ready to make an impact in a fast-paced, franchise-driven business, we want to hear from you!",
    submission_deadline: "25/05/2025",
    apply_now: "Apply now",
    equal_opportunity:
      "Cookspace Technologies Limited is committed to building a diverse and inclusive team. We encourage individuals of all backgrounds to apply.",
  },
];

export default function JobPage() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);
  const [tab, setTab] = useState("apply");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<ApplicationForm>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    cover_letter: null,
  });

  if (!job) return notFound();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("id", job.slug);
      formData.append("jobTitle", job.position.title);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);

      if (form.resume) {
        formData.append("resume", form.resume);
      }
      if (form.cover_letter) {
        formData.append("cover_letter", form.cover_letter);
      }

      const response = await fetch("/api/recruitment", {
        method: "POST",
        body: formData, // FormData is sent here
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to submit");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        resume: null,
        cover_letter: null,
      });
      alert(`Application submitted! Reference: ${data.referenceNumber}`);
    } catch (error) {
      console.error("Submission failed:", error);
      alert(error instanceof Error ? error.message : "Submission failed");
    } finally {
      setLoading(false);
    }
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
              <div className="mb-4 ms-4">
                <h4 className="font-semibold text-xl">
                  Educational Background
                </h4>
                <ul className="list-disc list-inside">
                  {job.requirements.education.map((item, index) => (
                    <li key={`edu-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 ms-4">
                <h4 className="font-semibold text-xl">Experience</h4>
                <ul className="list-disc list-inside">
                  {job.requirements.experience.map((item, index) => (
                    <li key={`exp-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 ms-4">
                <h4 className="font-semibold text-xl">Skills</h4>
                <ul className="list-disc list-inside">
                  {job.requirements.skills.map((item, index) => (
                    <li key={`skill-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              {job.requirements.documenets_required && (
                <div className="mb-4 ms-4">
                  <h4 className="font-semibold text-xl">
                    Documents Required (to be submitted during application or
                    interview process):
                  </h4>
                  <ul className="list-disc list-inside">
                    {job.requirements.documenets_required.map((item, index) => (
                      <li key={`doc-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">What We Offers</h2>
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
            <section>
              <h2 className="text-2xl font-bold mb-2">Submission Deadline</h2>
              <p>{job.submission_deadline}</p>
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
          <div className="mt-8 border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Apply for this position
            </h2>
            <p className="mb-6 text-gray-400">{job.how_to_apply}</p>

            <form onSubmit={handleSubmit} className="w-[500px]">
              <div className="flex flex-col gap-2 mb-4">
                <label className="text-red-500 text-sm">Full Name*</label>
                <Input
                  name="name"
                  placeholder="Your full name"
                  className="border rounded-none"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-red-500 text-sm">Email Address*</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="border rounded-none"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-red-500 text-sm">Phone Number*</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+1234567890"
                  className="border rounded-none"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-red-500 text-sm">
                  Upload Resume (PDF only)*
                </label>
                <Input
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  className="border rounded-none file:text-white file:bg-transparent"
                  onChange={(e) =>
                    setForm({ ...form, resume: e.target.files?.[0] || null })
                  }
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-red-500 text-sm">
                  Upload Cover Letter (PDF/DOC/DOCX)*
                </label>
                <Input
                  type="file"
                  name="cover_letter"
                  accept=".pdf,.doc,.docx"
                  className="border rounded-none file:text-white file:bg-transparent"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cover_letter: e.target.files?.[0] || null,
                    })
                  }
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="mt-4 w-full bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] hover:from-[#2657e0] hover:to-[#a540cd] rounded-full text-white font-semibold px-6 py-2 shadow-lg transition duration-300">
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
