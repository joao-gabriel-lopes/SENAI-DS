"use client"
import { Button, TextField } from "@mui/material";
import styles from "../.././page.module.css"
import { InserirUsuario, VerificarUsuario } from "@/api";
import { useState } from "react";
import IVerificarUsuario from "@/Contracts/IVerificarUsuario";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [estadoLogin, setEstadoLogin] = useState<boolean | null>(null)
  const [usuario, setUsuario] = useState<IVerificarUsuario>({
    cpf: "",
    senha: "",
  });

  async function RealizarLogin() {
    setEstadoLogin(await VerificarUsuario(usuario))
  }

  function CampoEstado() {
    if (estadoLogin == true) {
      return (
        <p style={{color: "#40cf5a", fontSize: "1.4rem"}}>
          Sucesso ao realizar login
        </p>
      )
    } else if (estadoLogin != null) {
      return (
        <p style={{color: "#dd0a0a", fontSize: "1.4rem"}}>
          Erro ao realizar login
        </p>
      )
    } else {
      return (
        <></>
      )
    }
  }

  return (
    <section className={styles.container}>

      <div className={styles.formContainer}>

        <h1 className={styles.titulo}>
          Faça login em sua conta
        </h1>

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
            "&:hover label": {
              color: "white"
            },
            "& input": {
              color: "#fff",
            },
          }}
          onChange={(e) => setUsuario({ ...usuario, cpf: e.target.value })}
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
            "&:hover label": {
              color: "white"
            },
            "& input": {
              color: "#fff",
            },
          }}

          onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
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
            onClick={() => RealizarLogin()}
          >
            Enviar
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
            onClick={() => router.push("/")}
          >
            Cadastro
          </Button>

        </div>

        {CampoEstado()}

      </div>


    </section>
  );
}
