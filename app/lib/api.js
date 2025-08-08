// API Base Configuration
const API_BASE_URL = "https://developer43.pythonanywhere.com";
// const API_BASE_URL = "http://127.0.0.1:8000/";

// API Endpoints
const ENDPOINTS = {
  PRODUCTS: "/api/products/",
  PRODUCT_DETAIL: (slug) => `/api/products/${slug}/`,
  NEWS: "/api/news/",
  NEWS_DETAIL: (id) => `/api/news/${id}/`,
  CONTACT: "/contact/",
};

// HTTP Methods
const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

// Default request options
const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Generic API request function
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    ...defaultOptions,
    ...options,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
}

// Products API
export const productsAPI = {
  // Get all products
  getAll: async () => {
    return await apiRequest(ENDPOINTS.PRODUCTS);
  },

  // Get product by slug
  getBySlug: async (slug) => {
    return await apiRequest(ENDPOINTS.PRODUCT_DETAIL(slug));
  },

  // Legacy method for backward compatibility
  getByName: async (name) => {
    // This will need to be converted to slug in frontend
    return await apiRequest(ENDPOINTS.PRODUCT_DETAIL(name));
  },
};

// News API
export const newsAPI = {
  // Get all news
  getAll: async (cacheOption = "no-store") => {
    return await apiRequest(ENDPOINTS.NEWS, {
      cache: cacheOption,
    });
  },

  // Get news by ID
  getById: async (id, cacheOption = "no-store") => {
    return await apiRequest(ENDPOINTS.NEWS_DETAIL(id), {
      cache: cacheOption,
    });
  },
};

// Contact API
export const contactAPI = {
  // Send contact form
  send: async (formData) => {
    return await apiRequest(ENDPOINTS.CONTACT, {
      method: HTTP_METHODS.POST,
      body: JSON.stringify(formData),
    });
  },
};

// Utility functions for data formatting
export const formatters = {
  // Format news data for frontend components
  formatNewsForSlider: (newsArray) => {
    return newsArray.map((item) => ({
      id: item.id,
      imageSrc: item.main_image,
      altText: item.main_title,
      title: item.main_title,
      date: new Date(item.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      description: item.main_context,
      link: `/news-blog/${item.id}`,
    }));
  },

  // Extract results from API response
  extractResults: (data) => {
    return data.results || data || [];
  },
};

// Export API base URL for cases where it's needed directly
export { API_BASE_URL };
