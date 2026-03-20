import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailKeys,validationRegex } from "../keys/key";
import { LottieAlert } from "../components/lottie/LottieAlert";

function ContactUsModal({ isOpen, onClose }) {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    height: "",
    age: "",
    gender: "",
    home_state: "",
    location: "",
    intro_url: "",
    social_url: "",
    message: ""
  });
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    
    const name = formData.get('user_name')?.trim();
    const phone = formData.get('user_phone')?.trim();
    const height = formData.get('user_height')?.trim();
    const age = formData.get('user_age')?.trim();
    const gender = formData.get('user_gender');
    const home_state = formData.get('user_home_state')?.trim();
    const location = formData.get('user_location')?.trim();
    const introUrl = formData.get('user_intro_url')?.trim();
    const socialUrl = formData.get('user_social_url')?.trim();
    const message = formData.get('message')?.trim();
    
    if (!name) newErrors.name = "Name is required";
    else if (!validationRegex.name.test(name)) newErrors.name = "Name should be 2-50 characters, letters only";
    
    if (!phone) newErrors.phone = "Phone is required";
    else if (!validationRegex.phone.test(phone)) newErrors.phone = "Invalid phone number format";
    
    if (!height) newErrors.height = "Height is required";
    //  else if (!validationRegex.height.test(weight)) newErrors.height = "Height format: 5.6ft or 170cm";//regex removed bcz people fin issue in format
    
    if (!age) newErrors.age = "Age is required";
    else if (!validationRegex.age.test(age)) newErrors.age = "Age must be between 1-99";
    
    if (!gender) newErrors.gender = "Gender is required";
    
    if (!home_state) newErrors.home_state = "Home State is required";
    
    if (!location) newErrors.location = "Location is required";
    
    if (!introUrl) newErrors.intro_url = "Intro video URL is required";
    else if (!validationRegex.url.test(introUrl)) newErrors.intro_url = "Invalid URL format";
    
    if (!socialUrl) {
      // Social URL is optional, no error
    } else if (!validationRegex.url.test(socialUrl)) {
      newErrors.social_url = "Invalid URL format";
    }
    
     
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const formData = new FormData(form.current);
    const payload = {
      user_name: formData.get('user_name')|| 'Not Available',
      user_email: formData.get('user_email') || 'Not provided',
      user_phone: formData.get('user_phone')|| 'Not Available',
      user_gender: formData.get('user_gender')|| 'Not Available',
      user_height: formData.get('user_height')|| 'Not Available',
      user_age: formData.get('user_age')|| 'Not Available',
      user_home_state: formData.get('user_home_state')||'Not Available',
      user_location: formData.get('user_location')||'Not Available',
      user_intro_url: formData.get('user_intro_url')||'Not Available',
      user_social_url: formData.get('user_social_url') || 'Not provided',
      message: formData.get('message')|| 'Not provided',
    };
    
    console.log('Form Payload:', payload);
    
    setLoading(true);
    emailjs
      .sendForm(emailKeys.serviceId, emailKeys.templateId, form.current, {
        publicKey: emailKeys.publicKey,
      })
      .then(
        () => {
          console.log("Your Profile Submitted Successfully!");
          form.current.reset();
          setErrors({});
          setLoading(false);
          setShowSuccessAlert(true);
          // onClose();
        },
        (error) => {
          setShowFailureAlert(true);
          setLoading(false);
          console.log("Failed to send: " + error.text);
        },
      );
  };

  if (!isOpen) return null;

  return (
  <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm pt-24 pb-10 px-4">
  
  <div className="
    relative
    w-full
    max-w-lg
    md:max-w-2xl
    xl:max-w-4xl
    rounded-sm
    border border-[var(--brand-secondary)] border-[0.2px]
    shadow-lg
    p-4 md:p-6
    text-white
    backdrop-blur-md
    bg-black
  ">   <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-[var(--brand-secondary)] hover:bg-white/10 rounded-full transition-colors duration-200 text-xl font-bold z-10"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-[var(--brand-secondary)] text-center">
          Submit Your Profile
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email (Optional)</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email (Optional)"
              className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Height (with unit) <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="user_height"
                placeholder="e.g., 5.6ft or 170cm"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
              {errors.height && <p className="text-red-400 text-xs mt-1">{errors.height}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Age <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="user_age"
                placeholder="Enter Age"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
              {errors.age && <p className="text-red-400 text-xs mt-1">{errors.age}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Gender <span className="text-red-500">*</span></label>
              <select
                name="user_gender"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              >
                <option value="">Select Gender</option>
                <option className="text-black" value="Male">Male</option>
                <option className="text-black" value="Female">Female</option>
                <option className="text-black" value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Home State <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="user_home_state"
                placeholder="e.g., Maharashtra"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
              {errors.home_state && <p className="text-red-400 text-xs mt-1">{errors.home_state}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Current Location - City <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="user_location"
              placeholder="Enter your current city"
              required
              className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
            />
            {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Intro Video URL <span className="text-red-500">*</span></label>
            <input
              type="url"
              name="user_intro_url"
              placeholder="Your intro video link (YouTube, Drive, etc.)"
              required
              className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
            />
            {errors.intro_url && <p className="text-red-400 text-xs mt-1">{errors.intro_url}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Social Media URL (Optional)</label>
            <input
              type="url"
              name="user_social_url"
              placeholder="Your social media profile (Optional)"
              className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
            />
            {errors.social_url && <p className="text-red-400 text-xs mt-1">{errors.social_url}</p>}
          </div>
          <div className="pb-4">
            <label className="block text-sm mb-1 text-gray-300">Message(Optional)</label>
            <textarea
              rows="3"
              name="message"
              placeholder="Tell us about yourself and your acting experience"
               className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] resize-none"
            ></textarea>
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          {loading ? (
            <div className="w-full flex items-center justify-center gap-2 py-2 rounded-sm bg-[var(--brand-secondary-hover)] text-[var(--brand-primary)] font-semibold shadow-md">
              <svg
                className="animate-spin h-5 w-5 text-[var(--brand-primary)]"
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
              <span>Submitting...</span>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-2   rounded-sm bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary-hover)] transition-all text-[var(--brand-primary)] font-semibold shadow-md"
            >
              Submit
            </button>
          )}
        </form>
        {showSuccessAlert && (
          <LottieAlert
            type="success"
            message="Your Profile Submitted successfully 🎉"
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
    </div>
  );
}

export default ContactUsModal;
