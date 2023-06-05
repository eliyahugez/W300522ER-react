import { useCallback, useMemo, useState } from "react";
import { deleteCard, getCard, getCards, getMyCards } from "../services/cardApiService";
import useAxios from "./useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useCards = () => {
    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(false);

    const snack = useSnackbar();

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

    const handleGetMyCards = useCallback(async () => {
        try {
            setPending(true);
            const cards = await getMyCards();
            requestStatus(false, null, cards);

        } catch (error) {
            requestStatus(false, error, null);
        }
        }, []);

    
    const handleDeleteCard = useCallback(async (cardId) => {
        try {
            setPending(true);
            await deleteCard(cardId);
            snack("Card deleted successfully","success");
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, []);


    const value = useMemo(() => {
        return {cards,card,error,isPending}
    }, [cards,card,error,isPending]);

    return {
        value,
        handleGetCards,
        handleGetCard,
        handleGetMyCards,
        handleDeleteCard
    }
}

export default useCards;