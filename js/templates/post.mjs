export function postTemplate(postData) {
  const post = document.createElement("div");
  const title = document.createElement("h3");
  const body = document.createElement("body");
  post.append(title);
  post.append(body);
  post.classList.add("post");
  title.innerText = postData.title;
  body.innerText = postData.body;

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img);
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
