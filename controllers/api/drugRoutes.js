const router = require("express").Router();
const { Drug } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newDrug = await Drug.create({
      ...req.body,
      user_id: req.session.drug_id,
    });

    res.status(200).json(newDrug);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const drugData = await Drug.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!drugData) {
      res.status(404).json({ message: "No drug found with this id!" });
      return;
    }

    res.status(200).json(drugData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
