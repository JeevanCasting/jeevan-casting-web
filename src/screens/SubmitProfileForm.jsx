import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailKeys, validationRegex } from "../keys/key";
import { LottieAlert } from "../components/lottie/LottieAlert";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import HexagonGridBgContactus from "../components/backgrounds/HexagonGridBgContactus";

function SubmitProfileForm() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "", email: "", phone: "", height: "", age: "",
    gender: "", home_state: "", location: "", intro_url: "", social_url: "", message: ""
  });
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);

    const name = formData.get("user_name")?.trim();
    const phone = formData.get("user_phone")?.trim();
    const height = formData.get("user_height")?.trim();
    const age = formData.get("user_age")?.trim();
    const gender = formData.get("user_gender");
    const home_state = formData.get("user_home_state")?.trim();
    const location = formData.get("user_location")?.trim();
    const introUrl = formData.get("user_intro_url")?.trim();
    const socialUrl = formData.get("user_social_url")?.trim();

    if (!name) newErrors.name = "Name is required";
    else if (!validationRegex.name.test(name)) newErrors.name = "Name should be 2-50 characters, letters only";

    if (!phone) newErrors.phone = "Phone is required";
    else if (!validationRegex.phone.test(phone)) newErrors.phone = "Invalid phone number format";

    if (!height) newErrors.height = "Height is required";

    if (!age) newErrors.age = "Age is required";
    else if (!validationRegex.age.test(age)) newErrors.age = "Age must be between 1-99";

    if (!gender) newErrors.gender = "Gender is required";

    if (!home_state) newErrors.home_state = "Home State is required";

    if (!location) newErrors.location = "Location is required";

    if (!introUrl) newErrors.intro_url = "Intro video URL is required";
    else if (!validationRegex.url.test(introUrl)) newErrors.intro_url = "Invalid URL format";

    if (socialUrl && !validationRegex.url.test(socialUrl)) newErrors.social_url = "Invalid URL format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData(form.current);
    const payload = {
      user_name: formData.get("user_name") || "Not Available",
      user_email: formData.get("user_email") || "Not provided",
      user_phone: formData.get("user_phone") || "Not Available",
      user_gender: formData.get("user_gender") || "Not Available",
      user_height: formData.get("user_height") || "Not Available",
      user_age: formData.get("user_age") || "Not Available",
      user_home_state: formData.get("user_home_state") || "Not Available",
      user_location: formData.get("user_location") || "Not Available",
      user_intro_url: formData.get("user_intro_url") || "Not Available",
      user_social_url: formData.get("user_social_url") || "Not provided",
      message: formData.get("message") || "Not provided",
    };

    console.log("Form Payload:", payload);
    setLoading(true);
    emailjs
      .sendForm(emailKeys.serviceId, emailKeys.templateId, form.current, { publicKey: emailKeys.publicKey })
      .then(
        () => {
          form.current.reset();
          setErrors({});
          setLoading(false);
          setShowSuccessAlert(true);
        },
        (error) => {
          setShowFailureAlert(true);
          setLoading(false);
          console.log("Failed to send: " + error.text);
        }
      );
  };

  const inputClass = "w-full px-3 py-2 rounded-sm bg-black/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--brand-secondary)]";

  return (
    <div className="bg-[#0b0c10] overflow-hidden min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>

        <div className="relative z-20 w-full max-w-6xl">

          <div className="bg-black/60 p-8 rounded-sm border border-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-6 text-[var(--brand-secondary)] text-center">
              Submit Your Profile
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1 text-gray-300">Name <span className="text-red-500">*</span></label>
                  <input type="text" name="user_name" placeholder="Your Name" className={inputClass} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-300">Phone <span className="text-red-500">*</span></label>
                  <input type="tel" name="user_phone" placeholder="Your Phone Number" className={inputClass} />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-300">Email (Optional)</label>
                <input type="email" name="user_email" placeholder="Your Email (Optional)" className={inputClass} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1 text-gray-300">Height (with unit) <span className="text-red-500">*</span></label>
                  <input type="text" name="user_height" placeholder="e.g., 5.6ft or 170cm" className={inputClass} />
                  {errors.height && <p className="text-red-400 text-xs mt-1">{errors.height}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-300">Age <span className="text-red-500">*</span></label>
                  <input type="number" name="user_age" placeholder="Enter Age" className={inputClass} />
                  {errors.age && <p className="text-red-400 text-xs mt-1">{errors.age}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1 text-gray-300">Gender <span className="text-red-500">*</span></label>
                  <select name="user_gender" className={inputClass}>
                    <option value="">Select Gender</option>
                    <option className="text-black" value="Male">Male</option>
                    <option className="text-black" value="Female">Female</option>
                    <option className="text-black" value="Other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-300">Home State <span className="text-red-500">*</span></label>
                  <input type="text" name="user_home_state" placeholder="e.g., Maharashtra" className={inputClass} />
                  {errors.home_state && <p className="text-red-400 text-xs mt-1">{errors.home_state}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-300">Current Location - City <span className="text-red-500">*</span></label>
                <input type="text" name="user_location" placeholder="Enter your current city" className={inputClass} />
                {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-300">Intro Video URL <span className="text-red-500">*</span></label>
                <input type="url" name="user_intro_url" placeholder="Your intro video link (YouTube, Drive, etc.)" className={inputClass} />
                {errors.intro_url && <p className="text-red-400 text-xs mt-1">{errors.intro_url}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-300">Social Media URL (Optional)</label>
                <input type="url" name="user_social_url" placeholder="Your social media profile (Optional)" className={inputClass} />
                {errors.social_url && <p className="text-red-400 text-xs mt-1">{errors.social_url}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-300">Message (Optional)</label>
                <textarea rows="3" name="message" placeholder="Tell us about yourself and your acting experience"
                  className={`${inputClass} resize-none`}></textarea>
              </div>

              {loading ? (
                <div className="w-full flex items-center justify-center gap-2 py-2 rounded-sm bg-[var(--brand-secondary-hover)] text-[var(--brand-primary)] font-semibold">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  <span>Submitting...</span>
                </div>
              ) : (
                <button type="submit"
                  className="w-full py-2 rounded-sm bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary-hover)] transition-all text-[var(--brand-primary)] font-semibold shadow-md">
                  Submit Profile
                </button>
              )}
            </form>
          </div>

         

        </div>
      </section>


      {showSuccessAlert && (
        <LottieAlert type="success" message="Your Profile Submitted successfully 🎉"
          onClose={() => setShowSuccessAlert(false)} autoClose={true} loop={false} />
      )}
      {showFailureAlert && (
        <LottieAlert type="failure" message="ohh !! Failed to Send Try again 🥹"
          onClose={() => setShowFailureAlert(false)} autoClose={true} loop={true} />
      )}
    </div>
  );
}

export default SubmitProfileForm;
