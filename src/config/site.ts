/**
 * Centralized business configuration for Aadi Home Tuition.
 * Update social media URLs here as profiles go live — any platform
 * left as an empty string stays hidden across the whole site.
 */

export const SITE_NAME = 'Aadi Home Tuition';

export const BUSINESS = {
  name: SITE_NAME,
  phoneDisplay: '+91 74250 40363',
  phoneRaw: '+917425040363',
  whatsappNumber: '917425040363',
  addressLine1: '624P+W5, Sector 8, Kudi Bhagtasni Housing Board',
  addressLine2: 'Jodhpur, Rajasthan 342005, India',
  addressFull:
    '624P+W5, Sector 8, Kudi Bhagtasni Housing Board, Jodhpur, Rajasthan 342005, India',
  city: 'Jodhpur',
  state: 'Rajasthan',
  pincode: '342005',
} as const;

export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=624P%2BW5%20Sector%208%20Kudi%20Bhagtasni%20Housing%20Board%20Jodhpur%20Rajasthan%20342005&output=embed';

export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=624P%2BW5%2C+Sector+8%2C+Kudi+Bhagtasni+Housing+Board%2C+Jodhpur%2C+Rajasthan+342005';

/**
 * Social media profile URLs. Empty string = not yet configured = the
 * platform link is hidden everywhere (top bar, connect section, footer).
 */
export const SOCIAL_URLS = {
  FACEBOOK_URL: '',
  INSTAGRAM_URL: '',
  LINKEDIN_URL: '',
  YOUTUBE_URL: '',
  WHATSAPP_URL: 'https://wa.me/917425040363',
} as const;

/** Google Business Profile review URL — leave '' until provided. */
export const GOOGLE_REVIEW_URL = '';

/** Google Places API place id — for a future genuine reviews integration. */
export const GOOGLE_PLACE_ID = '';

export const SITE_URL = 'https://aadihometuition.com';

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello Aadi Home Tuition, I would like to enquire about home tuition for my child.';
