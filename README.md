## Resume and Work Experience

- Driven and highly self-motivated.
- A fast and eager learner - tech changes quickly.
- Great communicator & collaborator.
- Both detail oriented (for implementing & debugging), and big-picture oriented (for architecting).
- Posses a working knowledge of math, logic, & abstraction.
- Willing and able to put in some time off the clock to keep skills sharp.

## Development

- Use node v10
- `npm i -g gulp browsersync`
- Watch source files and build on change
- `gulp watch`
- Start development http server (browser-sync)
- `gulp serve`

## Build

Index.html file builds are done automatically on change with the above gulp tasks.

- Manual build (zsh)
- `node ./resume.js >! index.html`
- Gulp Task
- `gulp build`

## Deploy

- Git commit the master branch.
- Git checkout the gh-pages branch, merge from master, and push.
- `gco gh-pages`
- `gm master`
- `git push`
