import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

export default function ZeeneDetail({ onClose, mode }) {
  const projectSlug = "zeene";
  const project = {
    ...PROJECT_DETAILS_DATA[projectSlug],
    heroImg: PROJECT_META_BY_SLUG[projectSlug].img
  };
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
