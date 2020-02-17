using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rest.Infrastructure
{
    interface ValidUser
    {
        bool validate(string token, int userid);
        void tracklogging(string userid, string message);
    }
}
