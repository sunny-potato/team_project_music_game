let myGameArea;
let ctx;

//play game
function addGameToslide(target) {
  var baneIndex = swiper.activeIndex;
  var banevalg = baner[baneIndex];

  let date = new Date();
  let startdate = date.getTime();
  var stopdate;

  timer_sekund = 0;
  score = 0;
  trykket = 0;

  if (banevalg == "Tutorial") {
    banesend = 0;
  }
  if (banevalg == "Bane 1") {
    banesend = 1;
  }
  if (banevalg == "Bane 2") {
    banesend = 2;
  }
  if (banevalg == "Bane 3") {
    banesend = 3;
  }

  //bane tutorial
  if (banesend == 0) {
    //hvor notene er (altså banen)
    pil_venstre = [
      18, 26, 34, 46, 62, 83, 85, 87, 91, 93, 95, 109, 111, 115, 117, 119, 123,
      125, 127, 138, 151, 152, 193, 247, 248, 266, 282, 322, 326, 331, 333, 335,
      339, 341, 347, 349, 355, 357, 365, 371, 373, 379, 381, 387, 389, 407, 408,
      430.5, 438.5, 446.5, 9999,
    ];
    pil_opp = [
      24, 38, 68, 97, 113, 131, 133, 135, 140, 154, 185, 199, 217, 225, 231,
      242, 250, 266, 282, 303.5, 312, 319.5, 323, 327, 337, 343, 351, 367, 375,
      377, 383, 391, 402, 429, 437, 445, 9999,
    ];
    pil_ned = [
      32, 54, 70, 89, 99, 101, 121, 146, 162, 177, 209, 223, 234, 266, 282, 298,
      300, 302.5, 304, 308, 309.5, 310.5, 316, 318.5, 320, 324, 328, 345, 353,
      369, 410, 418, 424, 427.5, 435.5, 443.5, 9999,
    ];
    pil_hoyre = [
      103, 129, 138, 151, 152, 171, 173, 175, 179, 181, 183, 187, 189, 191, 195,
      197, 205, 207, 211, 213, 215, 219, 221, 227, 229, 247, 248, 258, 266, 282,
      325, 329, 359, 385, 396, 407, 408, 426, 434, 442, 9999,
    ];
    //hold notes
    hold_venstre = [50, 66, 290, 432, 440, 450];
    hold_opp = [42, 146, 162, 203, 234, 245, 256, 290, 394, 405, 432, 440, 450];
    hold_ned = [58, 74, 149, 167, 240, 290, 415, 422, 432, 440, 450];
    hold_hoyre = [107, 262, 290, 363, 398.5, 432, 440, 450];
    //lengde
    lengde = 200;
    bpm = 100 * 2;
    speed = 1.5;
  }
  //bane 1
  if (banesend == 1) {
    pil_venstre = [
      16, 22, 31.5, 38, 45, 48, 64, 87, 104, 114, 130, 135, 136, 168, 174.5,
      179.5, 182.5, 189.5, 190.5, 199.5, 208.5, 210, 216.5, 221.5, 225.5, 228,
      233, 235, 248.5, 265.5, 283.5, 297.5, 300.5, 315.5, 326.5, 329.5, 332.5,
      335.5, 340.5, 343.5, 350.5, 351.5, 360.5, 369.5, 371, 377.5, 382.5, 386.5,
      389, 394, 396, 400.5, 402.5, 404, 408.5, 410.5, 416.5, 418.5, 423.5,
      426.5, 437.5, 447.5, 456, 467, 473, 482.5, 489, 496, 499, 515, 527, 9999,
    ];
    pil_opp = [
      19, 24, 31, 32, 45.5, 51, 56, 62.5, 63.5, 82, 83, 84, 86, 89, 100, 107,
      115, 123, 131, 144, 155, 162, 163, 169, 175, 176, 183, 184, 189, 191, 192,
      197.5, 207.5, 208.5, 210, 211.5, 215.5, 216.5, 221, 224.5, 225.5, 227,
      229, 233, 235, 243.5, 244.5, 245.5, 247.5, 250.5, 261.5, 264.5, 268.5,
      277.5, 278.5, 280.5, 284.5, 293.5, 294.5, 298.5, 299.5, 301.5, 312.5,
      316.5, 325.5, 331.5, 336, 337, 344, 345, 350, 352, 353, 358.5, 368.5,
      369.5, 371, 372.5, 376.5, 377.5, 382, 385.5, 386.5, 388, 390, 394, 396,
      401, 402, 405.5, 409, 410, 412, 415.5, 417, 418, 422.5, 425.5, 433.5,
      434.5, 436, 441.5, 442.5, 447, 450.5, 451.5, 455, 458, 470, 475, 482, 483,
      496.5, 502, 507, 513.5, 514.5, 525, 9999,
    ];
    pil_ned = [
      27, 30.5, 35, 46, 59, 62, 63, 67, 85, 90, 99, 101, 116, 117, 120, 122,
      132, 133, 137, 138, 140, 148, 149, 150, 152, 154, 164, 170, 175.5, 176.5,
      178, 183.5, 184.5, 186, 187.5, 191.5, 192.5, 194.5, 196.5, 200.5, 207,
      208, 211.5, 215, 216, 220, 224, 225, 230, 246.5, 251.5, 260.5, 262.5,
      265.5, 276.5, 281.5, 284.5, 292.5, 309.5, 310.5, 311.5, 313.5, 316.5,
      323.5, 324.5, 330.5, 336.5, 337.5, 339, 344.5, 345.5, 347, 348.5, 352.5,
      353.5, 355.5, 357.5, 361.5, 368, 369, 372.5, 376, 377, 381, 385, 386, 391,
      401.5, 402.5, 404, 409.5, 410.5, 415, 417.5, 418.5, 421.5, 426.5, 433,
      434, 437.5, 441, 442, 446, 450, 451, 454, 459, 461, 478, 481.5, 486, 497,
      510, 513, 514, 523, 9999,
    ];
    pil_hoyre = [
      30, 46.5, 91, 98, 103, 104, 119, 136, 139, 151, 165, 168, 171, 176.5, 178,
      184.5, 186, 192.5, 195.5, 200.5, 206.5, 214.5, 223.5, 232, 252.5, 259,
      275, 281.5, 291.5, 296.5, 297.5, 305, 313.5, 329.5, 337.5, 339, 345.5,
      347, 353.5, 356.5, 361.5, 367.5, 375.5, 384.5, 393, 412, 413.5, 420.5,
      432.5, 434.5, 436, 440.5, 442.5, 449.5, 451.5, 453, 459, 461, 481, 497.5,
      518, 9999,
    ];

    hold_venstre = [
      51, 67, 89, 106, 140, 171, 219, 234, 250.5, 267.5, 284.5, 316.5, 380, 395,
      424.5, 428.5, 502, 518, 529,
    ];
    hold_opp = [
      54, 59, 90, 112, 128, 146, 160, 219, 234, 251.5, 273.5, 281.5, 289.5,
      313.5, 321.5, 380, 395, 423.5, 445, 505, 510, 529,
    ];
    hold_ned = [
      80, 91, 123, 155, 189, 202.5, 252.5, 267.5, 289.5, 321.5, 350, 363.5,
      422.5, 428.5, 460, 529,
    ];
    hold_hoyre = [
      96, 106, 120, 152, 202.5, 257.5, 301.5, 307.5, 332.5, 363.5, 415, 421.5,
      445, 460, 529,
    ];
    lengde = 438;
    bpm = 130 * 2;
    speed = 2.25;
  }
  //bane 2
  if (banesend == 2) {
    pil_venstre = [
      20, 21.5, 23, 36, 37.5, 39, 48, 53, 54, 56, 58, 60, 62, 64, 66, 68, 70,
      72, 80, 82, 85.5, 87, 88, 94, 96, 98, 100, 101.5, 104, 106, 108, 110.5,
      112, 116, 120, 122, 124, 128, 133, 135, 137.5, 140, 142, 144, 146, 148,
      150, 152, 156, 158, 160, 162, 165, 168, 173, 175, 179, 180, 182, 184, 186,
      188, 191, 193, 196, 198, 200, 202, 204, 206, 239.5, 242, 247.5, 250.5,
      253, 256, 260, 261.5, 264.5, 266.5, 268.5, 270.5, 272.5, 278, 280, 283,
      285, 286, 288, 290, 292, 293.5, 296, 298, 307, 308, 309.5, 311, 313, 314,
      315.5, 319, 320, 322, 324, 328, 330, 331, 335, 339, 346, 348, 349, 351,
      352, 356, 364, 366, 368, 370, 372, 376, 378, 380, 382, 384, 388, 393, 395,
      397.5, 399, 404, 406, 409, 411, 413.5, 416, 418, 420, 424, 427, 430, 432,
      434, 435, 436, 437.5, 439, 441, 443, 445.5, 450, 454, 456, 458, 461.5,
      464, 466, 467, 469.5, 472, 476, 479, 482, 484, 492, 494, 496, 502, 504,
      507, 510, 512, 514, 516, 520, 525.5, 527, 528, 535, 541, 542.5, 9999,
    ];
    pil_opp = [
      32, 34, 48, 50, 52, 56, 60, 61.5, 63, 66, 68, 69.5, 72, 79, 84, 85.5, 87,
      90, 92, 95, 101, 103, 105, 108, 109.5, 111, 114, 116, 117.5, 120, 122,
      125.5, 128, 130, 132, 133.5, 136.5, 138, 139, 140.5, 142.5, 144, 146,
      149.5, 151, 154, 157, 158, 160, 162, 165.5, 167, 170, 174, 175.5, 181,
      183, 185, 187, 189.5, 191.5, 195, 196, 198, 201, 208, 224, 239, 242, 245,
      246.5, 248.5, 250.5, 252.5, 254.5, 256, 260, 261.5, 263.5, 265.5, 269,
      271.5, 273.5, 275.5, 278, 281, 284, 286, 287.5, 290, 295, 300, 302, 304,
      307.5, 309.5, 311, 316, 317.5, 321, 324, 327, 337, 338, 340, 344, 350,
      354, 355, 357, 358, 364.5, 366.5, 368, 373.5, 375, 377, 379, 381.5, 382.5,
      384, 388, 390, 392, 397, 398.5, 400, 402, 406, 408, 412, 414, 415.5, 417,
      418, 420, 422, 423, 425, 426, 429, 430, 432, 434, 438, 440, 442, 446, 447,
      448, 449, 450, 451, 452, 455, 457, 459, 461, 462, 463, 464, 466, 468, 470,
      474, 480, 482, 483, 487, 490, 492, 494.5, 495.5, 500, 503, 504, 506,
      509.5, 510.5, 514, 516, 518, 520, 524, 526, 527.5, 529, 531, 533.5, 536,
      538, 540, 541.5, 9999,
    ];
    pil_ned = [
      16, 18, 29.5, 31, 45.5, 47, 50, 52, 53.5, 55, 57, 59, 61, 64, 69.5, 78,
      85, 90, 92, 94, 95.5, 100, 101.5, 104, 106.5, 110, 117.5, 119, 124, 126,
      127.5, 132, 136, 137, 138.5, 139.5, 141, 143, 149, 151, 153, 155, 157.5,
      159.5, 163, 164, 166, 169, 171.5, 176, 178, 181.5, 183, 186, 189, 190,
      192, 194, 197.5, 199, 203, 206, 207.5, 232, 238.5, 240, 244, 245.5, 247.5,
      249.5, 251.5, 254, 255, 258, 261, 263.5, 267.5, 269.5, 274.5, 277.5, 280,
      282, 285.5, 287, 290, 292.5, 294, 300.5, 302.5, 306, 308, 315.5, 320,
      321.5, 323, 326, 330, 332, 336, 337, 338, 343, 353, 356, 357.5, 359, 365,
      367, 372, 374, 381, 383, 386, 389.5, 391, 393, 395, 397, 398, 402, 404,
      405.5, 407, 410, 413, 414, 415, 416, 419, 420, 421.5, 424, 426, 427, 428,
      429, 430.5, 431.5, 433, 434, 436, 437, 440, 441, 442, 444, 445, 446.5,
      448, 452, 453.5, 456, 457, 459, 460, 462.5, 463.5, 465, 466, 468, 470,
      471, 475, 476, 478, 484, 486, 487, 488, 491, 493.5, 495, 496, 498, 499,
      501.5, 503, 508, 510, 511, 512, 515, 517.5, 519, 520, 522, 523, 524,
      526.5, 530, 533, 534, 542, 543, 9999,
    ];
    pil_hoyre = [
      25, 26.5, 28, 41, 42.5, 44, 49, 51, 53.5, 55, 58, 61, 63, 65, 67, 69, 71,
      74, 76, 80, 82, 84, 89, 90.5, 93.5, 96, 98, 103, 106, 110, 112, 114, 117,
      119, 121, 122.5, 126, 127, 130, 133.5, 135, 138, 141.5, 143.5, 147, 148,
      150, 152, 154, 156, 159, 161, 164, 166, 168, 171, 172, 176, 178, 180, 182,
      184, 188, 190, 192, 194, 197, 200, 202, 204, 205.5, 207, 216, 238, 240,
      244, 245.5, 248.5, 252.5, 254, 255.5, 258, 262.5, 264.5, 266.5, 268.5,
      269.5, 271.5, 273.5, 275.5, 279, 281, 283, 285, 286.5, 288, 292, 294, 297,
      299, 304, 306.5, 313, 314, 316, 317.5, 319, 322, 325, 328, 331, 332, 335,
      336, 339, 340, 343, 344, 351, 352, 354, 357.5, 359, 365.5, 367.5, 370,
      374, 377, 379, 381, 382, 383.5, 386, 390, 394, 396, 398, 400, 409, 411,
      413, 414.5, 416, 418, 421, 422, 425, 428, 429.5, 431, 432, 436, 438, 443,
      444, 445, 446, 448, 450, 452, 453, 454, 458, 460, 461, 462, 464, 468, 469,
      472, 474, 478, 480, 485.5, 488, 490, 494, 495, 498, 500, 506, 508, 511,
      512, 516, 518, 522, 524, 526, 527, 528, 532, 543.5, 9999,
    ];

    hold_venstre = [74, 350, 473, 477, 485, 493, 497, 505, 513, 517, 521];
    hold_opp = [216, 232, 351, 475, 481, 493, 501, 505, 517, 521, 525];
    hold_ned = [324, 328, 477, 479, 485, 489, 497, 509, 513, 521, 525];
    hold_hoyre = [224, 473, 475, 479, 481, 489, 501, 509, 513, 517, 525];
    lengde = 806;
    bpm = 155 * 2;
    speed = 3;
  }
  //bane 3
  if (banesend == 3) {
    pil_venstre = [
      16, 24, 31, 32, 40, 47, 48, 56, 63, 64, 72, 79, 81.5, 85.5, 89.5, 94,
      97.5, 101.5, 105.5, 113.75, 117.5, 121.5, 126, 129.5, 133.5, 137.5, 144,
      145.5, 149.5, 152, 153.5, 159, 161.5, 165.5, 166.5, 168, 169.5, 173,
      174.5, 176, 177.5, 181.5, 185.5, 191, 193.5, 197.5, 200, 201.5, 204, 208,
      210, 212, 214, 221, 223, 232, 234, 236, 239, 241.5, 243, 244, 245, 246.5,
      247.75, 249, 250.75, 252, 253.5, 254.5, 255.75, 257, 258, 259.25, 260.5,
      261.75, 263, 264, 265, 266, 267, 270, 272, 274.25, 277.25, 280.25, 282,
      284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 311, 312,
      313, 314, 319, 320, 323, 324, 326.5, 328.5, 330.5, 332.5, 336, 339, 341,
      343, 345, 347, 349, 352.5, 354.5, 357, 359, 361, 363, 365, 367, 369,
      371.5, 373, 375, 377, 379, 381, 384.5, 386.5, 389, 391, 393, 395, 397,
      398, 399, 400.5, 402, 405, 407, 409, 411, 413, 416.5, 418.5, 421, 423,
      425, 427, 429, 431, 433, 435.5, 437, 440.5, 442, 443, 444, 445.5, 447,
      448.5, 450, 451.5, 453, 454, 455.5, 456.75, 458.5, 460, 461, 463, 467,
      469, 470.5, 473, 474.5, 478.5, 483, 486.5, 489, 490.5, 494.5, 497, 499,
      501, 502.5, 505, 506.5, 509, 510.5, 513, 515, 518, 519.5, 521.5, 522.5,
      524, 526.5, 530, 532, 533, 535, 537, 539, 541, 547, 551, 552, 558.5, 560,
      563, 565, 566, 569, 570, 575, 576, 579, 580, 581, 582.5, 584.5, 586.5,
      588.5, 589.75, 590.75, 591.75, 592.75, 593.75, 594.75, 595.75, 596.75,
      623, 632, 633, 634.5, 635.5, 637, 638, 640, 641, 642.5, 643.5, 644.5,
      645.5, 648, 649, 650.5, 651.5, 653, 654, 656, 657, 658.5, 659.5, 662, 664,
      665, 666.5, 667.5, 669, 670, 672, 673, 674.5, 675.5, 677, 680, 681, 682.5,
      683.5, 685, 686, 688, 689, 690.5, 691.5, 693.5, 696, 697, 698.5, 699.5,
      701, 702, 704, 705, 706.5, 707.5, 709, 712, 713, 714.5, 715.5, 717, 718,
      721, 724, 725, 727, 728.5, 731, 732.5, 735, 736.5, 739, 740.5, 743, 745,
      747, 749, 753.5, 755.5, 759.5, 761.5, 762.5, 763.5, 765.5, 767.5, 769.5,
      770.5, 771.5, 773.5, 775.5, 777.5, 778.5, 779.5, 781.5, 783.5, 785.5,
      786.5, 787.5, 789.5, 791.5, 793.5, 794.5, 795.5, 797.5, 799.5, 801.5,
      802.5, 803.5, 805.5, 807.5, 809.5, 810.5, 812.5, 813.5, 814.5, 815.5,
      816.5, 818, 821.5, 823.5, 825, 828, 829.5, 831.75, 833.25, 836.25, 837.75,
      839.25, 840.25, 842.5, 844.75, 846.5, 847.25, 850, 853, 855.5, 856.5,
      857.5, 860, 862, 863.5, 864.5, 866.5, 868, 869.5, 871.5, 872.5, 873.5,
      875.75, 877, 879, 882.5, 884.5, 885.5, 889, 891.5, 895, 900, 901.5, 9999,
    ];

    pil_opp = [
      16.5, 18.5, 20.25, 24.5, 29.5, 32.5, 34.5, 36.25, 40.5, 45.5, 48.5, 50.5,
      52.25, 56.5, 61.5, 64.5, 66.5, 68.25, 72.5, 77.5, 95, 108, 111, 127, 140,
      143, 147, 155, 156, 160, 161.5, 163, 172, 175, 179, 184, 187, 188, 192,
      195, 203, 205, 208, 210, 212, 214, 222, 232, 234, 240, 241, 243.25,
      244.75, 246, 247.5, 249.5, 251.25, 252.75, 253.75, 255.5, 257.25, 259,
      260, 261.5, 263.25, 264.25, 265.25, 266.25, 267.25, 268, 269.5, 273.5,
      276.5, 279.5, 281.5, 283.5, 285.5, 287.5, 289.5, 291.5, 293.5, 295.5,
      297.5, 299.5, 301.5, 303.5, 305.5, 307.5, 311, 312, 315, 316, 317, 318,
      323, 324, 326, 328, 330, 332, 334, 340, 344.5, 346, 347.5, 349, 351, 353,
      354, 355.5, 360.5, 362, 363.5, 365, 367, 369, 372.5, 376.5, 378, 379.5,
      381, 383, 385, 386, 387.5, 392.5, 394, 395.5, 397, 398.25, 400, 403, 405,
      408.5, 410, 411.5, 413, 415, 417, 418, 419.5, 424.5, 426, 427.5, 429, 431,
      433, 436.5, 439, 440, 441.5, 443.5, 445, 448, 449.5, 451, 453, 454.5,
      455.5, 456.5, 457.5, 458.75, 460.25, 465, 468, 471, 475, 479, 484, 487,
      491, 495, 497, 500, 503, 507, 511, 516, 519.5, 521.5, 522.5, 524, 531,
      535, 539, 543, 547, 549, 555, 559, 561, 562, 564, 567, 568, 571, 572, 575,
      576, 577, 578, 582, 584, 586, 588, 589.5, 590.5, 591.5, 592.5, 593.5,
      594.5, 595.5, 596.5, 630, 632, 634, 636, 638, 640, 642, 644, 646, 648,
      650, 652, 654, 656, 658, 660, 664, 666, 668, 670, 672, 674, 676, 678, 680,
      682, 684, 686, 688, 690, 692, 693, 694, 696, 698, 700, 702, 704, 706, 708,
      710, 712, 714, 716, 719.5, 722.5, 724.25, 726, 727, 729.5, 731, 733.5,
      735, 737.5, 739, 741.5, 742.5, 744.5, 746.5, 748.5, 750.5, 752.5, 757.5,
      760, 762, 763, 765, 768, 770, 771, 773, 776, 778, 779, 781, 784, 786, 787,
      788.5, 792, 794, 795, 797, 800, 802, 803, 805, 808, 809, 810.5, 812.5,
      815.75, 818.5, 819.5, 821, 824.25, 825.75, 828.75, 830.25, 832.5, 834,
      837, 838.5, 841, 842.5, 844.75, 846.5, 848.25, 849.25, 853, 855.5, 856.5,
      857.5, 861.5, 862.5, 864, 865, 866, 867, 869.5, 871.5, 872.5, 873.5,
      875.5, 876.5, 883.5, 887, 889.5, 893, 895.5, 897.5, 899.5, 901.5, 9999,
    ];

    pil_ned = [
      17.5, 19.5, 26, 28, 33.5, 35.5, 42, 44, 49.5, 51.5, 58, 60, 65.5, 67.5,
      74, 76, 80, 84, 88, 92, 96, 100, 104, 109, 112, 116, 120, 124, 128, 132,
      136, 141, 144, 148, 152, 160, 164, 165, 168, 171, 173, 176, 180, 184, 192,
      196, 200, 206, 208, 216, 218, 221.5, 224, 226, 228, 230, 240.5, 242,
      243.5, 244.5, 245.75, 247, 248, 250, 251.5, 252.5, 253.25, 254, 255.25,
      256.5, 257.5, 258.5, 259.5, 261.25, 262.5, 263.75, 264.5, 265.5, 266.5,
      267.5, 269, 271, 272.75, 275.75, 278.75, 281, 283, 285, 287, 289, 291,
      293, 295, 297, 299, 301, 303, 305, 307, 309, 310, 315, 316, 319, 320, 321,
      322, 325.5, 327.5, 329.5, 331.5, 335, 341, 344, 345.5, 347, 348, 353.5,
      355, 356, 357, 360, 361.5, 363, 364, 366.5, 368, 370, 372, 373, 376,
      377.5, 379, 380, 384, 385.5, 387, 388, 389, 392, 393.5, 395, 396, 397.5,
      398.5, 399.5, 402, 405, 408, 409.5, 411, 412, 416, 417.5, 419, 420, 421,
      424, 425.5, 427, 428, 430.5, 432, 434, 436, 437, 439.5, 441, 443, 445,
      446.5, 447.5, 449, 451, 452.5, 453.5, 455, 457.25, 457.75, 459, 460.5,
      467.5, 469, 471, 473, 475, 477, 479, 481, 485, 487, 489, 491, 493, 495,
      496, 498, 501, 503, 505, 507, 509, 511, 513, 517, 518.5, 520, 521, 522,
      523.5, 525, 529, 530, 533, 537, 541, 545, 553, 557, 558.5, 560, 561.5,
      565, 566, 571, 572, 573, 574, 579, 580, 581.5, 583.5, 585.5, 587.5,
      589.25, 590.25, 591.25, 592.25, 593.25, 594.25, 595.25, 596.25, 601, 609,
      617, 626, 632.5, 633.5, 635, 636.5, 637.5, 640.5, 641.5, 643, 645, 648.5,
      649.5, 651, 652.5, 653.5, 656.5, 657.5, 659, 662, 664.5, 665.5, 667,
      668.5, 669.5, 672.5, 673.5, 675, 676.5, 680.5, 681.5, 683, 684.5, 685.5,
      688.5, 689.5, 691, 692.5, 696.5, 697.5, 699, 700.5, 701.5, 704.5, 705.5,
      707, 708.5, 709.5, 712.5, 713.5, 715, 716.5, 717.5, 722, 728.5, 732.5,
      736.5, 740.5, 742, 744, 746, 748, 751.5, 757.5, 759.5, 760.5, 761.5,
      763.5, 764.5, 765.5, 767.5, 768.5, 769.5, 771.5, 772.5, 775.5, 776.5,
      777.5, 779.5, 780.5, 781.5, 783.5, 784.5, 785.5, 787.5, 789.5, 791.5,
      792.5, 793.5, 795.5, 796.5, 797.5, 799.5, 800.5, 801.5, 803.5, 804.5,
      807.5, 808.5, 809.5, 811.5, 813.5, 816, 817.25, 819, 820.5, 821.5, 823.5,
      826.5, 828, 831.75, 834.75, 836.25, 839.25, 841.75, 844.25, 846, 848.25,
      853.5, 854.5, 856, 857, 858.5, 861.25, 862.5, 864, 865, 866.5, 869, 870.5,
      872, 873, 875.25, 876.25, 877.5, 881.5, 882.5, 885.5, 891, 893.5, 897,
      899, 901, 9999,
    ];

    pil_hoyre = [
      27.25, 43.25, 59.25, 75.25, 80, 83, 87, 91, 99, 103, 107, 110, 115, 119,
      123, 131, 135, 139, 142, 145.5, 147, 151, 153.5, 155, 157.75, 163, 167,
      169.5, 171, 174, 177.5, 179, 183, 185.5, 187, 189.5, 193.5, 195, 199,
      201.5, 203, 207, 216, 218, 220, 224, 226, 228, 230, 237.5, 240, 242.5,
      243.75, 245.5, 247.25, 248.5, 250.5, 251.75, 253, 255, 256, 257.75,
      259.75, 261, 262, 263.5, 264.75, 265.75, 266.75, 267.75, 272, 275, 278,
      280.5, 282.5, 284.5, 286.5, 288.5, 290.5, 292.5, 294.5, 296.5, 298.5,
      300.5, 302.5, 304.5, 306.5, 309, 310, 313, 314, 317, 318, 321, 322, 325,
      327, 329, 331, 333, 337, 345, 346.5, 348.5, 351, 353, 355, 356.5, 359,
      361, 362.5, 364.5, 366.5, 368, 369.5, 370.5, 373, 375, 377, 378.5, 380.5,
      383, 385, 387, 388.5, 391, 393, 394.5, 396.5, 398.75, 401, 403, 407, 409,
      410.5, 412.5, 415, 417, 419, 420.5, 423, 425, 426.5, 428.5, 430.5, 432,
      433.5, 434.5, 437, 439, 441, 442.5, 444.5, 446, 447, 449, 450.5, 452, 453,
      455, 456, 457, 458, 459.5, 460.75, 462, 464, 467, 469, 472, 476, 480, 483,
      485, 488, 492, 494.5, 496, 499, 501, 504, 508, 512, 517, 518.5, 520, 521,
      522, 523.5, 528, 531, 534, 536, 538, 540, 543, 545, 549, 551, 555, 557,
      559, 561, 563, 567, 568, 569, 570, 573, 574, 577, 578, 581, 583, 585, 587,
      589, 590, 591, 592, 593, 594, 595, 596, 597, 630, 634, 636, 639, 642, 644,
      646, 650, 652, 655, 658, 660, 662, 666, 668, 671, 674, 676, 677, 678, 682,
      684, 687, 690, 692, 694, 698, 700, 703, 706, 708, 710, 714, 716, 718,
      724.5, 726, 729.5, 733.5, 737.5, 741.5, 743.5, 745.5, 747.5, 749.5, 757.5,
      761, 764, 766.5, 769, 772, 773.5, 777, 780, 782.5, 785, 789.5, 793, 796,
      798.5, 801, 804, 805.5, 809, 810.5, 811.5, 812.5, 813.5, 816.25, 817.5,
      820, 821.5, 825.75, 827.25, 830.25, 834, 835.5, 838.5, 840.25, 843.75,
      845.5, 847.25, 849.25, 851, 853.5, 854.5, 856, 857, 858.5, 861, 862,
      863.5, 864.5, 866, 869, 870.5, 872, 873, 875, 876, 877.5, 880.5, 883.5,
      886.5, 888.5, 890.5, 892.5, 894.5, 896.5, 898.5, 900.5, 9999,
    ];

    hold_venstre = [
      16.5, 32.5, 48.5, 64.5, 82.5, 86.5, 90.5, 95, 98.5, 102.5, 106.5, 114.5,
      118.5, 122.5, 127, 130.5, 134.5, 138.5, 146.5, 150.5, 154.5, 160, 162.5,
      170.5, 178.5, 182.5, 186.5, 192, 194.5, 198.5, 202.5, 224, 237.5, 240,
      271, 337, 342.5, 344, 358.5, 360, 374.5, 376, 390.5, 392, 406.5, 408,
      422.5, 424, 439, 462, 464, 471.5, 475.5, 479.5, 484, 487.5, 491.5, 495.5,
      503.5, 507.5, 511.5, 516, 527.5, 630, 678, 754.5, 757.5, 851, 861, 869,
      880,
    ];
    hold_opp = [
      96, 109, 112, 128, 141, 144, 157, 173, 176, 189, 223, 269, 335, 350.5,
      352, 366.5, 382.5, 384, 414.5, 416, 430.5, 447, 466, 469, 485, 498, 501,
      517, 565, 662, 751.5, 753.5, 868,
    ];
    hold_ned = [
      81, 85, 89, 93, 97, 101, 105, 110, 113, 117, 121, 125, 129, 133, 137, 142,
      145, 149, 153, 161, 169, 174, 177, 181, 185, 193, 197, 201, 272, 336, 470,
      474, 477.75, 482, 486, 490, 494, 499, 502, 506, 510, 514, 526, 605.5,
      613.5, 621.5, 630, 725.5, 752.5, 878.5,
    ];
    hold_hoyre = [
      84, 88, 92, 100, 104, 108, 111, 116, 120, 124, 132, 136, 140, 143, 148,
      152, 156, 158.75, 164, 172, 175, 180, 184, 188, 190.5, 196, 200, 204, 221,
      239, 334, 341, 405, 463, 465, 473, 477, 480.75, 489, 493, 497, 500, 505,
      509, 513, 529, 533, 564, 623, 632, 640, 648, 656, 664, 672, 680, 688, 696,
      704, 712, 722, 750.5, 759.5, 775.5, 791.5, 807.5, 823.5, 831.75, 853,
      881.5, 885.5,
    ];

    lengde = 1694;
    bpm = 160 * 2;
    speed = 3;
  }

  offset = 1 / speed;

  // create canvas
  myGameArea = document.createElement("canvas");
  target.textContent = "";

  target.append(myGameArea);
  canvasSize(myGameArea, 450, 600);
  ctx = myGameArea.getContext("2d");
  startgame();
  startGameLoop();

  //sorterer banene for å hindre errors
  pil_venstre = pil_venstre.sort(function (a, b) {
    return a - b;
  });
  pil_opp = pil_opp.sort(function (a, b) {
    return a - b;
  });
  pil_ned = pil_ned.sort(function (a, b) {
    return a - b;
  });
  pil_hoyre = pil_hoyre.sort(function (a, b) {
    return a - b;
  });

  hold_venstre = hold_venstre.sort(function (a, b) {
    return a - b;
  });
  hold_opp = hold_opp.sort(function (a, b) {
    return a - b;
  });
  hold_ned = hold_ned.sort(function (a, b) {
    return a - b;
  });
  hold_hoyre = hold_hoyre.sort(function (a, b) {
    return a - b;
  });

  //sjekker når en key har blitt trukket på innenfor ok "vinduet"
  document.onkeydown = (event) => {
    let trykk = event.key;
    //venstre
    if (trykk == venstre && pil_venstre[0] / (bpm / 60) < timer_sekund + ok) {
      button = pil_venstre[0];
      pil_venstre.splice(0, 1);
      plassering = myGameArea.width / 2 - 80;
      knapp(button);
      //opp
    } else if (trykk == opp && pil_opp[0] / (bpm / 60) < timer_sekund + ok) {
      button = pil_opp[0];
      pil_opp.splice(0, 1);
      plassering = myGameArea.width / 2 - 26.333;
      knapp(button);
      //opp
    } else if (trykk == ned && pil_ned[0] / (bpm / 60) < timer_sekund + ok) {
      button = pil_ned[0];
      pil_ned.splice(0, 1);
      plassering = myGameArea.width / 2 + 26.333;
      knapp(button);
      //høyre
    } else if (
      trykk == hoyre &&
      pil_hoyre[0] / (bpm / 60) < timer_sekund + ok
    ) {
      button = pil_hoyre[0];
      pil_hoyre.splice(0, 1);
      plassering = myGameArea.width / 2 + 80;
      knapp(button);
    }

    //hold notes
    document.onkeyup = (event) => {
      let trykk = event.key;
      //venstre
      if (
        trykk == venstre &&
        hold_venstre[0] / (bpm / 60) < timer_sekund + ok
      ) {
        button = hold_venstre[0];
        hold_venstre.splice(0, 1);
        plassering = myGameArea.width / 2 - 80;
        knapp(button);
        //opp
      } else if (trykk == opp && hold_opp[0] / (bpm / 60) < timer_sekund + ok) {
        button = hold_opp[0];
        hold_opp.splice(0, 1);
        plassering = myGameArea.width / 2 - 26.333;
        knapp(button);
        //opp
      } else if (trykk == ned && hold_ned[0] / (bpm / 60) < timer_sekund + ok) {
        button = hold_ned[0];
        hold_ned.splice(0, 1);
        plassering = myGameArea.width / 2 + 26.333;
        knapp(button);
        //høyre
      } else if (
        trykk == hoyre &&
        hold_hoyre[0] / (bpm / 60) < timer_sekund + ok
      ) {
        button = hold_hoyre[0];
        hold_hoyre.splice(0, 1);
        plassering = myGameArea.width / 2 + 80;
        knapp(button);
      }
    };
  };

  //noter
  setInterval(() => {
    //fjerner "noten" hvis den kommer forbi ok, great og perfect, uten å ha trykket på en knapp
    if (pil_venstre[0] / (bpm / 60) < timer_sekund - ok) {
      pil_venstre.splice(0, 1);
      plassering = myGameArea.width / 2 - 80;
      miss_send = true;
      trykket += 1;
    }
    if (pil_opp[0] / (bpm / 60) < timer_sekund - ok) {
      pil_opp.splice(0, 1);
      plassering = myGameArea.width / 2 - 26.333;
      miss_send = true;
      trykket += 1;
    }
    if (pil_ned[0] / (bpm / 60) < timer_sekund - ok) {
      pil_ned.splice(0, 1);
      plassering = myGameArea.width / 2 + 26.333;
      miss_send = true;
      trykket += 1;
    }
    if (pil_hoyre[0] / (bpm / 60) < timer_sekund - ok) {
      pil_hoyre.splice(0, 1);
      plassering = myGameArea.width / 2 + 80;
      miss_send = true;
      trykket += 1;

      //hold notes
    }
    if (hold_venstre[0] / (bpm / 60) < timer_sekund - ok) {
      hold_venstre.splice(0, 1);
      plassering = myGameArea.width / 2 - 80;
      miss_send = true;
      trykket += 1;
    }
    if (hold_opp[0] / (bpm / 60) < timer_sekund - ok) {
      hold_opp.splice(0, 1);
      plassering = myGameArea.width / 2 - 26.333;
      miss_send = true;
      trykket += 1;
    }
    if (hold_ned[0] / (bpm / 60) < timer_sekund - ok) {
      hold_ned.splice(0, 1);
      plassering = myGameArea.width / 2 + 26.333;
      miss_send = true;
      trykket += 1;
    }
    if (hold_hoyre[0] / (bpm / 60) < timer_sekund - ok) {
      hold_hoyre.splice(0, 1);
      plassering = myGameArea.width / 2 + 80;
      miss_send = true;
      trykket += 1;
    }
  }, 10); //10 millisekund

  // timeren
  setInterval(() => {
    if (pause == 0) {
      date = new Date();
      stopdate = date.getTime();
      timer_sekund = stopdate / 1000 - startdate / 1000;
    }
  }, 10); //10 millisekund

  //hvor nerme noten man er
  function knapp(button) {
    //perfect
    if (
      button / (bpm / 60) > timer_sekund - perfect &&
      button / (bpm / 60) < timer_sekund + perfect
    ) {
      perfect_send = true;
      trykket += 1;
      score += 1;
      //great
    } else if (
      button / (bpm / 60) > timer_sekund - great &&
      button / (bpm / 60) < timer_sekund + great
    ) {
      great_send = true;
      trykket += 1;
      score += 0.5;
      //ok
    } else {
      ok_send = true;
      trykket += 1;
      score += 0.3;
    }
  }
}

