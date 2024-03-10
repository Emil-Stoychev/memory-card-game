import { AES, enc } from 'crypto-js';

export const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😜', '😝', '🤑', '🤗', '🤓', '😎', '🧐', '🤠',
    '🥳', '🤗', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯',
    '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔',
    '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦',
    '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴',
    '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿',
    '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😸',
    '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🦹', '🦸', '🤱',
    '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟', '💆', '💇', '💅',
    '🤳', '💃', '🕺', '👯', '👰', '🤵', '🦸‍♂️', '🦸‍♀️', '🦹‍♂️', '🦹‍♀️',
    '👼', '🎅', '🤶', '🦷', '🦴', '👩‍⚕️', '👨‍⚕️', '👩‍🎓', '👨‍🎓', '👩‍🏫',
    '👨‍🏫', '👩‍⚖️', '👨‍⚖️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🔧', '👨‍🔧', '👨‍👨‍👧‍',
    '👩‍🏭', '👨‍🏭', '👩‍💼', '👨‍💼', '👩‍🔬', '👨‍🔬', '👩‍💻', '👨‍💻', '👩‍🎤', '👩‍👩‍👧‍👧',
    '👨‍🎤', '👩‍🎨', '👨‍🎨', '👩‍🚒', '👨‍🚒', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍👩‍👦',
    '👨‍👨‍👦', '👩‍👩‍👧', '👨‍👨‍👧','👩‍👩‍👧‍👦', '👨‍👨‍👧‍👦', '👩‍👩‍👦‍👦', '👨‍👨‍👦‍👦',
];

function getEmojis(totalPairs) {
    const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

    const gameEmojis = shuffledEmojis.slice(0, totalPairs);

    let gamePairs = gameEmojis.concat(gameEmojis);

    gamePairs = gamePairs.sort(() => Math.random() - 0.5)

    return gamePairs
}

export function generateEmojis(difficulty) {
  let numberOfPairs;
  switch (difficulty) {
    case "easy":
      numberOfPairs = 5; // 10 cards, 5 pairs
      break;
    case "normal":
      numberOfPairs = 10; // 20 cards, 10 pairs
      break;
    case "hard":
      numberOfPairs = 15; // 30 cards, 15 pairs
      break;
    default:
      numberOfPairs = 5; // Default to easy mode
      break;
  }

  return getEmojis(numberOfPairs);
}


// LOCAL STORAGE

// Encryption function
export function encryptData(data, key) {
  const encryptedData = AES.encrypt(JSON.stringify(data), key).toString();
  return encryptedData;
}

// Decryption function
export function decryptData(encryptedData, key) {
  const decryptedData = AES.decrypt(encryptedData, key).toString(enc.Utf8);
  return JSON.parse(decryptedData);
}

// Save data to localStorage
export function saveDataToLocalStorage(key, data, encryptionKey) {
  const encryptedData = encryptData(data, encryptionKey);
  localStorage.setItem(key, encryptedData);
}

// Retrieve data from localStorage
export function getDataFromLocalStorage(key, encryptionKey) {
  try {
      const encryptedData = localStorage.getItem(key);
      if (encryptedData) {
          const decryptedData = decryptData(encryptedData, encryptionKey);
          return decryptedData;
      }
  } catch (error) {
      console.error("Error during decryption:", error.message);
  }
  return null;
}