/* Draft */
const { celebrate, Joi } = require("celebrate");
app.get("/user/:username");

celebrate({
    params: {
        username: Joi.string().required(),
    },
});

async (req, res) => {
    const { username } = req.params;
    const user = await Controller.User.getUser(username);
    if (!user) {
        res.status(400).json({
            error: "User not found",
        });
    } else {
        res.json(user);
    }
};
