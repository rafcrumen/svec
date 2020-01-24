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
namespace rest.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class registroController : ApiController
    {
        [System.Web.Http.HttpGet]
        public IHttpActionResult get()
        {
            IHttpActionResult _result = null;
            _result = Ok("Hola");
            return _result;
        }
        [System.Web.Http.HttpGet]
        public IHttpActionResult getByUserName(string username)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            try
            {
                DatosContext ctx = new DatosContext();
                SqlParameter pusername = new SqlParameter("@username", username);
                _result =  Ok(ctx.Database.SqlQuery<object>("usuariogetbyusername @username", pusername).ToList());
            }
            catch (Exception ex)
            {
            }
            return _result;
        }

        [System.Web.Http.HttpPost]
        public IHttpActionResult Post([FromBody] User datos)
        {
            IHttpActionResult _result = null;
            User _userResult = new User();
            try
            {
                using (DatosContext ctx = new DatosContext())
                {
                    _userResult = ctx.Users.Add(datos);
                    ctx.SaveChanges();
                    _result = Ok(_userResult);
                }
            }
            catch (Exception ex)
            {
            }
            return _result;
        }
    }
}
