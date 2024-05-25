import axios from "axios";
import constants from "./configs/constants";
import { sendRequest } from "./utils/sendRequest";
import { citiesName } from "./configs/citiesName";
async function main() {
  for (let i = 0; i < 10000000; i += 100) {
    const promises = [];
    const city = citiesName[Math.floor(Math.random() * citiesName.length)];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(city));
    }
    await Promise.all(promises);
  }
}

main();
