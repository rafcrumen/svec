using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Detalle
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int idmodelo { get; set; }
        public int idfather { get; set; }
        public string corta { get; set; }
        public string larga { get; set; }
        public byte piso { get; set; }
        public byte posicion { get; set; }
        public byte location { get; set; }
        public decimal largo { get; set; }
        public decimal ancho { get; set; }
        public byte ventanas { get; set; }
        public byte crud { get; set; 
        }
    }
}