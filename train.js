// // // MITASKS

// TASK C

class Shop {
    // Constructor
    constructor (non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon; 
        this.cola = cola;
    }

    //Methods
    qoldiq() {
        const currentDate = new Date();
        const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`
        console.log(`Hozir ${currentTime}'da ${this.non}'ta non, ${this.lagmon}'ta lag'mon va ${this.cola}'ta cola mavjud.`);
    }

    sotish(item, quantity) {
        if (this[item] !== undefined) {
            this[item] -= quantity;
            console.log(`${quantity} ta ${item} sotildi`);
            } else {
            console.log("Bunday mahsulot mavjud emas");
        }
    }

    qabul(item, quantity) {
        if (this[item] !== undefined) {
            this[item] += quantity;
            console.log(`${quantity} ta ${item} qabul qilindi`);
            } else {
            console.log("Bunday mahsulot mavjud emas");
        }
    }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

// // TASK B

// function countDigit(givenString) {
//     let count = 0;
//     for (const i of givenString) {
//         if (i >= '0' && i <= '9') count++;
//     }
//     console.log(count);
// }

// countDigit("22osoif3o04");





// // // TASK A

// // function countLetter(letter, givenString) {
// //     let count = 0;
// //     letter.toLowerCase();

// //     for (let i = 0; i < givenString.length; i++) {
// //         if (letter === givenString[i].toLowerCase()) {
// //             count++;
// //         }
// //     }
// //     console.log(`Letter ${letter} comes ${count} times`);
// // }

// // // countLetter("e", "engineer");
// // countLetter("a", "Alhamdulillah");


// /* --------- 21. NodeJS Event Loop & Callback function ---------- */

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling", //0-20
//     "to`gri boshliq tanlang va ko`proq hato qiling", //20-30
//     "uzingiz uchun ishlashni boshlang", //30-40
//     "siz kuchli bo`lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq endi" //60~
// ];
// //------ CALLBACK function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") {
//         callback("insert a number", null);
//     } else if (a <= 20) { callback(null, list[0]); }
//     else if (a > 20 && a <= 30) { callback(null, list[1]); }
//     else if (a > 30 && a <= 40) { callback(null, list[2]); }
//     else if (a > 40 && a <= 50) { callback(null, list[3]); }
//     else if (a > 50 && a <= 60) { callback(null, list[4]); }
//     else { 
//         setTimeout(function() {
//             callback(null, list[5]); 
//         }, 500);

//         // setInterval(function() {
//         //     callback(null, list[5]); 
//         // }, 1000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//         console.log("Javob:", data);
//     }
// });
// console.log("passed here 1");

// // /* --------- 22. Using Asynchronous Functions ---------- */

// // //----- DEFINE
// //  async function maslahatBering(a) {
// //     if (typeof a !== "number") { 
// //         throw new Error("insert a number"); // use "throw new Error"
// //     } 
// //     else if (a <= 20) return (list[0]);
// //     else if (a > 20 && a <= 30) return list[1];
// //     else if (a > 30 && a <= 40) return list[2];
// //     else if (a > 40 && a <= 50) return list[3];
// //     else if (a > 50 && a <= 60) return list[4];
// //     else { 
// //         // return list[5];

// //         // return new Promise((resolve, reject) => {
// //         //   setTimeout(() => {
// //         //     resolve(list[5]);
// //         //   }, 5000);
// //         // });
// //         return new Promise((resolve, reject) => {
// //           setInterval(() => {
// //             resolve(list[5]);
// //           }, 1000);
// //         });
// //     }
// // }

// // // console.log("passed here 0");

// // // //------ CALL (via then & catch methods)
// // // maslahatBering(25).then(data => {
// // //     console.log("Javob:", data);
// // // }).catch(err => {
// // //     console.log("ERROR:", err);
// // // })
// // // console.log("passed here 1");

// // //------ using "async" function in the CALL part with "await"
// // async function run() {
// //     let javob = await maslahatBering(20); //"await" - until it gets the answer it doen't pass to the next question
// //     console.log(javob);
// //     javob = await maslahatBering(75); // here ... setTimeout is working with the help of Promise function inside Async function
// //     console.log(javob);
// //     javob = await maslahatBering(41);
// //     console.log(javob);
// // }
// // run();



// function qoldiqliBolish(a, b) {
//     const c = a% b;
//     console.log("c value:",);
// }

