// ============================================
// HOTEL_CONFIG - Core hotel identity & contact
// ============================================
export const HOTEL_CONFIG = {
  name: "Hotel Golserhof",
  shortName: "Golserhof",
  type: "Hotel" as const,

  location: {
    street: "Dorf Tirol",
    postalCode: "IT-39019",
    city: "Dorf Tirol",
    region: "Südtirol",
    country: "Italien",
    coordinates: {
      lat: 46.6886,
      lng: 11.1491,
    },
  },

  contact: {
    email: "info@golserhof.it",
    phone: {
      main: { display: "+39 0473 923 300", href: "tel:+390473923300" },
      whatsapp: {
        display: "",
        href: "",
      },
    },
    website: {
      main: "https://hotel.golserhof.it/",
      booking: "",
    },
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: undefined,
  },

  legal: {
    taxId: "",
    imprint: {
      de: "https://hotel.golserhof.it/impressum",
      en: "https://hotel.golserhof.it/en/imprint",
      it: "https://hotel.golserhof.it/it/impronta",
    },
    privacy: {
      de: "https://hotel.golserhof.it/datenschutz",
      en: "https://hotel.golserhof.it/en/privacy",
      it: "https://hotel.golserhof.it/it/privacy",
    },
  },

  branding: {
    logo: {
      main: "https://hotel.golserhof.it/media/ozqjekfu/logo.svg",
      mobile: "https://hotel.golserhof.it/media/ozqjekfu/logo.svg",
      alt: "https://hotel.golserhof.it/media/ozqjekfu/logo.svg",
    },
    dimensions: {
      mobile: { width: 132, height: 74 },
      desktop: { width: 189, height: 138 },
    },
  },

  copyright: {
    year: 2026,
    holder: "Hotel Golserhof",
  },
};

// ============================================
// BOOKING_CONFIG - Reservation settings
// ============================================
export const BOOKING_CONFIG = {
  bookingUrls: {
    de: "",
    en: "",
    it: "",
  },

  dates: {
    minBookingDate: "2026-03-04",
  },

  checkIn: {
    from: "14:00",
    to: "18:00",
  },

  checkOut: {
    until: "10:30",
  },

  touristTax: {
    amount: 3.5,
    currency: "EUR",
    per: "person/day",
    exemptUnderAge: 14,
  },

  cancellation: {
    tiers: [
      { daysBeforeArrival: 60, fee: 0, description: "Free cancellation" },
      { daysBeforeArrival: 21, fee: 30, feeType: "percent" as const },
      { daysBeforeArrival: 7, fee: 75, feeType: "percent" as const },
      { daysBeforeArrival: 0, fee: 95, feeType: "percent" as const },
    ],
    depositRefundable: false,
  },

  policies: {
    pets: { allowed: false, fee: 0, per: "" },
    additionalPerson: { fee: 0, per: "night" },
    breakfastOnlyDeduction: { amount: 0, per: "person" },
  },
};

// ============================================
// TECHNICAL_CONFIG - Dev/deployment settings
// ============================================
export const TECHNICAL_CONFIG = {
  projectId: "A1031",

  urls: {
    production: "https://example.com",
    staging: "",
  },

  analytics: {
    gtmId: "GTM-PNP7DSX2",
  },

  email: {
    from: "noreply@example.com",
    replyTo: "info@golserhof.it",
    transactional: "hotel-golserhof@updates.alpinads.app",
    assetsBaseUrl: "https://example.com",
  },

  credits: {
    agency: "Alpin Ads",
    agencyUrl: "https://alpinads.com/",
  },
};

