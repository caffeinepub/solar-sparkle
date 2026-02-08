import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ConsultancyForm {
    id: bigint;
    status: string;
    name: string;
    requirementMessage: string;
    email: string;
    timestamp: Time;
    phoneNumber: string;
    location: string;
}
export type Time = bigint;
export interface PartnerRegistration {
    id: bigint;
    status: string;
    name: string;
    email: string;
    businessDetails: string;
    timestamp: Time;
    companyName: string;
    phoneNumber: string;
    location: string;
}
export interface backendInterface {
    getAllConsultancyForms(): Promise<Array<ConsultancyForm>>;
    getAllOfferings(): Promise<Array<string>>;
    getAllPartnerRegistrations(): Promise<Array<PartnerRegistration>>;
    getAllSolutions(): Promise<Array<string>>;
    getConsultancyFormById(id: bigint): Promise<ConsultancyForm>;
    getPartnerRegistrationById(id: bigint): Promise<PartnerRegistration>;
    submitConsultancyForm(name: string, phoneNumber: string, email: string, location: string, requirementMessage: string): Promise<bigint>;
    submitPartnerRegistration(name: string, companyName: string, phoneNumber: string, email: string, location: string, businessDetails: string): Promise<bigint>;
    updateConsultancyStatus(id: bigint, status: string): Promise<void>;
    updatePartnerStatus(id: bigint, status: string): Promise<void>;
}
