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
    public class DetalleController : ApiController
    {
        [System.Web.Http.HttpGet]
        [Route("detalle/modelo/{id}")]

        public IHttpActionResult getByIdModel(int id)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            try
            {
                DatosContext ctx = new DatosContext();
                var _userResult = ctx.Detalles.Where(d => d.idmodelo == id).ToList();
                _result = Ok(_userResult);
            }
            catch (Exception ex)
            {
            }
            return _result;
        }

        [System.Web.Http.HttpGet]
        [Route("detalle/{id}")]
        public IHttpActionResult getById(int id)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            try
            {
                DatosContext ctx = new DatosContext();
                var _userResult = ctx.Detalles.Where(d => d.id == id).FirstOrDefault();
                _result = Ok(_userResult);
            }
            catch (Exception ex)
            {
            }
            return _result;
        }
        [System.Web.Http.HttpPost]
        public IHttpActionResult Post([FromBody] Detalle datos)
        {
            IHttpActionResult _result = null;
            try
            {
                using (DatosContext ctx = new DatosContext())
                {
                    var _dataResult = ctx.Detalles.Add(datos);
                    ctx.SaveChanges();
                    _result = Ok(_dataResult);
                }
            }
            catch (Exception ex)
            {
            }
            return _result;
        }
    }
}
