import { useEffect, useState } from "react";

type Browser = "Chrome" | "Firefox" | "Safari" | "Edge" | "Opera" | "Unknown";

export default function useDetectBrowser(): Browser {
  const [browser, setBrowser] = useState<Browser>("Unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
      setBrowser("Chrome");
    } else if (userAgent.includes("Firefox")) {
      setBrowser("Firefox");
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      setBrowser("Safari");
    } else if (userAgent.includes("Edg")) {
      setBrowser("Edge");
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      setBrowser("Opera");
    } else {
      setBrowser("Unknown");
    }
  }, []);

  return browser;
}