//default key
let venstre = "q";
let opp = "w";
let ned = "o";
let hoyre = "p";

let pil_venstre = [];
let pil_opp = [];
let pil_ned = [];
let pil_hoyre = [];

let hold_venstre = [];
let hold_opp = [];
let hold_ned = [];
let hold_hoyre = [];

let lengde = 0;
var score = 0;
let trykket = 0;

//timer
var bpm; // 100(tutorial) 130 (1) 160 (3)
var speed;
let offset;
let faktisk_sekund = 0;
let timer_sekund = 0;

//trykke "vinduet"
let perfect = 0.05;
let great = 0.09;
let ok = 0.12;

//sender informasjon til bane_display
let perfect_send = false;
let great_send = false;
let ok_send = false;
let miss_send = false;

let button;
let plassering;
let pause = 0;

var ScoreProsent;

//decide size of canvas
function canvasSize(myGameArea, width, height) {
  myGameArea.width = width;
  myGameArea.height = height;
}

var note1, note2, note3, note4;
var holdnote1, holdnote2, holdnote3, holdnote4;
var venstre_placeholder, opp_placeholder, ned_placeholder, hoyre_placeholder;
var musikk;
var Area;

let lag = 8;
let lengde1 = 0;
let lengde2 = 0;
let lengde3 = 0;
let lengde4 = 0;
let lengde11 = 0;
let lengde12 = 0;
let lengde13 = 0;
let lengde14 = 0;
let lengde111 = 0;
let lengde112 = 0;
let lengde113 = 0;
let lengde114 = 0;

