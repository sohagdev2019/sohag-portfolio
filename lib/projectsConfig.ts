/**
 * Project Configuration
 * Control which projects show source code links
 * 
 * Set showCodeLink to false to hide GitHub/source code links
 * This helps protect your code from being copied
 */

export interface ProjectConfig {
  id: string;
  showCodeLink: boolean;
  codeLink?: string;
  liveDemoLink?: string;
  videoLink?: string;
}

export const projectsConfig: Record<string, ProjectConfig> = {
  'edupeak': {
    id: 'edupeak',
    showCodeLink: false, // Set to false to hide code link
    codeLink: 'https://github.com/sohagdev2019/knowledge-share.git',
    liveDemoLink: 'https://knowledge-share-eta.vercel.app/',
  },
  'tribe': {
    id: 'tribe',
    showCodeLink: false, // Set to false to hide code link
    codeLink: 'https://github.com/sohagzayan/tribe-community-app',
    liveDemoLink: 'https://tribe-community-app.vercel.app/',
    videoLink: 'https://www.youtube.com/watch?v=gKtcJ9Fn6KU',
  },
};

/**
 * Get project configuration by ID
 */
export function getProjectConfig(projectId: string): ProjectConfig | undefined {
  return projectsConfig[projectId.toLowerCase()];
}

