'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   ('orang_1','0810001','seseorang_1@gmail.com'),
    await queryInterface.bulkInsert('Biodata', 
    [{
      fullname: 'manusia_1',
      phone_num: "0810001",
      email: "email_manusia1_@gmail.com"
    },
    {
      fullname: 'manusia_2',
      phone_num: "0810002",
      email: "email_manusia_2@gmail.com"
    },
    {
      fullname: 'manusia_3',
      phone_num: "0810003",
      email: "email_manusia_3@gmail.com"
    },
    {
      fullname: 'manusia_4',
      phone_num: "0810004",
      email: "email_manusia_4@gmail.com"
    },
    {
      fullname: 'manusia_5',
      phone_num: "0810005",
      email: "email_manusia_5@gmail.com"
    },
    {
      fullname: 'manusia_6',
      phone_num: "0810006",
      email: "email_manusia_6@gmail.com"
    },
    {
      fullname: 'manusia_7',
      phone_num: "0810007",
      email: "email_manusia_7@gmail.com"
    },
    {
      fullname: 'manusia_8',
      phone_num: "0810008",
      email: "email_manusia_8@gmail.com"
    },
    {
      fullname: 'manusia_9',
      phone_num: "0810009",
      email: "email_manusia_9@gmail.com"
    },
    {
      fullname: 'manusia_10',
      phone_num: "0810010",
      email: "email_manusia_10@gmail.com"
    },
    {
      fullname: 'manusia_11',
      phone_num: "0810011",
      email: "email_manusia_11@gmail.com"
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Biodata', null, {});
  }
};