let block1 = true;
let block2 = true;
let block3 = true;
let block4 = true;
let block11 = true;
let block12 = true;
let block13 = true;
let block14 = true;

let countdown;

//alt som "vises" på canvasen
function startgame() {
  note1 = new component(20, 0, "cyan", myGameArea.width / 2 - 80, 20);
  note2 = new component(20, 0, "purple", myGameArea.width / 2 - 26.666, 20);
  note3 = new component(20, 0, "cyan", myGameArea.width / 2 + 26.666, 20);
  note4 = new component(20, 0, "purple", myGameArea.width / 2 + 80, 20);
  holdnote1 = new component(20, 0, "cyan", myGameArea.width / 2 - 80, 20);
  holdnote2 = new component(20, 0, "purple", myGameArea.width / 2 - 26.666, 20);
  holdnote3 = new component(20, 0, "cyan", myGameArea.width / 2 + 26.666, 20);
  holdnote4 = new component(20, 0, "purple", myGameArea.width / 2 + 80, 20);
  holdfirkant1 = new component(10, 10, "cyan", myGameArea.width / 2 - 85, 20);
  holdfirkant2 = new component(
    10,
    10,
    "purple",
    myGameArea.width / 2 - 31.666,
    20
  );
  holdfirkant3 = new component(
    10,
    10,
    "cyan",
    myGameArea.width / 2 + 21.666,
    20
  );
  holdfirkant4 = new component(10, 10, "purple", myGameArea.width / 2 + 75, 20);
  //sanger
  tutorial = new sound("lyd_filer/tutorial.mp3");
  bane1 = new sound("lyd_filer/bane1.mp3");
  bane2 = new sound("lyd_filer/bane2.mp3");
  bane3 = new sound("lyd_filer/bane3.mp3");
  if (banesend == 0) {
    setTimeout(() => {
      tutorial.play();
    }, 2975);
  }
  if (banesend == 1) {
    setTimeout(() => {
      bane1.play();
    }, 2900);
  }
  if (banesend == 2) {
    setTimeout(() => {
      bane2.play();
    }, 2850);
  }
  if (banesend == 3) {
    setTimeout(() => {
      bane3.play();
    }, 3000);
  }

  //Arena, text og placeholders
  Area = new component(
    240,
    myGameArea.height,
    "black",
    (myGameArea.width - 240) / 2,
    0
  );
  venstre_placeholder = new component(
    20,
    50,
    "grey",
    myGameArea.width / 2 - 80,
    myGameArea.height - 35
  );
  opp_placeholder = new component(
    20,
    0,
    "grey",
    myGameArea.width / 2 - 26.333,
    myGameArea.height - 35
  );
  ned_placeholder = new component(
    20,
    0,
    "grey",
    myGameArea.width / 2 + 26.333,
    myGameArea.height - 35
  );
  hoyre_placeholder = new component(
    20,
    0,
    "grey",
    myGameArea.width / 2 + 80,
    myGameArea.height - 35
  );
  setTimeout(() => {
    countdown = new component(
      0,
      0,
      "white",
      myGameArea.width / 2,
      myGameArea.height / 2,
      "3"
    );
  }, 300);
  setTimeout(() => {
    countdown = new component(
      0,
      0,
      "white",
      myGameArea.width / 2,
      myGameArea.height / 2,
      "2"
    );
  }, 900);
  setTimeout(() => {
    countdown = new component(
      0,
      0,
      "white",
      myGameArea.width / 2,
      myGameArea.height / 2,
      "1"
    );
  }, 1500);
  setTimeout(() => {
    countdown = new component(
      0,
      0,
      "white",
      myGameArea.width / 2,
      myGameArea.height / 2,
      "GO"
    );
  }, 2100);
  setTimeout(() => {
    countdown = new component(0, 0, "white", 3000, myGameArea.height / 2, "");
  }, 2700);

  Score_show = new component(
    0,
    0,
    "Black",
    myGameArea.width - 50,
    myGameArea.height / 2,
    "F"
  );
  ScoreProsent = new component(
    0,
    0,
    "Black",
    myGameArea.width - 50,
    myGameArea.height / 2 + 12.5,
    ""
  );

  perfect_show = new component(
    0,
    0,
    "rgba(151,172,225,1)",
    0,
    myGameArea.height - 35,
    "Perfect"
  );
  great_show = new component(
    0,
    0,
    "rgba(0,175,0,1)",
    0,
    myGameArea.height - 35,
    "Great"
  );
  ok_show = new component(
    0,
    0,
    "rgba(220,175,0,1)",
    0,
    myGameArea.height - 35,
    "Ok"
  );
  miss_show = new component(
    0,
    0,
    "rgba(255,0,0,1)",
    0,
    myGameArea.height - 35,
    "Miss"
  );

  knapp1_show = new component(
    0,
    0,
    "white",
    myGameArea.width / 2 - 80,
    myGameArea.height - 35,
    "Q"
  );
  knapp2_show = new component(
    0,
    0,
    "white",
    myGameArea.width / 2 - 26.333,
    myGameArea.height - 35,
    "W"
  );
  knapp3_show = new component(
    0,
    0,
    "white",
    myGameArea.width / 2 + 26.333,
    myGameArea.height - 35,
    "O"
  );
  knapp4_show = new component(
    0,
    0,
    "white",
    myGameArea.width / 2 + 80,
    myGameArea.height - 35,
    "P"
  );

  setTimeout(() => {
    knapp1_show = new component(
      0,
      0,
      "white",
      myGameArea.width / 2 - 80,
      myGameArea.height - 35,
      ""
    );
  }, 2700);
  setTimeout(() => {
    knapp2_show = new component(
      0,
      0,
      "white",
      myGameArea.width / 2 - 26.333,
      myGameArea.height - 35,
      ""
    );
  }, 2700);
  setTimeout(() => {
    knapp3_show = new component(
      0,
      0,
      "white",
      myGameArea.width / 2 + 26.333,
      myGameArea.height - 35,
      ""
    );
  }, 2700);
  setTimeout(() => {
    knapp4_show = new component(
      0,
      0,
      "white",
      myGameArea.width / 2 + 80,
      myGameArea.height - 35,
      ""
    );
  }, 2700);
}

