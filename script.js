let playlist = [
  { file: "the weeknd.mp3", artist: "The Weeknd" },
  { file: "slimane.mp3", artist: "Slimane" },
  { file: "gims.mp3", artist: "Gims" },
];

let audio = new Audio();
let isPlaying = false;
let currentIndex = 0;

// play a specific song
function playSong(file, artist) {
  currentIndex = playlist.findIndex((s) => s.file === file);

  audio.src = file;
  audio.play();
  isPlaying = true;

  document.getElementById("now-playing").textContent = "Playing: " + artist;
  document.getElementById("play-btn").textContent = "⏸";
}

// play / pause
function togglePlay() {
  const btn = document.getElementById("play-btn");

  if (!audio.src) return;

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    btn.textContent = "▶";
  } else {
    audio.play();
    isPlaying = true;
    btn.textContent = "⏸";
  }
}

// next son
function nextSong() {
  currentIndex++;

  if (currentIndex >= playlist.length) {
    currentIndex = 0;
  }

  let song = playlist[currentIndex];
  playSong(song.file, song.artist);
}

// prev song
function prevSong() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = playlist.length - 1;
  }

  let song = playlist[currentIndex];
  playSong(song.file, song.artist);
}

// volume
function setVolume() {
  audio.volume = document.getElementById("volume").value;
}
