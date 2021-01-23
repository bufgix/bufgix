const config = require("./config");
const fs = require("fs");

fs.writeFileSync(
  "./readme_test.md",
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



### 🤝🏻 &nbsp;Connect with Me

<p align="center">
${config.SOCIAL.map(({ link, image }) => {
  return `<a href="${link}"><img src="${image}"/></a>\n`;
})}
</p>

`
);
