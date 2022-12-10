export interface IInspection {
    inspectionId: number;
    inspectionLocation: string;
    inspectionDate: string;
    damages: Array<{
        damageType: string;
        damageLocation: string;
        damageNew: string;
        damageDate: string;
        damageActionRequired: string;
        damageDescription: string;
    }>
    deferrences: Array<{
        deferrenceType: string;
        deferrenceLocation: string;
        deferrenceActionRequired: string;
        deferrenceCostIndication: string;
    }>
    installations: Array<{
        installationType: string;
        installationLocation: string;
        installationReports: string;
        installationTestingProcedure: string;
        installationApproved: string;
        installationRemark: string;
    }>
    modifications: Array<{
        modificationDescription: string;
        modificationLocation: string;
        modificationDocumentation: string;
        modificationBy: string;
        modificationActionRequired: string;
        modificationRemark: string;
    }>
}