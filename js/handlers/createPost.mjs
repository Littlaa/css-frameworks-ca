import { createPost } from "../api/posts/index.mjs";

/**
 * Lets user create a post
 */

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);
      alert("Post was created");
    });
  }
}
