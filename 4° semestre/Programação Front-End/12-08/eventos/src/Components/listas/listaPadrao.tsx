interface IListaPadrao {
    coluna: string,
    lista: any[]
}

export function ListaPadrao({ coluna, lista }: IListaPadrao) {
    return (
        <ul>
            {
                lista.map((item, indexItem) => 
                    <li key={indexItem}>
                        {item[coluna]}
                    </li>
                )
            }
        </ul>
    );
}