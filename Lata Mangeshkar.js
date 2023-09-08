
 const songData = [
            { name:"Aa Jaane-Jaan", source: "Aa Jaane-Jaan.mp3" , image: "Aa Jaane-Jaan.jpg" },
            { name:"Aap Ki Nazron Ne Samjha", source: "Aap Ki Nazron Ne Samjha.mp3" , image: "Aap Ki Nazron Ne Samjha.jpg"},
            {name:"Bhai Battur", source:"Bhai Battur.mp3" ,image: "Bhai Battur.jpg"},
            {name:"Bheegi Bheegi Raaton Mein", source:"Bheegi Bheegi Raaton Mein.mp3" ,image: "Bheegi Bheegi Raaton Mein.jpg"},
            {name:"Chupke Chupke Chal Re Purbaiya",  source:"Chupke Chupke Chal Re Purbaiya.mp3" ,image:"Chupke Chupke Chal Re Purbaiya.jpg"},
            {name:"Dafli Wale Dafli Baja", source:"Dafli Wale Dafli Baja.mp3" ,image:"Dafli Wale Dafli Baja.jpg"},
            {name:"Deewane Hai Deewanon Ko", source:"Deewane Hai Deewanon Ko.mp3" ,image:"Deewane Hai Deewanon Ko.JPG"},
            {name:"Dekho Maine Dekha Hai Ek Sapna", source:"Dekho Maine Dekha Hai Ek Sapna.mp3" ,image:"Dekho Maine Dekha Hai Ek Sapna.jpg"},
            {name:"Dil Humne De Diya", source:"Dil Humne De Diya.mp3" ,image:"Dil Humne De Diya.jpg"},
            {name:"Dil Tera Deewana Hai Sanam", source:"Dil Tera Deewana Hai Sanam.mp3",image:"Dil Tera Deewana Hai Sanam.jpg"},
            {name:"Ek Radha Ek Meera", source:"Ek Radha Ek Meera.mp3" ,image:"Ek Radha Ek Meera.jpg"},
            {name:"Gaata Rahe Mera Dil", source:"Gaata Rahe Mera Dil.mp3" ,image:"Gaata Rahe Mera Dil.jpg"},
            {name:"Goom Hai Kisi Ke Pyar Mein", source:"Goom Hai Kisi Ke Pyar Mein.mp3" ,image:"Goom Hai Kisi Ke Pyar Mein.jpg"},
            {name:"Ichak Dana Beechak Dana", source:"Ichak Dana Beechak Dana.mp3" ,image:"Ichak Dana Beechak Dana.jpg"},
            {name:"Inhin Logon Ne", source:"Inhin Logon Ne.mp3" ,image:"Inhin Logon Ne.jpg"},
            {name:"Is Mod Se Jate Hain ", source:"Is Mod Se Jate Hain .mp3" ,image:"Is Mod Se Jate Hain.jpg"},
            {name:"Jyoti Kalash Chhalke", source:"Jyoti Kalash Chhalke.mp3" ,image:"Jyoti Kalash Chhalke.jpg"},
            {name:"Kaisa Tera Pyar", source:"Kaisa Tera Pyar.mp3" ,image:"Kaisa Tera Pyar.jpg"},
            {name:"Lag Ja Gale Se Phir", source:"Lag Ja Gale Se Phir.mp3" ,image:"Lag Ja Gale Se Phir.jpg"},
            {name:"Likha Hai Teri Ankhon Mein", source:"Likha Hai Teri Ankhon Mein.mp3" ,image:"Likha Hai Teri Ankhon Mein.jpg"},
            {name:"Loote Koi Mann Ka Nagar", source:"Loote Koi Mann Ka Nagar.mp3" ,image:"Loote Koi Mann Ka Nagar.jpg"},
            {name:"Main Solah Baras Ki", source:"Main Solah Baras Ki.mp3" ,image:"Main Solah Baras Ki.jpg"},
            {name:"Maine Kaha Phoolon Se", source:"Maine Kaha Phoolon Se.mp3" ,image:"Maine Kaha Phoolon Se.jpg"},
            {name:"Naina Barse Rimjhim Rimjhim", source:"Naina Barse Rimjhim Rimjhim.mp3" ,image:"Naina Barse Rimjhim Rimjhim.jpg"},
            {name:"Paas Nahin Aana", source:"Paas Nahin Aana.mp3" ,image:"Paas Nahin Aana.jpg"},
            {name:"Panna Ki Tamanna Hai", source:"Panna Ki Tamanna Hai.mp3" ,image:"Panna Ki Tamanna Hai.jpg"},
            {name:"Piya Bina Piya Bina", source:"Piya Bina Piya Bina.mp3" ,image:"Piya Bina Piya Bina.jpg"},
            {name:"Piya Tose Naina Lage Re", source:"Piya Tose Naina Lage Re.mp3" ,image:"Piya Tose Naina Lage Re.jpg"},
            {name:"Salame Ishq Meri Jaan", source:"Salame Ishq Meri Jaan.mp3"  ,image:"Salame Ishq Meri Jaan.jpg"},
            {name:"Suno Kaho Suna", source:"Suno Kaho Suna.mp3" ,image:"Suno Kaho Suna.jpg"},
            {name:"Uthe Sabke Kadam Dekho Ram Pam Pam", source:"Uthe Sabke Kadam Dekho Ram Pam Pam.mp3" ,image:"Uthe Sabke Kadam Dekho Ram Pam Pam.jpg"},
            {name:"Woh Hai Zara Khafa Khafa", source:"Woh Hai Zara Khafa Khafa.mp3" ,image:"Woh Hai Zara Khafa Khafa.jpg"},
            {name:"Yashomati Maiya Se Bole Nandlala", source:"Yashomati Maiya Se Bole Nandlala.mp3" ,image:"Yashomati Maiya Se Bole Nandlala.jpg"},
            {name:"Ye Dil Tum Bin Lagta Nahin", source:"Ye Dil Tum Bin Lagta Nahin.mp3" ,image:"Ye Dil Tum Bin Lagta Nahin.jpg"},
            {name:"Ye Ladki Zarasi Deewani Lagti Hai", source:"Ye Ladki Zarasi Deewani Lagti Hai.mp3" ,image:"Ye Ladki Zarasi Deewani Lagti Hai.jpg"},
          
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