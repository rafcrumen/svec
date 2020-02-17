using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace rest.ViewModel
{
    public class Fotodetalle
    {
        public List<Detalle> detalle { get; set; }
        public List<Foto> fotos { get; set; }
    }
}