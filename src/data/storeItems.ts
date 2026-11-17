export type StoreTab =
  | "all"
  | "digital-tools"
  | "digital-products"
  | "templates"
  | "creative-resources";

export interface StoreItem {
  id: string;
  category: Exclude<StoreTab, "all">;
  title: string;
  image: string;
  price: string;
  billing: string;
  warranty: string;
  status: "AVAILABLE" | "SOON";
}

// ============================================================================
// ඉදිරියේදී අලුත් TOOLS එකතු කිරීමට හෝ මිල/පින්තූර වෙනස් කිරීමට මෙතැන පමණක් වෙනස් කරන්න!
// ============================================================================
export const storeCatalogueItems: StoreItem[] = [

  {
    id: "quillbot-pro",
    category: "digital-tools",
    title: "QuillBot Premium",
    image: "tools/quilbot.avif",
    price: "Rs. 950",
    billing: "/ month",
    warranty: "Full Warranty",
    status: "AVAILABLE",
  },
  {
    id: "grammarly-pro",
    category: "digital-tools",
    title: "Grammarly Premium",
    image: "tools/grammarly.webp",
    price: "Rs. 950",
    billing: "/ month",
    warranty: "Full Warranty",
    status: "AVAILABLE",
  },      
  {
    id: "capcut-pro",
    category: "digital-tools",
    title: "CapCut Pro",
    image: "tools/capcut.webp",
    price: "Rs. 950",
    billing: "/ month",
    warranty: "Full Warranty",
    status: "AVAILABLE",
  },

  {
    id: "figma-pro",
    category: "digital-tools",
    title: "Figma Pro",
    image: "tools/figma.webp",
    price: "Rs. 2,950",
    billing: "/ year",
    warranty: "Full Warranty",
    status: "AVAILABLE",
  },
  {
    id: "gemini-pro",
    category: "digital-tools",
    title: "Gemini Pro",
    image: "tools/gemini.webp",
    price: "Rs. 495",
    billing: "/ 18 months",
    warranty: "No Warranty",
    status: "AVAILABLE",
  },
  {
    id: "canva-social-pack",
    category: "templates",
    title: "Canva & Social Pack",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    price: "Soon",
    billing: "/ bundle",
    warranty: "Full Warranty",
    status: "SOON",
  },
];

// Contact Form එකට ගැලපෙන ලෙස නම ස්වයංක්‍රීයව සකසන Function එක
export function formatStoreOptionLabel(item: StoreItem): string {
  return `${item.title} (${item.price} ${item.billing} — ${item.warranty})`;
}