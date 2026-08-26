'use client'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styles from "./page.module.css";
import { Box, Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

interface funcionario {
    id: string;
    nome: string;
    salario: number;
}

const colunas: GridColDef<(typeof linhas)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'nome',
        headerName: 'Nome',
        width: 150,
        editable: true,
    },
    {
        field: 'salario',
        headerName: 'Salário',
        width: 150,
        editable: true,
    },
];

const linhas: funcionario[] = [
    { id: "1", nome: "Joaquim", salario: 1000 },
    { id: "2", nome: "Maria", salario: 1800 },
    { id: "3", nome: "Pedro", salario: 2200 },
    { id: "4", nome: "Ana", salario: 1500 },
    { id: "5", nome: "Lucas", salario: 2600 },
    { id: "6", nome: "Beatriz", salario: 1700 },
    { id: "7", nome: "Gabriel", salario: 2100 },
    { id: "8", nome: "Larissa", salario: 1900 },
    { id: "9", nome: "Rafael", salario: 2400 },
    { id: "10", nome: "Fernanda", salario: 1600 },
    { id: "11", nome: "Mateus", salario: 2300 },
    { id: "12", nome: "Camila", salario: 1750 },
    { id: "13", nome: "Vinícius", salario: 2750 },
    { id: "14", nome: "Isabela", salario: 1950 },
    { id: "15", nome: "Thiago", salario: 2050 },
    { id: "16", nome: "Julia", salario: 1850 },
    { id: "17", nome: "Bruno", salario: 3100 },
    { id: "18", nome: "Patrícia", salario: 2000 },
    { id: "19", nome: "Davi", salario: 1650 },
    { id: "20", nome: "Sofia", salario: 2500 },
];

export default function Index() {
    const [pesquisa, setPesquisa] = useState("");
    const [listaFuncionarios, setListaFuncionarios] = useState<funcionario[]>(linhas)


    function filtrarFuncionarios(pesquisa: string, funcionarios: funcionario[]) {
        var lista: funcionario[] = []

        linhas.forEach(funcionario => {
                if(funcionario.nome.toLowerCase().includes(pesquisa.toLowerCase()) || funcionario.id.toLowerCase() == pesquisa.toLowerCase()){
                    lista.push(funcionario);
                }
                setListaFuncionarios(lista)
        });
    }

    return (
        <main className={styles.main}>

            <div className={styles.container}>
                <TextField value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} className={styles.inputSearch} id="outlined-basic" label="Digite o id ou nome do funcionário" variant="outlined" />
                <Button onClick={() => filtrarFuncionarios(pesquisa, linhas)} variant="outlined" className={styles.botaoSearch}><SearchIcon /></Button>
            </div>

            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={listaFuncionarios}
                    columns={colunas}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
        </main>
    );
}
