'use client'
import { Button, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, Rating, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, ThemeProvider, Typography } from "@mui/material";
import styles from "./page.module.css";
import theme from "@/themes/greyButton";
import { useState } from "react";
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { DataGrid } from '@mui/x-data-grid';
import React from "react";

interface Colunas {
  id: 'nome' | 'idade' | 'totalFaltas' | 'notaFinal';
  label: string;
  minWidth?: number;
  maxWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface informacao {
  nome: string;
  idade: number;
  totalFaltas: number;
  notaFinal: number;
}

const colunas: readonly Colunas[] = [
  { id: 'nome', label: 'Nome', minWidth: 100, maxWidth: 100 },
  {
    id: 'idade',
    label: 'Idade',
    minWidth: 100,
    maxWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'totalFaltas',
    label: 'Total de Faltas',
    minWidth: 100,
    maxWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'notaFinal',
    label: 'Nota Final',
    minWidth: 100,
    maxWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
];

const linhas: informacao[] = [
  { 
    nome: 'Joaquim', 
    idade: 18, 
    totalFaltas: 3, 
    notaFinal: 8 
  },
  { 
    nome: 'Maria', 
    idade: 17, 
    totalFaltas: 2, 
    notaFinal: 9 
  },
  { 
    nome: 'Pedro', 
    idade: 19, 
    totalFaltas: 5, 
    notaFinal: 7 
  },
  { 
    nome: 'Ana', 
    idade: 18, 
    totalFaltas: 1, 
    notaFinal: 10 
  },
  { 
    nome: 'Lucas', 
    idade: 20, 
    totalFaltas: 6, 
    notaFinal: 6 
  },
  { 
    nome: 'Beatriz', 
    idade: 17, 
    totalFaltas: 4, 
    notaFinal: 9 
  },
  { 
    nome: 'Gabriel', 
    idade: 19, 
    totalFaltas: 2, 
    notaFinal: 8 
  },
  { 
    nome: 'Larissa', 
    idade: 18, 
    totalFaltas: 3, 
    notaFinal: 7 
  },
  { 
    nome: 'Rafael', 
    idade: 21, 
    totalFaltas: 7, 
    notaFinal: 5 
  },
  { 
    nome: 'Fernanda', 
    idade: 16, 
    totalFaltas: 1, 
    notaFinal: 10 
  },
  { 
    nome: 'Mateus', 
    idade: 18, 
    totalFaltas: 4, 
    notaFinal: 8 
  },
  { 
    nome: 'Camila', 
    idade: 17, 
    totalFaltas: 2, 
    notaFinal: 9 
  },
  { 
    nome: 'Vinícius', 
    idade: 20, 
    totalFaltas: 5, 
    notaFinal: 7 
  },
  { 
    nome: 'Isabela', 
    idade: 19, 
    totalFaltas: 3, 
    notaFinal: 9 
  },
  { 
    nome: 'Thiago', 
    idade: 18, 
    totalFaltas: 0, 
    notaFinal: 10 
  },
  { 
    nome: 'Julia', 
    idade: 17, 
    totalFaltas: 2, 
    notaFinal: 8 
  },
  { 
    nome: 'Bruno', 
    idade: 22, 
    totalFaltas: 8, 
    notaFinal: 6 
  },
  { 
    nome: 'Patrícia', 
    idade: 18, 
    totalFaltas: 1, 
    notaFinal: 9 
  },
  { 
    nome: 'Davi', 
    idade: 16, 
    totalFaltas: 4, 
    notaFinal: 7 
  },
  { 
    nome: 'Sofia', 
    idade: 19, 
    totalFaltas: 2, 
    notaFinal: 10 
  },
];

export default function Index() {
  const [estado, setEstado] = useState(false)

  const [pagina, setPagina] = useState(0);
  const [linhasPorPagina, setLinhasPorPagina] = useState(10);

  const MudarPagina = (evento: unknown, novaPagina: number) => {
    setPagina(novaPagina);
  };

  const MudarLinhaPorPagina = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setLinhasPorPagina(+evento.target.value);
    setPagina(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="myColor">Contained</Button>
        <Button disabled variant="outlined">Outlined</Button>

        <Button variant="contained">
          Success
        </Button>

        <Divider orientation="horizontal" flexItem />

        <FormGroup className={styles.container}>
          <FormLabel>Ligado/Desligado</FormLabel>
          <Switch onChange={() => setEstado(!estado)}></Switch>
          <Typography>{estado == true ? "Ativado" : "Desativado"}</Typography>
        </FormGroup>

        <Divider orientation="horizontal" flexItem />

        <FormControl className={styles.container}>
          <FormLabel>Gosta de Pokemon?</FormLabel>
          <RadioGroup
            name="radio-buttons-group"
          >
            <FormControlLabel value="" name="claro" control={<Radio />} label="Claro" />
            <FormControlLabel value="true" name="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" name="nao" control={<Radio disabled />} label="Não" />
          </RadioGroup>
        </FormControl>

        <FormLabel>Nota do hotel</FormLabel>
        <Rating name="half-rating" defaultValue={0} precision={1} />

        <FormLabel>Nota do uber</FormLabel>
        <Rating name="rating" defaultValue={0} precision={0.5} />

        <PedalBikeIcon />

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {colunas.map((coluna) => (
                    <TableCell
                      key={coluna.id}
                      align={coluna.align}
                      style={{ minWidth: coluna.minWidth }}
                    >
                      {coluna.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {linhas
                  .slice(pagina * linhasPorPagina, pagina * linhasPorPagina + linhasPorPagina)
                  .map((linha) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={linha.nome}>
                        {colunas.map((coluna) => {
                          const value = linha[coluna.id];
                          return (
                            <TableCell key={coluna.id} align={coluna.align}>
                              {coluna.format && typeof value === 'number'
                                ? coluna.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[1, 5, 10, 15, 20]}
            component="div"
            count={linhas.length}
            rowsPerPage={linhasPorPagina}
            page={pagina}
            onPageChange={MudarPagina}
            onRowsPerPageChange={MudarLinhaPorPagina}
          />
        </Paper>

      </main>
    </ThemeProvider>
  );
}
