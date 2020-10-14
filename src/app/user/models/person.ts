export interface IResponse {
	data: IPerson;
	status: number;
}

export interface IPerson {
	name: IPersonName;
	gender: string;
	profession: string;
	knowFor: string;
}

export interface IPersonName {
	first: string;
	last: string;
}
