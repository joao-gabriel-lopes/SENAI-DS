using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BarbeariaRazor.Models;

public class Agendamento
{
    [Key] public Guid Id { get; set; }
    public DateTime Horario { get; set; }
    public bool Confirmado { get; set; }
    public Guid ClienteId { get; set; }
    public Cliente? Cliente { get; set; }
    
    public Agendamento(DateTime horario, bool confirmado, Guid clienteId)
    {
        Horario = horario;
        Confirmado = confirmado;
        ClienteId = clienteId;
    }

    public Agendamento()
    {
        
    }
}
