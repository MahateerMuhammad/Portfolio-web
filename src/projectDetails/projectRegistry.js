import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "multi-agent-debate": lazy(() => import("./MultiAgentDebateDetail")),
  "medtrust": lazy(() => import("./MedtrustDetail")),
  "deepvision": lazy(() => import("./DeepvisionDetail")),
  "clinical-digital-twin": lazy(() => import("./ClinicalDigitalTwinDetail")),

  "brain-tumor-detection": lazy(() => import("./BrainTumorDetectionDetail")),
  "konexea": lazy(() => import("./KonexeaDetail")),
  "calinga": lazy(() => import("./CalingaDetail")),
  "al-safeena": lazy(() => import("./AlSafeenaDetail")),
  "chw-tb-tracker": lazy(() => import("./ChwTbTrackerDetail")),
  "joytox": lazy(() => import("./JoytoxDetail")),
  "inner-armor": lazy(() => import("./InnerArmorDetail")),
  "zeene": lazy(() => import("./ZeeneDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
