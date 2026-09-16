import { create } from "zustand"

interface Props {
    nomeProduto: string | null;
    setProdutoNome: (nome: string | null) => void;
};

export const store = create<Props>((set) => ({
    nomeProduto: null,
    setProdutoNome: (nomeProduto) => {
        set({ nomeProduto })
    },
}))