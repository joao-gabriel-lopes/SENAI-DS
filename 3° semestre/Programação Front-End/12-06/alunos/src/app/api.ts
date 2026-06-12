import IAluno from "./interfaces/IAluno";
import IFiltro from "./interfaces/IFiltro";

export async function ListarAlunos(): Promise<IAluno[]> {
    try {
        const response = await fetch("https://localhost:7137/api/aluno");

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IAluno[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar alunos:", error);
        return [];
    }
}

export async function ListarAlunosFiltrados(filtro: IFiltro): Promise<IAluno[]> {
    try {
        const params = new URLSearchParams();

        if (filtro.nome) {
            params.append('Nome', filtro.nome);
        }

        if (filtro.sexo) {
            params.append('Sexo', String(filtro.sexo));
        }

        const response = await fetch(`https://localhost:7137/api/aluno/filtrados?${params.toString()}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IAluno[] = await response.json();

        return data;

    } catch (error) {
        console.error("Falha ao buscar alunos filtrados:", error);
        return [];
    }
}