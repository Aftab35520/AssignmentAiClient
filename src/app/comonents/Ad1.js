'use client';
import { useEffect, useRef } from "react";

const GoogleAd = ({ adSlot = "8949096707" }) => {
  const pushedRef = useRef(false);

  useEffect(() => {
    const loadAd = () => {
      const adElem = document.querySelector(`ins[data-ad-slot="${adSlot}"]`);

      // Prevent re-pushes and broken containers
      if (adElem && adElem.innerHTML.trim().length === 0 && !pushedRef.current) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        } catch (e) {
          console.error("AdSense push error", e);
        }
      }
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(loadAd);
    } else {
      window.addEventListener("load", loadAd);
      return () => window.removeEventListener("load", loadAd);
    }
  }, [adSlot]);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1785797053350370"
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;

