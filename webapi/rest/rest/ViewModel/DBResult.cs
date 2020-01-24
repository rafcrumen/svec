using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace rest.ViewModel
{
    public class DBResult
    {
      string command { get; set; }
  int rowCount { get; set; }
  object any { get; set; }
        object rows { get; set; }
  //      fields: FieldPostGrest[];
  //_parsers: any[];
  //RowCtor: any;
  //rowAsArray: Boolean;
  //sqlServerrs: any[];
  //recordset: any[];
  //output: any;
  //rowsAffected: number[];
    }
}