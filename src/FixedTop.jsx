import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function FixedTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
