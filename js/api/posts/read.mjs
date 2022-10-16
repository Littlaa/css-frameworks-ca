import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * Lets user read a list of posts
 */

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getPostsURL);

  return await response.json();
}

/**
 * Lets user read a single post
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostPostURL);

  return await response.json();
}
