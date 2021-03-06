import { GetExtendedCampaignOverviewAllOfSender } from './getExtendedCampaignOverviewAllOfSender';
export declare class GetExtendedCampaignOverviewAllOf {
    'testSent': boolean;
    'header': string;
    'footer': string;
    'sender': GetExtendedCampaignOverviewAllOfSender;
    'replyTo': string;
    'toField': string;
    'htmlContent': string;
    'shareLink'?: string;
    'tag': string;
    'createdAt': Date;
    'modifiedAt': Date;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'recurring'?: boolean;
    'sentDate'?: Date;
    'returnBounce'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
