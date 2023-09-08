 const songData = [
            {name: "Aaj Rapat Jaayen To", source:"Aaj Rapat Jaayen To.mp3" , image: "Aaj Rapat Jaayen To.jpg"},
            { name:"Aaj Unse Pehli Mulaqat Hogi", source: "Aaj Unse Pehli Mulaqat Hogi.mp3" , image: "Aaj Unse Pehli Mulaqat Hogi.jpg"},        
            {name:"Aate Jate Khoobsurat Awara", source:"Aate Jate Khoobsurat Awara.mp3"  ,image: "Aate Jate Khoobsurat Awara.jpg"},
            {name:"Apni To Jaise Taise", source:"Apni To Jaise Taise.mp3" ,image: "Apni To Jaise Taise.jpg"},
            {name:"Are Deewano Mujhe Pehchano", source:"Are Deewano Mujhe Pehchano.mp3" ,image: "Are Deewano Mujhe Pehchano.jpg"},
            {name:"Babu Samjho Ishare", source:"Babu Samjho Ishare.mp3" ,image: "Babu Samjho Ishare.jpg"},
            {name:"Badi Sooni Sooni Hai Zindagi", source:"Badi Sooni Sooni Hai Zindagi.mp3" ,image: "Badi Sooni Sooni Hai Zindagi.jpg"},
            {name:"Bheegi Bheegi Raaton Mein", source:"Bheegi Bheegi Raaton Mein.mp3" ,image: "Bheegi Bheegi Raaton Mein.jpg"},
            {name:"Cat Cat Mane Billi", source:"Cat Cat Mane Billi.mp3" ,image: "Cat Cat Mane Billi.jpg"},
            {name:"Chala Jata Hoon", source:"Chala Jata Hoon.mp3" ,image: "Chala Jata Hoon.jpg"},
            {name:"Dekha Na Haye Re", source:"Dekha Na Haye Re.mp3" ,image:"Dekha Na Haye Re.jpg"},
            {name:"Dil Humne De Diya", source:"Dil Humne De Diya.mp3" ,image:"Dil Humne De Diya.jpg"},
            {name:"Eena Meena Deeka", source:"Eena Meena Deeka .mp3" ,image:"Eena Meena Deeka.jpg"},
            {name:"Ek Ajnabee Haseena Se", source:"Ek Ajnabee Haseena Se.mp3" ,image:"Ek Ajnabee Haseena Se.jpg"},
            {name:"Ek Ladki Bheegi Bhagi Si", source:"Ek Ladki Bheegi Bhagi Si.mp3" ,image:"Ek Ladki Bheegi Bhagi Si.jpg"},
            {name:"Ek Main Aur Ek Tu", source:"Ek Main Aur Ek Tu.mp3" ,image:"Ek Main Aur Ek Tu.jpg"},
            {name:"Gaadi Bula Rahi Hai", source:"Gaadi Bula Rahi Hai.mp3" ,image:"Gaadi Bula Rahi Hai.jpg"},
            {name:"Gaata Rahe Mera Dil", source:"Gaata Rahe Mera Dil.mp3" ,image:"Gaata Rahe Mera Dil.jpg"},
            {name:"Goom Hai Kisi Ke Pyar Mein", source:"Goom Hai Kisi Ke Pyar Mein.mp3" ,image:"Goom Hai Kisi Ke Pyar Mein.jpg"},
            {name:"Haal Kaisa Hai Janab Ka ", source:"Haal Kaisa Hai Janab Ka.mp3" ,image:"Haal Kaisa Hai Janab Ka.jpg"},
            {name:"Ham The Woh Thi", source:"Ham The Woh Thi.mp3" ,image:"Ham The Woh Thi.jpg"},
            {name:"Is Mod Se Jate Hain ", source:"Is Mod Se Jate Hain .mp3" ,image:"Is Mod Se Jate Hain.jpg"},
            {name:"Jane Kaisa Hai Mera Deewana", source:"Jane Kaisa Hai Mera Deewana.mp3" ,image:"Jane Kaisa Hai Mera Deewana.jpg"},
            {name:"Kehna Hai Kehna Hai", source:"Kehna Hai Kehna Hai.mp3" ,image:"Kehna Hai Kehna Hai.jpg"},
            {name:"Khaike Paan Banaras Wala", source:"Khaike Paan Banaras Wala.mp3" ,image:"Khaike Paan Banaras Wala.jpg"},
            {name:"Likha Hai Teri Ankhon Mein", source:"Likha Hai Teri Ankhon Mein.mp3" ,image:"Likha Hai Teri Ankhon Mein.jpg"},
            {name:"Main Hoon Jhoom Jhoom Jhumroo", source:"Main Hoon Jhoom Jhoom Jhumroo.mp3" ,image:"Main Hoon Jhoom Jhoom Jhumroo.jpg"},
            {name:"Main Solah Baras Ki", source:"Main Solah Baras Ki.mp3" ,image:"Main Solah Baras Ki.jpg"},
            {name:"Mana Janab Ne Pukara Nahin", source:"Mana Janab Ne Pukara Nahin.mp3" ,image:"Mana Janab Ne Pukara Nahin.jpg"},
            {name:"Mausam Pyar Ka", source:"Mausam Pyar Ka.mp3" ,image:"Mausam Pyar Ka.jpg"},
            {name:"Mere Bhole Balam", source:"Mere Bhole Balam.mp3" ,image:"Mere Bhole Balam.jpg"},
            {name:"Mere Samnewali Khidki Mein", source:"Mere Samnewali Khidki Mein .mp3" ,image:"Mere Samnewali Khidki Mein.jpg"},
            {name:"Mere Sapnon Ki Rani", source:"Mere Sapnon Ki Rani.mp3" ,image:"Mere Sapnon Ki Rani.jpg"},
            {name:"Meri Bheegi Bheegi Si", source:"Meri Bheegi Bheegi Si.mp3" ,image:"Meri Bheegi Bheegi Si.jpg"},
            {name:"Paas Nahin Aana", source:"Paas Nahin Aana.mp3" ,image:"Paas Nahin Aana.jpg"},
            {name:"Pahle Pahle Pyar Ki Mulaqaten", source:"Pahle Pahle Pyar Ki Mulaqaten.mp3" ,image:"Pahle Pahle Pyar Ki Mulaqaten.jpg"},
            {name:"Panna Ki Tamanna Hai", source:"Panna Ki Tamanna Hai.mp3" ,image:"Panna Ki Tamanna Hai.jpg"},
            {name:"Phoolon Ka Taron Ka ", source:"Phoolon Ka Taron Ka .mp3" ,image:"Phoolon Ka Taron Ka.jpg"},
            {name:"Phoolon Ke Rang Se", source:"Phoolon Ke Rang Se.mp3" ,image:"Phoolon Ke Rang Se.jpg"},
            {name:"Piya Piya Piya Mora Jiya Pukare", source:"Piya Piya Piya Mora Jiya Pukare.mp3" ,image:"Piya Piya Piya Mora Jiya Pukare.jpg"},
            {name:"Rimjhim Gire Sawan", source:"Rimjhim Gire Sawan.mp3" ,image:"Rimjhim Gire Sawan.jpg"},
            {name:"Sa Re Ga Ma", source:"Sa Re Ga Ma.mp3" ,image:"Sa Re Ga Ma.jpg"},
            {name:"Sa Re Ke Sa Re", source:"Sa Re Ke Sa Re.mp3" ,image:"Sa Re Ke Sa Re.jpg"},
            {name:"Suno Kaho Suna", source:"Suno Kaho Suna.mp3" ,image:"Suno Kaho Suna.jpg"},
            {name:"Tune Abhi Dekha Nahin", source:"Tune Abhi Dekha Nahin.mp3" ,image:"Tune Abhi Dekha Nahin.jpg"},
            {name:"Yaadon Ki Baaraat", source:"Yaadon Ki Baaraat.mp3"  ,image:"Yaadon Ki Baaraat.jpg"},
            {name:"Ye dosti hum nahi", source:"Ye dosti hum nahi.mp3" ,image:"Ye dosti hum nahi.jpg"},
            {name:"Zindagi Ek Safar Hai Suhana ", source:"Zindagi Ek Safar Hai Suhana .mp3" ,image:"Zindagi Ek Safar Hai Suhana.jpg"},
            {name:"Zindagi Ke Safar Mein", source:"Zindagi Ke Safar Mein.mp3", image: "Zindagi Ke Safar Mein.jpg"},
            // Add more song data here...
        ];
        
  const audioPlayer = document.getElementById('audio-player');
const songListContainer = document.getElementById('song-list');
const musicPopup = document.getElementById('music-popup');
const closePopupButton = document.getElementById('closePopupButton');
const popupSongName = document.getElementById('popup-song-name');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentSongIndex = 0;

// Function to create and append a song element
function createSongElement(song) {
    const songElement = document.createElement('div');
    songElement.classList.add('song');
    songElement.textContent = song.name;

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

// Function to play a song and update the album art and song name
function playSong(song) {
    audioPlayer.src = song.source;
    audioPlayer.play();
    updateAlbumArt(song.image);
    popupSongName.textContent = song.name;
}