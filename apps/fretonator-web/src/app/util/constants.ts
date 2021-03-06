import { ChordType, Mode, NoteExtenderSymbol, NoteSymbol } from './types';

export const NoteToStringAndFretMap = {
  c__: [
    { string: 'E', fret: 6 },
    { string: 'A', fret: 1 },
    { string: 'D', fret: 8 },
    { string: 'G', fret: 3 },
    { string: 'B', fret: 11 }
  ],
  c_: [
    { string: 'E', fret: 7 },
    { string: 'A', fret: 2 },
    { string: 'D', fret: 9 },
    { string: 'G', fret: 4 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 }
  ],
  c: [
    { string: 'E', fret: 8 },
    { string: 'A', fret: 3 },
    { string: 'D', fret: 10 },
    { string: 'G', fret: 5 },
    { string: 'B', fret: 1 }
  ],
  'c#': [
    { string: 'E', fret: 9 },
    { string: 'A', fret: 4 },
    { string: 'D', fret: 11 },
    { string: 'G', fret: 6 },
    { string: 'B', fret: 2 }
  ],
  'c##': [
    { string: 'E', fret: 10 },
    { string: 'A', fret: 5 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'G', fret: 7 },
    { string: 'B', fret: 3 }
  ],
  d__: [
    { string: 'E', fret: 8 },
    { string: 'A', fret: 3 },
    { string: 'D', fret: 10 },
    { string: 'G', fret: 5 },
    { string: 'B', fret: 1 }
  ],
  d_: [
    { string: 'E', fret: 9 },
    { string: 'A', fret: 4 },
    { string: 'D', fret: 11 },
    { string: 'G', fret: 6 },
    { string: 'B', fret: 2 }
  ],
  d: [
    { string: 'E', fret: 10 },
    { string: 'A', fret: 5 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'G', fret: 7 },
    { string: 'B', fret: 3 }
  ],
  'd#': [
    { string: 'E', fret: 11 },
    { string: 'A', fret: 6 },
    { string: 'D', fret: 1 },
    { string: 'G', fret: 8 },
    { string: 'B', fret: 4 }
  ],
  'd##': [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'A', fret: 7 },
    { string: 'D', fret: 2 },
    { string: 'G', fret: 9 },
    { string: 'B', fret: 5 }
  ],
  e__: [
    { string: 'E', fret: 10 },
    { string: 'A', fret: 5 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'G', fret: 7 },
    { string: 'B', fret: 3 }
  ],
  e_: [
    { string: 'E', fret: 11 },
    { string: 'A', fret: 6 },
    { string: 'D', fret: 1 },
    { string: 'G', fret: 8 },
    { string: 'B', fret: 4 }
  ],
  e: [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'A', fret: 7 },
    { string: 'D', fret: 2 },
    { string: 'G', fret: 9 },
    { string: 'B', fret: 5 }
  ],
  'e#': [
    { string: 'E', fret: 1 },
    { string: 'A', fret: 8 },
    { string: 'D', fret: 3 },
    { string: 'G', fret: 10 },
    { string: 'B', fret: 6 }
  ],
  'e##': [
    { string: 'E', fret: 2 },
    { string: 'A', fret: 9 },
    { string: 'D', fret: 4 },
    { string: 'G', fret: 11 },
    { string: 'B', fret: 7 }
  ],
  f__: [
    { string: 'E', fret: 11 },
    { string: 'A', fret: 6 },
    { string: 'D', fret: 1 },
    { string: 'G', fret: 8 },
    { string: 'B', fret: 4 }
  ],
  f_: [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'A', fret: 7 },
    { string: 'D', fret: 2 },
    { string: 'G', fret: 9 },
    { string: 'B', fret: 5 }
  ],
  f: [
    { string: 'E', fret: 1 },
    { string: 'A', fret: 8 },
    { string: 'D', fret: 3 },
    { string: 'G', fret: 10 },
    { string: 'B', fret: 6 }
  ],
  'f#': [
    { string: 'E', fret: 2 },
    { string: 'A', fret: 9 },
    { string: 'D', fret: 4 },
    { string: 'G', fret: 11 },
    { string: 'B', fret: 7 }
  ],
  'f##': [
    { string: 'E', fret: 3 },
    { string: 'A', fret: 10 },
    { string: 'D', fret: 5 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'B', fret: 8 }
  ],
  g__: [
    { string: 'E', fret: 1 },
    { string: 'A', fret: 8 },
    { string: 'D', fret: 3 },
    { string: 'G', fret: 10 },
    { string: 'B', fret: 6 }
  ],
  g_: [
    { string: 'E', fret: 2 },
    { string: 'A', fret: 9 },
    { string: 'D', fret: 4 },
    { string: 'G', fret: 11 },
    { string: 'B', fret: 7 }
  ],
  g: [
    { string: 'E', fret: 3 },
    { string: 'A', fret: 10 },
    { string: 'D', fret: 5 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'B', fret: 8 }
  ],
  'g#': [
    { string: 'E', fret: 4 },
    { string: 'A', fret: 11 },
    { string: 'D', fret: 6 },
    { string: 'G', fret: 1 },
    { string: 'B', fret: 9 }
  ],
  'g##': [
    { string: 'E', fret: 4 },
    { string: 'A', fret: 0 },
    { string: 'A', fret: 12 },
    { string: 'D', fret: 7 },
    { string: 'G', fret: 2 },
    { string: 'B', fret: 10 }
  ],
  a__: [
    { string: 'E', fret: 3 },
    { string: 'A', fret: 10 },
    { string: 'D', fret: 5 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'B', fret: 8 }
  ],
  a_: [
    { string: 'E', fret: 4 },
    { string: 'A', fret: 11 },
    { string: 'D', fret: 6 },
    { string: 'G', fret: 1 },
    { string: 'B', fret: 9 }
  ],
  a: [
    { string: 'E', fret: 5 },
    { string: 'A', fret: 0 },
    { string: 'A', fret: 12 },
    { string: 'D', fret: 7 },
    { string: 'G', fret: 2 },
    { string: 'B', fret: 10 }
  ],
  'a#': [
    { string: 'E', fret: 6 },
    { string: 'A', fret: 1 },
    { string: 'D', fret: 8 },
    { string: 'G', fret: 3 },
    { string: 'B', fret: 11 }
  ],
  'a##': [
    { string: 'E', fret: 7 },
    { string: 'A', fret: 2 },
    { string: 'D', fret: 9 },
    { string: 'G', fret: 4 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 }
  ],
  b__: [
    { string: 'E', fret: 5 },
    { string: 'A', fret: 0 },
    { string: 'D', fret: 7 },
    { string: 'G', fret: 2 },
    { string: 'B', fret: 10 }
  ],
  b_: [
    { string: 'E', fret: 6 },
    { string: 'A', fret: 1 },
    { string: 'D', fret: 8 },
    { string: 'G', fret: 3 },
    { string: 'B', fret: 11 }
  ],
  b: [
    { string: 'E', fret: 7 },
    { string: 'A', fret: 2 },
    { string: 'D', fret: 9 },
    { string: 'G', fret: 4 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 }
  ],
  'b#': [
    { string: 'E', fret: 8 },
    { string: 'A', fret: 3 },
    { string: 'D', fret: 10 },
    { string: 'G', fret: 5 },
    { string: 'B', fret: 1 }
  ],
  'b##': [
    { string: 'E', fret: 9 },
    { string: 'A', fret: 4 },
    { string: 'D', fret: 11 },
    { string: 'G', fret: 6 },
    { string: 'B', fret: 2 }
  ]
};

