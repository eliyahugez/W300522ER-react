import { useMemo, useState } from "react";
import { getCard, getCards } from "../services/cardApiService";
import useAxios from "./useAxios";

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

    useAxios();

    const handleGetCards = async () => {
        try {
            setPending(true);
            const cards = await getCards();
            requestStatus(false, null, cards);
        } catch (error) {
            requestStatus(false, error, null);
        }
    }

    const handleGetCard = async (id) => {
        try {
            setPending(true);
            const card = await getCard(id);
            requestStatus(false, null, null, card);
        } catch (error) {
            requestStatus(false, error, null);
        }
    }

    const value = useMemo(() => {
        return {cards,card,error,isPending}
    }, [cards,card,error,isPending]);

    return {
        value,
        handleGetCards,
        handleGetCard
    }
}

export default useCards;