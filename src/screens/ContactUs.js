import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import HexagonGridBgContactus from "../components/backgrounds/HexagonGridBgContactus";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import emailjs from "@emailjs/browser";
import { emailKeys, validationRegex } from "../keys/key";
import { LottieAlert } from "../components/lottie/LottieAlert";

function ContactUs() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    
    const name = formData.get('user_name')?.trim();
    const phone = formData.get('user_phone')?.trim();
    const message = formData.get('message')?.trim();
    
    if (!name) newErrors.name = "Name is required";
    else if (!validationRegex.name.test(name)) newErrors.name = "Name should be 2-50 characters, letters only";
    
    if (!phone) newErrors.phone = "Phone is required";
    else if (!validationRegex.phone.test(phone)) newErrors.phone = "Invalid phone number format";
    
    if (!message) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const formData = new FormData(form.current);
    const payload = {
      user_name: formData.get('user_name')|| 'Not Available',
      user_email: formData.get('user_email') || 'Not Available',
      user_phone: formData.get('user_phone')|| 'Not Available',
      user_gender: 'Not provided',
      user_height: 'Not provided',
      user_age: 'Not provided',
      user_weight: 'Not provided',
      user_location: 'Not provided',
      user_intro_url: 'Not provided',
      user_social_url: 'Not provided',
      message: formData.get('message')
    };
    
    console.log('Contact Form Payload:', payload);
    
    setLoading(true);
    emailjs
      .sendForm(emailKeys.serviceId, emailKeys.templateId, form.current, {
        publicKey: emailKeys.publicKey,
      })
      .then(
        () => {
          setShowSuccessAlert(true);
          console.log("Message Sent successfully!");
          form.current.reset();
          setErrors({});
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          setShowFailureAlert(true);
          console.log(" Failed to send: " + error.text);
        },
      );
  };

  return (
    <div className="bg-[#0b0c10] overflow-hidden min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-15">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>

        <div className="relative z-20 flex items-center justify-center px-2 w-full max-w-6xl">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left side form */}
            <div className="bg-black/60 p-8 rounded-sm shadow-[0_0_25px_rgba(var(--brand-accent-rgb),0.219)] backdrop-blur-md border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 bg-[var(--brand-secondary)] bg-clip-text text-transparent text-center">
                Contact Us
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="w-full placeholder:text-white p-3 rounded-sm bg-black/50 border border-gray-700 focus:border-[var(--brand-secondary)] outline-none text-white"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email (Optional)"
                  className="w-full p-3 placeholder:text-white rounded-sm bg-black/50 border border-gray-700 focus:border-[var(--brand-secondary)] outline-none text-white"
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Mobile Number"
                  required
                  className="w-full p-3 rounded-sm placeholder:text-white bg-black/50 border border-gray-700 focus:border-[var(--brand-secondary)] outline-none text-white"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full p-3 rounded-sm bg-black/50 border border-gray-700 focus:border-[var(--brand-secondary)] outline-none resize-none text-white"
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                {loading ? (
                  <div className="w-full flex items-center justify-center gap-2 p-3 rounded-sm bg-[var(--brand-secondary)] text-black font-semibold shadow-md cursor-not-allowed">
                    <svg
                      className="animate-spin h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-black placeholder:text-white p-3 rounded-sm bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary-hover)] font-semibold transition-colors shadow-md"
                  >
                    Send Message
                  </button>
                )}
              </form>
            </div>

            {/* Right side text */}

            <div className="flex flex-col justify-center p-8 bg-black/40 rounded-sm shadow-[0_0_25px_rgba(var(--brand-accent-rgb),0.219)] backdrop-blur-md border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent">
                Let’s Bring Your Vision to Screen
              </h3>

              <p className="text-gray-300 leading-relaxed">
                At{" "}
                <span className="text-white font-semibold">Jeevan Casting</span>
                , we connect exceptional talent with powerful stories. Whether
                you're a filmmaker searching for the perfect face or an artist
                ready to step into the spotlight, our team is here to guide you
                every step of the way.
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                With deep industry insight and a passion for discovering fresh
                talent, we make casting seamless, professional, and inspiring —
                because the right cast doesn’t just fill roles, it brings
                stories to life.
              </p>

              <p className="mt-5 text-gray-400 italic">
                "Great films begin with great casting — let’s create something
                unforgettable."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <HexagonGridBgContactus />
      </section>
      {showSuccessAlert && (
        <LottieAlert
          type="success"
          message="Message Sent successfully 🎉"
          onClose={() => setShowSuccessAlert(false)}
          autoClose={true}
          loop={false}
        />
      )}
      {showFailureAlert && (
        <LottieAlert
          type="failure"
          message="ohh !! Failed to Send Try again 🥹"
          onClose={() => setShowFailureAlert(false)}
          autoClose={true}
          loop={true}
        />
      )}
    </div>
  );
}

export default ContactUs;
