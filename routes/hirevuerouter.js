const express = require("express");
const app = express();
const router = express.Router();


router.get("/", (req, res) => 
{
    res.redirect("/tehtavat/hirevue/numero")
})

router.get("/numero", (req, res) => 
{
    var vaikeusaste = 1;
    var rndtehtava = {};

    var rnd = Math.floor(Math.random() * 2)

    const tehtava101 = {vaikeusaste: 1, numero: 14, merkki: "yhteenlasku", vaihtoehto1: 3, vaihtoehto2: 4, vaihtoehto3: 5, vaihtoehto4: 7, vaihtoehto5: 8, oikein: [3, 4, 7]}
    const tehtava102 = {vaikeusaste: 1, numero: 17, merkki: "yhteenlasku", vaihtoehto1: 5, vaihtoehto2: 12, vaihtoehto3: 16, vaihtoehto4: 9, vaihtoehto5: 4, oikein: [5, 12]}
    const tehtava103 = {vaikeusaste: 1, numero: 3, merkki: "vähennyslasku", vaihtoehto1: 8, vaihtoehto2: 5, vaihtoehto3: 6, vaihtoehto4: 10, vaihtoehto5: 12, oikein: [8, 5]}
    const tehtava104 = {vaikeusaste: 1, numero: 2, merkki: "vähennyslasku", vaihtoehto1: 7, vaihtoehto2: 4, vaihtoehto3: 1, vaihtoehto4: 8, vaihtoehto5: 19, oikein: [7, 4, 1]}
    const vaikeusaste1tehtavat = [tehtava101, tehtava102, tehtava103, tehtava104]

    const tehtava201 = {vaikeusaste: 2, numero: 25, merkki: "x", vaihtoehto1: 3, vaihtoehto2: 555, vaihtoehto3: 5, vaihtoehto4: 6, vaihtoehto5: 7, vaihtoehto6: 8, oikein: [3, 4, 5]}
    const tehtava202 = {vaikeusaste: 2, numero: 47, merkki: "+", vaihtoehto1: 111, vaihtoehto2: 412, vaihtoehto3: 5, vaihtoehto4: 6, vaihtoehto5: 7, vaihtoehto6: 8, oikein: [3, 4, 5]}
    const vaikeusaste2tehtavat = [tehtava201, tehtava202]

    if (vaikeusaste == 1)
    {
        rndtehtava = vaikeusaste1tehtavat[Math.floor(Math.random() * vaikeusaste1tehtavat.length)];
    }
    else if (vaikeusaste == 2)
    {
        rndtehtava = vaikeusaste2tehtavat[Math.floor(Math.random() * vaikeusaste2tehtavat.length)];
    }

    console.log(rndtehtava)

    const oikea = rndtehtava.oikein;


    res.render("hirevueview/numeroindex.ejs",
    {
        tehtava: rndtehtava
    })

    // res.redirect("tehtavat/hirevue/numero/1")
})

