const urlBase = "https://localhost:7007/api/TipoMadeira"

async function Post(event) {
    event.preventDefault();

    try {
        const form = document.getElementById("form")
        const data = Object.fromEntries(new FormData(form));
        data.precoPorVolume = Number(data.precoPorVolume);

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