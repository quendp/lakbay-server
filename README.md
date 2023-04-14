# Lakbay Travel Agency Server

---

## Main repository :

- [Lakbay Travel Agency - g4-mini-project-2](https://github.com/quendp/g4-mini-project-2)

---

## How to deploy:

#### Fix configuration in client repository

1. Change baseUrl in src/utils/axios.js
2. Run npm run build
3. Upload dist folder to host

#### Fix configuration in server repository

1. Delete all files in server directory aside from .git and README.md and replace it with the one from main repository
2. Change env constant in models/index.js to test or production
3. For first activation, change package.json, deploy command to : "initialize": "sequelize db:migrate && sequelize db:seed:all && node app.js"
4. If database is ready, change package.json, deploy command to : "deploy": "node app.js"
5. Stage, Commit, and Push repository.
