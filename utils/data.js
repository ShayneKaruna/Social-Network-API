// const usernames = [
//     "Aaran",
//     "Aaren",
//     "Aarez",
//     "Aarman",
//     "Aaron",
//     "Aaron-James",
//     "Aarron",
//     "Aaryan",
//     "Aaryn",
//     "Aayan",
//     "Aazaan",
//     "Abaan",
//     "Abbas",
//     "Abdallah",
//     "Abdalroof",
//     "Abdihakim",
//     "Abdirahman",
//     "Abdisalam",
//     "Abdul",
//     "Abdul-Aziz",
//     "Abdulbasir",
//     "Abdulkadir",
//     "Abdulkarem",
//     "Smith",
//     "Jones",
//     "Coollastname",
//     "enter_name_here",
//     "Ze",
//     "Zechariah",
//     "Zeek",
//     "Zeeshan",
//     "Zeid",
//     "Zein",
//     "Zen",
//     "Zendel",
//     "Zenith",
//     "Zennon",
//     "Zeph",
//     "Zerah",
//     "Zhen",
//     "Zhi",
//     "Zhong",
//     "Zhuo",
//     "Zi",
//     "Zidane",
//     "Zijie",
//     "Zinedine",
//     "Zion",
//     "Zishan",
//     "Ziya",
//     "Ziyaan",
//     "Zohaib",
//     "Zohair",
//     "Zoubaeir",
//     "Zubair",
//     "Zubayr",
//     "Zuriel",
//     "Xander",
//     "Jared",
//     "Grace",
//     "Alex",
//     "Mark",
//     "Tamar",
//     "Farish",
//     "Sarah",
//     "Nathaniel",
//     "Parker",
//   ];
  
//   const emails = [
//     "Aaran@gmail.com",
//     "Aaren@gmail.com",
//     "Aarez@gmail.com",
//     "Aarman@gmail.com",
//     "Aaron@gmail.com",
//     "Aaron-James@gmail.com",
//     "Aarron@gmail.com",
//     "Aaryan@gmail.com",
//     "Aaryn@gmail.com",
//     "Aayan@gmail.com",
//     "Aazaan@gmail.com",
//     "Abaan@gmail.com",
//     "Abbas@gmail.com",
//     "Abdallah@gmail.com",
//     "Abdalroof@gmail.com",
//     "Abdihakim@gmail.com",
//     "Abdirahman@gmail.com",
//     "Abdisalam@gmail.com",
//     "Abdul@gmail.com",
//     "Abdul-Azi@gmail.com",
//     "Abdulbasir@gmail.com",
//     "Abdulkadir@gmail.com",
//     "Abdulkarem@gmail.com",
//     "Smith@gmail.com",
//     "Jones@gmail.com",
//     "Coollastname@gmail.com",
//     "enter_name_here@gmail.com",
//     "Ze@gmail.com",
//     "Zechariah@gmail.com",
//     "Zeek@gmail.com",
//     "Zeeshan@gmail.com",
//     "Zeid@gmail.com",
//     "Zein@gmail.com",
//     "Zen@gmail.com",
//     "Zendel@gmail.com",
//     "Zenith@gmail.com",
//     "Zennon@gmail.com",
//     "Zeph@gmail.com",
//     "Zerah@gmail.com",
//     "Zhen@gmail.com",
//     "Zhi@gmail.com",
//     "Zhong@gmail.com",
//     "Zhuo@gmail.com",
//     "Zi@gmail.com",
//     "Zidane@gmail.com",
//     "Zijie@gmail.com",
//     "Zinedine@gmail.com",
//     "Zion@gmail.com",
//     "Zishan@gmail.com",
//     "Ziya@gmail.com",
//     "Ziyaan@gmail.com",
//     "Zohaib@gmail.com",
//     "Zohair@gmail.com",
//     "Zoubaeir@gmail.com",
//     "Zubair@gmail.com",
//     "Zubayr@gmail.com",
//     "Zuriel@gmail.com",
//     "Xander@gmail.com",
//     "Jared@gmail.com",
//     "Grace@gmail.com",
//     "Alex@gmail.com",
//     "Mark@gmail.com",
//     "Tamar@gmail.com",
//     "Farish@gmail.com",
//     "Sarah@gmail.com",
//     "Nathaniel@gmail.com",
//     "Parker@gmail.com",
//   ];
  
//   const thoughts = [
//     "Decision Tracker",
//     "Find My Phone",
//     "Learn Piano",
//     "Starbase Defender",
//     "Tower Defense",
//     "Monopoly Money Manager",
//     "Movie trailers",
//     "Hello world",
//     "Stupid Social Media App",
//     "Notes",
//     "Messages",
//     "Email",
//     "Compass",
//     "Firefox",
//     "Running app",
//     "Cooking app",
//     "Poker",
//     "Deliveries",
//   ];
  
//   const Reactions = [
//     "html",
//     "css",
//     "javascript",
//     "typescript",
//     "go",
//     "cpp",
//     "python",
//     "rust",
//     "React",
//     "React Native",
//     "NextJS",
//     "Tailwind",
//     "Vue",
//     "mongodb",
//     "sql",
//   ];
  
//   const users = [];
  
//   // Get a random item given an array
//   const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
//   // Gets a random full name
//   const getRandomUser = () =>
//     `${getRandomArrItem(usernames)}`;
  
//   const getRandomEmail = () => `${getRandomArrItem(emails)}`;
  
//   // Function to generate random applications that we can add to the database. Includes application tags.
//   const getRandomThought = (int) => {
//     let results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         thoughtText: getRandomArrItem(thoughts),
//         username: getRandomUser(),
//         reactions: [...getReactions(3)],
//       });
//     }
//     return results;
//   };
  
//   // Create the tags that will be added to each application
//   const getReactions = (int) => {
//     if (int === 1) {
//       return getRandomArrItem(Reactions);
//     }
//     const results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         reactionBody: getRandomArrItem(Reactions),
//         username: getRandomUser(),
//       });
//     }
//     return results;
//   };
  
//   // Export the functions for use in seed.js
//   module.exports = { getRandomUser, getRandomThought, getRandomEmail };