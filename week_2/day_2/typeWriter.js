const typeWriter = (str) => {
  let timer = 50;
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      if (i < str.length - 1) {
        process.stdout.write(str[i]);
      } else {
        process.stdout.write(str[i] + `\n`);
      }
    }, (timer += 50));
  }
};

typeWriter("Hello This is light sdfsfsfsdfsdf");
