import express from "express";
import books from "./src/routes/books.js";
import cors from "cors";

let app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // Faqat shu domen ruxsat oladi
    methods: ["GET", "POST", "DELETE","PUT"], // Ruxsat berilgan metodlar
    allowedHeaders: ["Content-Type", "Authorization"], // Ruxsat berilgan headerlar
  })
);

app.use("/api/books", books);
let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Create server in ${PORT} port`);
});

export default (req, res) => app(req, res);