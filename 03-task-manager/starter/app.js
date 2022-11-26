const express = require("express");
const tasks = require("./routes/task");
const app = express();

const port = 3001;

//middleware
app.use(express.json());

// setting up basic route
app.use("/api/v1/tasks", tasks);

//routes
app.get("/hello", (req, res) => {
  res.status(200).send("hello server is running");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
