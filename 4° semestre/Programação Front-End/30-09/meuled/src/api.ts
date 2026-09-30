import { notFound } from "next/navigation";
import IHistorico from "./interfaces/IHistorico";

const urlBase = "https://viled.runasp.net/api/historico";

export async function CarregarHistorico(usuario: string): Promise<IHistorico[]> {
    try {
        const response = await fetch(`${urlBase}/${usuario}/todos`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IHistorico[] = await response.json();
        return data.map((item) => ({
            ...item,
            hora: new Date(item.hora)
        }));

    } catch (error) {
        console.error("Falha ao carregar histórico:", error);
        return [];
    }
}

export async function CarregarUltimoHistorico(usuario: string): Promise<IHistorico> {
    try {
        const response = await fetch(`${urlBase}/${usuario}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IHistorico = await response.json();
        return {
            ...data,
            hora: new Date(data.hora)
        };

    } catch (error) {
        console.error("Falha ao buscar último histórico:", error);
        return notFound();
    }
}

export async function AdicionarHistorico(usuario: string): Promise<void> {
    try {
        const response = await fetch(`${urlBase}?usuario=${usuario}`, {
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

    } catch (error) {
        console.error('Falha ao inserir histórico:', error);
    }
}