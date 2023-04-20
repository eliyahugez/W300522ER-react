import { useState } from "react";
import { getCards } from "../services/cardApiService";

const useCards = () => {
    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(false);

    const handleGetCards = async () => {
        try {
            setPending(true);
            const cards = await getCards();
            setPending(false);
            setError(null);
            setCards(cards);
        } catch (error) {
            setPending(false);
            setError(error);
            setCards(null);
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