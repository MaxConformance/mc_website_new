import PageHero from "@/components/PageHero";
import { Scene, scenes } from "@/components/scenes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { site } from "@/config/site";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at info@maxconformance.com",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactForm.mutate(data);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title={<>Get In <span className="gradient-text">Touch</span></>}
          text={<>Questions about compliance, our services or Synfiniti AI? Request a consultation, a demo or a Proof of Value and we will get back to you.</>}
          visual={<Scene {...scenes.contact} />}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="service-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-white border-slate-300 focus:border-magenta-400" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-white border-slate-300 focus:border-magenta-400" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className="bg-white border-slate-300 focus:border-magenta-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white border-slate-300 focus:border-magenta-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-slate-300 focus:border-magenta-400">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                          <SelectItem value="compliance">Compliance Management</SelectItem>
                          <SelectItem value="security-audits">Security Audits</SelectItem>
                          <SelectItem value="web-app-development">Web App Development</SelectItem>
                          <SelectItem value="platform">Synfiniti AI Platform</SelectItem>
                          <SelectItem value="pov">Synfiniti AI Proof of Value</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          placeholder="Tell us about your compliance needs..."
                          className="bg-white border-slate-300 focus:border-magenta-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="btn-primary w-full py-3 font-semibold"
                  disabled={submitContactForm.isPending}
                >
                  {submitContactForm.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 icon-badge rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <a href={`mailto:${site.email}`} className="font-medium hover:text-magenta-600">{site.email}</a>
                    <p className="text-slate-600 text-sm">General inquiries</p>
                  </div>
                </div>
                {site.phones.map((ph) => (
                  <div key={ph} className="flex items-center space-x-3">
                    <div className="w-10 h-10 icon-badge rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-navy-600" />
                    </div>
                    <a href={`tel:${ph.replace(/\s/g, "")}`} className="font-medium hover:text-magenta-600">{ph}</a>
                  </div>
                ))}
                {site.address && (
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 icon-badge rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-navy-600" />
                    </div>
                    <p className="font-medium">{site.address}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="w-10 h-10 icon-badge rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-navy-600" />
                </a>
                <a href={site.social.twitter} aria-label="X / Twitter" target="_blank" rel="noreferrer" className="w-10 h-10 icon-badge rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Twitter className="w-5 h-5 text-navy-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
