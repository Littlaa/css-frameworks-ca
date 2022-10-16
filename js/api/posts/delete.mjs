import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * Lets user delete a post
 */

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const removePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(removePostURL, {
    method,
  });

  return await response.json();
}
