import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const source = path.join(__dirname, "./dist/index.html");
const destination = path.join(__dirname, "./dist/404.html");

fs.copyFileSync(source, destination);
console.log("404.html copied successfully.");
