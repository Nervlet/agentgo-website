import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};
const publicFiles = new Set([
  "index.html",
  "styles.css",
  "adaptive.css",
  "app.js",
  "docs/index.html",
  "docs/docs.css",
  "docs/docs.js",
]);

http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      if (pathname === "/docs") {
        response.writeHead(308, { Location: "/docs/" }).end();
        return;
      }
      const relative = pathname.endsWith("/")
        ? pathname.slice(1) + "index.html"
        : pathname.slice(1);
      const filename = path.resolve(root, relative);
      const normalized = path.relative(root, filename);
      if (
        !filename.startsWith(root + path.sep) ||
        (!publicFiles.has(normalized) &&
          !normalized.startsWith(`assets${path.sep}`))
      ) {
        response.writeHead(404).end("Not found");
        return;
      }
      const contents = await readFile(filename);
      response.writeHead(200, {
        "Content-Type":
          types[path.extname(filename)] || "application/octet-stream",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      });
      response.end(contents);
    } catch {
      response.writeHead(404).end("Not found");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`AgentGo website: http://127.0.0.1:${port}`),
  );