//henter informasjon fra koden over
function component(width, height, color, x, y, name) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  //tegner sirkel
  this.update = function () {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    ctx.fill();
  };
  //tegner firkant (hold notes)
  this.update2 = function () {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  //tegner perfect/great/ok/miss
  this.update3 = function () {
    this.name = name;
    ctx.fillStyle = color;
    ctx.font = "20px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.fillText(this.name, plassering, this.y);
  };
  //tegner countdown og scoren
  this.update4 = function () {
    this.name = name;
    ctx.clearRect(myGameArea.width - 70, myGameArea.height / 2 - 20, 40, 40);
    if (score >= trykket * 0.95) {
      this.name = "A+";
    } else if (score >= trykket * 0.9) {
      this.name = "A";
    } else if (score >= trykket * 0.75) {
      this.name = "B";
    } else if (score >= trykket * 0.5) {
      this.name = "C";
    } else {
      this.name = "F";
    }

    ctx.fillStyle = color;
    ctx.font = "20px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.fillText(this.name, this.x, this.y);
  };
  //prosent score
  this.update5 = function () {
    this.name = name;
    let prosent = (score / trykket) * 100;
    this.name = prosent.toFixed(2) + "%";
    ctx.fillStyle = color;
    ctx.font = "10px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.fillText(this.name, this.x, this.y);
  };

  //countdown
  this.update6 = function () {
    this.name = name;
    ctx.fillStyle = color;
    ctx.font = "20px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.fillText(this.name, this.x, this.y);
  };
}

