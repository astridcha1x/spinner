const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|    '];
let delayTime = 100;

for (const spinner in spinnerArray) {
  setTimeout(() => {
    process.stdout.write(spinnerArray[spinner]);
  }, delayTime);
  delayTime += 200;
};
