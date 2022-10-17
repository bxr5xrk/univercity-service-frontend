export interface ILecturer {
    fullName: string;
    id: number;
}

export interface IGroup {
    title: string;
    id: number;
}

export interface IStudent {
    fullName: string;
    id: number;
}

export interface ISubject {
    title: string;
    id: number;
}

export interface IGetAll {
    groups: IGroup[];
    lecturers: ILecturer[];
    students: IStudent[];
    subjects: ISubject[];
}

export interface IGroup {
    id: number;
    title: string;
}

export interface IStudent {
    id: number;
    fullName: string;
}

export interface ISubject {
    id: number;
    title: string;
}

export interface ILecturer {
    id: number;
    fullName: string;
}

export type dataType = "group" | "lecturer" | "student" | "subject";
