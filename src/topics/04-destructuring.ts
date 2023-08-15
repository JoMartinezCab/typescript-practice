interface AudioPlayer {
  audioVolumen: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolumen: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const { song, songDuration: duration, details } = audioPlayer;
const { author } = details;

// console.log({ song, duration, author });

const [, , p3 = 'Not found']: string[] = ['Vegeta', 'Goku', 'Gohan'];

console.log(`Personaje 3: ${p3}`);

export {};
