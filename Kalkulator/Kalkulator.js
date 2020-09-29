function tambah(){
    var bilangan1 = parseFloat(document.Kalkulator.bilangan1.value);
    var bilangan2 = parseFloat(document.Kalkulator.bilangan2.value);
    var hasil = bilangan1 + bilangan2;
    document.Kalkulator.hasil.value = hasil;
}

function kurang(){
    var bilangan1 = parseFloat(document.Kalkulator.bilangan1.value);
    var bilangan2 = parseFloat(document.Kalkulator.bilangan2.value);
    var hasil = bilangan1 - bilangan2;
    document.Kalkulator.hasil.value = hasil;
}

function kali(){
    var bilangan1 = parseFloat(document.Kalkulator.bilangan1.value);
    var bilangan2 = parseFloat(document.Kalkulator.bilangan2.value);
    var hasil = bilangan1 * bilangan2;
    document.Kalkulator.hasil.value = hasil;
}

function bagi(){
    var bilangan1 = parseFloat(document.Kalkulator.bilangan1.value);
    var bilangan2 = parseFloat(document.Kalkulator.bilangan2.value);
    var hasil = bilangan1 / bilangan2;
    document.Kalkulator.hasil.value = hasil;
}

