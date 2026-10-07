import { notFound } from "next/navigation";
import IUsuario from "./Contracts/IUsuario";
import IVerificarUsuario from "./Contracts/IVerificarUsuario";

const urlBase = "https://localhost:7088/api/usuario";

export async function ListarUsuarios(): Promise<IUsuario[]> {
    try {
        const response = await fetch(`${urlBase}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IUsuario[] = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar usuários:", error);
        return [];
    }
}

export async function ListarUsuarioPorId(id: string): Promise<IUsuario> {
    try {
        const response = await fetch(`${urlBase}/${id}`);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IUsuario = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar usuário:", error);
        return notFound();
    }
}

export async function DeletarUsuario(id: string): Promise<void> {
    try {
        const response = await fetch(`${urlBase}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

    } catch (error) {
        console.error('Falha ao excluir usuário:', error);
    }
}

export async function InserirUsuario(usuario: IUsuario): Promise<void> {
    try {
        const { id, ...usuarioSemId } = usuario;

        const response = await fetch(`${urlBase}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuarioSemId)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

    } catch (error) {
        console.error('Falha ao inserir usuário:', error);
    }
}

export async function VerificarUsuario(usuario: IVerificarUsuario): Promise<boolean> {
    try {
        const response = await fetch(`${urlBase}/Verificar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: boolean = await response.json();
        return data;

    } catch (error) {
        console.error("Falha ao buscar usuário:", error);
        return notFound();
    }
}

export async function AtualizarUsuario(usuario: IUsuario): Promise<void> {
    try {
        const response = await fetch(`${urlBase}/${usuario.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

    } catch (error) {
        console.error('Falha ao atualizar usuário:', error);
    }
}