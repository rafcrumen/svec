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
    public class ViewController : Implement.ValidUser
    {
        [System.Web.Http.HttpGet]
        [Route("View")]
        public IHttpActionResult get()
        {
            IHttpActionResult _result = null;
            ViewModel.ViewModelo _modelo;
            List<ViewModel.ViewModelo> _modelos = new List<ViewModel.ViewModelo>();

            _result = Ok();
            int _userId = validateHost(System.Web.HttpContext.Current.Request.UrlReferrer);
            if (_userId > 0 )
            {
                try
                {
                    using (DatosContext ctx = new DatosContext())
                    {
                        var _userResult = ctx.Modelos .Where(m => m.iduser == _userId).ToList();
                        foreach (Modelo m in _userResult)
                        {
                            _modelo = new ViewModel.ViewModelo();
                            _modelo.id = m.id;
                            _modelo.idmodelo = m.id;
                            _modelo.iduser= m.iduser;
                            _modelo.clave = m.clave;
                            _modelo.corta = m.corta;
                            _modelo.larga = m.larga;
                            _modelo.posicion = m.posicion;
                            _modelo.vecindario= m.vecindario;
                            _modelo.precio = m.precio;
                            _modelo.recamaras = m.recamaras;
                            _modelo.banos = m.banos;
                            _modelo.medios= m.medios;
                            _modelo.lavado= m.lavado;
                            _modelo.cservicio = m.cservicio;
                            _modelo.construido = m.construido;
                            _modelo.horas= m.horas;
                            _modelo.dias = m.dias;
                            _modelo.metros = m.metros;
                            _modelo.terreno = m.terreno;
                            _modelo.pisos = m.pisos;
                            var _detalle = ctx.Detalles.Where(d => m.id == d.idmodelo).
                                    OrderBy(d => d.id).ThenBy(d => d.piso).ThenBy(d => d.posicion).
                                    FirstOrDefault();
                            if (_detalle != null)
                            {
                                _modelo.iddetalle = _detalle.id;

                                var _foto = ctx.Fotos.Where(f => _detalle.id == f.iddetalle).
                                        OrderBy(f => f.nivel).ThenBy(f => f.posicion).ThenBy(f => f.location).
                                        FirstOrDefault();
                                if (_foto != null)
                                {
                                    _modelo.foto = _foto.foto;
                                }
                            }
                            _modelos.Add(_modelo);
                        }
                        //var x = from m in ctx.Modelos
                        //        from d in ctx.Detalles.Where(d => d.idmodelo == m.id).DefaultIfEmpty()
                        //        from f in ctx.Fotos.Where(f => f.iddetalle == d.id).OrderBy(f=>f.id).ThenBy(f=>f.posicion).DefaultIfEmpty()
                        //        select new
                        //        {
                        //            iduser = _userId,
                        //            clave = m.clave,
                        //            corta = m.corta,
                        //            larga = m.larga,
                        //            iddetalle = f.iddetalle,
                        //            foto = f.foto
                        //        };

                        _result = Ok(_modelos);
                    }                
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }
        [System.Web.Http.HttpGet]
        [Route("View")]

        public IHttpActionResult getByMOdel(int idmodelo)
        {
            IHttpActionResult _result = null;
            ViewModel.Fotodetalle _fotoDetalle = new ViewModel.Fotodetalle();
            List<Foto> _fotos = new List<Foto>();
            List<Detalle> _detalles = new List<Detalle>();

            _result = Ok();
            int _userId = validateHost(System.Web.HttpContext.Current.Request.UrlReferrer);
            if (_userId > 0)
            {
                try
                {
                    DatosContext ctx = new DatosContext();
                    var _modeloResult = ctx.Modelos.Where(m => m.iduser == _userId && m.id == idmodelo).FirstOrDefault();
                    if (_modeloResult  != null)
                    {
                        _detalles = ctx.Detalles.Where(d => _modeloResult.id == d.idmodelo).
                                OrderBy(d => d.piso).ThenBy(d => d.posicion).ThenBy(d => d.location).
                                ToList();
                        if (_detalles != null)
                        {
                            _fotoDetalle.detalle = _detalles;
                            _fotoDetalle.fotos = new List<Foto>();
                            foreach (Detalle detail in _detalles)
                            {
                                var _fotosResul = ctx.Fotos.Where(f => detail.id == f.iddetalle).
                                        OrderBy(f => f.nivel).ThenBy(f => f.posicion).ThenBy(f => f.location).
                                        ToList();
                                if (_fotosResul != null)
                                {
                                    _fotoDetalle.fotos.AddRange(_fotosResul);
                                }
                            }
                        }
                    }
                    _result = Ok(_fotoDetalle);
                }
                catch (Exception ex)
                {
                }
            }
            return _result;
        }
    }
}
