import ICategoria from "./interfaces/iCategoria";
import IProduto from "./interfaces/iProduto";
import IUnidadeMedida from "./interfaces/iUnidadeMedida";
import IFiltro from "./interfaces/iFiltro";
import IProdutoPesquisa from "./interfaces/iProdutoPesquisa";

export async function ListarCategorias(): Promise<ICategoria[]> {
    try {
        const response = await fetch('https://apiestoque.runasp.net/api/CategoriaProduto');

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: ICategoria[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar categorias:", error);
        return [];
    }
}

export async function ListarCategoriaPorId(id: string): Promise<ICategoria> {
    try {
        const response = await fetch(`https://apiestoque.runasp.net/api/CategoriaProduto/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: ICategoria = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar categoria:", error);
        return {id: null, nome: "", descricao: null};
    }
}

export async function ListarUnidadesMedida(): Promise<IUnidadeMedida[]> {
    try {
        const response = await fetch('https://apiestoque.runasp.net/api/UnidadeMedida');

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IUnidadeMedida[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar unidades de medida:", error);
        return [];
    }
}

export async function ListarUnidadesMedidaPorId(id: string): Promise<IUnidadeMedida> {
    try {
        const response = await fetch(`https://apiestoque.runasp.net/api/UnidadeMedida/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IUnidadeMedida = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar unidade de medida:", error);
        return {id: null, sigla: "", descricao: null, fracionavel: true};
    }
}

export async function ListarProdutos(): Promise<IProdutoPesquisa[]> {
    try {
        const response = await fetch('https://apiestoque.runasp.net/api/Produto');

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IProdutoPesquisa[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar produtos:", error);
        return [];
    }
}

export async function ListarProdutoPorId(id: string): Promise<IProduto> {
    try {
        const response = await fetch(`https://apiestoque.runasp.net/api/Produto/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IProduto = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar produto:", error);
        return {id: null, nome: "", descricao: null, habilitado: true, categoriaProdutoId: "", unidadeMedidaId: "", nomeArquivoFoto: "", quantidadeAtual: 0};
    }
}

export async function ListarProdutosFiltrados(filtro: IFiltro): Promise<IProdutoPesquisa[]> {
    try {
        const params = new URLSearchParams();

        if (filtro.nome) {
            params.append('nome', filtro.nome);
        }

        if (filtro.categoriaProdutoId) {
            params.append('categoriaProdutoId', filtro.categoriaProdutoId);
        }

        const response = await fetch(`https://apiestoque.runasp.net/api/Produto/filtrados?${params.toString()}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IProdutoPesquisa[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar produtos filtrados:", error);
        return [];
    }
}
