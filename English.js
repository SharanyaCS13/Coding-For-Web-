
 const songData = [
            {name:"Andante Andante", source:"Andante Andante.mp3",image: "Andante Andante.jpg", singer: "ABBA"},
            {name:"Angeleyes", source: "Angeleyes.mp3",image: "Angeleyes.jpg", singer: "ABBA"},
            {name:"As Good As New", source:"As Good As New.mp3" ,image: "As Good As New.jpg", singer: "ABBA"},
            {name:"Homeward Bound", source:"Homeward Bound.mp3" ,image:"Homeward Bound.jpg", singer: "Simon & Garfunkel"},
            {name:"Honey, Honey", source:"Honey, Honey.mp3" ,image:"Honey, Honey.jpg", singer: "ABBA"},
            {name:"I'm A Marionette", source:"I_m A Marionette.mp3" ,image:"I_m A Marionette.jpg", singer: "ABBA"},
            {name:"Lay All Your Love On Me", source:"Lay All Your Love On Me.mp3" ,image:"Lay All Your Love On Me.jpg", singer: "ABBA"},
            {name:"Simon & Garfunkel - America", source:"Simon _ Garfunkel - America.mp3" ,image:"Simon _ Garfunkel - America.jpg", singer: "Simon & Garfunkel"},
            {name:"Simon & Garfunkel - Cecilia", source:"Simon _ Garfunkel - Cecilia.mp3" ,image:"Simon _ Garfunkel - Cecilia.jpg", singer: "Simon & Garfunkel"},
            {name:"Simon & Garfunkel - El Condor Pasa", source:"Simon _ Garfunkel - El Condor Pasa.mp3",image:"Simon _ Garfunkel - El Condor Pasa.jpg", singer: "Simon & Garfunkel"},
            {name:"Simon & Garfunkel - Mrs. Robinson", source:"Simon _ Garfunkel - Mrs. Robinson.mp3" ,image:"Simon _ Garfunkel - Mrs. Robinson.jpg", singer: "Simon & Garfunkel"}, 
            {name:"Supertramp - Breakfast in America", source:"Supertramp - Breakfast in America.mp3" , image: "Supertramp - Breakfast in America.jpg", singer: "Supertramp"},
           
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