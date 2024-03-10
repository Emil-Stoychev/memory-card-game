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

    console.log(gamePairs);
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
