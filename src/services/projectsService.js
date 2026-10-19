import { projectsData } from '../data/projectsData';

/**
 * Service layer for project data
 * Simulates real REST API communication with network latency,
 * caching headers, pagination cursors, and filtering.
 */
export const projectsService = {
  /**
   * Fetch featured projects for homepage
   */
  async getFeaturedProjects() {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return projectsData.filter((p) => p.featured);
  },

  /**
   * Fetch paginated projects for infinite scroll feed
   * @param {Object} params
   * @param {number} params.pageParam - Current page number (1-indexed)
   * @param {number} params.limit - Number of items per page
   * @param {string} params.category - Category filter ('all' or specific slug)
   * @param {string} params.search - Optional keyword query
   */
  async getProjectsPaginated({ pageParam = 1, limit = 2, category = 'all', search = '' }) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    let filtered = [...projectsData];

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Filter by search query
    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    const startIndex = (pageParam - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filtered.slice(startIndex, endIndex);
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / limit);
    const nextPage = pageParam < totalPages ? pageParam + 1 : undefined;

    return {
      items,
      nextPage,
      page: pageParam,
      totalPages,
      totalItems,
    };
  },

  /**
   * Fetch single project by ID
   * @param {string} id
   */
  async getProjectById(id) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const project = projectsData.find((p) => p.id === id);
    if (!project) {
      throw new Error(`Project with ID "${id}" was not found.`);
    }
    return project;
  },
};
