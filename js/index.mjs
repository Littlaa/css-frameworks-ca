import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";

const path = location.pathname;

if (path === "/login.html") {
  setLoginFormListener();
} else if (path === "/register.html") {
  setRegisterFormListener();
}

createPost({
  title: "example post",
  body: "also an example",
});
