using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Foto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int iddetalle { get; set; }
        public int idfather { get; set; }
        public string foto { get; set; }
        public byte nivel { get; set; }
        public byte posicion { get; set; }
        public byte location { get; set; }
        public byte crud { get; set; }
    }
}