//musikk og lyder
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

function startGameLoop() {
  //frame rates (100 fps)
  setInterval(() => {
    ctx.clearRect((myGameArea.width - 240) / 2, 0, 240, myGameArea.height);
    Area.update2();
    venstre_placeholder.update();
    opp_placeholder.update();
    ned_placeholder.update();
    hoyre_placeholder.update();

    countdown.update6();
    Score_show.update4();
    ScoreProsent.update5();

    knapp1_show.update6();
    knapp2_show.update6();
    knapp3_show.update6();
    knapp4_show.update6();

    //vet ikke hvorfor x funker, (fant den via trial and error)((200*60)/bpm = x apperantly)
    let delay = (200 * 60) / bpm;

    //viser fram notene
    for (let velg = 0; velg < lag; velg++) {
      note1.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (pil_venstre[velg] * -delay) / offset;
      note1.update();
      note2.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (pil_opp[velg] * -delay) / offset;
      note2.update();
      note3.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (pil_ned[velg] * -delay) / offset;
      note3.update();
      note4.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (pil_hoyre[velg] * -delay) / offset;
      note4.update();
    }

    //viser fram hold_notene
    for (let velg = 0; velg < 2; velg++) {
      holdnote1.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_venstre[velg] * -delay) / offset;
      holdnote1.update();
      holdnote2.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_opp[velg] * -delay) / offset;
      holdnote2.update();
      holdnote3.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_ned[velg] * -delay) / offset;
      holdnote3.update();
      holdnote4.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_hoyre[velg] * -delay) / offset;
      holdnote4.update();
    }
    block1 = true;
    block2 = true;
    block3 = true;
    block4 = true;
    block11 = true;
    block12 = true;
    block13 = true;
    block14 = true;

    //"halen" fra hold notene (this code is a MESS)
    for (var i = 0; i < 6; i++) {
      holdfirkant1.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_venstre[0] * -delay) / offset;
      holdfirkant2.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_opp[0] * -delay) / offset;
      holdfirkant3.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_ned[0] * -delay) / offset;
      holdfirkant4.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_hoyre[0] * -delay) / offset;

      //venstre
      if (i != 0) {
        // når noter er i veien
        if (hold_venstre[0] < pil_venstre[parseInt(i) + 1] && block1 == true) {
          lengde11 =
            (hold_venstre[0] - pil_venstre[parseInt(i)]) *
            6 *
            speed *
            (200 / bpm);
          block1 = false;
        }
        // når hold_noter er i veien
        if (hold_venstre[1] < pil_venstre[parseInt(i)] && block11 == true) {
          lengde111 =
            (hold_venstre[1] - pil_venstre[parseInt(i) - 1]) *
            6 *
            speed *
            (200 / bpm);
          block11 = false;
        }
      } else {
        //mens du er i hold_noten
        if (hold_venstre[0] < pil_venstre[1]) {
          if (hold_venstre[0] > pil_venstre[0]) {
            lengde1 =
              (hold_venstre[0] - pil_venstre[0]) * 6 * speed * (200 / bpm);
          }
        } else if (hold_venstre[0] > pil_venstre[0]) {
          lengde1 = 0;
        }
        for (let velg = 0; velg < lengde1; velg++) {
          holdfirkant1.y += 10;
          holdfirkant1.update2();
        }
      }
      //tegner når noter er i veien
      holdfirkant1.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_venstre[0] * -delay) / offset;
      for (let velg = 0; velg < lengde11; velg++) {
        holdfirkant1.y += 10;
        holdfirkant1.update2();
      }
      //tegner når hold_noter er i veien
      holdfirkant1.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_venstre[1] * -delay) / offset;
      for (let velg = 0; velg < lengde111; velg++) {
        holdfirkant1.y += 10;
        holdfirkant1.update2();
      }

      //opp
      if (i != 0) {
        if (hold_opp[0] < pil_opp[parseInt(i) + 1] && block2 == true) {
          lengde12 =
            (hold_opp[0] - pil_opp[parseInt(i)]) * 6 * speed * (200 / bpm);
          block2 = false;
        }
        if (hold_opp[1] < pil_opp[parseInt(i)] && block12 == true) {
          lengde112 =
            (hold_opp[1] - pil_opp[parseInt(i) - 1]) * 6 * speed * (200 / bpm);
          block12 = false;
        }
      } else {
        if (hold_opp[0] < pil_opp[1]) {
          if (hold_opp[0] > pil_opp[0]) {
            lengde2 = (hold_opp[0] - pil_opp[0]) * 6 * speed * (200 / bpm);
          }
        } else if (hold_opp[i] > pil_opp[i]) {
          lengde2 = 0;
        }
        for (let velg = 0; velg < lengde2; velg++) {
          holdfirkant2.y += 10;
          holdfirkant2.update2();
        }
      }
      holdfirkant2.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_opp[0] * -delay) / offset;
      for (let velg = 0; velg < lengde12; velg++) {
        holdfirkant2.y += 10;
        holdfirkant2.update2();
      }
      holdfirkant2.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_opp[1] * -delay) / offset;
      for (let velg = 0; velg < lengde112; velg++) {
        holdfirkant2.y += 10;
        holdfirkant2.update2();
      }

      //ned
      if (i != 0) {
        if (hold_ned[0] < pil_ned[parseInt(i) + 1] && block3 == true) {
          lengde13 =
            (hold_ned[0] - pil_ned[parseInt(i)]) * 6 * speed * (200 / bpm);
          block3 = false;
        }
        if (hold_ned[1] < pil_ned[parseInt(i)] && block13 == true) {
          lengde113 =
            (hold_ned[1] - pil_ned[parseInt(i) - 1]) * 6 * speed * (200 / bpm);
          block13 = false;
        }
      } else {
        if (hold_ned[0] < pil_ned[1]) {
          if (hold_ned[0] > pil_ned[0]) {
            lengde3 = (hold_ned[0] - pil_ned[0]) * 6 * speed * (200 / bpm);
          }
        } else if (hold_ned[0] > pil_ned[0]) {
          lengde3 = 0;
        }
        for (let velg = 0; velg < lengde3; velg++) {
          holdfirkant3.y += 10;
          holdfirkant3.update2();
        }
      }
      holdfirkant3.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_ned[0] * -delay) / offset;
      for (let velg = 0; velg < lengde13; velg++) {
        holdfirkant3.y += 10;
        holdfirkant3.update2();
      }
      holdfirkant3.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_ned[1] * -delay) / offset;
      for (let velg = 0; velg < lengde113; velg++) {
        holdfirkant3.y += 10;
        holdfirkant3.update2();
      }

      //hoyre
      if (i != 0) {
        if (hold_hoyre[0] < pil_hoyre[parseInt(i) + 1] && block4 == true) {
          lengde14 =
            (hold_hoyre[0] - pil_hoyre[parseInt(i)]) * 6 * speed * (200 / bpm);
          block4 = false;
        }
        if (hold_hoyre[1] < pil_hoyre[parseInt(i)] && block14 == true) {
          lengde114 =
            (hold_hoyre[1] - pil_hoyre[parseInt(i) - 1]) *
            6 *
            speed *
            (200 / bpm);
          block14 = false;
        }
      } else {
        if (hold_hoyre[0] < pil_hoyre[1]) {
          if (hold_hoyre[0] > pil_hoyre[0]) {
            lengde4 = (hold_hoyre[0] - pil_hoyre[0]) * 6 * speed * (200 / bpm);
          }
        } else if (hold_hoyre[i] > pil_hoyre[i]) {
          lengde4 = 0;
        }
        for (let velg = 0; velg < lengde4; velg++) {
          holdfirkant4.y += 10;
          holdfirkant4.update2();
        }
      }
      holdfirkant4.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_hoyre[0] * -delay) / offset;
      for (let velg = 0; velg < lengde14; velg++) {
        holdfirkant4.y += 10;
        holdfirkant4.update2();
      }
      holdfirkant4.y =
        timer_sekund * 100 * 2 * speed +
        (myGameArea.height - 35) +
        (hold_hoyre[1] * -delay) / offset;
      for (let velg = 0; velg < lengde114; velg++) {
        holdfirkant4.y += 10;
        holdfirkant4.update2();
      }
    }

    //skrur av det du fikk etter 0.1 sekund
    if (perfect_send == true) {
      perfect_show.update3();
      setTimeout(() => {
        perfect_send = false;
      }, 50);
    }
    if (great_send == true) {
      great_show.update3();
      setTimeout(() => {
        great_send = false;
      }, 50);
    }
    if (ok_send == true) {
      ok_show.update3();
      setTimeout(() => {
        ok_send = false;
      }, 50);
    }
    if (miss_send == true) {
      miss_show.update3();
      setTimeout(() => {
        miss_send = false;
      }, 50);
    }
  }, 10);
}
