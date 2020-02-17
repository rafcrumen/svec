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
    public class SubdominioController : ApiController
    {
        [System.Web.Http.HttpPost]
        public IHttpActionResult Post([FromBody] Subdominio datos, Guid token, int userid)
        {
            IHttpActionResult _result = null;
            User _userResult = new User();
            try
            {
                using (DatosContext ctx = new DatosContext())
                {
                    _userResult = ctx.Users.Where(u => u.id == userid && u.Token == token.ToString()).FirstOrDefault();
                    _userResult.subdominioa = datos.subdominioa;
                    _userResult.subdominiov = datos.subdominiov;
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
        //[Route("subdominio")]
        public IHttpActionResult get(Guid token, int userid)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            try
            {
                DatosContext ctx = new DatosContext();
                //SqlParameter pusername = new SqlParameter("@username", username);
                //_result = Ok(ctx.Database.SqlQuery<object>("usuariogetbyusername @username", pusername).ToList());

                var subdominio = from u in ctx.Users
                                 where u.id == userid && u.Token == token.ToString()
                                 select new { u.id, u.subdominiov, u.subdominioa };
                _result = Ok(subdominio.FirstOrDefault());
            }
            catch (Exception ex)
            {
            }
            return _result;
        }

    }
}
