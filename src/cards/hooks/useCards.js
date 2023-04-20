import { useState } from "react";
import { getCards } from "../services/cardApiService";

const useCards = () => {
    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(false);

    const requestStatus = (loading, errorMessage, cards, card = null) => {
        setPending(loading);
        setCards(cards);
        setCard(card);
        setError(errorMessage);
    }


    const handleGetCards = async () => {
        try {
            setPending(true);
            const cards = await getCards();
            requestStatus(false, null, cards);
        } catch (error) {
            requestStatus(false, error, null);
        }
        

    }

    return {
        card,
        cards,
        isPending,
        error,
        handleGetCards
    }
}

export default useCards;