namespace rest.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserToken : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Detalle",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        idmodelo = c.Int(nullable: false),
                        idfather = c.Int(nullable: false),
                        corta = c.String(),
                        larga = c.String(),
                        piso = c.Byte(nullable: false),
                        posicion = c.Byte(nullable: false),
                        location = c.Byte(nullable: false),
                        largo = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ancho = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ventanas = c.Byte(nullable: false),
                        crud = c.Byte(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Foto",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        iddetalle = c.Int(nullable: false),
                        idfather = c.Int(nullable: false),
                        foto = c.String(),
                        nivel = c.Byte(nullable: false),
                        posicion = c.Byte(nullable: false),
                        location = c.Byte(nullable: false),
                        crud = c.Byte(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Modelo",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        iduser = c.Int(nullable: false),
                        clave = c.String(),
                        corta = c.String(),
                        larga = c.String(),
                        posicion = c.String(),
                        vecindario = c.String(),
                        precio = c.Decimal(nullable: false, precision: 18, scale: 2),
                        recamaras = c.Byte(nullable: false),
                        banos = c.Byte(nullable: false),
                        medios = c.Byte(nullable: false),
                        lavado = c.Boolean(nullable: false),
                        cservicio = c.Boolean(nullable: false),
                        horas = c.String(),
                        dias = c.String(),
                        construido = c.Int(nullable: false),
                        metros = c.Decimal(nullable: false, precision: 18, scale: 2),
                        terreno = c.Decimal(nullable: false, precision: 18, scale: 2),
                        pisos = c.Byte(nullable: false),
                        crud = c.Byte(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        username = c.String(),
                        nombre = c.String(),
                        email = c.String(),
                        email1 = c.String(),
                        telefono = c.String(),
                        password = c.String(),
                        activo = c.Boolean(nullable: false),
                        subdominiov = c.String(),
                        subdominioa = c.String(),
                        Crud = c.Byte(nullable: false),
                        Token = c.String(),
                        IpAddress = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.User");
            DropTable("dbo.Modelo");
            DropTable("dbo.Foto");
            DropTable("dbo.Detalle");
        }
    }
}
