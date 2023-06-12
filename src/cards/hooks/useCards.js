import { useCallback, useMemo, useState } from "react";
import { createCard, deleteCard, getCard, getCards, getMyCards, updateCard } from "../services/cardApiService";
import useAxios from "./useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const useCards = () => {
    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(false);

    const snack = useSnackbar();
    const navigate = useNavigate();

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
            return card;
        } catch (error) {
            requestStatus(false, error, null);
        }
    }

    const handleCreateCard = useCallback(
        async (cardFromClient) => {
            try {
                setPending(true);
                const normalizedCard = normalizeCard(cardFromClient);
                const card = await createCard(normalizedCard);
                requestStatus(false, null, null, card);
                snack("A new business card has been created", "success")
                navigate(ROUTES.MY_CARDS);
            } catch (error) {
                requestStatus(false, error, null);
            }
        }, []
    );

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
            snack("Card deleted successfully", "success");
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, []);

    const handleUpdateCard = useCallback(async (cardId, normalizeCardFrom) => {
        try {
            setPending(true);
            const card = await updateCard(cardId, normalizeCardFrom);
            requestStatus(false, null, null, card);
            snack("Card updated successfully", "success");
            navigate(ROUTES.MY_CARDS);
        } catch {
            requestStatus(false, error, null);
        }
    }, []);

    const value = useMemo(() => {
        return { cards, card, error, isPending }
    }, [cards, card, error, isPending]);

    return {
        value,
        handleGetCards,
        handleGetCard,
        handleGetMyCards,
        handleDeleteCard,
        handleCreateCard,
        handleUpdateCard
    }
}

export default useCards;