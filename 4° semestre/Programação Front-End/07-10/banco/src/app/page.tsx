"use client"
import { Button, TextField } from "@mui/material";
import styles from "./page.module.css"

export default function Home() {
  return (
    <section className={styles.container}>

      <div className={styles.formContainer}>

        <h1 className={styles.titulo}>
          Crie sua conta
        </h1>

        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "12px",
              color: "#fff",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#EAF1F7",
            },
            "& input": {
              color: "#fff",
            },
          }}
        />

        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "12px",
              color: "#fff",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#EAF1F7",
            },
            "& input": {
              color: "#fff",
            },
          }}
        />

        <TextField
          id="rg"
          label="RG"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "12px",
              color: "#fff",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#EAF1F7",
            },
            "& input": {
              color: "#fff",
            },
          }}
        />

        <TextField
          id="senha"
          label="Senha"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "12px",
              color: "#fff",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#EAF1F7",
            },
            "& input": {
              color: "#fff",
            },
          }}
        />

        <div className={styles.botaoContainer}>

          <Button
            variant="contained"
            sx={{
              width: "30%",
              backgroundColor: "#1E3A5F",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px 24px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#16314f",
              },
            }}
          >
            Salvar
          </Button>

          <Button
            variant="outlined"
            sx={{
              width: "30%",
              borderColor: "#fff",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px 24px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#DDEAF8",
                backgroundColor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            Cancelar
          </Button>

        </div>


      </div>


    </section>
  );
}
