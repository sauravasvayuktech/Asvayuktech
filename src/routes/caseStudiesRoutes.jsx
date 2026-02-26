import {
  CaseStudies,
  SingleCaseStudy,
  QuadLock,
  TheModernShop,
  Coffee49th,
  KrishnaPearls,
  Spicetribe,
  Bookmytask,
  Kreshya,
} from "../Components";
import Layerx from "../Components/SingleCaseStudiesPages/Layerx";
import OpenSea from "../Components/SingleCaseStudiesPages/OpenSea";

export const caseStudiesRoutes = [
  { path: "/case-studies", element: <CaseStudies /> },
  { path: "/case-studies/moonlightconcept", element: <SingleCaseStudy /> },
  { path: "/case-studies/quadlock", element: <QuadLock /> },
  { path: "/case-studies/themodernshop", element: <TheModernShop /> },
  { path: "/case-studies/49thcoffee", element: <Coffee49th /> },
  {
    path: "/case-studies/krishnapearlsandjewellers",
    element: <KrishnaPearls />,
  },
  { path: "/case-studies/spicetribe", element: <Spicetribe /> },
  { path: "/case-studies/bookmytask", element: <Bookmytask /> },
  { path: "/case-studies/kreshya", element: <Kreshya /> },
    { path: "/case-studies/layerx", element: <Layerx /> },
    { path: "/case-studies/openseacap", element: <OpenSea /> },
];
