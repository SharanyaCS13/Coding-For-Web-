
 const songData = [
            {name:"Aaj Mausam Bada Beimaan Hai",source: "Aaj Mausam Bada Beimaan Hai.mp3" ,image: "Aaj Mausam Bada Beimaan Hai.jpg" },
            { name:"Aap Ko Pahle Bhi Kahin Dekha Hai", source: "Aap Ko Pahle Bhi Kahin Dekha Hai.mp3", image: "Aap Ko Pahle Bhi Kahin Dekha Hai.jpg"},
            {name:"Dafli Wale Dafli Baja", source:"Dafli Wale Dafli Baja.mp3" ,image:"Dafli Wale Dafli Baja.jpg"},
            {name:"Dard-E-Dil Dard-E-Jigar", source:"Dard-E-Dil Dard-E-Jigar.mp3" ,image:"Dard-E-Dil Dard-E-Jigar.jpg"},
            {name:"Deewana Mujhsa Nahin", source:"Deewana Mujhsa Nahin.mp3" ,image:"Deewana Mujhsa Nahin.jpg"},
            {name:"Deewane Hai Deewanon Ko", source:"Deewane Hai Deewanon Ko.mp3" ,image:"Deewane Hai Deewanon Ko.JPG"},
            {name:"Dekh Ke Teri Nazar", source:"Dekh Ke Teri Nazar.mp3" ,image:"Dekh Ke Teri Nazar.jpg"},
            {name:"Dil Tera Deewana Hai Sanam", source:"Dil Tera Deewana Hai Sanam.mp3",image:"Dil Tera Deewana Hai Sanam.jpg"},
            {name:"Humko To Yara Hai Teri Yari", source:"Humko To Yara Hai Teri Yari.mp3" ,image:"Humko To Yara Hai Teri Yari.jpg"},
            {name:"Lakhon Hain Nigahon Mein", source:"Lakhon Hain Nigahon Mein.mp3"  ,image:"Lakhon Hain Nigahon Mein.jpg"},
            {name:"Leke Pehla Pehla Pyar", source:"Leke Pehla Pehla Pyar.mp3" ,image:"Leke Pehla Pehla Pyar.jpg"},
            {name:"Madhuban Mein Radhika Nache Re", source:"Madhuban Mein Radhika Nache Re.mp3" ,image:"Madhuban Mein Radhika Nache Re.jpg"},
            {name:"Main Jat Yamla Pagla Deewana", source:"Main Jat Yamla Pagla Deewana.mp3" ,image:"Main Jat Yamla Pagla Deewana.jpg"},
            {name:"O Haseena Zulfonwale Jane Jahan", source:"O Haseena Zulfonwale Jane Jahan.mp3" ,image:"O Haseena Zulfonwale Jane Jahan.jpg"},
            {name:"Sa Re Ga Ma", source:"Sa Re Ga Ma.mp3" ,image:"Sa Re Ga Ma.jpg"},
            {name:"Woh Hai Zara Khafa Khafa", source:"Woh Hai Zara Khafa Khafa.mp3" ,image:"Woh Hai Zara Khafa Khafa.jpg"},
            {name:"Yaadon Ki Baaraat", source:"Yaadon Ki Baaraat.mp3"  ,image:"Yaadon Ki Baaraat.jpg"},
            {name:"Ye Dil Tum Bin Lagta Nahin", source:"Ye Dil Tum Bin Lagta Nahin.mp3" ,image:"Ye Dil Tum Bin Lagta Nahin.jpg"},
            
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