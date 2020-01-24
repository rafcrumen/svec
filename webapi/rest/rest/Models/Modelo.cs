using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Modelo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int iduser { get; set; }
        public string clave { get; set; }
        public string corta { get; set; }
        public string larga { get; set; }
        public string posicion { get; set; }
        public string vecindario { get; set; }
        public decimal precio { get; set; }
        public byte recamaras { get; set; }
        public byte banos { get; set; }
        public byte medios { get; set; }
        public bool lavado { get; set; }
        public bool cservicio { get; set; }
        public string horas { get; set; }
        public string dias { get; set; }
        public int construido { get; set; }
        public decimal metros { get; set; }
        public decimal terreno { get; set; }
        public byte pisos { get; set; }
        public byte crud { get; set; }
        //public owner: UserModel;
    }
}