import { useState } from "react";
import { Globe, Smartphone } from "lucide-react";
import { productImages } from "@/lib/product-images";

export function ProductVisual({ name, app = false }: { name: string; app?: boolean }) {
  const images = productImages[name];
  const [failed, setFailed] = useState(false);
  const src = app ? images?.logo : images?.preview ?? images?.logo;
  const isPreview = !app && Boolean(images?.preview);
  const Icon = app ? Smartphone : Globe;

  return <div className={app ? "product-app-icon" : `product-visual ${isPreview ? "product-visual-preview" : "product-visual-logo"}`}>
    {src && !failed ? <img src={src} alt={`${name} ${isPreview ? "website preview" : "logo"}`} loading="lazy" decoding="async" onError={() => setFailed(true)} /> : <Icon className="h-9 w-9 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />}
  </div>;
}