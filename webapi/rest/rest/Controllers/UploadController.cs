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
    //[Route("upload")]
    public class UploadController : Implement.ValidUser
    {
        [System.Web.Http.HttpPost]
        public string Post()
        {
            //IHttpActionResult _result = null;
            string _result = string.Empty;
            Foto _dataResult = new Foto();
            var req = Request;
            var headers = req.Headers;
            int userid  = int.Parse(headers.GetValues("userid").FirstOrDefault());
            int iddetalle = int.Parse(headers.GetValues("iddetalle").FirstOrDefault());
            if (validate(headers.GetValues("token").FirstOrDefault(), userid))
            {
                try
                {
                    var httpRequest = System.Web.HttpContext.Current.Request;
                    if (httpRequest.Files.Count > 0)
                    {
                        var docfiles = new List<string>();
                        foreach (string file in httpRequest.Files)
                        {
                            var postedFile = httpRequest.Files[file];

                            var filePath = System.Web.HttpContext.Current.Server.MapPath($"~/Uploads/{userid}/{iddetalle}");
                            if (!System.IO.Directory.Exists(filePath))
                            {
                                System.IO.Directory.CreateDirectory(filePath);
                            }
                            postedFile.SaveAs(System.IO.Path.Combine(filePath, postedFile.FileName));
                            docfiles.Add(System.IO.Path.Combine(filePath, postedFile.FileName));
                            using (DatosContext ctx = new DatosContext())
                            {
                                _dataResult = new Foto();
                                _dataResult.iddetalle = iddetalle;
                                _dataResult.foto = headers.GetValues("filename").FirstOrDefault();
                                _dataResult = ctx.Fotos.Add(_dataResult);
                                ctx.SaveChanges();
                                _result = Ok(_dataResult).ToString();
                            }
                        }
                        _result = Ok(Request.CreateResponse(HttpStatusCode.Created, docfiles)).ToString();
                    }
                    else
                    {
                        _result = Ok(Request.CreateResponse(HttpStatusCode.BadRequest)).ToString();
                    }
                }
                catch (Exception ex)
                {
                    tracklogging(userid.ToString(), ex.Message);
                    _result = Ok(Request.CreateResponse(ex.Message)).ToString();
                }

            }
            return _result;
        }

}
}
