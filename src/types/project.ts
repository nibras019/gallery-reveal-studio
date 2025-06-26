
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  featuredImage: string;
  shortDescription: string;
  bodyContent: string;
  galleryImages: string[];
  year: string;
  client?: string;
  location?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}
