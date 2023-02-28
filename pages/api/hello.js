// req (request) is an instance of http.IncmoningMessage plus some pre-built middlewares
// res (response) is an instance of http.ServerResponse plus some helper function s

export default function handler(req, res) {
  res.status(200).json({ team: "score" });
  // request methods are GET, POST and two other methods
  // if (req.method === "POST") {
  //   // Process a POST request
  //   res.status(200).json({ text: "Hello" });
  // } else {
  //   // Handle any other HTTP method
  //   res.status(200).json({ text: "Error" });
  // }
}
