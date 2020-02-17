using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace rest.Infrastructure
{
    interface AccountValidator
    {        
        int validateHost(Uri host);
    }
}