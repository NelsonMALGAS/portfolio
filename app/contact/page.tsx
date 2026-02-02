"use client";
import emailjs from "@emailjs/browser";

import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FormEvent, useState, useRef } from "react";
import { toast } from "sonner";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(062) 750 0236",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "zmalgas69@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Rustenburg, Chaneng, Robega Newstands 318",
  },
];



const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {

      if (!formRef.current) {
        toast.error("Form reference is missing. Please refresh and try again.")
        return
      }

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      );

      toast.success("Your message has been sent successfully. We'll get back to you shortly!")
      formRef.current.reset()

    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("An error occured while sending the message")

    } finally {
      setLoading(false)
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* Contact Form */}
          <div className="flex-1 order-2 xl:order-none">
            <form className="flex flex-col  gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleFormSubmit} ref={formRef}>
              <h3 className="text-4xl text-accent">Let's Work together</h3>
              <p className="text-white/60">
                CONTACT
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname..." name="firstName" required />
                <Input type="lastname" placeholder="Lastname..." name="lastName" required />
                <Input type="email" placeholder="Email address..." name="email" required />
                <Input type="phone" placeholder="Phone number..." name="phone" required />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service.." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                    <SelectItem value="resume-design">Resume Design</SelectItem>
                    <SelectItem value="pwa">Progressive Web App</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message..." name="message" />
              <Button size="md" className="max-w-40" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
