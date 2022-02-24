import { ProjectManifest } from './package'

export interface Project {
  preferredVersions?: any
  dir: string
  manifest: ProjectManifest
  writeProjectManifest: (manifest: ProjectManifest, force?: boolean | undefined) => Promise<void>
}

export type ProjectsGraph = Record<string, { dependencies: string[], package: Project }>
