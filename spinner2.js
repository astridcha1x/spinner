const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|    '];
let delayTime = 100;

for (let i = 0; i < spinnerArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerArray[i]);
  }, delayTime);
  delayTime += 200;
};