export const ModePatterns = {
  ionian: [2, 2, 1, 2, 2, 2, 1],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  lydian: [2, 2, 2, 1, 2, 2, 1],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  aolian: [2, 1, 2, 2, 1, 2, 2],
  locrian: [1, 2, 2, 1, 2, 2, 2],
  harmonicMinor: [2, 1, 2, 2, 1, 3, 1],
  phrygianDominant: [1, 3, 1, 2, 1, 2, 2],
  majorPentatonic: [2, 2, 4, 2, 4],
  minorPentatonic: [4, 2, 2, 4, 2]
};

export const ChordPatterns = {
  ionian: [
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished
  ],
  dorian: [
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major
  ],
  phrygian: [
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor
  ],
  lydian: [
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor
  ],
  mixolydian: [
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major
  ],
  aolian: [
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major
  ],
  locrian: [
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor
  ],
  harmonicMinor: [
    ChordType.minor,
    ChordType.diminished,
    ChordType.augmented,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.diminished
  ],
  phrygianDominant: [
    ChordType.major,
    ChordType.major,
    ChordType.diminished,
    ChordType.minor,
    ChordType.diminished,
    ChordType.augmented,
    ChordType.minor
  ],
  majorPentatonic: [
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.minor
  ],
  minorPentatonic: [
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.major
  ]
};

export const Octave = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export const ScaleDegrees = [
  'tonic',
  'supertonic',
  'mediant',
  'subdominant',
  'dominant',
  'submediant',
  'leadingTone'
];

export const ModeSelectorObjects = [
  {
    name: Mode.ionian,
    displayName: 'Ionian (Major)'
  },
  {
    name: Mode.dorian,
    displayName: 'Dorian'
  },
  {
    name: Mode.phrygian,
    displayName: 'Phrygian'
  },
  {
    name: Mode.lydian,
    displayName: 'Lydian'
  },
  {
    name: Mode.mixolydian,
    displayName: 'Mixolydian'
  },
  {
    name: Mode.aolian,
    displayName: 'Aolian (Minor)'
  },
  {
    name: Mode.locrian,
    displayName: 'Locrian'
  },
  {
    name: Mode.harmonicMinor,
    displayName: 'Harmonic Minor'
  },
  {
    name: Mode.phrygianDominant,
    displayName: 'Phrygian Dominant'
  },
  {
    name: Mode.majorPentatonic,
    displayName: 'Major Pentatonic'
  },
  {
    name: Mode.minorPentatonic,
    displayName: 'Minor Pentatonic'
  }
];

export const Enharmonics = [
  ['C#', 'D♭'],
  ['D#', 'E♭'],
  ['F#', 'G♭'],
  ['G#', 'A♭'],
  ['A#', 'B♭']
];

export const StringFrequencies = {
  'e': 329.63,
  'B': 246.94,
  'G': 196.00,
  'D': 146.83,
  'A': 110.00,
  'E': 82.41
}
