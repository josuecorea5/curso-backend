import axios from "axios";
const PORT = 3000;
const app = express();

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

//Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await axios.get(`${JSON_PLACEHOLDER_URL}/todos`);
    res.json(todos.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Get todo by id
app.get("/todos/:id", async (req, res) => {
  try {
    const todos = await axios.get(
      `${JSON_PLACEHOLDER_URL}/todos/${req.params.id}`
    );
    if (!todos) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({ title: todos.data.title });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by title
app.get("/todos/title/:name", async (req, res) => {
  const title = req.params.name;

  try {
    const todo = await axios.get(`${JSON_PLACEHOLDER_URL}/todos?q=${title}`);
    if (todo.data.length === 0) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.json(todo.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get and return 5 todos
app.get("/todos/limit/:limit", async (req, res) => {
  const limit = req.params.limit;
  try {
    const todos = await axios.get(
      `${JSON_PLACEHOLDER_URL}/todos?_limit=${limit}`
    );
    res.json(todos.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
