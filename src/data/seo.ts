export const siteMeta = {
  siteName: "VK Interior",
  siteUrl: "https://www.vkinterior.com",
  tagline: "Interiors, Crafted Around You.",
  description:
    "VK Interior is a premium residential interior design and execution company based in JP Nagar, Bengaluru. We deliver complete home interiors, bespoke furniture, modular kitchens, wardrobes, and smart home solutions — with a 10-Year Warranty on applicable work.",
  keywords: [
    "interior designers in Bengaluru",
    "interior designers in JP Nagar",
    "home interior designers Bengaluru",
    "turnkey interior designers Bengaluru",
    "residential interior design Bengaluru",
    "luxury home interiors Bengaluru",
    "modular kitchen designers Bengaluru",
    "custom interior designers Bengaluru",
    "custom woodwork Bengaluru",
    "smart home interior solutions Bengaluru",
    "complete home interiors Bangalore",
    "bespoke furniture Bengaluru",
    "VK Interior",
  ],
  contact: {
    phone: "+919057511630",
    phoneDisplay: "+91 90575 11630",
    whatsapp: "+919057511630",
    email: "info@vkinterior.com",
    address: {
      line1: "Sai Madhura Enclave Apartment",
      line2: "9th Cross, Opp. Rajshekar Hospital",
      line3: "J.P. Nagar 1st Phase",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560078",
      country: "India",
    },
  },
  social: {
    // Add social handles once confirmed
    instagram: null,
    facebook: null,
  },
};

export const whatsappUrl = (message?: string) => {
  const defaultMessage =
    "Hi VK Interior, I would like to discuss my home interior requirements.";
  const encoded = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteMeta.contact.whatsapp}?text=${encoded}`;
};

export const callUrl = `tel:${siteMeta.contact.phone}`;
export const emailUrl = `mailto:${siteMeta.contact.email}`;
