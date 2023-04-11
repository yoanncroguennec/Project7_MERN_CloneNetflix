import bcrypt from "bcryptjs";
// CONNECT DB
import connectDB from "../server/config/connectDB";
// MODELS
import User from "../server/models/User";


connectDB();

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password, firstName, lastName } = req.body;
      // console.log(email, password, firstName, lastName)

      const user = await User.findOne({ email: email });

      if (user) return res.status(422).json({ error: "User already exists" });

      // Plus le facteur de coût est élevé, plus il y a de tours de hachage
      const HashedPassword = await bcrypt.hash(password, 12);

      const newUser = await new User({
        email: email,
        password: HashedPassword,
        name: `${firstName} ${lastName}`,
      }).save();

      res.status(200).json({ message: "Signup success"})
    }
  } catch (error) {
    console.log(error);
  }
};
