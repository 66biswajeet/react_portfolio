const Blog = require("../models/blog-model");
const Card = require("../models/card-model");
const Contact = require("../models/contact-model");
const Admin = require("../models/admin-model");

// const blog = async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.json(blogs);
//   } catch (error) {
//     console.error(error);
//     const errorMessage = error.message || "Error fetching blog data";
//     res.json({ error: errorMessage });
//   }
// };

const cards = async (req, res) => {
  // Handle GET requests to fetch all cards
  if (req.method === "GET") {
    try {
      const allCards = await Card.find(); // Find all cards
      res.json(allCards);
    } catch (err) {
      console.error(err);
      res.json({ message: "Error fetching cards" });
    }
  } else if (req.method === "POST") {
    // Handle POST requests to create a card
    const card = new Card({
      title: req.body.title,
      text: req.body.text,
      content: req.body.content,
      img: req.body.img,
    });
    try {
      const savedCard = await card.save();
      res.json(savedCard);
    } catch (err) {
      console.error(err);
      const errorMessage = "Error creating card";
      res.json({ message: errorMessage });
    }
  } else if (req.method === "DELETE") {
    // Handle DELETE requests to delete a card
    const cardId = req.params.id; // Assuming you want deletion by ID
    console.log(cardId);
    try {
      const deletedCard = await Card.findByIdAndDelete(cardId); // Delete by ID
      if (!deletedCard) {
        // Check if card exists
        return res.status(404).json({ message: "Card not found" });
      }
      res.json({ message: "Card deleted successfully" });
    } catch (err) {
      console.error(err);
      res.json({ message: "Error deleting card" });
    }
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: "Method not allowed" });
  }
};

const contacts = async (req, res) => {
  // Handle GET requests to fetch all cards
  if (req.method === "GET") {
    try {
      const allContact = await Contact.find(); // Find all cards
      res.json(allContact);
    } catch (err) {
      console.error(err);
      res.json({ message: "Error fetching cards" });
    }
  } else if (req.method === "POST") {
    // Handle POST requests to create a card
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    try {
      const savedContact = await contact.save();
      res.json(savedContact);
    } catch (err) {
      console.error(err);
      const errorMessage = "Error creating card";
      res.json({ message: errorMessage });
    }
  } else if (req.method === "DELETE") {
    // Handle DELETE requests to delete a card
    const contactId = req.params.id; // Assuming you want deletion by ID
    console.log(contactId);
    try {
      const deletedContact = await Contact.findByIdAndDelete(contactId); // Delete by ID
      if (!deletedContact) {
        // Check if card exists
        return res.status(404).json({ message: "Contact not found" });
      }
      res.json({ message: "Contact deleted successfully" });
    } catch (err) {
      console.error(err);
      res.json({ message: "Error deleting contact" });
    }
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: "Method not allowed" });
  }
};

const admins = async (req, res) => {
  const ADMIN_KEY = "3pp3sx3ftu";

  if (req.method === "POST") {
    const { password, name } = req.body;

    if (password !== ADMIN_KEY) {
      return res.status(401).send("Unauthorized: Incorrect Admin Key");
    }

    try {
      // Check if admin already exists
      let admin = await Admin.findOne({ name: req.body.name });

      if (!admin) {
        // Create a new admin
        admin = new Admin({ name: req.body.name });
        await admin.save();
        console.log(`New admin created: ${name}`);
      }

      // Respond with success and redirect URL
      res
        .status(200)
        .json({ message: "Authenticated", redirectUrl: "/admin/blog" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: "Method not allowed" });
  }
};

// Export both blog and card functions
module.exports = { cards, contacts, admins };