// ============================================
// SEO_CONFIG - Metadata for all languages
// ============================================
export const SEO_CONFIG = {
  baseUrl: "https://example.com",
  ogImage: "https://hotel.golserhof.it/media/v5uohlk2/freibad-2.jpg?anchor=center&mode=crop&quality=45&width=720&height=360&rnd=134120973235830000",

  home: {
    de: {
      title: "Hotel Golserhof ⭐⭐⭐⭐ | Boutique-Hotel in Dorf Tirol bei Meran",
      description: "Das kleinste 4*s Hotel im Meraner Land. 30 liebevoll gestaltete Zimmer & Suiten, Gourmet-Küche, Wellness-Oase und Panoramablick auf die Dolomiten. Jetzt anfragen!",
      ogTitle: "Hotel Golserhof - Ihr Boutique-Hotel in Dorf Tirol",
      ogDescription: "Echte Südtiroler Gastfreundschaft trifft auf stilvollen Komfort. Entdecken Sie unser 4*s Boutique-Hotel hoch über Meran mit Blick auf die Dolomiten.",
      ogLocale: "de_DE",
    },
    en: {
      title: "Hotel Golserhof ⭐⭐⭐⭐ | Boutique Hotel in Dorf Tirol near Merano",
      description: "The smallest 4*s hotel in the Merano area. 30 lovingly designed rooms & suites, gourmet cuisine, wellness oasis and panoramic views of the Dolomites. Enquire now!",
      ogTitle: "Hotel Golserhof - Your Boutique Hotel in Dorf Tirol",
      ogDescription: "Genuine South Tyrolean hospitality meets stylish comfort. Discover our 4*s boutique hotel high above Merano with views of the Dolomites.",
      ogLocale: "en_US",
    },
    it: {
      title: "Hotel Golserhof ⭐⭐⭐⭐ | Hotel Boutique a Tirolo presso Merano",
      description: "Il più piccolo hotel 4*s nell'area di Merano. 30 camere e suite progettate con cura, cucina gourmet, oasi wellness e vista panoramica sulle Dolomiti. Richiedi ora!",
      ogTitle: "Hotel Golserhof - Il Vostro Hotel Boutique a Tirolo",
      ogDescription: "L'autentica ospitalità sudtirolese incontra il comfort elegante. Scoprite il nostro hotel boutique 4*s sopra Merano con vista sulle Dolomiti.",
      ogLocale: "it_IT",
    },
  },

  keywords: ["Hotel Golserhof","Boutique Hotel Südtirol","Hotel Dorf Tirol","4 Sterne Superior Meran","Wellness Hotel Südtirol","Gourmet Hotel Meran","Panorama Hotel Dolomiten","Luxushotel Südtirol"],
};

// ============================================
// Helper functions
// ============================================
export function getHotelConfig() {
  return HOTEL_CONFIG;
}
export function getBookingConfig(): BookingConfigLegacy {
  return bookingConfig;
}
export function getTechnicalConfig() {
  return TECHNICAL_CONFIG;
}
export function getSeoConfig() {
  return SEO_CONFIG;
}

// ============================================
// Legacy aliases for backward compatibility
// ============================================
export interface HotelProfile {
  address: {
    line1: string;
    line2: string;
  };
  contact: {
    email: string;
    phone: {
      display: string;
      href: string;
    };
  };
  hotelName: string;
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
  };
  legal: {
    imprintBaseUrl: string;
    privacyBaseUrl: string;
  };
  credits: {
    alpinAdsUrl: string;
  };
  logo: {
    src: string;
    mobileSrc: string;
    mobile: {
      width: number;
      height: number;
    };
    desktop: {
      width: number;
      height: number;
    };
  };
}

export const hotelProfile: HotelProfile = {
  hotelName: HOTEL_CONFIG.name,
  address: {
    line1: HOTEL_CONFIG.location.street,
    line2: `${HOTEL_CONFIG.location.postalCode} ${HOTEL_CONFIG.location.city}, ${HOTEL_CONFIG.location.region} - ${HOTEL_CONFIG.location.country}`,
  },
  contact: {
    email: HOTEL_CONFIG.contact.email,
    phone: HOTEL_CONFIG.contact.phone.main,
  },
  social: {
    ...HOTEL_CONFIG.social,
    whatsapp: HOTEL_CONFIG.contact.phone.whatsapp.href,
  },
  legal: {
    imprintBaseUrl: HOTEL_CONFIG.legal.imprint.de,
    privacyBaseUrl: HOTEL_CONFIG.legal.privacy.de,
  },
  credits: { alpinAdsUrl: TECHNICAL_CONFIG.credits.agencyUrl },
   logo: {
    src: HOTEL_CONFIG.branding.logo.main,
    mobileSrc: HOTEL_CONFIG.branding.logo.mobile,
    mobile: HOTEL_CONFIG.branding.dimensions.mobile,
    desktop: HOTEL_CONFIG.branding.dimensions.desktop,
  },
};

export interface SiteConfig {
  baseUrl: string;
  ogImage: string;
}

export const siteConfig: SiteConfig = {
  baseUrl: SEO_CONFIG.baseUrl,
  ogImage: SEO_CONFIG.ogImage,
};

export interface BookingConfigLegacy {
  minDate: string;
}

export const bookingConfig: BookingConfigLegacy = {
  minDate: BOOKING_CONFIG.dates.minBookingDate,
};

export function getHotelProfile(): HotelProfile {
  return hotelProfile;
}

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}
