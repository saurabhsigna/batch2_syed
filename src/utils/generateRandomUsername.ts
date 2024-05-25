export const generateRandomUsername = () => {
  const words = "0123456789abcdefghijklmnopqrstuvwxyz";

  let response = "";
  for (let i = 0; i < 6; i++) {
    const element = words[Math.floor(Math.random() * words.length)];
    response += element;
  }
  return response;
};
