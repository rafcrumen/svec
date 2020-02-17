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
    public class FotoController : Implement.ValidUser
    {
        [System.Web.Http.HttpGet]
        public IHttpActionResult get(string token, int userid, int id)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            if (validate(token, userid))
            {
                try
                {
                    DatosContext ctx = new DatosContext();

                    var foto = from f in ctx.Fotos
                               where f.id == id
                               select f;
                    _result = Ok(foto.FirstOrDefault());
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }
    }
}