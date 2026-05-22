import { notFound } from "next/navigation";
import ICategoria from "./interfaces/iCategoria";
import IProduto from "./interfaces/iProduto";
import IUnidadeMedida from "./interfaces/iUnidadeMedida";
import IFiltro from "./interfaces/iFiltro";
import IProdutoLista from "./interfaces/iProdutoLista";

const urlBase = "https://apiestoque.runasp.net/api/";

export async function ListarCategorias(): Promise<ICategoria[]> {
    try {
        const response = await fetch(`${urlBase}CategoriaProduto`);

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
        const response = await fetch(`${urlBase}CategoriaProduto/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: ICategoria = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar categoria:", error);
        return notFound();
    }
}

export async function DeletarCategoria(id: string): Promise<void> {
    try {
        const response = await fetch(`${urlBase}CategoriaProduto/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        window.location.href = '/telas/categoria/lista';

    } catch (error) {
        console.error('Falha ao excluir categoria:', error);
    }
}

export async function ListarUnidadesMedida(): Promise<IUnidadeMedida[]> {
    try {
        const response = await fetch(`${urlBase}UnidadeMedida`);

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
        const response = await fetch(`${urlBase}UnidadeMedida/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IUnidadeMedida = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar unidade de medida:", error);
        return notFound();
    }
}

export async function DeletarUnidadeMedida(id: string): Promise<void> {
    try {
        const response = await fetch(`${urlBase}UnidadeMedida/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        window.location.href = '/telas/unidadeMedida/lista';

    } catch (error) {
        console.error('Falha ao excluir unidade de medida:', error);
    }
}

export async function ListarProdutos(): Promise<IProdutoLista[]> {
    try {
        const response = await fetch(`${urlBase}Produto`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IProdutoLista[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar produtos:", error);
        return [];
    }
}

export async function ListarProdutosPorId(id: string): Promise<IProduto> {
    try {
        const response = await fetch(`${urlBase}Produto/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IProduto = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar produto:", error);
        return notFound();
    }
}

export async function ListarProdutosFiltrados(filtro: IFiltro): Promise<IProdutoLista[]> {
    try {
        const params = new URLSearchParams();

        if (filtro.nome) {
            params.append('nome', filtro.nome);
        }

        if (filtro.quantidadeMinima !== null) {
            params.append('quantidadeMinima', String(filtro.quantidadeMinima));
        }

        if (filtro.categoriaProdutoId) {
            params.append('categoriaProdutoId', filtro.categoriaProdutoId);
        }

        if (filtro.unidadeMedidaId) {
            params.append('unidadeMedidaId', filtro.unidadeMedidaId);
        }

        if (filtro.habilitado !== null) {
            params.append('habilitado', String(filtro.habilitado));
        }

        const response = await fetch(`${urlBase}Produto/filtrados?${params.toString()}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IProdutoLista[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar produtos filtrados:", error);
        return [];
    }
}

export async function DeletarProduto(id: string): Promise<void> {
    try {
        const response = await fetch(`${urlBase}Produto/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        window.location.href = '/telas/produto/pesquisa';

    } catch (error) {
        console.error('Falha ao excluir produto:', error);
    }
}
