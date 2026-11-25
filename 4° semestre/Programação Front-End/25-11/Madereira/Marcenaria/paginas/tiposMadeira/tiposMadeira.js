const urlBase = ""

async function Post() {
    try {
    const form = document.getElementById("madeira-tipo-form")
    const data = Object.fromEntries(new FormData(form));

        const response = await fetch(`${urlBase}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

    } catch (error) {
        console.error('Falha ao inserir tipo de madeira:', error);
    }
}