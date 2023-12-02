// Switch Case

// if else ile yazilan bu kodu farkli sekilde yazabiliriz 
const process = 6;

if (process === 1) {
    console.log("Islem 1");
} 
else if (process === 2) {
    console.log("Islem 2");
}
else if (process === 3) {
    console.log("Islem 3");
}
else if (process === 4) {
    console.log("Islem 4");
}
else {
    console.log("Gecersiz Islem ");
}

// Switch Case

switch (process) {
    case 1:
        console.log("Islem 1")
        break;
    case 2:
        console.log("Islem 2")
        break;    
    case 3:
        console.log("Islem 3")
        break;
    case 4:
        console.log("Islem 4")
        break;
    case 5:
        console.log("Islem 5")
        break;
    default:
        console.log("Gecerli bir sayi giriniz...")
        break;
}