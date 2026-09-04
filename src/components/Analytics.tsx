"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID } from "@/lib/data";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
    });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const wppLink = (event.target as HTMLElement)?.closest("a[href*='wa.me']");
      if (wppLink) {
        window.gtag?.("event", "whatsapp_click", {
          link_url: wppLink.getAttribute("href") || "",
          link_text: wppLink.textContent?.trim() || "",
          page_path: window.location.pathname,
        });
        return;
      }
      const outboundLink = (event.target as HTMLElement)?.closest("a[data-provider-outbound]");
      if (outboundLink) {
        window.gtag?.("event", "provider_outbound_click", {
          link_url: outboundLink.getAttribute("href") || "",
          provider: outboundLink.getAttribute("data-provider-outbound") || "",
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
