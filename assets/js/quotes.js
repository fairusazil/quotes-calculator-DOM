let quotes = [
    "Gaji itu sama kayak mantan, cuman lewat doang.\n-Anonim",
    "Masalah bisa membuat kita menjadi dewasa, maka sering-seringlah bermasalah.\n-Anonim",
    "Berhentilah mencari orang yang sempura. Cukup cari orang yang punya uang, mobil dan rumah.\n-Anonim",
    "Jangan berubah hanya karena ingin dicintai seseorang, cukup pakai topeng saja.\n-Anonim",
    "Selelah-lelahnya kerja, lebih lelah lagi nganggur.\n-Anonim",
    "Orang bodoh lebih mudah bahagia, dengan kebodohannya.\n-Anonim",
    "Cara terbaik dan mudah untuk membuat orang mengingat adalah “Pinjamlah uang mereka”.\n-Anonim",
    "Sebenarnya pacar orang adalah pacar kita juga karena kita adalah orang.\n-Anonim",
    "Hati wanita bagaikan busa, dia lembut tapi kadang pedih di mata.\n-Anonim",
    "Cantik itu apa? Cantik itu relatif tergantung posisi kamera serta intensitas cahayanya.\n-Anonim",
    "Ngomongin orang mulu. ngomongin masa depannya kapan?\n-Anonim",
    "Gak usah takut jelek selama masih ada photoshop berkeliaran.\n-Anonim",
    "Orang sukses karena dia punya banyak CARA, sedang orang gagal karena dia punya banyak ALASAN.\n-Anonim",
    "Kalo pagi enaknya minum kopi sama susu, kopinya diminum, susunya di pegang.\n-Anonim",
    "Berpikirlah sebanyak-banyaknya kau mau, tapi jangan makan sebanyak engkau berpikir.\n-Anonim",
    "Jika berat anda 100 kg di bumi, maka itu setara 38 kg di mars, artinya anda tidak gendut, hanya salah planet saja.\n-Anonim",
    "Jangan menyerah jika kamu gagal, ulangi kegagalanmu tiap hari hingga bosmu menyerah.\n-Anonim",
    "Sejahat apapun kamu, tetap bisa berguna bagi orang lain. Paling tidak, kamu berguna sebagai contoh yang tidak patut ditiru.\n-Anonim",
    "Jam pelajaran yg disukai pelajar adalah jam kosong.\n-Anonim",
    "Seberat apapun pekerjaan, apabila tidak dikerjakan maka akan terasa ringan.\n-Anonim",
    "Kalau orang lain bisa mengerjakan, kenapa mesti saya?\n-Anonim",
    "Bukan malas, hanya sedang menghemat energi.\n-Anonim",
    "Orang yang punya banyak waktu adalah orang yang paling kaya, karena waktu adalah uang.\n-Anonim",
    "Kunci kesuksesan adalah konsisten pada pilihan, tapi janganlah selalu memilih untuk tidak memilih.\n-Anonim",
    "Tugas itu dikerjakan, bukan dipikirkan, pantas saja anda pusing.\n-Anonim"
]

function newQuote() {
    let randomQuote = Math.floor(Math.random() * (quotes.length));
    document.getElementById("qDisplay").innerHTML = quotes[randomQuote];
}

