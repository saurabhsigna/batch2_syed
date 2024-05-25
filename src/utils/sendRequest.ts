import axios from "axios";
import ora, { Ora } from "ora";
import chalk from "chalk";
import { generateRandomEmail } from "./generateRandomEmail";
import constants from "../configs/constants";
import { generateRandomUsername } from "./generateRandomUsername";
export const sendRequest = async (city: string) => {
  let data = JSON.stringify({
    email: generateRandomEmail(),
    name: generateRandomUsername(),
    password: constants.password,
  });
  let spinner: Ora | null = null;
  try {
    spinner = ora("Loading...").start();
    const result = await axios.request({
      ...constants.requestConfig,
      data: data,
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=59d9f1da0d79f2f77a8f262f11351b96`,
    });
    console.log(result.data);
    //  console.log(data);

    spinner.succeed("Request succeeded!");
  } catch (error: any) {
    console.log(chalk.bgRed(`\n${error}`));

    spinner?.fail("request failed :(");
  }
};

// sendRequest();
