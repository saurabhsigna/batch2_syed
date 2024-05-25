import axios from "axios";
import constants from "./configs/constants";
import { sendRequest } from "./utils/sendRequest";
async function main() {
  for (let i = 0; i < 10000000; i += 100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest());
    }
    await Promise.all(promises);
  }
}

main();
