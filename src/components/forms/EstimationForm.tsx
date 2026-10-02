"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const estimationSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[+\d\s-]{10,}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")),
  propertyType: z.enum(["apartment", "villa", "independent-home", "other"], {
    errorMap: () => ({ message: "Please select property type" }),
  }),
  configuration: z.enum(["2bhk", "3bhk", "4bhk", "other"], {
    errorMap: () => ({ message: "Please select configuration" }),
  }),
  location: z.string().min(2, "Please enter your location in Bengaluru"),
  requirement: z
    .array(z.string())
    .min(1, "Please select at least one requirement"),
  preferredContact: z.enum(["phone", "whatsapp", "email"]),
  additionalInfo: z.string().optional(),
});

type EstimationFormData = z.infer<typeof estimationSchema>;

const requirements = [
  { value: "complete-home", label: "Complete Home" },
  { value: "kitchen", label: "Kitchen" },
  { value: "living-room", label: "Living Room" },
  { value: "bedroom", label: "Bedroom" },
  { value: "wardrobe", label: "Wardrobe / Walk-in" },
  { value: "pooja", label: "Pooja Room" },
  { value: "custom-furniture", label: "Custom Furniture" },
  { value: "turnkey", label: "Turnkey Interior" },
  { value: "smart-home", label: "Smart Home" },
  { value: "other", label: "Other" },
];

