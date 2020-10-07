# README
Bagian BE dari phonebook CRUD.

menggunakan NodeJs, express,  Sequelize.

port 5321

# INSTALL
seperti umumnya,
- npm install
- sesuaikan config DB
# POPULATE DATABASE
bisa import menggunakan aplikasi DB management yg dipakai
- import DATABASE dari file tugas_phonebook.sql


bisa dengan migrasi kemudian seed dari sequelize

```sh
$ npx sequelize db:migrate
$ npx sequelize db:seed:all
```
