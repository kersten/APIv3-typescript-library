"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmsCampaignOverview {
    static getAttributeTypeMap() {
        return GetSmsCampaignOverview.attributeTypeMap;
    }
}
GetSmsCampaignOverview.discriminator = undefined;
GetSmsCampaignOverview.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetSmsCampaignOverview.StatusEnum"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    }
];
exports.GetSmsCampaignOverview = GetSmsCampaignOverview;
(function (GetSmsCampaignOverview) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'inProcess'] = "InProcess";
    })(StatusEnum = GetSmsCampaignOverview.StatusEnum || (GetSmsCampaignOverview.StatusEnum = {}));
})(GetSmsCampaignOverview = exports.GetSmsCampaignOverview || (exports.GetSmsCampaignOverview = {}));
//# sourceMappingURL=getSmsCampaignOverview.js.map