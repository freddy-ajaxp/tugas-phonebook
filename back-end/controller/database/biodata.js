const { Biodata } = require("../../models");
const { Sequelize } = require("sequelize");

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: tutorials } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, contactList: tutorials, totalPages, currentPage };
};

exports.findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  Biodata.findAndCountAll({
    where: condition,
    limit,
    offset,
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.editContact = async (req, res) => {
    
    try {
        console.log("req.body",req.body)
        const queryResult = await Biodata.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).send({
        data: {
          message: "contact is successfully updated ",
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: {
          message: "Something Happenned, contact Admin",
        },
      });
    }
  };

  exports.deleteContact = async (req, res) => {
    try {
      const { id } = req.params;
      const contactFound = await Biodata.findOne({
        where: {
          id: id,
        },
      });
  
      if (!contactFound)
        return res.status(400).send({
          message: `contact is not existed`,
        });
      else {
        await Biodata.destroy({
          where: {
            id: id,
          },
        });
      }
      res.status(200).send({
        message: "contact data is deleted",
        data: { id: id },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: {
          message: "Server ERROR",
        },
      });
    }
  };

  exports.postContact = async (req, res) => {
    console.log("isi req.body :")
    console.log(req.body);
    try {
      const queryResponse = await Biodata.create({
        ...req.body,
      });
  
      res.status(200).send({
        message: "contact baru berhasil ditambahkan",
        data: {
          fullname: queryResponse.fullname,
          email: queryResponse.email,
          phone_num: queryResponse.phone_num,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: {
          message: "Server ERROR",
        },
      });
    }
  };