import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
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
export interface AmcEnquiry {
    id: bigint;
    status: string;
    clientName: string;
    email: string;
    systemDetails: string;
    timestamp: Time;
    phoneNumber: string;
    location: string;
}
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
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    adminGetAllAmcEnquiries(): Promise<Array<AmcEnquiry>>;
    adminGetAllConsultancyForms(): Promise<Array<ConsultancyForm>>;
    adminGetAllPartnerRegistrations(): Promise<Array<PartnerRegistration>>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllOfferings(): Promise<Array<string>>;
    getAllSolutions(): Promise<Array<string>>;
    getAmcEnquiryById(id: bigint): Promise<AmcEnquiry>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getConsultancyFormById(id: bigint): Promise<ConsultancyForm>;
    getPartnerRegistrationById(id: bigint): Promise<PartnerRegistration>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitAmcEnquiry(clientName: string, phoneNumber: string, email: string, location: string, systemDetails: string): Promise<bigint>;
    submitConsultancyForm(name: string, phoneNumber: string, email: string, location: string, requirementMessage: string): Promise<bigint>;
    submitPartnerRegistration(name: string, companyName: string, phoneNumber: string, email: string, location: string, businessDetails: string): Promise<bigint>;
    updateAmcEnquiryStatus(id: bigint, status: string): Promise<void>;
    updateConsultancyStatus(id: bigint, status: string): Promise<void>;
    updatePartnerStatus(id: bigint, status: string): Promise<void>;
}
