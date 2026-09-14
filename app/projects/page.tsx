import { getProjects } from "@/app/lib/projects";
import { ProjectsClient } from "./projectsClient";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}