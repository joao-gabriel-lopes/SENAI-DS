import IGato from "./interfaces/IGato";

export async function ListarGatos(): Promise<IGato[]> {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?api_key=live_KdNvjWBNkSOjcUs8OMJrE6mB7nt0hPH3pkTfQUNG9DAHrJXI74saKgcMVj58vT19&order=ASC&limit=30');

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data: IGato[] = await response.json();

        const gatos: IGato[] = []
        let contador = 1

        data.forEach(registro =>{
            const gato = {id: contador, url: registro.url}
            gatos.push(gato)
            contador++
        })

        return gatos;

    } catch (error) {
        console.error("Falha ao buscar gatos:", error);
        return [];
    }
}

export async function ListarGatoPorId(id: number): Promise<IGato> {
    try {

        const gatos = await ListarGatos()

        const gato = gatos.find(gato => gato.id === id)

        if(gato == null){
            throw new Error("Gato não encontrado");
        }

        return gato;

    } catch (error) {
        console.error("Falha ao buscar gatos:", error);
        return {id: 0, url: ""};
    }
}