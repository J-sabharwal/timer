// Paired Programming with @Alan-Marx and @J-sabharwal

const alarms = process.argv.slice(2);

for (const alarm of alarms) {
  if (isNaN(alarm) || alarm < 0) {
   continue;
  } else {
    let timer = alarm * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    } , timer);
  }
};


