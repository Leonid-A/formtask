import {PageType} from "../Types/TabsTypes";

const Lead:PageType={
    "classId": "Lead",
    "tabs": [
      {
        "path": "details",
        "title": "Summary",
        "icon": "rc_summary",
        "component": "DetailsView",
        "properties": {
          "sections": [
            {
              "title": "Loan",
              "editable": true,
              "selectedFields": [
                {
                  "label": "Lead source",
                  "read": false,
                  "write": true,
                  "name": "leadSource",
                  "component": "PointerField",
                  "placeholder": "Select lead source"
                },
                {
                  "label": "Lead partner",
                  "read": true,
                  "write": false,
                  "name": "leadSource.leadPartner.objectName",
                  "component": "TextField",
                  "placeholder": "Select lead partner"
                },
                {
                  "label": "Lead source",
                  "read": true,
                  "write": false,
                  "name": "leadSource.objectName",
                  "component": "TextField",
                  "placeholder": "Select lead source"
                },
                {
                  "label": "Loan amount",
                  "read": true,
                  "write": true,
                  "name": "loanAmount",
                  "component": "CurrencyField",
                  "placeholder": "Select loan amount"
                },
                {
                  "label": "Loan product",
                  "read": true,
                  "write": true,
                  "name": "loanProduct",
                  "component": "ChoiceField",
                  "placeholder": "Select loan product"
                },
                {
                  "label": "Loan program",
                  "read": true,
                  "write": true,
                  "name": "loanProgram",
                  "component": "ChoiceField",
                  "placeholder": "Select loan program"
                },
                {
                  "label": "Exempt from funding fee",
                  "read": false,
                  "write": true,
                  "name": "exemptFromFundingFee",
                  "component": "SwitchField",
                  "conditions": {
                    "and": [
                      {
                        "path": "loanProgram",
                        "operator": "equals",
                        "value": "va"
                      }
                    ]
                  }
                },
                {
                  "label": "First use of VA program",
                  "read": false,
                  "write": true,
                  "name": "firstUseOfVaProgram",
                  "component": "SwitchField",
                  "conditions": {
                    "and": [
                      {
                        "path": "loanProgram",
                        "operator": "equals",
                        "value": "va"
                      }
                    ]
                  }
                },
                {
                  "label": "Loan purpose",
                  "read": true,
                  "write": true,
                  "name": "loanPurpose",
                  "component": "ChoiceField",
                  "placeholder": "Select loan purpose"
                },
                {
                  "label": "Loan term",
                  "read": false,
                  "write": true,
                  "name": "loanTerm",
                  "component": "ChoiceField",
                  "placeholder": "Select loan term"
                },
                {
                  "label": "Secondary financing",
                  "read": false,
                  "write": true,
                  "name": "secondaryFinancing",
                  "component": "ChoiceField",
                  "placeholder": "Select secondary financing"
                },
                {
                  "label": "Waive escrow",
                  "read": false,
                  "write": true,
                  "name": "waiveEscrow",
                  "component": "SwitchField"
                },
                {
                  "name": "assignedTo",
                  "label": "Assigned LO",
                  "placeholder": "Assign to LO",
                  "component": "PointerField",
                  "read": true,
                  "write": true,
                  "conditions": {
                    "and": [
                      {
                        "path": "$viewer.role",
                        "operator": "in",
                        "value": ["admin", "sales_manager"]
                      }
                    ]
                  },
                  "filters": {
                    "role": {
                      "in": ["loan_officer"]
                    }
                  }
                },
                {
                  "name": "assignedTo",
                  "label": "Assigned LO",
                  "placeholder": "Assign to LO",
                  "component": "PointerField",
                  "read": true,
                  "write": false,
                  "conditions": {
                    "and": [
                      {
                        "path": "$viewer.role",
                        "operator": "notIn",
                        "value": ["admin", "sales_manager"]
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "path": "notes",
        "title": "Notes",
        "icon": "rc_note",
        "component": "NotesView",
        "properties": {}
      },
      {
        "path": "activities",
        "title": "Activities",
        "icon": "history",
        "component": "ActivityView",
        "properties": {}
      }
    ],
    "dialog": {
      "sections": [
        {
          "title": "Loan",
          "editable": true,
          "selectedFields": [
            {
              "label": "Lead source",
              "read": false,
              "write": true,
              "name": "leadSource",
              "component": "PointerField",
              "placeholder": "Select lead source"
            },
            {
              "label": "Lead partner",
              "read": true,
              "write": false,
              "name": "leadSource.leadPartner.objectName",
              "component": "TextField",
              "placeholder": "Select lead partner"
            },
            {
              "label": "Lead source",
              "read": true,
              "write": false,
              "name": "leadSource.objectName",
              "component": "TextField",
              "placeholder": "Select lead source"
            },
            {
              "label": "Loan amount",
              "read": true,
              "write": true,
              "name": "loanAmount",
              "component": "CurrencyField",
              "placeholder": "Select loan amount"
            },
            {
              "label": "Loan purpose",
              "read": true,
              "write": true,
              "name": "loanPurpose",
              "component": "ChoiceField",
              "placeholder": "Select loan purpose"
            },
            {
              "label": "Loan product",
              "read": true,
              "write": true,
              "name": "loanProduct",
              "component": "ChoiceField",
              "placeholder": "Select loan product"
            },
            {
              "label": "Loan program",
              "read": true,
              "write": true,
              "name": "loanProgram",
              "component": "ChoiceField",
              "placeholder": "Select loan program"
            },
            {
              "label": "Loan term",
              "read": false,
              "write": true,
              "name": "loanTerm",
              "component": "ChoiceField",
              "placeholder": "Select loan term"
            },
            {
              "label": "Secondary financing",
              "read": true,
              "write": true,
              "name": "secondaryFinancing",
              "component": "ChoiceField",
              "placeholder": "Select secondary financing"
            },
            {
              "label": "Exempt from funding fee",
              "read": false,
              "write": true,
              "name": "exemptFromFundingFee",
              "component": "SwitchField",
              conditions: {
                and: [
                  {
                    path: "loanProgram",
                    operator: "equals",
                    value: "va"
                  }
                ]
              }
            },
            {
              "label": "First use of VA program",
              "read": false,
              "write": true,
              "name": "firstUseOfVaProgram",
              "component": "SwitchField",
              conditions: {
                and: [
                  {
                    path: "loanProgram",
                    operator: "equals",
                    value: "va"
                  }
                ]
              }
            },
            {
              "label": "Waive escrow",
              "read": false,
              "write": true,
              "name": "waiveEscrow",
              "component": "SwitchField"
            },
            {
              "name": "assignedTo",
              "label": "Assigned LO",
              "placeholder": "Assign to LO",
              "component": "PointerField",
              "read": true,
              "write": true
            }
          ]
        }
      ]
    },
    "widgets": [
      {
        "component": "LeadWidget",
        "properties": {}
      },
      {
        "component": "NoteWidget",
        "properties": {}
      },
      {
        "component": "WeatherWidget",
        "properties": {}
      },
      {
        "component": "ActivityWidget",
        "properties": {}
      },
      {
        "component": "TagWidget",
        "properties": {}
      }
    ]
  }

  export default Lead;