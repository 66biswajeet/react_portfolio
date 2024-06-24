import img1 from "../assets/waimg.jpeg";
import img2 from "../assets/spamimg.jpeg";
import img3 from "../assets/inshort.jpeg";
import img4 from "../assets/ats.jpeg";
import img5 from "../assets/disney.jpeg";
import img6 from "../assets/qr.jpeg";
import img7 from "../assets/bmj.jpeg";

const Card_api = [
  {
    id: 1,
    img: img1,
    txt: "WhatsApp Chat Analyzer",
    href: "https://wca-jeetcode.streamlit.app",
    type: "ML",
    des: "Analyze WhatsApp chats for insights (conversation patterns, sentiment, word frequency). Uses NumPy, scikit-learn, Python for data manipulation & visualization.", // Shorter description with key details
  },
  {
    id: 2,
    img: img2,
    txt: "Spam Detector",
    type: "ML",
    des: "Identify spam emails with high accuracy. ML algorithms trained on vast datasets distinguish spam from legitimate messages. (NumPy, scikit-learn, Python)", // Shorter description highlighting technology
  },
  {
    id: 3,
    img: img3,
    txt: "Text Summerizer",
    type: "ML",
    des: "Summarize long articles/documents. Saves time & simplifies information overload. Built with NLP techniques.", // Short, action-oriented description
  },
  {
    id: 4,
    img: img4,
    txt: "ATS Score Tracker",
    type: "ML",
    des: "Optimize resume for Applicant Tracking Systems (ATS). Analyze content & provide insights for improving interview chances. (ML algorithms)", // Focus on benefit and technology
  },
  {
    id: 5,
    img: img5,
    txt: "Disney + Hotstar",
    href: "https://disneyclone-d3364.web.app",
    type: "WEB",
    des: "Explore vast library of movies, TV shows, originals (Disney, Pixar, Marvel, Star Wars, more). Stream on any device.", // Abbreviated features and target platforms
  },
  {
    id: 6,
    img: img6,
    txt: "QR CODE GENERATOR",
    href: "https://biswa-qr-code.netlify.app/",
    type: "WEB",
    des: "Generate QR codes easily. Enter URL, text, or contact info. Share for access to websites, business cards, or data.", // Concise description of functionality
  },
  {
    id: 7,
    img: img7,
    txt: "BOOK MY JOURNEY WEB APP",
    href: "https://book-my-journey.netlify.app/",
    type: "WEB",
    des: "Plan dream vacation. Search flights, hotels, activities. Compare prices, book everything in one place. Streamlined travel planning.", // Emphasize benefits and ease of use
  },
];

export default Card_api;
