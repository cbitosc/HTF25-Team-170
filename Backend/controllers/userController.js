import User from "../models/user.js";

export const savePreferences = async (req, res) => {
  try {
    const { email, isVeg, region, goal } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { isVeg, region, goal },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
