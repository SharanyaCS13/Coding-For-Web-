 const songData = [
            { name: "Aaiye Meharban", source: "Aaiye Meharban.mp3" , image: "Aaiye Meharban.jpg" },
            {name: "Aaj Rapat Jaayen To", source:"Aaj Rapat Jaayen To.mp3" , image: "Aaj Rapat Jaayen To.jpg"},
            { name:"Aap Ko Pahle Bhi Kahin Dekha Hai", source: "Aap Ko Pahle Bhi Kahin Dekha Hai.mp3", image: "Aap Ko Pahle Bhi Kahin Dekha Hai.jpg"},
            {name:"Chhuk Chhuk", source: "Chhuk Chhuk.mp3"  ,image: "Chhuk Chhuk.jpg"},
            {name:"Dekh Ke Teri Nazar", source:"Dekh Ke Teri Nazar.mp3" ,image:"Dekh Ke Teri Nazar.jpg"},
            {name:"Dil Jalon Ka Dil Jala Ke", source:"Dil Jalon Ka Dil Jala Ke.mp3" ,image:"Dil Jalon Ka Dil Jala Ke.JPG"},
            {name:"Do Lafzon Ki Hai Dil Ki Kahani", source:"Do Lafzon Ki Hai Dil Ki Kahani .mp3" ,image:"Do Lafzon Ki Hai Dil Ki Kahani.jpg"},
            {name:"Duniya Mein Logon Ko", source:"Duniya Mein Logon Ko.mp3" ,image:"Duniya Mein Logon Ko.jpg"},
            {name:"Ek Main Aur Ek Tu", source:"Ek Main Aur Ek Tu.mp3" ,image:"Ek Main Aur Ek Tu.jpg"},
            {name:"Haal Kaisa Hai Janab Ka ", source:"Haal Kaisa Hai Janab Ka.mp3" ,image:"Haal Kaisa Hai Janab Ka.jpg"},
            {name:"Haule Haule Chalo Mere Sajna", source:"Haule Haule Chalo Mere Sajna.mp3" ,image:"Haule Haule Chalo Mere Sajna.jpg"},
            {name:"Humko To Yara Hai Teri Yari", source:"Humko To Yara Hai Teri Yari.mp3" ,image:"Humko To Yara Hai Teri Yari.jpg"},
            {name:"Jane Kaisa Hai Mera Deewana", source:"Jane Kaisa Hai Mera Deewana.mp3" ,image:"Jane Kaisa Hai Mera Deewana.jpg"},
            {name:"Jawani Jan-E-Man", source:"Jawani Jan-E-Man.mp3" ,image:"Jawani Jan-E-Man.jpg"},
            {name:"Katra Katra", source:"Katra Katra.mp3"  ,image:"Katra Katra.jpg"},
            {name:"Kya Ghazab Karte Ho Ji", source:"Kya Ghazab Karte Ho Ji.mp3" ,image:"Kya Ghazab Karte Ho Ji.jpg"},
            {name:"Kevhan Tari Pahate", source:"Kevhan Tari Pahate.mp3" ,image:"Kevhan Tari Pahate.jpg"},
            {name:"Mausam Pyar Ka", source:"Mausam Pyar Ka.mp3" ,image:"Mausam Pyar Ka.jpg"},
            {name:"O Haseena Zulfonwale Jane Jahan", source:"O Haseena Zulfonwale Jane Jahan.mp3" ,image:"O Haseena Zulfonwale Jane Jahan.jpg"},
            {name:"Pahle Pahle Pyar Ki Mulaqaten", source:"Pahle Pahle Pyar Ki Mulaqaten.mp3" ,image:"Pahle Pahle Pyar Ki Mulaqaten.jpg"},
            {name:"Piya Bawri Piya Bawri", source:"Piya Bawri Piya Bawri.mp3" ,image:"Piya Bawri Piya Bawri.jpg"},
            {name:"Piya Piya Piya Mora Jiya Pukare", source:"Piya Piya Piya Mora Jiya Pukare.mp3" ,image:"Piya Piya Piya Mora Jiya Pukare.jpg"},
            {name:"Piya Tu Ab To Aaja", source:"Piya Tu Ab To Aaja.mp3" ,image:"Piya Tu Ab To Aaja.jpg"},
            {name:"Raat Baaqi Baat Baaqi", source:"Raat Baaqi Baat Baaqi.mp3" ,image:"Raat Baaqi Baat Baaqi.jpg"},
            {name:"Roz Roz Dali Dali", source:"Roz Roz Dali Dali.mp3" ,image:"Roz Roz Dali Dali.jpg"},
            {name:"Sa Re Ke Sa Re", source:"Sa Re Ke Sa Re.mp3" ,image:"Sa Re Ke Sa Re.jpg"},
            {name:"Sharad Sundar Chanderi Raati", source:"Sharad Sundar Chanderi Raati.mp3" ,image:"Sharad Sundar Chanderi Raati.jpg"},
            {name:"Sun Sun Sun Didi", source:"Sun Sun Sun Didi.mp3" ,image:"Sun Sun Sun Didi.jpg"}, 
            {name:"Ye Re Ghana Ye Re Ghana", source:"Ye Re Ghana Ye Re Ghana.mp3" ,image:"Ye Re Ghana Ye Re Ghana.jpg"},
            {name:"Zara Sa Jhoom Loon Main", source:"Zara Sa Jhoom Loon Main.mp3" ,image:"Zara Sa Jhoom Loon Main.jpg"},
            
            
            
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