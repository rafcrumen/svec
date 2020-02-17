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
    public class loginController : ApiController
    {
        [System.Web.Http.HttpPost]
        public IHttpActionResult Post([FromBody] User datos)
        {
            IHttpActionResult _result = null;
            User _userResult = new User();
            try
            {
                using (DatosContext ctx = new DatosContext())
                {
                    _userResult = ctx.Users.Where(u => u.username == datos.username).FirstOrDefault();
                    _userResult.Token = Guid.NewGuid().ToString();
                    ctx.SaveChanges();
                    _result = Ok(_userResult);
                }
            }
            catch (Exception ex)
            {
            }
            return _result;
        }
        [System.Web.Http.HttpGet]
        public IHttpActionResult get(Guid token, int userid)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            try
            {
                DatosContext ctx = new DatosContext();
                _result = Ok(ctx.Users.Where(u => u.id == userid && u.Token == token.ToString()).FirstOrDefault());
            }
            catch (Exception ex)
            {
            }
            return _result;
        }

    }
}
