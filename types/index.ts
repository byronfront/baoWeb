export type ProductSpec = {
  leather?: string;
  tanning?: string;
  color?: string;
  thread?: string;
  hardware?: string;
  lining?: string;
  dimensions?: string;
  weight?: string;
  madeIn?: string;
  leadTime?: string;
  customization?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  type: string;
  shortDescription: string;
  description: string;
  note?: string;
  price: number;
  category: ProductCategory;
  images: ProductImage[];
  featured?: boolean;
  inStock?: boolean;
  spec?: ProductSpec;
};

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProductCategory = "carteras" | "cinturones" | "accesorios" | "otros";

export type ContactInfo = {
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  instagram?: string;
};
