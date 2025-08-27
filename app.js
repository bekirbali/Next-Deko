const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Plesk, uygulamanın çalışacağı portu PORT çevre değişkeni ile sağlar.
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    // Gelen tüm istekleri Next.js'in kendi yöneticisine yönlendirir.
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    // Bu mesaj Plesk'teki uygulama loglarında görünecektir.
    console.log(`> Ready on http://localhost:${port}`);
  });
});
