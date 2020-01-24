import { UserModel } from './user.model';

export class ModeloModel {
    public  id: number;
    public iduser: number;
    public clave: string;
    public corta: string;
    public larga: string;
    public posicion: string;
    public vecindario: string;
    public precio: number;
    public recamaras: number;
    public banos: number;
    public medios: number;
    public lavado: boolean;
    public cservicio: boolean;
    public horas: string;
    public dias: string;
    public construido: number;
    public metros: number;
    public terreno: number;
    public pisos: number; 
    public crud?: number;        
    public owner: UserModel;
} 