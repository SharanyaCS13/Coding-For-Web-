
 const songData = [
            { name: "Aa Jaane-Jaan", source: "Aa Jaane-Jaan.mp3", image: "Aa Jaane-Jaan.jpg", singer: "Lata Mangeshkar"},
            { name: "Aaiye Meharban", source: "Aaiye Meharban.mp3", image: "Aaiye Meharban.jpg", singer: "Asha Bhosle"},
            {name:"Aaj Mausam Bada Beimaan Hai",source: "Aaj Mausam Bada Beimaan Hai.mp3",image: "Aaj Mausam Bada Beimaan Hai.jpg", singer: "Mohammed Rafi" },
            {name: "Aaj Rapat Jaayen To", source:"Aaj Rapat Jaayen To.mp3" , image: "Aaj Rapat Jaayen To.jpg", singer: "Kishore Kumar & Asha Bhosle"},
            { name:"Aaj Unse Pehli Mulaqat Hogi", source: "Aaj Unse Pehli Mulaqat Hogi.mp3" , image: "Aaj Unse Pehli Mulaqat Hogi.jpg", singer: "Kishore Kumar"},        
            { name:"Aap Ki Nazron Ne Samjha", source: "Aap Ki Nazron Ne Samjha.mp3"  , image: "Aap Ki Nazron Ne Samjha.jpg", singer: "Lata Mangeshkar"},
            { name:"Aap Ko Pahle Bhi Kahin Dekha Hai", source: "Aap Ko Pahle Bhi Kahin Dekha Hai.mp3", image: "Aap Ko Pahle Bhi Kahin Dekha Hai.jpg", singer: "Asha Bhosle & Mohammed Rafi"},
            {name:"Aate Jate Khoobsurat Awara", source:"Aate Jate Khoobsurat Awara.mp3" ,image: "Aate Jate Khoobsurat Awara.jpg", singer: "Kishore Kumar"},
            {name:"Apni To Jaise Taise", source:"Apni To Jaise Taise.mp3" ,image: "Apni To Jaise Taise.jpg", singer: "Kishore Kumar"},
            {name:"Are Deewano Mujhe Pehchano", source:"Are Deewano Mujhe Pehchano.mp3",image: "Are Deewano Mujhe Pehchano.jpg", singer: "Kishore Kumar"},
            {name:"Babu Samjho Ishare", source:"Babu Samjho Ishare.mp3",image: "Babu Samjho Ishare.jpg", singer: "Kishore Kumar & Manna Dey"},
            {name:"Badi Sooni Sooni Hai Zindagi", source:"Badi Sooni Sooni Hai Zindagi.mp3" ,image: "Badi Sooni Sooni Hai Zindagi.jpg", singer: "Kishore Kumar"},
            {name:"Bhai Battur", source:"Bhai Battur.mp3" ,image: "Bhai Battur.jpg", singer: "Lata Mangeshkar"},
            {name:"Bheegi Bheegi Raaton Mein", source:"Bheegi Bheegi Raaton Mein.mp3",image: "Bheegi Bheegi Raaton Mein.jpg", singer: "Kishore Kumar & Lata Mangeshkar"},
            {name:"Bole Re Papihara", source:"Bole Re Papihara.mp3" ,image: "Bole Re Papihara.jpg", singer: "Vani Jairam"},
            {name:"Cat Cat Mane Billi", source:"Cat Cat Mane Billi.mp3" ,image: "Cat Cat Mane Billi.jpg", singer: "Kishore Kumar"},
            {name:"Chala Jata Hoon", source:"Chala Jata Hoon.mp3" ,image: "Chala Jata Hoon.jpg", singer: "Kishore Kumar"},
            {name:"Chhuk Chhuk", source: "Chhuk Chhuk.mp3" ,image: "Chhuk Chhuk.jpg", singer: "Usha Mangeshkar, Asha Bhosle, Mahesh Kumar"},
            {name:"Chupke Chupke Chal Re Purbaiya",  source:"Chupke Chupke Chal Re Purbaiya.mp3" ,image:"Chupke Chupke Chal Re Purbaiya.jpg", singer: "Lata Mangeshkar"},
            {name:"Dafli Wale Dafli Baja", source:"Dafli Wale Dafli Baja.mp3" ,image:"Dafli Wale Dafli Baja.jpg", singer: "Lata Mangeshkar & Mohammed Rafi"},
            {name:"Dard-E-Dil Dard-E-Jigar", source:"Dard-E-Dil Dard-E-Jigar.mp3" ,image:"Dard-E-Dil Dard-E-Jigar.jpg", singer: "Mohammed Rafi"},
            {name:"Deewana Mujhsa Nahin", source:"Deewana Mujhsa Nahin.mp3" ,image:"Deewana Mujhsa Nahin.jpg", singer: "Mohammed Rafi"},
            {name:"Deewane Hai Deewanon Ko", source:"Deewane Hai Deewanon Ko.mp3" ,image:"Deewane Hai Deewanon Ko.JPG", singer: "Lata Mangeshkar & Mohammed Rafi"},
            {name:"Dekh Ke Teri Nazar", source:"Dekh Ke Teri Nazar.mp3" ,image:"Dekh Ke Teri Nazar.jpg", singer: "Asha Bhosle & Mohammed Rafi"},
            {name:"Dekha Na Haye Re", source:"Dekha Na Haye Re.mp3" ,image:"Dekha Na Haye Re.jpg", singer: "Kishore Kumar"},
            {name:"Dekho Maine Dekha Hai Ek Sapna", source:"Dekho Maine Dekha Hai Ek Sapna.mp3" ,image:"Dekho Maine Dekha Hai Ek Sapna.jpg", singer: "Amit Kumar & Lata Mangeshkar"},
            {name:"Dil Humne De Diya", source:"Dil Humne De Diya.mp3" ,image:"Dil Humne De Diya.jpg", singer: "Kishore Kumar & Lata Mangeshkar"},
            {name:"Dil Jalon Ka Dil Jala Ke", source:"Dil Jalon Ka Dil Jala Ke.mp3" ,image:"Dil Jalon Ka Dil Jala Ke.JPG", singer: "Asha Bhosle"},
            {name:"Dil Tera Deewana Hai Sanam", source:"Dil Tera Deewana Hai Sanam.mp3",image:"Dil Tera Deewana Hai Sanam.jpg", singer: "Lata Mangeshkar & Mohammed Rafi"},
            {name:"Do Lafzon Ki Hai Dil Ki Kahani", source:"Do Lafzon Ki Hai Dil Ki Kahani .mp3" ,image:"Do Lafzon Ki Hai Dil Ki Kahani.jpg", singer: "Asha Bhosle & Sharad Kumar"},
            {name:"Duniya Mein Logon Ko", source:"Duniya Mein Logon Ko.mp3" ,image:"Duniya Mein Logon Ko.jpg", singer: "Asha Bhosle & R. D. Burman"},
            {name:"Eena Meena Deeka", source:"Eena Meena Deeka .mp3" ,image:"Eena Meena Deeka.jpg", singer: "Kishore Kumar"},
            {name:"Ek Ajnabee Haseena Se", source:"Ek Ajnabee Haseena Se.mp3" ,image:"Ek Ajnabee Haseena Se.jpg", singer: "Kishore Kumar"},
            {name:"Ek Ladki Bheegi Bhagi Si", source:"Ek Ladki Bheegi Bhagi Si.mp3" ,image:"Ek Ladki Bheegi Bhagi Si.jpg", singer: "Kishore Kumar"},
            {name:"Ek Main Aur Ek Tu", source:"Ek Main Aur Ek Tu.mp3" ,image:"Ek Main Aur Ek Tu.jpg", singer: "Kishore Kumar & Asha Bhosle"},
            {name:"Ek Radha Ek Meera", source:"Ek Radha Ek Meera.mp3" ,image:"Ek Radha Ek Meera.jpg", singer: "Lata Mangeshkar"},
            {name:"Gaadi Bula Rahi Hai", source:"Gaadi Bula Rahi Hai.mp3" ,image:"Gaadi Bula Rahi Hai.jpg", singer: "Kishore Kumar"},
            {name:"Gaata Rahe Mera Dil", source:"Gaata Rahe Mera Dil.mp3" ,image:"Gaata Rahe Mera Dil.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Garajat barasat sawan ayo re", source:"Garajat barasat sawan ayo re.mp3" ,image:"Garajat barasat sawan ayo re.jpg", singer: "Suman Kalyanpur & Kamal Barot"},
            {name:"Goom Hai Kisi Ke Pyar Mein", source:"Goom Hai Kisi Ke Pyar Mein.mp3" ,image:"Goom Hai Kisi Ke Pyar Mein.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Haal Kaisa Hai Janab Ka", source:"Haal Kaisa Hai Janab Ka.mp3" ,image:"Haal Kaisa Hai Janab Ka.jpg", singer: "Kishore Kumar & Asha Bhosle"},
            {name:"Ham The Woh Thi", source:"Ham The Woh Thi.mp3" ,image:"Ham The Woh Thi.jpg", singer: "Kishore Kumar"},
            {name:"Haule Haule Chalo Mere Sajna", source:"Haule Haule Chalo Mere Sajna.mp3" ,image:"Haule Haule Chalo Mere Sajna.jpg", singer: "Asha Bhosle"},
            {name:"Humko To Yara Hai Teri Yari", source:"Humko To Yara Hai Teri Yari.mp3" ,image:"Humko To Yara Hai Teri Yari.jpg", singer: "Mohammed Rafi & Asha Bhosle"},
            {name:"Ichak Dana Beechak Dana", source:"Ichak Dana Beechak Dana.mp3" ,image:"Ichak Dana Beechak Dana.jpg", singer: "Lata Mangeshkar"},
            {name:"Inhin Logon Ne", source:"Inhin Logon Ne.mp3" ,image:"Inhin Logon Ne.jpg", singer: "Lata Mangeshkar"},
            {name:"Is Mod Se Jate Hain ", source:"Is Mod Se Jate Hain .mp3" ,image:"Is Mod Se Jate Hain.jpg", singer: "Kishore Kumar & Lata Mangeshkar"},
            {name:"Jane Kaisa Hai Mera Deewana", source:"Jane Kaisa Hai Mera Deewana.mp3" ,image:"Jane Kaisa Hai Mera Deewana.jpg", singer: "Kishore Kumar & Asha Bhosle"},
            {name:"Jawani Jan-E-Man", source:"Jawani Jan-E-Man.mp3" ,image:"Jawani Jan-E-Man.jpg", singer: "Asha Bhosle"},
            {name:"Jyoti Kalash Chhalke", source:"Jyoti Kalash Chhalke.mp3" ,image:"Jyoti Kalash Chhalke.jpg", singer: "Lata Mangeshkar"},
            {name:"Kahin Door Jab ", source:"Kahin Door Jab .mp3" ,image:"Kahin Door Jab.jpg", singer: "Mukesh"},
            {name:"Kaisa Tera Pyar", source:"Kaisa Tera Pyar.mp3" ,image:"Kaisa Tera Pyar.jpg", singer: "Amit Kumar & Lata Mangeshkar"},
            {name:"Katra Katra", source:"Katra Katra.mp3"  ,image:"Katra Katra.jpg", singer: "Asha Bhosle"},
            {name:"Kehna Hai Kehna Hai", source:"Kehna Hai Kehna Hai.mp3" ,image:"Kehna Hai Kehna Hai.jpg", singer: "Kishore Kumar"},
            {name:"Khaike Paan Banaras Wala", source:"Khaike Paan Banaras Wala.mp3" ,image:"Khaike Paan Banaras Wala.jpg", singer: "Kishore Kumar"},
            {name:"Kya Ghazab Karte Ho Ji", source:"Kya Ghazab Karte Ho Ji.mp3" ,image:"Kya Ghazab Karte Ho Ji.jpg", singer: "Asha Bhosle"},
            {name:"Lag Ja Gale Se Phir", source:"Lag Ja Gale Se Phir.mp3" ,image:"Lag Ja Gale Se Phir.jpg", singer: "Lata Mangeshkar"},
            {name:"Lakhon Hain Nigahon Mein", source:"Lakhon Hain Nigahon Mein.mp3" ,image:"Lakhon Hain Nigahon Mein.jpg", singer: "Mohammed Rafi"},
            {name:"Leke Pehla Pehla Pyar", source:"Leke Pehla Pehla Pyar.mp3" ,image:"Leke Pehla Pehla Pyar.jpg", singer: "Shamshad Begum & Mohammed Rafi"},
            {name:"Likha Hai Teri Ankhon Mein", source:"Likha Hai Teri Ankhon Mein.mp3" ,image:"Likha Hai Teri Ankhon Mein.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Loote Koi Mann Ka Nagar", source:"Loote Koi Mann Ka Nagar.mp3" ,image:"Loote Koi Mann Ka Nagar.jpg", singer: "Lata Mangeshkar & Manhar Udhas"},
            {name:"Madhuban Mein Radhika Nache Re", source:"Madhuban Mein Radhika Nache Re.mp3" ,image:"Madhuban Mein Radhika Nache Re.jpg", singer: "Mohammed Rafi"},
            {name:"Main Hoon Jhoom Jhoom Jhumroo", source:"Main Hoon Jhoom Jhoom Jhumroo.mp3" ,image:"Main Hoon Jhoom Jhoom Jhumroo.jpg", singer: "Kishore Kumar"},
            {name:"Main Jat Yamla Pagla Deewana", source:"Main Jat Yamla Pagla Deewana.mp3" ,image:"Main Jat Yamla Pagla Deewana.jpg", singer: "Mohammed Rafi"},
            {name:"Main Solah Baras Ki", source:"Main Solah Baras Ki.mp3" ,image:"Main Solah Baras Ki.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Maine Kaha Phoolon Se", source:"Maine Kaha Phoolon Se.mp3" ,image:"Maine Kaha Phoolon Se.jpg", singer: "Lata Mangeshkar"},
            {name:"Mana Janab Ne Pukara Nahin", source:"Mana Janab Ne Pukara Nahin.mp3" ,image:"Mana Janab Ne Pukara Nahin.jpg", singer: "Kishore Kumar"},
            {name:"Mausam Pyar Ka", source:"Mausam Pyar Ka.mp3" ,image:"Mausam Pyar Ka.jpg", singer: "Kishore Kumar & Asha Bhosle"},
            {name:"Mere Bhole Balam", source:"Mere Bhole Balam.mp3" ,image:"Mere Bhole Balam.jpg", singer: "Kishore Kumar"},
            {name:"Mere Samnewali Khidki Mein", source:"Mere Samnewali Khidki Mein .mp3" ,image:"Mere Samnewali Khidki Mein.jpg", singer: "Kishore Kumar"},
            {name:"Mere Sapnon Ki Rani", source:"Mere Sapnon Ki Rani.mp3" ,image:"Mere Sapnon Ki Rani.jpg", singer: "Kishore Kumar"},
            {name:"Meri Bheegi Bheegi Si", source:"Meri Bheegi Bheegi Si.mp3" ,image:"Meri Bheegi Bheegi Si.jpg", singer: "Kishore Kumar"},
            {name:"Naina Barse Rimjhim Rimjhim", source:"Naina Barse Rimjhim Rimjhim.mp3" ,image:"Naina Barse Rimjhim Rimjhim.jpg", singer: "Lata Mangeshkar"},
            {name:"O Haseena Zulfonwale Jane Jahan", source:"O Haseena Zulfonwale Jane Jahan.mp3" ,image:"O Haseena Zulfonwale Jane Jahan.jpg", singer: "Asha Bhosle & Mohammed Rafi"},
            {name:"Paas Nahin Aana", source:"Paas Nahin Aana.mp3" ,image:"Paas Nahin Aana.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Pahle Pahle Pyar Ki Mulaqaten", source:"Pahle Pahle Pyar Ki Mulaqaten.mp3" ,image:"Pahle Pahle Pyar Ki Mulaqaten.jpg", singer: "Kishore Kumar & Asha Bhosle"},
            {name:"Panna Ki Tamanna Hai", source:"Panna Ki Tamanna Hai.mp3" ,image:"Panna Ki Tamanna Hai.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Phoolon Ka Taron Ka ", source:"Phoolon Ka Taron Ka .mp3" ,image:"Phoolon Ka Taron Ka.jpg", singer: "Kishore Kumar"},
            {name:"Phoolon Ke Rang Se", source:"Phoolon Ke Rang Se.mp3" ,image:"Phoolon Ke Rang Se.jpg", singer: "Kishore Kumar"},
            {name:"Piya Bawri Piya Bawri", source:"Piya Bawri Piya Bawri.mp3" ,image:"Piya Bawri Piya Bawri.jpg", singer: "Asha Bhosle & Ashok Kumar"},
            {name:"Piya Bina Piya Bina", source:"Piya Bina Piya Bina.mp3" ,image:"Piya Bina Piya Bina.jpg", singer: "Lata Mangeshkar"},
            {name:"Piya Piya Piya Mora Jiya Pukare", source:"Piya Piya Piya Mora Jiya Pukare.mp3" ,image:"Piya Piya Piya Mora Jiya Pukare.jpg", singer: "Asha Bhosle & Kishore Kumar"},
            {name:"Piya Tose Naina Lage Re", source:"Piya Tose Naina Lage Re.mp3" ,image:"Piya Tose Naina Lage Re.jpg", singer: "Lata Mangeshkar"},
            {name:"Piya Tu Ab To Aaja", source:"Piya Tu Ab To Aaja.mp3" ,image:"Piya Tu Ab To Aaja.jpg", singer: "Asha Bhosle & R. D. Burman"},
            {name:"Raat Baaqi Baat Baaqi", source:"Raat Baaqi Baat Baaqi.mp3" ,image:"Raat Baaqi Baat Baaqi.jpg", singer: "Asha Bhosle"},
            {name:"Rimjhim Gire Sawan", source:"Rimjhim Gire Sawan.mp3" ,image:"Rimjhim Gire Sawan.jpg", singer: "Kishore Kumar"},
            {name:"Roz Roz Dali Dali", source:"Roz Roz Dali Dali.mp3" ,image:"Roz Roz Dali Dali.jpg", singer: "Asha Bhosle"},
            {name:"Sa Re Ga Ma", source:"Sa Re Ga Ma.mp3" ,image:"Sa Re Ga Ma.jpg", singer: "Kishore Kumar & Mohammed Rafi"},
            {name:"Sa Re Ke Sa Re", source:"Sa Re Ke Sa Re.mp3" ,image:"Sa Re Ke Sa Re.jpg", singer: "Asha Bhosle & Kishore Kumar"},
            {name:"Salame Ishq Meri Jaan", source:"Salame Ishq Meri Jaan.mp3"  ,image:"Salame Ishq Meri Jaan.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Sun Sun Sun Didi", source:"Sun Sun Sun Didi.mp3" ,image:"Sun Sun Sun Didi.jpg", singer: "Asha Bhosle"}, 
            {name:"Suno Kaho Suna", source:"Suno Kaho Suna.mp3" ,image:"Suno Kaho Suna.jpg", singer: "Lata Mangeshkar & Kishore Kumar"},
            {name:"Tune Abhi Dekha Nahin", source:"Tune Abhi Dekha Nahin.mp3" ,image:"Tune Abhi Dekha Nahin.jpg", singer: "Kishore Kumar"},
            {name:"Uthe Sabke Kadam Dekho Ram Pam Pam", source:"Uthe Sabke Kadam Dekho Ram Pam Pam.mp3" ,image:"Uthe Sabke Kadam Dekho Ram Pam Pam.jpg", singer: "Lata Mangeshkar & Amit Kumar & Pearl Padamase"},
            {name:"Woh Hai Zara Khafa Khafa", source:"Woh Hai Zara Khafa Khafa.mp3" ,image:"Woh Hai Zara Khafa Khafa.jpg", singer: "Lata Mangeshkar & Mohammed Rafi"},
            {name:"Yaadon Ki Baaraat", source:"Yaadon Ki Baaraat.mp3"  ,image:"Yaadon Ki Baaraat.jpg", singer: "Kishore Kumar & Mohammed Rafi"},
            {name:"Yashomati Maiya Se Bole Nandlala", source:"Yashomati Maiya Se Bole Nandlala.mp3" ,image:"Yashomati Maiya Se Bole Nandlala.jpg", singer: "Lata Mangeshkar & Manna Dey"},
            {name:"Ye Dil Tum Bin Lagta Nahin", source:"Ye Dil Tum Bin Lagta Nahin.mp3" ,image:"Ye Dil Tum Bin Lagta Nahin.jpg", singer: "Lata Mangeshkar & Mohammed Rafi"},
            {name:"Ye dosti hum nahi", source:"Ye dosti hum nahi.mp3" ,image:"Ye dosti hum nahi.jpg", singer: "Kishore Kumar & Manna Dey"},
            {name:"Ye Ladki Zarasi Deewani Lagti Hai", source:"Ye Ladki Zarasi Deewani Lagti Hai.mp3" ,image:"Ye Ladki Zarasi Deewani Lagti Hai.jpg", singer: "Lata Mangeshkar & Amit Kumar"},
            {name:"Zara Sa Jhoom Loon Main", source:"Zara Sa Jhoom Loon Main.mp3" ,image:"Zara Sa Jhoom Loon Main.jpg", singer: "Asha Bhosle & Abhijeet Bhattacharya"},
            {name:"Zindagi Ek Safar Hai Suhana ", source:"Zindagi Ek Safar Hai Suhana .mp3" ,image:"Zindagi Ek Safar Hai Suhana.jpg", singer: "Kishore Kumar"},
            {name:"Zindagi Ke Safar Mein", source:"Zindagi Ke Safar Mein.mp3", image: "Zindagi Ke Safar Mein.jpg", singer: "Kishore Kumar"},
            // Add more song data here...
        ];
        
