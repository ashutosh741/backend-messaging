const mysqlpool = require("../db");

const getUsers = async (req, res) => {
  try {
    const data = await mysqlpool.query("select * from users");

    if (!data) {
      return res.status(404).send({
        success: true,
        message: "no data found",
      });
    }
    res.status(200).send({
      success: true,
      message: "all users data",
      data: data,
    });
  } catch (err) {
    console.log("err is ", err);
    res.status(500).send({
      success: false,
      message: "server error",
      error: err,
    });
  }
};

module.exports = { getUsers };
