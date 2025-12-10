import { About, Contact, Home, PrivacyPolicy } from "../Components";

export const homeRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <About /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
];