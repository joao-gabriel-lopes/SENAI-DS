import { create } from "zustand"

interface Props {
    opcoes: string[];
    setOpcoes: (opcao: string) => void;
};

export const useOptionStore = create<Props>((set) => ({
    opcoes: [],
    setOpcoes: (opcao) =>
    set((state) => ({
        ...state,
        opcoes: [...state.opcoes, opcao]
    }))
}))