/**
 * Removes repitition for calling APIs
 */
const api = {
  get: (endpoint) =>
    fetch(endpoint, {
      method: "GET",
    }),
  post: (endpoint, body) =>
    fetch(endpoint, {
      method: "POST",
      body: body && JSON.stringify(body)
    }),
  put: (endpoint, body) =>
    fetch(endpoint, {
      method: "PUT",
      body: body && JSON.stringify(body)
    }),
  delete: (endpoint, body) =>
    fetch(endpoint, {
      method: 'DELETE',
      body: body && JSON.stringify(body)
    })
};

export { api };
