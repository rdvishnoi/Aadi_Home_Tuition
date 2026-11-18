/** Real, license-free photography (Pexels) used across the site. */

export const HERO_IMAGE =
  'https://images.pexels.com/photos/7156103/pexels-photo-7156103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const ABOUT_IMAGE_MAIN =
  'https://images.pexels.com/photos/7979767/pexels-photo-7979767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const ABOUT_IMAGE_SECONDARY =
  'https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/7079148/pexels-photo-7079148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Home tutor teaching a student one-to-one at home in Jodhpur',
    caption: 'Personalized One-to-One Tutoring',
  },
  {
    src: 'https://images.pexels.com/photos/6325945/pexels-photo-6325945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mathematics tuition on a whiteboard for Class 6 to 10 students in Jodhpur',
    caption: 'Mathematics on the Whiteboard',
  },
  {
    src: 'https://images.pexels.com/photos/7013913/pexels-photo-7013913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Science learning session with geometry shapes and models',
    caption: 'Science Learning Sessions',
  },
  {
    src: 'https://images.pexels.com/photos/5311458/pexels-photo-5311458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Students solving practice questions together at home',
    caption: 'Students Solving Questions',
  },
  {
    src: 'https://images.pexels.com/photos/4173333/pexels-photo-4173333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tutor guiding a student writing in a notebook during home tuition',
    caption: 'Guided Writing Practice',
  },
  {
    src: 'https://images.pexels.com/photos/5905470/pexels-photo-5905470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Teacher explaining a lesson near a whiteboard in a study environment',
    caption: 'Structured Study Environment',
  },
];
