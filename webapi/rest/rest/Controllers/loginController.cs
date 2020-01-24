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