export function EstimationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EstimationFormData>({
    resolver: zodResolver(estimationSchema),
    defaultValues: {
      requirement: [],
      preferredContact: "whatsapp",
    },
  });

  const selectedRequirements = watch("requirement") || [];

  const toggleRequirement = (value: string) => {
    const current = selectedRequirements;
    if (current.includes(value)) {
      setValue(
        "requirement",
        current.filter((r) => r !== value),
        { shouldValidate: true }
      );
    } else {
      setValue("requirement", [...current, value], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: EstimationFormData) => {
    // In production: send to API route or email service
    // For now: construct WhatsApp message
    const message = `
Hi VK Interior,

I'd like to request a free estimation:

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "Not provided"}
Property Type: ${data.propertyType}
Configuration: ${data.configuration}
Location: ${data.location}
Requirements: ${data.requirement.join(", ")}
Preferred Contact: ${data.preferredContact}
${data.additionalInfo ? `Additional Info: ${data.additionalInfo}` : ""}
    `.trim();

    const whatsappUrl = `https://wa.me/919057511630?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-walnut/10 flex items-center justify-center mb-5">
          <CheckCircle size={28} className="text-walnut" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-2xl font-400 text-charcoal mb-3">
          Thank you!
        </h3>
        <p className="font-body text-sm text-charcoal/65 max-w-sm leading-relaxed">
          Your estimation request has been sent to WhatsApp. We&apos;ll be in touch
          with you shortly to discuss your home.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-body text-xs font-500 tracking-wide text-charcoal/60 mb-1.5">
            Full Name <span className="text-walnut" aria-label="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={`w-full px-4 py-3 bg-plaster border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-1 focus:ring-walnut transition-colors ${
              errors.name ? "border-red-400" : "border-stone hover:border-stone-dark focus:border-walnut"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block font-body text-xs font-500 tracking-wide text-charcoal/60 mb-1.5">
            Phone / WhatsApp <span className="text-walnut" aria-label="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            className={`w-full px-4 py-3 bg-plaster border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-1 focus:ring-walnut transition-colors ${
              errors.phone ? "border-red-400" : "border-stone hover:border-stone-dark focus:border-walnut"
            }`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-body text-xs font-500 tracking-wide text-charcoal/60 mb-1.5">
          Email Address <span className="text-charcoal/30 font-400">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={`w-full px-4 py-3 bg-plaster border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-1 focus:ring-walnut transition-colors ${
            errors.email ? "border-red-400" : "border-stone hover:border-stone-dark focus:border-walnut"
          }`}
          {...register("email")}
        />
      </div>

      {/* Property Type + Config */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="propertyType" className="block font-body text-xs font-500 tracking-wide text-charcoal/60 mb-1.5">
            Property Type <span className="text-walnut" aria-label="required">*</span>
          </label>
          <select
            id="propertyType"
            className={`w-full px-4 py-3 bg-plaster border rounded-sm font-body text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-walnut transition-colors appearance-none ${
              errors.propertyType ? "border-red-400" : "border-stone hover:border-stone-dark focus:border-walnut"
            }`}
            {...register("propertyType")}
          >
            <option value="">Select type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="independent-home">Independent Home</option>
            <option value="other">Other</option>
          </select>
          {errors.propertyType && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.propertyType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="configuration" className="block font-body text-xs font-500 tracking-wide text-charcoal/60 mb-1.5">
            Configuration <span className="text-walnut" aria-label="required">*</span>
          </label>
          <select
            id="configuration"
            className={`w-full px-4 py-3 bg-plaster border rounded-sm font-body text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-walnut transition-colors appearance-none ${
              errors.configuration ? "border-red-400" : "border-stone hover:border-stone-dark focus:border-walnut"
            }`}
            {...register("configuration")}
          >
            <option value="">Select configuration</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
            <option value="other">Other</option>
          </select>
          {errors.configuration && (
            <p className="mt-1 font-body text-xs text-red-500">{errors.configuration.message}</p>
          )}
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block font-body text-xs font-500 tracking-wide text-charcoal/60 mb-1.5">
          Your Location in Bengaluru <span className="text-walnut" aria-label="required">*</span>
        </label>
        <input
          id="location"
          type="text"
          placeholder="e.g. JP Nagar, Koramangala, Whitefield..."
          className={`w-full px-4 py-3 bg-plaster border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-1 focus:ring-walnut transition-colors ${
            errors.location ? "border-red-400" : "border-stone hover:border-stone-dark focus:border-walnut"
          }`}
          {...register("location")}
        />
        {errors.location && (
          <p className="mt-1 font-body text-xs text-red-500">{errors.location.message}</p>
        )}
      </div>

      {/* Requirements (multi-select toggle) */}
      <div>
        <p className="font-body text-xs font-500 tracking-wide text-charcoal/60 mb-3">
          What Do You Need? <span className="text-walnut" aria-label="required">*</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {requirements.map((req) => (
            <button
              key={req.value}
              type="button"
              onClick={() => toggleRequirement(req.value)}
              className={`px-4 py-2 rounded-sm font-body text-xs font-500 tracking-wide transition-all duration-200 border ${
                selectedRequirements.includes(req.value)
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-plaster text-charcoal/70 border-stone hover:border-stone-dark hover:text-charcoal"
              }`}
              aria-pressed={selectedRequirements.includes(req.value)}
            >
              {req.label}
            </button>
          ))}
        </div>
        {errors.requirement && (
          <p className="mt-2 font-body text-xs text-red-500">{errors.requirement.message}</p>
        )}
      </div>

      {/* Preferred contact */}
      <div>
        <p className="font-body text-xs font-500 tracking-wide text-charcoal/60 mb-3">
          Preferred Contact Method
        </p>
        <div className="flex gap-3">
          {(["whatsapp", "phone", "email"] as const).map((method) => (
            <label
              key={method}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm border cursor-pointer font-body text-xs font-500 tracking-wide transition-all duration-200 ${
                watch("preferredContact") === method
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-plaster text-charcoal/70 border-stone hover:border-stone-dark"
              }`}
            >
              <input
                type="radio"
                value={method}
                className="sr-only"
                {...register("preferredContact")}
              />
              {method === "whatsapp" ? "WhatsApp" : method.charAt(0).toUpperCase() + method.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Additional info */}
      <div>
        <label htmlFor="additionalInfo" className="block font-body text-xs font-500 tracking-wide text-charcoal/60 mb-1.5">
          Anything Else? <span className="text-charcoal/30 font-400">(optional)</span>
        </label>
        <textarea
          id="additionalInfo"
          rows={3}
          placeholder="Any specific requirements, preferred timeline, or questions..."
          className="w-full px-4 py-3 bg-plaster border border-stone hover:border-stone-dark focus:border-walnut rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-1 focus:ring-walnut transition-colors resize-none"
          {...register("additionalInfo")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} strokeWidth={1.5} />
            Send via WhatsApp
          </>
        )}
      </button>

      <p className="font-body text-[11px] text-charcoal/40 text-center">
        Your details will be sent securely via WhatsApp to VK Interior.
        We typically respond within a few hours.
      </p>
    </form>
  );
}
