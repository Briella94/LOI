export class Inspection {
  inspectionId: number;
  inspectionLocation: string;
  inspectionDate: string;
  inspectionCompleted: boolean;
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

  constructor(
    inspectionId: number,
    inspectionLocation: string,
    inspectionDate: string,
    inspectionCompleted: boolean,
    damages: Array<{
      damageType: string;
      damageLocation: string;
      damageNew: string;
      damageDate: string;
      damageActionRequired: string;
      damageDescription: string;
    }>,
    deferrences: Array<{
      deferrenceType: string;
      deferrenceLocation: string;
      deferrenceActionRequired: string;
      deferrenceCostIndication: string;
    }>,
    installations: Array<{
      installationType: string;
      installationLocation: string;
      installationReports: string;
      installationTestingProcedure: string;
      installationApproved: string;
      installationRemark: string;
    }>,
    modifications: Array<{
      modificationDescription: string;
      modificationLocation: string;
      modificationDocumentation: string;
      modificationBy: string;
      modificationActionRequired: string;
      modificationRemark: string;
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