import { IPatient } from "./ipatient";

export interface IHospitalArea {
    id: number;
    priority_patients: IPatient[];
    area: string;
}
