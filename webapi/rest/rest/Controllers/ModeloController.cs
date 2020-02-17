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
    public class ModeloController : Implement.ValidUser
    {
        [System.Web.Http.HttpGet]
        //[Route("modelo/getByIdUser/{userId}")]
        [Route("modelo")]
        public IHttpActionResult getByIdModelo(string token, int userid, int id)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            if (validate(token, userid))
            {
                try
                {
                    DatosContext ctx = new DatosContext();
                    var _userResult = ctx.Modelos.Where(m => m.id == id).FirstOrDefault();
                    _result = Ok(_userResult);
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }
        [System.Web.Http.HttpGet]
        //[Route("modelo/getByIdUser/{userId}")]
        [Route("modelo")]
        public IHttpActionResult getByIdUser(string token, int userid)
        {
            IHttpActionResult _result = null;
            _result = Ok();
            if (validate(token, userid))
            {
                try
                {
                    DatosContext ctx = new DatosContext();
                    var _userResult = ctx.Modelos.Where(m => m.iduser== userid).ToList();
                    _result = Ok(_userResult);
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }
        [System.Web.Http.HttpPost]
        [Route("modelo")]
        public IHttpActionResult Post([FromBody] Modelo datos, Guid token, int userid)
        {
            IHttpActionResult _result = null;
            Modelo _dataResult = new Modelo();
            if (validate(token.ToString(), userid))
            {
                try
                {
                    using (DatosContext ctx = new DatosContext())
                    {
                        _dataResult = ctx.Modelos.Add(datos);
                        ctx.SaveChanges();
                        _result = Ok(_dataResult);
                    }
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }

        [System.Web.Http.HttpPut]
        public IHttpActionResult Put([FromBody] Modelo datos, Guid token, int userid)
        {
            IHttpActionResult _result = null;
            Modelo _dataResult = new Modelo();
            if (validate(token.ToString(), userid))
            {
                try
                {
                    using (DatosContext ctx = new DatosContext())
                    {
                        _dataResult = ctx.Modelos.Where(m => m.id == datos.id).FirstOrDefault();
                        if (_dataResult != null)
                        {
                            _dataResult.banos = datos.banos;
                            _dataResult.construido = datos.construido;
                            _dataResult.corta = datos.corta;
                            _dataResult.cservicio = datos.cservicio;
                            _dataResult.dias = datos.dias;
                            _dataResult.horas = datos.horas;
                            _dataResult.larga = datos.larga;
                            _dataResult.lavado = datos.lavado;
                            _dataResult.medios = datos.medios;
                            _dataResult.metros= datos.metros;
                            _dataResult.pisos = datos.pisos;
                            _dataResult.posicion = datos.posicion;
                            _dataResult.precio = datos.precio;
                            _dataResult.recamaras = datos.recamaras;
                            _dataResult.terreno = datos.terreno;
                            _dataResult.vecindario = datos.vecindario;
                            ctx.SaveChanges();
                            _result = Ok(_dataResult);
                        }
                    }
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }
    }
}
