  const puppeteer = require('puppeteer');
  const fs = require('fs');
  const path = require('path');
  const { time } = require('console');
const ychiba = [{"value":"4.02","date":"6/1/2024 07:00:15 ","bets":"254166.36 ","wins":"457609.8 ","revenue":-203443.44},
{"value":"2.21","date":"6/1/2024 07:00:38 ","bets":"232337.71 ","wins":"144282.73 ","revenue":88054.97999999998},
{"value":"1.18","date":"6/1/2024 07:00:57 ","bets":"233257.5 ","wins":"8745.28 ","revenue":224512.22},
{"value":"1.91","date":"6/1/2024 07:01:19 ","bets":"228100.09 ","wins":"77567.41 ","revenue":150532.68},
{"value":"1.30","date":"6/1/2024 07:01:38 ","bets":"277519.9 ","wins":"22365.15 ","revenue":255154.75000000003},
{"value":"1.31","date":"6/1/2024 07:01:57 ","bets":"255035.67 ","wins":"16983.81 ","revenue":238051.86000000002},
{"value":"1.65","date":"6/1/2024 07:02:18 ","bets":"261292.41 ","wins":"40347.18 ","revenue":220945.23},
{"value":"2.52","date":"6/1/2024 07:02:42 ","bets":"298189.88 ","wins":"255675.23 ","revenue":42514.649999999994},
{"value":"1.47","date":"6/1/2024 07:03:02 ","bets":"294904.59 ","wins":"45326.96 ","revenue":249577.63000000003},
{"value":"2.56","date":"6/1/2024 07:03:25 ","bets":"267160.14 ","wins":"221496.11 ","revenue":45664.03000000003},
{"value":"1.65","date":"6/1/2024 07:03:46 ","bets":"252993.41 ","wins":"46906.09 ","revenue":206087.32},
{"value":"7.97","date":"6/1/2024 07:04:19 ","bets":"264760.56 ","wins":"751807.82 ","revenue":-487047.25999999995},
{"value":"2.37","date":"6/1/2024 07:04:42 ","bets":"221629.1 ","wins":"163318.19 ","revenue":58310.91},
{"value":"1.19","date":"6/1/2024 07:05:00 ","bets":"219205.61 ","wins":"15743.38 ","revenue":203462.22999999998},
{"value":"1.01","date":"6/1/2024 07:05:17 ","bets":"195984.65 ","wins":"0 ","revenue":195984.65},
{"value":"1.10","date":"6/1/2024 07:05:34 ","bets":"214315.9 ","wins":"2802.36 ","revenue":211513.54},
{"value":"1.62","date":"6/1/2024 07:05:55 ","bets":"206996.93 ","wins":"30464.43 ","revenue":176532.5},
{"value":"2.12","date":"6/1/2024 07:06:18 ","bets":"241029.94 ","wins":"156284.74 ","revenue":84745.20000000001},
{"value":"5.22","date":"6/1/2024 07:06:47 ","bets":"251802.11 ","wins":"547382.76 ","revenue":-295580.65},
{"value":"6.65","date":"6/1/2024 07:07:17 ","bets":"209053.74 ","wins":"516208.15 ","revenue":-307154.41000000003},
{"value":"1.09","date":"6/1/2024 07:07:35 ","bets":"198477.63 ","wins":"620.4 ","revenue":197857.23},
{"value":"2.07","date":"6/1/2024 07:07:58 ","bets":"176403.77 ","wins":"91530.42 ","revenue":84873.34999999999},
{"value":"1.03","date":"6/1/2024 07:08:14 ","bets":"200953.9 ","wins":"0 ","revenue":200953.9},
{"value":"21.20","date":"6/1/2024 07:08:58 ","bets":"209667.93 ","wins":"703771.09 ","revenue":-494103.16},
{"value":"1.08","date":"6/1/2024 07:09:16 ","bets":"181448.41 ","wins":"3275.03 ","revenue":178173.38},
{"value":"1.19","date":"6/1/2024 07:09:35 ","bets":"190501.5 ","wins":"10157.37 ","revenue":180344.13},
{"value":"2.86","date":"6/1/2024 07:09:59 ","bets":"195691.37 ","wins":"203637.69 ","revenue":-7946.320000000007},
{"value":"1.94","date":"6/1/2024 07:10:21 ","bets":"207072.91 ","wins":"91925.73 ","revenue":115147.18000000001},
{"value":"1.29","date":"6/1/2024 07:10:40 ","bets":"222745.46 ","wins":"11196.87 ","revenue":211548.59},
{"value":"1.53","date":"6/1/2024 07:11:00 ","bets":"200667.9 ","wins":"30996.63 ","revenue":169671.27},
{"value":"1.01","date":"6/1/2024 07:11:16 ","bets":"226735.81 ","wins":"0 ","revenue":226735.81},
{"value":"1.45","date":"6/1/2024 07:11:36 ","bets":"222921.79 ","wins":"20833.89 ","revenue":202087.90000000002},
{"value":"15.25","date":"6/1/2024 07:12:16 ","bets":"233739.53 ","wins":"702087.23 ","revenue":-468347.69999999995},
{"value":"7.99","date":"6/1/2024 07:12:48 ","bets":"172778.26 ","wins":"462778.95 ","revenue":-290000.69},
{"value":"1.07","date":"6/1/2024 07:13:05 ","bets":"160508.48 ","wins":"7628.26 ","revenue":152880.22},
{"value":"1.31","date":"6/1/2024 07:13:25 ","bets":"145419.69 ","wins":"20366.13 ","revenue":125053.56},
{"value":"3.94","date":"6/1/2024 07:13:51 ","bets":"167001.32 ","wins":"284975.26 ","revenue":-117973.94},
{"value":"11.73","date":"6/1/2024 07:14:28 ","bets":"200543.19 ","wins":"560493.26 ","revenue":-359950.07},
{"value":"1.04","date":"6/1/2024 07:14:44 ","bets":"153605.91 ","wins":"2104.38 ","revenue":151501.53},
{"value":"3.83","date":"6/1/2024 07:15:11 ","bets":"60002.84 ","wins":"93583.21 ","revenue":-33580.37000000001},
{"value":"1.24","date":"6/1/2024 07:15:29 ","bets":"177218.19 ","wins":"13475.41 ","revenue":163742.78},
{"value":"2.49","date":"6/1/2024 07:15:53 ","bets":"183665.64 ","wins":"162005.98 ","revenue":21659.660000000003},
{"value":"7.51","date":"6/1/2024 07:16:25 ","bets":"203064.02 ","wins":"512241.8 ","revenue":-309177.78},
{"value":"1.32","date":"6/1/2024 07:16:44 ","bets":"184421.36 ","wins":"20959.87 ","revenue":163461.49},
{"value":"1.41","date":"6/1/2024 07:17:04 ","bets":"179110.98 ","wins":"38753.52 ","revenue":140357.46000000002},
{"value":"3.38","date":"6/1/2024 07:17:29 ","bets":"192052.54 ","wins":"258341.39 ","revenue":-66288.85},
{"value":"1.88","date":"6/1/2024 07:17:50 ","bets":"209929.93 ","wins":"74850.44 ","revenue":135079.49},
{"value":"2.83","date":"6/1/2024 07:18:15 ","bets":"219662.02 ","wins":"220430.95 ","revenue":-768.9300000000221},
{"value":"10.39","date":"6/1/2024 07:18:50 ","bets":"203305.02 ","wins":"662189.87 ","revenue":-458884.85},
{"value":"1.19","date":"6/1/2024 07:19:08 ","bets":"151774.9 ","wins":"2628.94 ","revenue":149145.96},
{"value":"1.38","date":"6/1/2024 07:19:28 ","bets":"145273.72 ","wins":"16711.57 ","revenue":128562.15},
{"value":"3.15","date":"6/1/2024 07:19:53 ","bets":"166021.12 ","wins":"209165.02 ","revenue":-43143.899999999994},
{"value":"31.77","date":"6/1/2024 07:20:43 ","bets":"194988.9 ","wins":"585457.56 ","revenue":-390468.66000000003},
{"value":"9.81","date":"6/1/2024 07:21:18 ","bets":"173741.53 ","wins":"536890.51 ","revenue":-363148.98},
{"value":"1.20","date":"6/1/2024 07:21:36 ","bets":"169057.66 ","wins":"12157.22 ","revenue":156900.44},
{"value":"1.27","date":"6/1/2024 07:21:56 ","bets":"139937.4 ","wins":"17269.3 ","revenue":122668.09999999999},
{"value":"2.00","date":"6/1/2024 07:25:46 ","bets":"199155.81 ","wins":"64059.98 ","revenue":135095.83},
{"value":"2.13","date":"6/1/2024 07:26:08 ","bets":"227609.04 ","wins":"138614.22 ","revenue":88994.82},
{"value":"2.96","date":"6/1/2024 07:26:34 ","bets":"197874.73 ","wins":"227381.11 ","revenue":-29506.379999999976},
{"value":"1.08","date":"6/1/2024 07:26:51 ","bets":"195925.15 ","wins":"2580.76 ","revenue":193344.38999999998},
{"value":"8.49","date":"6/1/2024 07:27:24 ","bets":"180960.42 ","wins":"533167.67 ","revenue":-352207.25},
{"value":"1.48","date":"6/1/2024 07:27:44 ","bets":"160828.49 ","wins":"20239.06 ","revenue":140589.43},
{"value":"1.42","date":"6/1/2024 07:28:04 ","bets":"163783.45 ","wins":"23486.41 ","revenue":140297.04},
{"value":"1.98","date":"6/1/2024 07:28:26 ","bets":"177114.42 ","wins":"80100.9 ","revenue":97013.52000000002},
{"value":"2.14","date":"6/1/2024 07:28:48 ","bets":"192902.86 ","wins":"109071.76 ","revenue":83831.09999999999},
{"value":"1.02","date":"6/1/2024 07:29:05 ","bets":"199048.85 ","wins":"0 ","revenue":199048.85},
{"value":"1.25","date":"6/1/2024 07:29:24 ","bets":"196527.67 ","wins":"13912.97 ","revenue":182614.7},
{"value":"1.34","date":"6/1/2024 07:29:44 ","bets":"169676.18 ","wins":"21959.37 ","revenue":147716.81},
{"value":"1.70","date":"6/1/2024 07:30:05 ","bets":"189107.86 ","wins":"59389.98 ","revenue":129717.87999999998},
{"value":"2.52","date":"6/1/2024 07:30:28 ","bets":"196863.5 ","wins":"185023.71 ","revenue":11839.790000000008},
{"value":"2.22","date":"6/1/2024 07:30:50 ","bets":"197637.05 ","wins":"151315.91 ","revenue":46321.139999999985},
{"value":"32.31","date":"6/1/2024 07:31:42 ","bets":"181436 ","wins":"609800.4 ","revenue":-428364.4},
{"value":"1.34","date":"6/1/2024 07:32:01 ","bets":"151224.87 ","wins":"19119.97 ","revenue":132104.9},
{"value":"19.89","date":"6/1/2024 07:32:44 ","bets":"149115.97 ","wins":"420683.86 ","revenue":-271567.89},
{"value":"1.83","date":"6/1/2024 07:33:06 ","bets":"135060.64 ","wins":"46885.5 ","revenue":88175.14000000001},
{"value":"3.79","date":"6/1/2024 07:33:32 ","bets":"143699.76 ","wins":"233594.16 ","revenue":-89894.4},
{"value":"3.84","date":"6/1/2024 07:33:58 ","bets":"152090.53 ","wins":"256606.35 ","revenue":-104515.82},
{"value":"1.06","date":"6/1/2024 07:34:15 ","bets":"144392.29 ","wins":"4061.24 ","revenue":140331.05000000002},
{"value":"5.00","date":"6/1/2024 07:34:43 ","bets":"128221.81 ","wins":"246197.84 ","revenue":-117976.03},
{"value":"1.07","date":"6/1/2024 07:35:00 ","bets":"161980.81 ","wins":"2644.48 ","revenue":159336.33},
{"value":"2.83","date":"6/1/2024 07:35:24 ","bets":"165537.75 ","wins":"174679.51 ","revenue":-9141.76000000001},
{"value":"3.04","date":"6/1/2024 07:35:49 ","bets":"163220.73 ","wins":"208118.62 ","revenue":-44897.889999999985},
{"value":"5.31","date":"6/1/2024 07:36:18 ","bets":"163265.55 ","wins":"345320.91 ","revenue":-182055.36},
{"value":"1.27","date":"6/1/2024 07:36:37 ","bets":"147484.92 ","wins":"20077.63 ","revenue":127407.29000000001},
{"value":"1.55","date":"6/1/2024 07:36:57 ","bets":"145963.5 ","wins":"35239.82 ","revenue":110723.68},
{"value":"1.35","date":"6/1/2024 07:37:17 ","bets":"167360.54 ","wins":"21686.02 ","revenue":145674.52000000002},
{"value":"34.18","date":"6/1/2024 07:38:09 ","bets":"161358.01 ","wins":"425016.09 ","revenue":-263658.08}];

  (async () => {
    try {
      // Launch a Chromium browser
      const browser = await puppeteer.launch({ headless: true }); // Set headless: false for debugging
      const page = await browser.newPage();
      page.setViewport({ width: 1280, height: 720 });

      // Navigate to the webpage
      await page.goto('https://1xbet.com/games-frame/games/371?co=125&cu=135&lg=en&wh=50&tzo=1'); // Replace with your URL
      page.setDefaultNavigationTimeout(0); // Disable navigation timeout

      // Wait for the game to potentially load
      await page.waitForSelector('.crash-game__wrap');
      
      // Function to sleep for a given number of milliseconds
      async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      // Function to continuously monitor the crash-game__counter value
      async function monitorCrashCounter() {
        let lastValue = 'x';
        let revenue = 0;

        while (true) {
          try {
            const counterElement = await page.$('.crash-game__counter');
            const counterElement1 = await page.$('.crash-total__value--bets');
            if (counterElement) {
              const value = await page.evaluate(el => el.textContent.trim(), counterElement);
        
              if (value === 'x') {
                if (lastValue != 'x') {
                  // const currentTime = new Date();
                  const value1 = await page.evaluate(el => el.textContent.trim(), counterElement1);
                  const prizer = await page.$('.crash-total__value--prize');
                  const prize = await page.evaluate(el => el.textContent.trim(), prizer);
        
                  // Format date and remove "MAD" from bets and wins
                  const formattedDate = new Date()
                    .toLocaleString('en-US', {
                      month: 'numeric',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })
                    .replace(',', '')
                    .replace('AM', '')
                    .replace('PM', '');
                  const betsWithoutMad = value1.replace(/MAD/g, ''); // Remove "MAD" using regex
                  const prizeWithoutMad = prize.replace(/MAD/g, ''); // Remove "MAD" using regex
                  lastValue = lastValue.replace(/x/g, ''); // Remove "x" from value

        
                  // Write data to file with double-quoted date and formatted bets/wins
                  revenue = betsWithoutMad - prizeWithoutMad;
                    ychiba.push({ "value": lastValue, "date": formattedDate, "bets": betsWithoutMad, "wins": prizeWithoutMad, 'revenue' : revenue });
                    // const jsond = JSON.stringify({ "value": lastValue, "date": formattedDate, "bets": betsWithoutMad, "wins": prizeWithoutMad, 'revenue' : revenue });
                    // // fs.appendFile("./.data", jsond + '\n', 'utf-8', (err) => {
                    //   if (err) {
                    //     console.error('Error writing file:', err);
                    //     return;
                    //   }
                    // });
                    const jsonData = JSON.stringify(ychiba); // Convert data to JSON format

                    const filePath = path.join(__dirname, '.','data.js');
                    fs.writeFile(filePath, `const data = ${jsonData};\n\nexport default data;`, (err) => {
                      if (err) {
                        console.error('Error writing file:', err);
                        return;
                      }
                    });
                  // console.log(`{ "value": ${lastValue}, "date": "${formattedDate}", "bets": ${betsWithoutMad}, "wins": ${prizeWithoutMad}},`);
                }
              }
              lastValue = value;
            } 
          } catch (error) {
            console.error('Error while monitoring counter:', error);
          }
          sleep(100);
        }

        return lastValue;
      }

      // Start monitoring the crash-game__counter value
      const finalValue = await monitorCrashCounter();

      // Save the final value to a file
      fs.writeFileSync('final_value.txt', `Final value before crash: ${finalValue}`);

      // Close the browser
      await browser.close();
    } catch (error) {
      console.error('Error:', error);
    }
  })();
