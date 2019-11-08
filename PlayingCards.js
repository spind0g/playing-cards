const PlayingCards = createPlayingCards();

function createPlayingCards() {
    const suits = ['♣', '♠', '♥', '♦'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    let id = 1;
    let playingCards = [];

    for(let s = 0; s < suits.length; s++) {
        for(let r = 0; r < ranks.length; r++) {
            let playingCard = { id, rank: ranks[r], suit: suits[s] };

            playingCards.push(playingCard);
            id++;
        }
    }

    return playingCards;
}

export default PlayingCards;