router.get("/numero/:id", (req, res) => 
{
    var vaikeusaste = req.params.id;
    var rndtehtava = {};

    var rnd = Math.floor(Math.random() * 2)

    const tehtava101 = {vaikeusaste: 1, numero: 14, merkki: "yhteenlasku", vaihtoehto1: 3, vaihtoehto2: 4, vaihtoehto3: 5, vaihtoehto4: 7, vaihtoehto5: 8, oikein: [3, 4, 7]}
    const tehtava102 = {vaikeusaste: 1, numero: 17, merkki: "yhteenlasku", vaihtoehto1: 5, vaihtoehto2: 12, vaihtoehto3: 16, vaihtoehto4: 9, vaihtoehto5: 4, oikein: [5, 12]}
    const tehtava103 = {vaikeusaste: 1, numero: 3, merkki: "vähennyslasku", vaihtoehto1: 8, vaihtoehto2: 5, vaihtoehto3: 6, vaihtoehto4: 10, vaihtoehto5: 12, oikein: [8, 5]}
    const tehtava104 = {vaikeusaste: 1, numero: 2, merkki: "vähennyslasku", vaihtoehto1: 7, vaihtoehto2: 4, vaihtoehto3: 1, vaihtoehto4: 8, vaihtoehto5: 19, oikein: [7, 4, 1]}
    const vaikeusaste1tehtavat = [tehtava101, tehtava102, tehtava103, tehtava104]

    const tehtava201 = {vaikeusaste: 2, numero: 11, merkki: "yhteenlasku", vaihtoehto1: 4, vaihtoehto2: 5, vaihtoehto3: 2, vaihtoehto4: 8, vaihtoehto5: 10, oikein: [4, 5, 2]}
    const tehtava202 = {vaikeusaste: 2, numero: 17, merkki: "yhteenlasku", vaihtoehto1: 8, vaihtoehto2: 9, vaihtoehto3: 13, vaihtoehto4: 12, vaihtoehto5: 7, vaihtoehto6: 11, vaihtoehto7: 14, oikein: [8, 9]}
    const tehtava203 = {vaikeusaste: 2, numero: 20, merkki: "yhteenlasku", vaihtoehto1: 2, vaihtoehto2: 4, vaihtoehto3: 14, vaihtoehto4: 15, vaihtoehto5: 3, vaihtoehto6: 10, vaihtoehto7: 19, oikein: [2, 4, 14]}
    const tehtava204 = {vaikeusaste: 2, numero: 28, merkki: "yhteenlasku", vaihtoehto1: 2, vaihtoehto2: 12, vaihtoehto3: 14, vaihtoehto4: 18, vaihtoehto5: 7, vaihtoehto6: 22, oikein: [2, 12, 14]}
    const tehtava205 = {vaikeusaste: 2, numero: 31, merkki: "yhteenlasku", vaihtoehto1: 15, vaihtoehto2: 16, vaihtoehto3: 13, vaihtoehto4: 12, vaihtoehto5: 17, vaihtoehto6: 21, vaihtoehto7: 19, oikein: [15, 16]}
    const tehtava206 = {vaikeusaste: 2, numero: 36, merkki: "yhteenlasku", vaihtoehto1: 11, vaihtoehto2: 12, vaihtoehto3: 13, vaihtoehto4: 14, vaihtoehto5: 15, vaihtoehto6: 16, vaihtoehto7: 17, oikein: [11, 12, 13]}
    const tehtava207 = {vaikeusaste: 2, numero: 14, merkki: "yhteenlasku", vaihtoehto1: 2, vaihtoehto2: 3, vaihtoehto3: 4, vaihtoehto4: 5, vaihtoehto5: 1, oikein: [2, 3, 4, 5]}
    const tehtava208 = {vaikeusaste: 2, numero: 2, merkki: "vähennyslasku", vaihtoehto1: 18, vaihtoehto2: 16, vaihtoehto3: 15, vaihtoehto4: 11, vaihtoehto5: 7, vaihtoehto6: 3, oikein: [18, 16]}
    const tehtava209 = {vaikeusaste: 2, numero: 3, merkki: "vähennyslasku", vaihtoehto1: 10, vaihtoehto2: 6, vaihtoehto3: 1, vaihtoehto4: 5, vaihtoehto5: 23, oikein: [10, 6, 1]}
    const tehtava210 = {vaikeusaste: 2, numero: 4, merkki: "vähennyslasku", vaihtoehto1: 12, vaihtoehto2: 6, vaihtoehto3: 2, vaihtoehto4: 3, vaihtoehto5: 17, oikein: [12, 6, 2]}
    const tehtava211 = {vaikeusaste: 2, numero: 7, merkki: "vähennyslasku", vaihtoehto1: 18, vaihtoehto2: 11, vaihtoehto3: 12, vaihtoehto4: 13, vaihtoehto5: 26, vaihtoehto6: 29, oikein: [18, 11]}
    const tehtava212 = {vaikeusaste: 2, numero: 8, merkki: "vähennyslasku", vaihtoehto1: 29, vaihtoehto2: 21, vaihtoehto3: 36, vaihtoehto4: 6, vaihtoehto5: 3, vaihtoehto6: 30, vaihtoehto7: 47, oikein: [29, 21]}
    const vaikeusaste2tehtavat = [tehtava201, tehtava202, tehtava203, tehtava204, tehtava205, tehtava206, tehtava207, tehtava208, tehtava209, tehtava210, tehtava211, tehtava212]

    const tehtava301 = {vaikeusaste: 3, numero: 22, merkki: "yhteenlasku", vaihtoehto1: 7, vaihtoehto2: 9, vaihtoehto3: 6, vaihtoehto4: 12, vaihtoehto5: 18, vaihtoehto6: 19, vaihtoehto7: 14, oikein: [7, 9, 6]}
    const tehtava302 = {vaikeusaste: 3, numero: 21, merkki: "yhteenlasku", vaihtoehto1: 5, vaihtoehto2: 16, vaihtoehto3: 17, vaihtoehto4: 8, vaihtoehto5: 2, vaihtoehto6: 18, vaihtoehto7: 15, oikein: [5, 16]}
    const tehtava303 = {vaikeusaste: 3, numero: 11, merkki: "yhteenlasku", vaihtoehto1: 5, vaihtoehto2: 4, vaihtoehto3: 2, vaihtoehto4: 3, vaihtoehto5: 10, oikein: [5, 4, 2]}
    const tehtava304 = {vaikeusaste: 3, numero: 19, merkki: "yhteenlasku", vaihtoehto1: 9, vaihtoehto2: 4, vaihtoehto3: 6, vaihtoehto4: 3, vaihtoehto5: 14,oikein: [9, 4, 6]}
    const tehtava305 = {vaikeusaste: 3, numero: 29, merkki: "yhteenlasku", vaihtoehto1: 17, vaihtoehto2: 12, vaihtoehto3: 13, vaihtoehto4: 19, vaihtoehto5: 11, vaihtoehto6: 9, vaihtoehto7: 15, oikein: [17, 12]}
    const tehtava306 = {vaikeusaste: 3, numero: 33, merkki: "yhteenlasku", vaihtoehto1: 12, vaihtoehto2: 21, vaihtoehto3: 19, vaihtoehto4: 10, vaihtoehto5: 9, vaihtoehto6: 17, vaihtoehto7: 22, oikein: [12, 21]}
    const tehtava307 = {vaikeusaste: 3, numero: 45, merkki: "yhteenlasku", vaihtoehto1: 16, vaihtoehto2: 29, vaihtoehto3: 22, vaihtoehto4: 3, vaihtoehto5: 15, vaihtoehto6: 35, vaihtoehto7: 34, oikein: [16, 29]}
    const tehtava308 = {vaikeusaste: 3, numero: 39, merkki: "yhteenlasku", vaihtoehto1: 15, vaihtoehto2: 23, vaihtoehto3: 1, vaihtoehto4: 2, vaihtoehto5: 8, vaihtoehto6: 13, vaihtoehto7: 9, oikein: [15, 23, 1]}
    const tehtava309 = {vaikeusaste: 3, numero: 39, merkki: "yhteenlasku", vaihtoehto1: 15, vaihtoehto2: 23, vaihtoehto3: 1, vaihtoehto4: 2, vaihtoehto5: 8, vaihtoehto6: 11, vaihtoehto7: 9, oikein: [15, 23, 1]}
    const tehtava310 = {vaikeusaste: 3, numero: 64, merkki: "yhteenlasku", vaihtoehto1: 34, vaihtoehto2: 21, vaihtoehto3: 9, vaihtoehto4: 11, vaihtoehto5: 31, vaihtoehto6: 47, vaihtoehto7: 41, oikein: [34, 21, 9]}
    const tehtava311 = {vaikeusaste: 3, numero: 7, merkki: "vähennyslasku", vaihtoehto1: 34, vaihtoehto2: 27, vaihtoehto3: 9, vaihtoehto4: 25, vaihtoehto5: 21, vaihtoehto6: 20, vaihtoehto7: 19, oikein: [34, 27]}
    const tehtava312 = {vaikeusaste: 3, numero: 3, merkki: "vähennyslasku", vaihtoehto1: 9, vaihtoehto2: 4, vaihtoehto3: 2, vaihtoehto4: 8, vaihtoehto5: 15, oikein: [9, 4, 2]}
    const tehtava313 = {vaikeusaste: 3, numero: 8, merkki: "vähennyslasku", vaihtoehto1: 31, vaihtoehto2: 11, vaihtoehto3: 12, vaihtoehto4: 15, vaihtoehto5: 16, vaihtoehto6: 40, vaihtoehto7: 27, oikein: [31, 11, 12]}
    const tehtava314 = {vaikeusaste: 3, numero: 16, merkki: "vähennyslasku", vaihtoehto1: 33, vaihtoehto2: 49, vaihtoehto3: 42, vaihtoehto4: 31, vaihtoehto5: 21, vaihtoehto6: 19, vaihtoehto7: 39, oikein: [33, 49]}
    const tehtava315 = {vaikeusaste: 3, numero: 31, merkki: "vähennyslasku", vaihtoehto1: 73, vaihtoehto2: 104, vaihtoehto3: 98, vaihtoehto4: 17, vaihtoehto5: 91, vaihtoehto6: 67, vaihtoehto7: 83, oikein: [73, 104]}
    const tehtava316 = {vaikeusaste: 3, numero: 44, merkki: "vähennyslasku", vaihtoehto1: 97, vaihtoehto2: 141, vaihtoehto3: 69, vaihtoehto4: 11, vaihtoehto5: 132, vaihtoehto6: 109, vaihtoehto7: 56, oikein: [97, 141]}
    const tehtava317 = {vaikeusaste: 3, numero: 39, merkki: "vähennyslasku", vaihtoehto1: 81, vaihtoehto2: 42, vaihtoehto3: 70, vaihtoehto4: 41, vaihtoehto5: 23, vaihtoehto6: 119, vaihtoehto7: 33, oikein: [81, 42]}
    const tehtava318 = {vaikeusaste: 3, numero: 56, merkki: "vähennyslasku", vaihtoehto1: 99, vaihtoehto2: 43, vaihtoehto3: 33, vaihtoehto4: 11, vaihtoehto5: 87, vaihtoehto6: 101, oikein: [99, 43]}
    const vaikeusaste3tehtavat = [tehtava301, tehtava302, tehtava303, tehtava304, tehtava305, tehtava306, tehtava307, tehtava308, tehtava309, tehtava310, tehtava311, tehtava312, tehtava313, tehtava314, tehtava315, tehtava316, tehtava317, tehtava318]

    const tehtava401 = {vaikeusaste: 4, numero: 33, merkki: "yhteenlasku", vaihtoehto1: 22, vaihtoehto2: 6, vaihtoehto3: 5, vaihtoehto4: 12, vaihtoehto5: 9, vaihtoehto6: 13, vaihtoehto7: 7, oikein: [22, 6, 5]}
    const tehtava402 = {vaikeusaste: 4, numero: 51, merkki: "yhteenlasku", vaihtoehto1: 21, vaihtoehto2: 16, vaihtoehto3: 14, vaihtoehto4: 12, vaihtoehto5: 17, vaihtoehto6: 19, oikein: [21, 16, 14]}
    const tehtava403 = {vaikeusaste: 4, numero: 53, merkki: "yhteenlasku", vaihtoehto1: 22, vaihtoehto2: 16, vaihtoehto3: 15, vaihtoehto4: 12, vaihtoehto5: 27, vaihtoehto6: 19, oikein: [22, 16, 15]}
    const tehtava404 = {vaikeusaste: 4, numero: 28, merkki: "yhteenlasku", vaihtoehto1: 9, vaihtoehto2: 13, vaihtoehto3: 6, vaihtoehto4: 3, vaihtoehto5: 12, vaihtoehto6: 17, oikein: [9, 13, 16]}
    const tehtava405 = {vaikeusaste: 4, numero: 28, merkki: "yhteenlasku", vaihtoehto1: 9, vaihtoehto2: 13, vaihtoehto3: 6, vaihtoehto4: 3, vaihtoehto5: 12, vaihtoehto6: 17, oikein: [9, 13, 16]}
    const tehtava406 = {vaikeusaste: 4, numero: 18, merkki: "vähennyslasku", vaihtoehto1: 37, vaihtoehto2: 15, vaihtoehto3: 4, vaihtoehto4: 6, vaihtoehto5: 17, vaihtoehto6: 21, oikein: [37, 15, 4]}
    const tehtava407 = {vaikeusaste: 4, numero: 11, merkki: "vähennyslasku", vaihtoehto1: 22, vaihtoehto2: 7, vaihtoehto3: 4, vaihtoehto4: 17, vaihtoehto5: 16, vaihtoehto6: 9, oikein: [22, 7, 4]}
    const tehtava408 = {vaikeusaste: 4, numero: 24, merkki: "vähennyslasku", vaihtoehto1: 47, vaihtoehto2: 12, vaihtoehto3: 11, vaihtoehto4: 24, vaihtoehto5: 6, vaihtoehto6: 16, oikein: [47, 12, 11]}
    const tehtava409 = {vaikeusaste: 4, numero: 31, merkki: "vähennyslasku", vaihtoehto1: 55, vaihtoehto2: 11, vaihtoehto3: 13, vaihtoehto4: 43, vaihtoehto5: 51, vaihtoehto6: 8, vaihtoehto6: 59, oikein: [55, 11, 13]}
    const tehtava410 = {vaikeusaste: 4, numero: 60, merkki: "kertolasku", vaihtoehto1: 12, vaihtoehto2: 5, vaihtoehto3: 4, vaihtoehto4: 8, vaihtoehto5: 7, vaihtoehto6: 14, vaihtoehto7: 2, oikein: [12, 5]}
    const tehtava411 = {vaikeusaste: 4, numero: 42, merkki: "kertolasku", vaihtoehto1: 14, vaihtoehto2: 3, vaihtoehto3: 18, vaihtoehto4: 2, vaihtoehto5: 6, vaihtoehto6: 5, vaihtoehto7: 8, oikein: [14, 3]}
    const tehtava412 = {vaikeusaste: 4, numero: 52, merkki: "kertolasku", vaihtoehto1: 13, vaihtoehto2: 4, vaihtoehto3: 11, vaihtoehto4: 6, vaihtoehto5: 5, vaihtoehto6: 2, vaihtoehto7: 14, oikein: [13, 4]}
    const tehtava413 = {vaikeusaste: 4, numero: 63, merkki: "kertolasku", vaihtoehto1: 9, vaihtoehto2: 7, vaihtoehto3: 11, vaihtoehto4: 3, vaihtoehto5: 13, vaihtoehto6: 5, vaihtoehto7: 19, oikein: [9, 7]}
    const tehtava414 = {vaikeusaste: 4, numero: 144, merkki: "kertolasku", vaihtoehto1: 18, vaihtoehto2: 8, vaihtoehto3: 4, vaihtoehto4: 16, vaihtoehto5: 2, vaihtoehto6: 14, vaihtoehto7: 13, oikein: [18, 8]}
    const tehtava415 = {vaikeusaste: 4, numero: 36, merkki: "kertolasku", vaihtoehto1: 2, vaihtoehto2: 6, vaihtoehto3: 3, vaihtoehto4: 4, vaihtoehto5: 5, vaihtoehto6: 8, vaihtoehto7: 11, oikein: [2, 6, 3]}
    const tehtava416 = {vaikeusaste: 4, numero: 117, merkki: "kertolasku", vaihtoehto1: 9, vaihtoehto2: 13, vaihtoehto3: 7, vaihtoehto4: 3, vaihtoehto5: 11, vaihtoehto6: 5, vaihtoehto7: 2, oikein: [13, 9]}
    const tehtava417 = {vaikeusaste: 4, numero: 30, merkki: "kertolasku", vaihtoehto1: 2, vaihtoehto2: 3, vaihtoehto3: 5, vaihtoehto4: 9, vaihtoehto5: 15, vaihtoehto6: 12, oikein: [2, 3, 5]}
    const tehtava418 = {vaikeusaste: 4, numero: 9, merkki: "jakolasku", vaihtoehto1: 63, vaihtoehto2: 7, vaihtoehto3: 54, vaihtoehto4: 8, vaihtoehto5: 56, vaihtoehto6: 6, vaihtoehto7: 12, oikein: [63, 7]}
    const tehtava419 = {vaikeusaste: 4, numero: 12, merkki: "jakolasku", vaihtoehto1: 96, vaihtoehto2: 12, vaihtoehto3: 84, vaihtoehto4: 24, vaihtoehto5: 16, vaihtoehto6: 4, vaihtoehto7: 2, oikein: [96, 12]}
    const tehtava420 = {vaikeusaste: 4, numero: 13, merkki: "jakolasku", vaihtoehto1: 78, vaihtoehto2: 6, vaihtoehto3: 68, vaihtoehto4: 3, vaihtoehto5: 12, vaihtoehto6: 14, vaihtoehto7: 86, oikein: [78, 6]}
    const tehtava421 = {vaikeusaste: 4, numero: 12, merkki: "jakolasku", vaihtoehto1: 108, vaihtoehto2: 9, vaihtoehto3: 146, vaihtoehto4: 16, vaihtoehto5: 2, vaihtoehto6: 22, oikein: [108, 9]}
    const tehtava422 = {vaikeusaste: 4, numero: 15, merkki: "jakolasku", vaihtoehto1: 105, vaihtoehto2: 7, vaihtoehto3: 15, vaihtoehto4: 21, vaihtoehto5: 24, vaihtoehto6: 95, vaihtoehto7: 145, oikein: [105, 7]}
    const tehtava423 = {vaikeusaste: 4, numero: 6, merkki: "jakolasku", vaihtoehto1: 90, vaihtoehto2: 15, vaihtoehto3: 12, vaihtoehto4: 78, vaihtoehto5: 24, vaihtoehto6: 84, vaihtoehto7: 3, oikein: [90, 15]}
    const tehtava424 = {vaikeusaste: 4, numero: 7, merkki: "jakolasku", vaihtoehto1: 84, vaihtoehto2: 12, vaihtoehto3: 16, vaihtoehto4: 49, vaihtoehto5: 14, vaihtoehto6: 91, vaihtoehto7: 82, oikein: [84, 12]}    
    const vaikeusaste4tehtavat = [tehtava401, tehtava402, tehtava403, tehtava404, tehtava405, tehtava406, tehtava407, tehtava408, tehtava409, tehtava410, tehtava411, tehtava412, tehtava413, tehtava414, tehtava415, tehtava416, tehtava417, tehtava418, tehtava419, tehtava420, tehtava421, tehtava422, tehtava423, tehtava424]


    const tehtava501 = {vaikeusaste: 5, numero: 22, merkki: "yhteenlasku", vaihtoehto1: 6, vaihtoehto2: 7, vaihtoehto3: 9, vaihtoehto4: 11, vaihtoehto5: 3, vaihtoehto6: 18, oikein: [6, 7, 9]}
    const tehtava502 = {vaikeusaste: 5, numero: 31, merkki: "yhteenlasku", vaihtoehto1: 17, vaihtoehto2: 6, vaihtoehto3: 8, vaihtoehto4: 22, vaihtoehto5: 5, vaihtoehto6: 27, vaihtoehto6: 24, oikein: [17, 6, 8]}
    const tehtava503 = {vaikeusaste: 5, numero: 44, merkki: "yhteenlasku", vaihtoehto1: 18, vaihtoehto2: 21, vaihtoehto3: 5, vaihtoehto4: 22, vaihtoehto5: 33, vaihtoehto6: 27, vaihtoehto6: 7, oikein: [18, 21, 5]}
    const tehtava504 = {vaikeusaste: 5, numero: 76, merkki: "yhteenlasku", vaihtoehto1: 52, vaihtoehto2: 13, vaihtoehto3: 11, vaihtoehto4: 23, vaihtoehto5: 59, vaihtoehto6: 27, vaihtoehto6: 4, oikein: [52, 13, 11]}
    const tehtava505 = {vaikeusaste: 5, numero: 43, merkki: "vähennyslasku", vaihtoehto1: 65, vaihtoehto2: 4, vaihtoehto3: 18, vaihtoehto4: 29, vaihtoehto5: 58, vaihtoehto6: 33, vaihtoehto6: 6, oikein: [65, 4, 18]}
    const tehtava506 = {vaikeusaste: 5, numero: 22, merkki: "vähennyslasku", vaihtoehto1: 88, vaihtoehto2: 49, vaihtoehto3: 17, vaihtoehto4: 25, vaihtoehto5: 43, vaihtoehto6: 5, vaihtoehto6: 13, oikein: [88, 49, 17]}
    const tehtava507 = {vaikeusaste: 5, numero: 54, merkki: "vähennyslasku", vaihtoehto1: 79, vaihtoehto2: 9, vaihtoehto3: 13, vaihtoehto4: 25, vaihtoehto5: 34, vaihtoehto6: 81, vaihtoehto6: 86, oikein: [79, 9, 13]}
    const tehtava508 = {vaikeusaste: 5, numero: 46, merkki: "vähennyslasku", vaihtoehto1: 69, vaihtoehto2: 10, vaihtoehto3: 13, vaihtoehto4: 22, vaihtoehto5: 31, vaihtoehto6: 35, vaihtoehto6: 64, oikein: [69, 10, 13]}
    const tehtava509 = {vaikeusaste: 5, numero: 47, merkki: "vähennyslasku", vaihtoehto1: 106, vaihtoehto2: 47, vaihtoehto3: 12, vaihtoehto4: 113, vaihtoehto5: 95, vaihtoehto6: 55, vaihtoehto6: 16, oikein: [106, 47, 12]}
    const tehtava510 = {vaikeusaste: 5, numero: 84, merkki: "kertolasku", vaihtoehto1: 6, vaihtoehto2: 7, vaihtoehto3: 2, vaihtoehto4: 4, vaihtoehto5: 16, vaihtoehto6: 8, oikein: [6, 7, 2]}
    const tehtava511 = {vaikeusaste: 5, numero: 135, merkki: "kertolasku", vaihtoehto1: 3, vaihtoehto2: 5, vaihtoehto3: 9, vaihtoehto4: 13, vaihtoehto5: 17, vaihtoehto6: 2, oikein: [3, 5, 9]}
    const tehtava512 = {vaikeusaste: 5, numero: 110, merkki: "kertolasku", vaihtoehto1: 11, vaihtoehto2: 2, vaihtoehto3: 5, vaihtoehto4: 3, vaihtoehto5: 33, vaihtoehto6: 9, vaihtoehto6: 15, oikein: [11, 2, 5]}
    const tehtava513 = {vaikeusaste: 5, numero: 42, merkki: "kertolasku", vaihtoehto1: 3, vaihtoehto2: 7, vaihtoehto3: 2, vaihtoehto4: 5, vaihtoehto5: 8, vaihtoehto6: 12, vaihtoehto6: 9, oikein: [3, 7, 2]}
    const tehtava514 = {vaikeusaste: 5, numero: 54, merkki: "kertolasku", vaihtoehto1: 3, vaihtoehto2: 9, vaihtoehto3: 2, vaihtoehto4: 12, vaihtoehto5: 14, vaihtoehto6: 8, vaihtoehto6: 7, oikein: [3, 9, 2]}
    const tehtava515 = {vaikeusaste: 5, numero: 140, merkki: "kertolasku", vaihtoehto1: 4, vaihtoehto2: 5, vaihtoehto3: 7, vaihtoehto4: 12, vaihtoehto5: 14, vaihtoehto6: 8, vaihtoehto6: 9, oikein: [4, 5, 7]}
    const tehtava516 = {vaikeusaste: 5, numero: 7, merkki: "jakolasku", vaihtoehto1: 2, vaihtoehto2: 4, vaihtoehto3: 56, vaihtoehto4: 14, vaihtoehto5: 49, vaihtoehto6: 9, vaihtoehto6: 11, oikein: [2, 4, 56]}
    const tehtava517 = {vaikeusaste: 5, numero: 8, merkki: "jakolasku", vaihtoehto1: 120, vaihtoehto2: 3, vaihtoehto3: 5, vaihtoehto4: 14, vaihtoehto5: 4, vaihtoehto6: 22, vaihtoehto6: 16, oikein: [120, 3, 5]}
    const tehtava518 = {vaikeusaste: 5, numero: 2, merkki: "jakolasku", vaihtoehto1: 126, vaihtoehto2: 7, vaihtoehto3: 9, vaihtoehto4: 12, vaihtoehto5: 4, vaihtoehto6: 34, vaihtoehto6: 72, oikein: [126, 7, 9]}
    const tehtava519 = {vaikeusaste: 5, numero: 6, merkki: "jakolasku", vaihtoehto1: 72, vaihtoehto2: 4, vaihtoehto3: 3, vaihtoehto4: 8, vaihtoehto5: 56, vaihtoehto6: 92, vaihtoehto6: 14, oikein: [72, 4, 3]}
    const tehtava520 = {vaikeusaste: 5, numero: 13, merkki: "jakolasku", vaihtoehto1: 195, vaihtoehto2: 15, vaihtoehto3: 9, vaihtoehto4: 205, vaihtoehto5: 145, vaihtoehto6: 3, vaihtoehto6: 2, oikein: [195, 15]}
    const vaikeusaste5tehtavat = [tehtava501, tehtava502, tehtava503, tehtava504, tehtava505, tehtava506, tehtava507, tehtava508, tehtava509, tehtava510, tehtava511, tehtava512, tehtava513, tehtava514, tehtava515, tehtava516, tehtava517, tehtava518, tehtava519, tehtava520]

    const tehtava601 = {vaikeusaste: 6, numero: 107, merkki: "yhteenlasku", vaihtoehto1: 12, vaihtoehto2: 17, vaihtoehto3: 55, vaihtoehto4: 23, vaihtoehto5: 29, vaihtoehto6: 68, vaihtoehto7: 27, oikein: [12, 17, 55, 23]}
    const tehtava602 = {vaikeusaste: 6, numero: 71, merkki: "yhteenlasku", vaihtoehto1: 31, vaihtoehto2: 6, vaihtoehto3: 20, vaihtoehto4: 14, vaihtoehto5: 43, vaihtoehto6: 11, vaihtoehto7: 26, oikein: [31, 6, 20, 14]}
    const tehtava603 = {vaikeusaste: 6, numero: 83, merkki: "vähennyslasku", vaihtoehto1: 165, vaihtoehto2: 23, vaihtoehto3: 11, vaihtoehto4: 48, vaihtoehto5: 43, vaihtoehto6: 136, vaihtoehto7: 7, oikein: [165, 23, 11, 48]}
    const tehtava604 = {vaikeusaste: 6, numero: 35, merkki: "vähennyslasku", vaihtoehto1: 98, vaihtoehto2: 33, vaihtoehto3: 23, vaihtoehto4: 7, vaihtoehto5: 101, vaihtoehto6: 15, vaihtoehto7: 44, oikein: [98, 33, 23, 7]}
    const tehtava605 = {vaikeusaste: 6, numero: 192, merkki: "kertolasku", vaihtoehto1: 12, vaihtoehto2: 16, vaihtoehto3: 8, vaihtoehto4: 4, vaihtoehto5: 5, vaihtoehto6: 22, vaihtoehto7: 7, oikein: [12, 16]}
    const tehtava606 = {vaikeusaste: 6, numero: 288, merkki: "kertolasku", vaihtoehto1: 9, vaihtoehto2: 8, vaihtoehto3: 4, vaihtoehto4: 11, vaihtoehto5: 13, vaihtoehto6: 22, vaihtoehto7: 16, oikein: [9, 8, 4]}
    const tehtava607 = {vaikeusaste: 6, numero: 198, merkki: "kertolasku", vaihtoehto1: 11, vaihtoehto2: 3, vaihtoehto3: 6, vaihtoehto4: 18, vaihtoehto5: 21, vaihtoehto6: 5, vaihtoehto7: 8, oikein: [11, 3, 6]}
    const tehtava608 = {vaikeusaste: 6, numero: 255, merkki: "kertolasku", vaihtoehto1: 17, vaihtoehto2: 5, vaihtoehto3: 3, vaihtoehto4: 18, vaihtoehto5: 15, vaihtoehto6: 18, vaihtoehto7: 7, oikein: [17, 5, 3]}
    const tehtava609 = {vaikeusaste: 6, numero: 252, merkki: "kertolasku", vaihtoehto1: 19, vaihtoehto2: 14, vaihtoehto3: 2, vaihtoehto4: 16, vaihtoehto5: 26, vaihtoehto6: 5, vaihtoehto7: 4, oikein: [19, 14, 2]}
    const tehtava610 = {vaikeusaste: 6, numero: 7, merkki: "jakolasku", vaihtoehto1: 126, vaihtoehto2: 3, vaihtoehto3: 7, vaihtoehto4: 112, vaihtoehto5: 14, vaihtoehto6: 2, vaihtoehto7: 18, oikein: [126, 3, 7]}
    const tehtava611 = {vaikeusaste: 6, numero: 3, merkki: "jakolasku", vaihtoehto1: 168, vaihtoehto2: 7, vaihtoehto3: 8, vaihtoehto4: 136, vaihtoehto5: 3, vaihtoehto6: 12, vaihtoehto7: 14, oikein: [168, 7, 8]}
    const tehtava612 = {vaikeusaste: 6, numero: 11, merkki: "jakolasku", vaihtoehto1: 385, vaihtoehto2: 5, vaihtoehto3: 7, vaihtoehto4: 256, vaihtoehto5: 9, vaihtoehto6: 12, vaihtoehto7: 3, oikein: [385, 5, 7]}
    const tehtava613 = {vaikeusaste: 6, numero: 3, merkki: "jakolasku", vaihtoehto1: 351, vaihtoehto2: 9, vaihtoehto3: 13, vaihtoehto4: 449, vaihtoehto5: 11, vaihtoehto6: 19, vaihtoehto7: 3, oikein: [351, 9, 13]}
    const tehtava614 = {vaikeusaste: 6, numero: 7, merkki: "jakolasku", vaihtoehto1: 252, vaihtoehto2: 18, vaihtoehto3: 2, vaihtoehto4: 3, vaihtoehto5: 8, vaihtoehto6: 12, vaihtoehto7: 186, oikein: [252, 18, 2]}
    const vaikeusaste6tehtavat = [tehtava601, tehtava602, tehtava603, tehtava604, tehtava605, tehtava606, tehtava607, tehtava608, tehtava609, tehtava610, tehtava611, tehtava612, tehtava613, tehtava614]


    if (vaikeusaste == 1)
    {
        rndtehtava = vaikeusaste1tehtavat[Math.floor(Math.random() * vaikeusaste1tehtavat.length)];
    }
    else if (vaikeusaste == 2)
    {
        rndtehtava = vaikeusaste2tehtavat[Math.floor(Math.random() * vaikeusaste2tehtavat.length)];
    }
    else if (vaikeusaste == 3)
    {
        rndtehtava = vaikeusaste3tehtavat[Math.floor(Math.random() * vaikeusaste3tehtavat.length)];
    }
    else if (vaikeusaste == 4)
    {
        rndtehtava = vaikeusaste4tehtavat[Math.floor(Math.random() * vaikeusaste4tehtavat.length)];
    }
    else if (vaikeusaste == 5)
    {
        rndtehtava = vaikeusaste5tehtavat[Math.floor(Math.random() * vaikeusaste5tehtavat.length)];
    }
    else if (vaikeusaste == 6)
    {
        rndtehtava = vaikeusaste6tehtavat[Math.floor(Math.random() * vaikeusaste6tehtavat.length)];
    }


    console.log(rndtehtava)

    res.send(rndtehtava)
})

