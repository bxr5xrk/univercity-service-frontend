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
