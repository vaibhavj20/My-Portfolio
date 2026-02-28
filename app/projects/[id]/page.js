import ProjectDetailClient from "./ProjectDetailClient";
import { projects } from "../../../data/projects";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: Array.isArray(project.description) ? project.description[0] : project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  return <ProjectDetailClient projectId={id} />;
}
