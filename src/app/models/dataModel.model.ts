export class Inspection {
  inspectionId: number;
  inspectionLocation: string;
  inspectionDate: string;
  inspectionCompleted: boolean;
  damages: Array<{
    damageType: string;
    damageLocation: string;
    damageNew: boolean;
    damageDate: string;
    damageActionRequired: boolean;
    damageDescription: string;
    damagePhoto: string;
  }>
  deferrences: Array<{
    deferrenceType: string;
    deferrenceLocation: string;
    deferrenceActionRequired: boolean;
    deferrenceCostIndication: number;
    deferrencePhoto: string;
  }>
  installations: Array<{
    installationType: string;
    installationLocation: string;
    installationReports: string;
    installationTestingProcedure: string;
    installationApproved: boolean;
    installationRemark: string;
    installationPhoto: string;
  }>
  modifications: Array<{
    modificationDescription: string;
    modificationLocation: string;
    modificationDocumentation: string;
    modificationBy: string;
    modificationActionRequired: boolean;
    modificationRemark: string;
    modificationPhoto: string;
  }>

  constructor(
    inspectionId: number,
    inspectionLocation: string,
    inspectionDate: string,
    inspectionCompleted: boolean,
    damages: Array<{
      damageType: string;
      damageLocation: string;
      damageNew: boolean;
      damageDate: string;
      damageActionRequired: boolean;
      damageDescription: string;
      damagePhoto: string;
    }>,
    deferrences: Array<{
      deferrenceType: string;
      deferrenceLocation: string;
      deferrenceActionRequired: boolean;
      deferrenceCostIndication: number;
      deferrencePhoto: string;
    }>,
    installations: Array<{
      installationType: string;
      installationLocation: string;
      installationReports: string;
      installationTestingProcedure: string;
      installationApproved: boolean;
      installationRemark: string;
      installationPhoto: string;
    }>,
    modifications: Array<{
      modificationDescription: string;
      modificationLocation: string;
      modificationDocumentation: string;
      modificationBy: string;
      modificationActionRequired: boolean;
      modificationRemark: string;
      modificationPhoto: string;
    }>
  ) {
    this.inspectionId = inspectionId;
    this.inspectionLocation = inspectionLocation;
    this.inspectionDate = inspectionDate;
    this.inspectionCompleted = inspectionCompleted;
    this.damages = damages;
    this.deferrences = deferrences;
    this.installations = installations;
    this.modifications = modifications;
  }
}