export class DBResult //extends NodeResult 
{
  command: string;
  rowCount: number;
  oid: any;
  rows: any[];
  fields: FieldPostGrest[];
  _parsers: any[];
  RowCtor: any;
  rowAsArray: Boolean;
  sqlServerrs: any[];
  recordset: any[];
  output: any;
  rowsAffected: number[];
}
export class FieldPostGrest{
    name: string;
    tableID: number;
    columnID: number;
    dataTypeID: number;
    dataTypeSize: number;
    dataTypeModifier: number;
    format: string;
  }

export class NodeResult {
    recordsets: any[];
    recordset: any[];
    output: any;
    rowsAffected: number[];
}