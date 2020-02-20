using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Http.Cors;
using System.Data.SqlClient;
using Models;
using rest.ViewModel;

namespace rest.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class FotolistaController : Implement.ValidUser
    {
        [System.Web.Http.HttpGet]
        [Route("fotolista")]
        public IHttpActionResult getByIdDetalle(string token, int userid, int id)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            if (validate(token, userid))
            {
                try
                {
                    DatosContext ctx = new DatosContext();

                    var foto = from f in ctx.Fotos
                               where f.iddetalle == id
                               orderby f.nivel,  f.posicion, f.location
                               select f;
                    _result = Ok(foto);
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }
        [System.Web.Http.HttpPut]
        [Route("fotolista")]
        public IHttpActionResult put([FromBody] Foto datos, string token, int userid)
        {
            IHttpActionResult _result = null;
            Foto foto;
            _result = Ok();
            if (validate(token, userid))
            {
                using (DatosContext ctx = new DatosContext())
                {
                    foto = ctx.Fotos.Where(f => f.id == datos.id).FirstOrDefault();
                    if (foto != null)
                    {
                        foto.posicion = datos.posicion;
                        _result = Ok(ctx.SaveChanges());
                    }
                }
            }
            return _result;
        }
        [System.Web.Http.HttpDelete]
        [Route("fotolista")]
        public IHttpActionResult del(Guid token, int userid, int pidFoto, int pidDetalle, string pfoto)
        {
            IHttpActionResult _result = null;
            Foto foto;
            _result = Ok();
            if (validate(token.ToString(), userid))
            {
                using (DatosContext ctx = new DatosContext())
                {
                    foto = ctx.Fotos.Where(f => f.id == pidFoto).FirstOrDefault();
                    if (foto != null)
                    {
                        var filePath = System.Web.HttpContext.Current.Server.MapPath($"~/Uploads/{userid}/{pidDetalle}");
                        if (System.IO.File.Exists(System.IO.Path.Combine(filePath, pfoto)))
                        {
                            System.IO.File.Delete(System.IO.Path.Combine(filePath, pfoto));
                        }
                        ctx.Fotos.Remove(foto);
                        _result = Ok(ctx.SaveChanges());
                    }
                }
            }
            return _result;
        }
    }
}