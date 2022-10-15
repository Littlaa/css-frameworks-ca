import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

async function getSingleTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts.pop();
  const container = document.querySelector("#post");
  templates.renderPostTemplate(post, container);
}

getSingleTemplate();
