import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

/**
 * Gets all posts
 */

async function getAllTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

getAllTemplate();
