const req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open(
  "GET",
  "https://api.jsonbin.io/v3/b/650c2a09bbe8743533f18e85/<BIN_VERSION | latest>",
  true
);
req.send();