const audioPlayer = document.getElementById('audio-player');
const songListContainer = document.getElementById('song-list');
const musicPopup = document.getElementById('music-popup');
const closePopupButton = document.getElementById('closePopupButton');
const popupSongName = document.getElementById('popup-song-name');
const popupSinger = document.getElementById('popup-singer');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentSongIndex = 0;

// Function to create and append a song element
function createSongElement(song) {
    const songElement = document.createElement('div');
    songElement.classList.add('song');
    songElement.textContent = song.name + " - " + song.singer;

    songElement.addEventListener('click', () => {
        audioPlayer.src = song.source;
        audioPlayer.play();
        updateAlbumArt(song.image);
        showPopup(song);
    });

    return songElement;
}

// Populate the song list
songData.forEach((song, index) => {
    const songElement = createSongElement(song);
    songListContainer.appendChild(songElement);
});

closePopupButton.addEventListener('click', () => {
    musicPopup.style.display = 'none'; // Hide the popup when the close button is clicked
});

nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);

// Function to update the album art
function updateAlbumArt(imageSource) {
    const albumArt = document.getElementById('album-art');
    albumArt.src = imageSource;
}

// Function to show the pop-up with song details
function showPopup(song) {
    popupSongName.textContent = song.name;
    popupSinger.textContent = song.singer;
    musicPopup.style.display = 'inline-block'; // Show the popup
}

// Function to play the next song
function playNextSong() {
    if (currentSongIndex < songData.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0; // Loop back to the first song if at the end
    }
    const song = songData[currentSongIndex];
    playSong(song);
}

// Function to play the previous song
function playPrevSong() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songData.length - 1; // Loop to the last song if at the beginning
    }
    const song = songData[currentSongIndex];
    playSong(song);
}

// Function to play a song and update the album art, song name, and singer
function playSong(song) {
    audioPlayer.src = song.source;
    audioPlayer.play();
    updateAlbumArt(song.image);
    popupSongName.textContent = song.name;
    popupSinger.textContent = song.singer;
}