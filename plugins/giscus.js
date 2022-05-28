function init() {
  const script = `<script type="module" src="https://unpkg.com/giscus?module"></script>`
  const html = `<giscus-widget id="comments"
        repo="cellargalaxy/blog-spirit"
        repoid="MDEwOlJlcG9zaXRvcnkyOTEwNTkyMjc="
        category="Announcements"
        categoryid="DIC_kwDOEVk2G84CPWCH"
        mapping="pathname"
        reactionsenabled="1"
        emitmetadata="1"
        inputposition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
        ></giscus-widget>`
  $("#comment").append(script, html).css("padding", "1em")
}

export default {
  init: init,
}
