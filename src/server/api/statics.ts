import * as fs from "fs";

export default defineEventHandler((event) => {
  const filePath: string = "src/server/api/examples_json/statics.json";

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return data;
});
