import * as fs from "fs";

export default defineEventHandler((event) => {
  const filePath: string = "src/server/api/examples_json/healt_history.json";

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return data;
});
