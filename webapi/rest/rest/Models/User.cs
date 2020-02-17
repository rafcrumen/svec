using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string username { get; set; }
        public string nombre { get; set; }
        public string email { get; set; }
        public string email1 { get; set; }
        public string telefono { get; set; }
        public string password { get; set; }
        public bool activo { get; set; }
        public string subdominiov { get; set; }
        public string subdominioa { get; set; }
        public byte Crud { get; set; }
        public string Token { get; set; }
        public string IpAddress { get; set; }
        public string hostName { get; set; }
    }
}