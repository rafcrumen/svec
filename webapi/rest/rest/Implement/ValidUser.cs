using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace rest.Implement
{
    public class ValidUser : ApiController,  Infrastructure.ValidUser, Infrastructure.AccountValidator
    {
        public void tracklogging(string userid, string message)
        {
            try
            {
                using (DatosContext ctx = new DatosContext())
                {

                    Models.Logtrack _log = new Models.Logtrack();
                    _log.Message = message;
                    _log.Moment = DateTime.Now;
                    ctx.Logtracks.Add(_log);
                    ctx.SaveChanges();
                }
            }
            catch (Exception ex)
            {
            }
        }

        public bool validate(string token, int userid)
        {
            bool result=false;
            try
            {
                using (DatosContext ctx = new DatosContext())
                {
                    var _userResult = ctx.Users.Where(u => u.id == userid && u.Token == token).FirstOrDefault();
                    result = _userResult != null;
                }
            }
            catch (Exception ex)
            {
            }
            return result;
        }

        public int validateHost(Uri host)
        {
            int _idUser=-1;
            try
            {
                using (DatosContext ctx = new DatosContext())
                {
                    var _userResult = ctx.Users.Where(u => u.hostName == host.AbsoluteUri).FirstOrDefault();
                    if (_userResult != null)
                    {
                        _idUser = _userResult.id;
                    };
                }
            }
            catch (Exception ex)
            {
            }
            return _idUser;
        }
    }
}