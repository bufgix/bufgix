const config = require("./config");
const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

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
<a href="https://codesandbox.io/s/pf4c0">![About Me](https://github.com/bufgix/bufgix/blob/master/ttt(1).gif)</a>


### 🛠 &nbsp;Tech Stack

${Object.entries(config.SKILLS)
  .map(([key, value]) => {
    return `![${key}](${value})&nbsp;\n`;
  })
  .join("")}


### ⚙️ &nbsp;GitHub Analytics

<p align="center">
<a href="https://github.com/bufgix">
  <img height="180em" src="${config.GITHUB_STATICS_URL}"/>
  <img height="180em" src="${config.MOST_LANG}"/>
</a>
</p>

### 🔖 &nbsp;My Last Raindrops
${res.items
  .map(({ link, title }) => {
    return `- [${title}](${link})\n`;
  })
  .join("")}

<br/>



### 🤝🏻 &nbsp;Connect with Me

<p align="center">
${config.SOCIAL.map(({ link, image }) => {
  return `<a href="${link}"><img src="${image}"/></a>\n`;
}).join("")}
</p>
    
    `
    );
  });