router.get("/muisti", (req, res) => 
{

    const hexa1 = "https://i.postimg.cc/50czqWn2/Hexa1.png"
    const hexa11 = "https://i.postimg.cc/QxjpyssB/Hexa1-1.png"
    const hexa12 = "https://i.postimg.cc/13tDyH8s/Hexa1-2.png"
    

    const pics = [hexa1, hexa11, hexa12]

    res.render("hirevueview/muistiindex.ejs",
    {
        pics: pics
    })
})

router.get("/muisti/data", (req, res) => 
{
    const hexa1 = "https://i.postimg.cc/50czqWn2/Hexa1.png"
    const hexa11 = "https://i.postimg.cc/QxjpyssB/Hexa1-1.png"
    const hexa12 = "https://i.postimg.cc/13tDyH8s/Hexa1-2.png"
    const hexa13 = "https://i.postimg.cc/BQNxWyQm/Hexa1-3.png"
    const hexa14 = "https://i.postimg.cc/VkVnvCtM/Hexa1-4.png"
    const hexa15 = "https://i.postimg.cc/Lsgf18kW/Hexa1-5.png"
    const hexa16 = "https://i.postimg.cc/nzvD3SPY/Hexa1-6.png"
    const hexa2 = "https://i.postimg.cc/MpNfq8km/Hexa2.png"
    const hexa21 = "https://i.postimg.cc/1XBNQnP8/Hexa2-1.png"
    const hexa22 = "https://i.postimg.cc/GtdsVJ00/Hexa2-2.png"
    const hexa23 = "https://i.postimg.cc/3JrvZBCm/Hexa2-3.png"
    const hexa24 = "https://i.postimg.cc/050Sm3m9/Hexa2-4.png"
    const hexa25 = "https://i.postimg.cc/TYkWNDCS/Hexa2-5.png"
    const hexa26 = "https://i.postimg.cc/L8ngc8Ws/Hexa2-6.png"
    const hexa3 = "https://i.postimg.cc/BQvjFv4C/Hexa3.png"
    const hexa31 = "https://i.postimg.cc/GpD8pSdw/Hexa3-1.png"
    const hexa32 = "https://i.postimg.cc/zB1LHSGL/Hexa3-2.png"
    const hexa33 = "https://i.postimg.cc/LXBJtYJx/Hexa3-3.png"
    const hexa34 = "https://i.postimg.cc/gjznNzRm/Hexa3-4.png"
    const hexa35 = "https://i.postimg.cc/PJSN7gzZ/Hexa3-5.png"
    const hexa36 = "https://i.postimg.cc/FFpf1S5R/Hexa3-6.png"
    const hexa4 = "https://i.postimg.cc/TPs9zs0z/Hexa4.png"
    const hexa41 = "https://i.postimg.cc/hP3f1qGR/Hexa4-1.png"
    const hexa42 = "https://i.postimg.cc/fRtkHg3t/Hexa4-2.png"
    const hexa43 = "https://i.postimg.cc/L8c5GBfy/Hexa4-3.png"
    const hexa44 = "https://i.postimg.cc/Bv2b3LBJ/Hexa4-4.png"
    const hexa45 = "https://i.postimg.cc/d1B07bfX/Hexa4-5.png"
    const hexa46 = "https://i.postimg.cc/qR0RvJ1y/Hexa4-6.png"
    const hexa5 = "https://i.postimg.cc/4xNQmGSC/Hexa5.png"
    const hexa51 = "https://i.postimg.cc/mDFwBS6t/Hexa5-1.png"
    const hexa52 = "https://i.postimg.cc/3N5ZRDP9/Hexa5-2.png"
    const hexa53 = "https://i.postimg.cc/CL0NpkCx/Hexa5-3.png"
    const hexa54 = "https://i.postimg.cc/sxY4Zgzz/Hexa5-4.png"
    const hexa55 = "https://i.postimg.cc/jqPX1Z71/Hexa5-5.png"
    const hexa56 = "https://i.postimg.cc/tCzzqJDt/Hexa5-6.png"
    const hexa6 = "https://i.postimg.cc/dQ226DMP/Hexa6.png"
    const hexa61 = "https://i.postimg.cc/mgXN9nvP/Hexa6-1.png"
    const hexa62 = "https://i.postimg.cc/43j6L9NZ/Hexa6-2.png"
    const hexa63 = "https://i.postimg.cc/mrP3yw48/Hexa6-3.png"
    const hexa64 = "https://i.postimg.cc/hjx9Htfm/Hexa6-4.png"
    const hexa65 = "https://i.postimg.cc/fyfYRq7T/Hexa6-5.png"
    const hexa66 = "https://i.postimg.cc/zvrn5Ygc/Hexa6-6.png"

    const jono1 = [hexa1, hexa1, hexa2, hexa2, hexa1, hexa3, hexa2, hexa2, hexa6, hexa5, hexa6, 
        hexa6, hexa5, hexa4, hexa5, hexa5, hexa4, hexa1, hexa2, hexa2, hexa3, hexa2, hexa3, hexa5, hexa6, hexa6, hexa6, hexa4, hexa3, hexa3, hexa4, hexa3, hexa61, hexa65, hexa54, hexa65, hexa52, hexa12, hexa65, hexa12, hexa65,
        hexa1, hexa2, hexa1, hexa2, hexa3, hexa2, hexa6, hexa5, hexa2, hexa1, hexa6, hexa4, hexa4, hexa3, hexa1, hexa5, hexa2, hexa1, hexa5, hexa1, hexa2, hexa6, hexa5, hexa12, hexa15, hexa23, hexa12, hexa24, hexa23, hexa32, hexa61, hexa54, hexa61, hexa52, hexa65, hexa54, hexa36, hexa32, hexa41, hexa52, hexa32, hexa41, hexa12, hexa32, hexa35, hexa45, hexa23, hexa35, hexa65, hexa64, hexa12, hexa15, hexa65, hexa35, hexa15, hexa35, hexa35, hexa15, hexa64, hexa13]

    console.log(jono1.length)
    res.send(jono1)
})

module.exports = router;