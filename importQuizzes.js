import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

// 1. Define the Quiz schema (same as in server.js)
const quizSchema = new mongoose.Schema({
  chapterId: { type: Number, required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true },
});
const Quiz = mongoose.model("Quiz", quizSchema);


// Load environment variables from .env file
dotenv.config();
//2. Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    throw new Error("MongoDB connection failed");
  });

// 3. Read quizBank.json (all chapters)
const quizBank = JSON.parse(fs.readFileSync("./public/quizBank.json", "utf-8"));
const allQuizDocs = [];

Object.entries(quizBank).forEach(([chapterKey, questions]) => {
  const chapterId = parseInt(chapterKey.replace("chapter", ""), 10);
  questions.forEach(q => {
    allQuizDocs.push({
      chapterId,
      question: q.question,
      options: q.options,
      answer: q.correctAnswer, // adjust if your schema uses 'answer'
    });
  });
});

// 4. Insert all quizzes into the database
(async () => {
  try {
    await Quiz.insertMany(allQuizDocs);
    console.log("All quizzes imported successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error importing quizzes:", err);
    process.exit(1);
  }
})();