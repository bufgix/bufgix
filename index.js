const config = require("./config");
const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

// Lol

fetch("https://api.raindrop.io/rest/v1/raindrops/0?perpage=5", {
  headers: {
    Authorization: `Bearer ${process.env.RAINDROP_API_KEY}`,
  },
})
  .then((r) => r.json())
  .then((res) => {
    const dtfUK = new Intl.DateTimeFormat("UK", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    fs.writeFileSync(
      "./README.md",
      `


### 🛠 &nbsp;Tech Stack

${Object.entries(config.SKILLS)
  .map(([key, value]) => {
    return `![${key}](${value})&nbsp;\n`;
  })
  .join("")}


### 🔖 &nbsp;My Last Bookmarks
${res.items
  .map(({ link, title }) => {
    return `- [${title}](${link})\n`;
  })
  .join("")}

<br/>

[![wakatime](https://wakatime.com/badge/user/b7d63cf4-666e-402a-ad32-f6dc2e0936c8.svg)](https://wakatime.com/@b7d63cf4-666e-402a-ad32-f6dc2e0936c8)

    `
    );
  });
