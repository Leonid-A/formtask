 const Classes =[
  {
    "name": "Address",
    "isDocument": false,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "street",
        "label": "Street",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "street2",
        "label": "Street2",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "state",
        "label": "State",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "Alabama",
            "value": "AL"
          },
          {
            "label": "Alaska",
            "value": "AK"
          },
          {
            "label": "Arizona",
            "value": "AZ"
          },
          {
            "label": "Arkansas",
            "value": "AR"
          },
          {
            "label": "California",
            "value": "CA"
          },
          {
            "label": "Colorado",
            "value": "CO"
          },
          {
            "label": "Connecticut",
            "value": "CT"
          },
          {
            "label": "Delaware",
            "value": "DE"
          },
          {
            "label": "District of Columbia",
            "value": "DC"
          },
          {
            "label": "Florida",
            "value": "FL"
          },
          {
            "label": "Georgia",
            "value": "GA"
          },
          {
            "label": "Hawaii",
            "value": "HI"
          },
          {
            "label": "Idaho",
            "value": "ID"
          },
          {
            "label": "Illinois",
            "value": "IL"
          },
          {
            "label": "Indiana",
            "value": "IN"
          },
          {
            "label": "Iowa",
            "value": "IA"
          },
          {
            "label": "Kansas",
            "value": "KS"
          },
          {
            "label": "Kentucky",
            "value": "KY"
          },
          {
            "label": "Louisiana",
            "value": "LA"
          },
          {
            "label": "Maine",
            "value": "ME"
          },
          {
            "label": "Maryland",
            "value": "MD"
          },
          {
            "label": "Massachusetts",
            "value": "MA"
          },
          {
            "label": "Michigan",
            "value": "MI"
          },
          {
            "label": "Minnesota",
            "value": "MN"
          },
          {
            "label": "Mississippi",
            "value": "MS"
          },
          {
            "label": "Missouri",
            "value": "MO"
          },
          {
            "label": "Montana",
            "value": "MT"
          },
          {
            "label": "Nebraska",
            "value": "NE"
          },
          {
            "label": "Nevada",
            "value": "NV"
          },
          {
            "label": "New Hampshire",
            "value": "NH"
          },
          {
            "label": "New Jersey",
            "value": "NJ"
          },
          {
            "label": "New Mexico",
            "value": "NM"
          },
          {
            "label": "New York",
            "value": "NY"
          },
          {
            "label": "North Carolina",
            "value": "NC"
          },
          {
            "label": "North Dakota",
            "value": "ND"
          },
          {
            "label": "Ohio",
            "value": "OH"
          },
          {
            "label": "Oklahoma",
            "value": "OK"
          },
          {
            "label": "Oregon",
            "value": "OR"
          },
          {
            "label": "Pennsylvania",
            "value": "PA"
          },
          {
            "label": "Rhode Island",
            "value": "RI"
          },
          {
            "label": "South Carolina",
            "value": "SC"
          },
          {
            "label": "South Dakota",
            "value": "SD"
          },
          {
            "label": "Tennessee",
            "value": "TN"
          },
          {
            "label": "Texas",
            "value": "TX"
          },
          {
            "label": "Utah",
            "value": "UT"
          },
          {
            "label": "Vermont",
            "value": "VT"
          },
          {
            "label": "Virginia",
            "value": "VA"
          },
          {
            "label": "Washington",
            "value": "WA"
          },
          {
            "label": "West Virginia",
            "value": "WV"
          },
          {
            "label": "Wisconsin",
            "value": "WI"
          },
          {
            "label": "Wyoming",
            "value": "WY"
          }
        ]
      },
      {
        "name": "city",
        "label": "City",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "county",
        "label": "County",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "country",
        "label": "Country",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "zipCode",
        "label": "Zip Code",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "formatted",
        "label": "Formatted",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "lat",
        "label": "Lat",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "lng",
        "label": "Lng",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "Borrower",
    "isDocument": false,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "firstName",
        "label": "First Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "lastName",
        "label": "Last Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "ssn",
        "label": "Ssn",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "birthDate",
        "label": "Birth Date",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "creditRating",
        "label": "Credit Rating",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "very_poor",
            "label": "Very Poor"
          },
          {
            "value": "poor",
            "label": "Poor"
          },
          {
            "value": "good",
            "label": "Good"
          },
          {
            "value": "very_good",
            "label": "Very Good"
          },
          {
            "value": "excellent",
            "label": "Excellent"
          }
        ]
      },
      {
        "name": "creditScore",
        "label": "Credit Score",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "isMilitary",
        "label": "Is Military",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "isPrimary",
        "label": "Is Primary",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "employmentStatus",
        "label": "Employment Status",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "self_employed",
            "label": "Self-Employed"
          },
          {
            "value": "not_self_employed",
            "label": "Not Self-Employed"
          },
          {
            "value": "unemployed",
            "label": "Unemployed"
          }
        ]
      },
      {
        "name": "jobStartedAt",
        "label": "Job StartedAt",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "monthlyIncome",
        "label": "Monthly Income",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "contact",
        "label": "Contact",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "Contact"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "Participant",
    "isDocument": false,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "status",
        "label": "Status",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "party",
        "label": "Party",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User|Contact"
      },
      {
        "name": "type",
        "label": "Type",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "call",
        "label": "Call",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "Conference",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": true,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "sid",
        "label": "Sid",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "recordingUrl",
        "label": "Recording Url",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "tags",
        "label": "Tags",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "String"
      },
      {
        "name": "from",
        "label": "From",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "to",
        "label": "To",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "status",
        "label": "Status",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "direction",
        "label": "Direction",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "unread",
        "label": "Unread",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "missed",
        "label": "Missed",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "startDate",
        "label": "Start Date",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "endDate",
        "label": "End Date",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "scope",
        "label": "Scope",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "Lead"
      },
      {
        "name": "initiator",
        "label": "Initiator",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User|Contact"
      },
      {
        "name": "calls",
        "label": "Calls",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "Participant"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      },
      {
        "name": "assignedTo",
        "label": "Assigned To",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "assignedAt",
        "label": "Assigned At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Contact",
    "isDocument": true,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectIcon",
        "label": "Object Icon",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "firstName",
        "label": "First Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "lastName",
        "label": "Last Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "phones",
        "label": "Phones",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "PhoneNumber"
      },
      {
        "name": "emails",
        "label": "Emails",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "EmailAddress"
      },
      {
        "name": "addresses",
        "label": "Addresses",
        "type": "Array",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "Address"
      },
      {
        "name": "birthday",
        "label": "Birthday",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ssn",
        "label": "Ssn",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "tags",
        "label": "Tags",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "String"
      },
      {
        "name": "duplicates",
        "label": "Duplicates",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "Contact"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "EmailAddress",
    "isDocument": false,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "address",
        "label": "Address",
        "type": "Email",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "type",
        "label": "Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "personal",
            "label": "Personal"
          },
          {
            "value": "work",
            "label": "Work"
          },
          {
            "value": "other",
            "label": "Other"
          }
        ]
      },
      {
        "name": "optOut",
        "label": "Opt Out",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "EmailLine",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "users",
        "label": "Users",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "User"
      },
      {
        "name": "objectIcon",
        "label": "Object Icon",
        "type": "String",
        "component": null,
        "defaultValue": "assignment_ind",
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "email",
        "label": "Email",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "name",
        "label": "Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "TimeZone",
    "isDocument": false,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "rawOffset",
        "label": "Raw Offset",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "dstOffset",
        "label": "Dst Offset",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "Lead",
    "isDocument": true,
    "isSystem": false,
    "isAssignable": true,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectIcon",
        "label": "Object Icon",
        "type": "String",
        "component": null,
        "defaultValue": "rc_lead",
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "leadSource",
        "label": "Lead Source",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "LeadSource"
      },
      {
        "name": "leadSourceId",
        "label": "Lead SourceId",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "velocifyId",
        "label": "Velocify Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "loanAmount",
        "label": "Loan Amount",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "loanProposals",
        "label": "Loan Proposals",
        "type": "Number",
        "component": null,
        "defaultValue": 0,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "downPayment",
        "label": "Down Payment",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "ltv",
        "label": "Ltv",
        "type": "Percent",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "cltv",
        "label": "Cltv",
        "type": "Percent",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "leadStatus",
        "label": "Lead Status",
        "type": "Status",
        "component": null,
        "defaultValue": {
          "status": "not_contacted_new"
        },
        "required": false,
        "__typename": "SchemaStatusField",
        "transitions": {
          "not_contacted_new": {
            "contact_attempt_called_no_message": "not_contacted_first_attempt_completed",
            "contact_attempt_called_left_message": "not_contacted_first_attempt_completed",
            "contact_attempt_called_sent_blind_prop": "not_contacted_first_attempt_completed",
            "contact_attempt_called_sent_email": "not_contacted_first_attempt_completed",
            "contact_attempt_called_sent_text": "not_contacted_first_attempt_completed",
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "rate_watch": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "loan_proposal_sent": "contacted_loan_proposal_sent",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "not_contacted_first_attempt_completed": {
            "contact_attempt_called_no_message": "not_contacted_second_attempt_completed",
            "contact_attempt_called_left_message": "not_contacted_second_attempt_completed",
            "contact_attempt_called_sent_blind_prop": "not_contacted_second_attempt_completed",
            "contact_attempt_called_sent_email": "not_contacted_second_attempt_completed",
            "contact_attempt_called_sent_text": "not_contacted_second_attempt_completed",
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "watch_rates": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "loan_proposal_sent": "contacted_loan_proposal_sent",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "not_contacted_second_attempt_completed": {
            "contact_attempt_called_no_message": "not_contacted_third_attempt_completed",
            "contact_attempt_called_left_message": "not_contacted_third_attempt_completed",
            "contact_attempt_called_sent_blind_prop": "not_contacted_third_attempt_completed",
            "contact_attempt_called_sent_email": "not_contacted_third_attempt_completed",
            "contact_attempt_called_sent_text": "not_contacted_third_attempt_completed",
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "watch_rates": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "loan_proposal_sent": "contacted_loan_proposal_sent",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "not_contacted_third_attempt_completed": {
            "contact_attempt_called_no_message": "not_contacted_fourth_attempt_completed",
            "contact_attempt_called_left_message": "not_contacted_fourth_attempt_completed",
            "contact_attempt_called_sent_blind_prop": "not_contacted_fourth_attempt_completed",
            "contact_attempt_called_sent_email": "not_contacted_fourth_attempt_completed",
            "contact_attempt_called_sent_text": "not_contacted_fourth_attempt_completed",
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "watch_rates": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "loan_proposal_sent": "contacted_loan_proposal_sent",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "not_contacted_fourth_attempt_completed": {
            "contact_attempt_called_no_message": "not_contacted_fifth_attempt_completed",
            "contact_attempt_called_left_message": "not_contacted_fifth_attempt_completed",
            "contact_attempt_called_sent_blind_prop": "not_contacted_fifth_attempt_completed",
            "contact_attempt_called_sent_email": "not_contacted_fifth_attempt_completed",
            "contact_attempt_called_sent_text": "not_contacted_fifth_attempt_completed",
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "watch_rates": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "loan_proposal_sent": "contacted_loan_proposal_sent",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "not_contacted_fifth_attempt_completed": {
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "watch_rates": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "contact_attempt_called_no_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_left_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_blind_prop": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_email": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_text": "contacted_in_contract_negotiations",
            "loan_proposal_sent": "contacted_loan_proposal_sent",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "contacted_follow_up": {
            "made_contact_email_only": "contacted_follow_up",
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "contact_attempt_called_no_message": "contacted_follow_up",
            "contact_attempt_called_left_message": "contacted_follow_up",
            "contact_attempt_called_sent_blind_prop": "contacted_follow_up",
            "contact_attempt_called_sent_email": "contacted_follow_up",
            "contact_attempt_called_sent_text": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "watch_rates": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "not_interested": "nurture_not_interested",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "contacted_pitched": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "made_contact_call_back": "contacted_pitched",
            "contact_attempt_called_no_message": "contacted_pitched",
            "contact_attempt_called_left_message": "contacted_pitched",
            "contact_attempt_called_sent_blind_prop": "contacted_pitched",
            "contact_attempt_called_sent_email": "contacted_pitched",
            "contact_attempt_called_sent_text": "contacted_pitched",
            "watch_rates": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "loan_documents_received": "contacted_loan_documents_received",
            "credit_pulled": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approval": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_rate_watch": {
            "loan_pitched": "contacted_pitched",
            "made_contact_call_back": "contacted_rate_watch",
            "contact_attempt_called_no_message": "contacted_rate_watch",
            "contact_attempt_called_left_message": "contacted_rate_watch",
            "contact_attempt_called_sent_blind_prop": "contacted_rate_watch",
            "contact_attempt_called_sent_email": "contacted_rate_watch",
            "contact_attempt_called_sent_text": "contacted_rate_watch",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "locked_submitted": "contacted_application_locked",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_credit_repair": {
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "contact_attempt_called_no_message": "contacted_credit_repair",
            "contact_attempt_called_left_message": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "contacted_pre_approved": {
            "rate_watch": "contacted_rate_watch",
            "made_contact_call_back": "contacted_pre_approved",
            "contact_attempt_called_no_message": "contacted_pre_approved",
            "contact_attempt_called_left_message": "contacted_pre_approved",
            "contact_attempt_called_sent_email": "contacted_pre_approved",
            "contact_attempt_called_sent_text": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "contacted_application_received": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "rate_watch": "contacted_rate_watch",
            "pre_approved": "contacted_pre_approved",
            "made_contact_call_back": "contacted_application_sent",
            "contact_attempt_called_no_message": "contacted_application_sent",
            "contact_attempt_called_left_message": "contacted_application_sent",
            "contact_attempt_called_sent_email": "contacted_application_sent",
            "contact_attempt_called_sent_text": "contacted_application_sent",
            "not_interested": "nurture_not_interested",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "loan_documents_received": "contacted_loan_documents_received",
            "credit_pulled": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approval": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "funded_loan": "customer_funded"
          },
          "contacted_application_sent": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "rate_watch": "contacted_rate_watch",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "pre_approved": "contacted_pre_approved",
            "made_contact_call_back": "contacted_in_contract_negotiations",
            "contact_attempt_called_no_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_left_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_email": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_text": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "loan_documents_received": "contacted_loan_documents_received",
            "credit_pulled": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approval": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_application_started": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "rate_watch": "contacted_rate_watch",
            "pre_approved": "contacted_pre_approved",
            "application_received": "contacted_application_received",
            "made_contact_call_back": "contacted_in_contract_negotiations",
            "contact_attempt_called_no_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_left_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_email": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_text": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "loan_documents_received": "contacted_loan_documents_received",
            "credit_pulled": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approval": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_in_contract_negotiations": {
            "rate_watch": "contacted_rate_watch",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "contact_attempt_called_no_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_left_message": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_email": "contacted_in_contract_negotiations",
            "contact_attempt_called_sent_text": "contacted_in_contract_negotiations",
            "made_contact_call_back": "contacted_in_contract_negotiations",
            "made_contact_email_only": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "funded_loan": "customer_funded"
          },
          "contacted_application_locked": {
            "loan_pitched": "contacted_pitched",
            "pre_approved": "contacted_pre_approved",
            "contact_attempt_called_no_message": "contacted_application_locked",
            "contact_attempt_called_left_message": "contacted_application_locked",
            "contact_attempt_called_sent_email": "contacted_application_locked",
            "contact_attempt_called_sent_text": "contacted_application_locked",
            "made_contact_call_back": "contacted_application_locked",
            "loan_documents_received": "contacted_loan_documents_received",
            "credit_pulled": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approval": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_loan_proposal_sent": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "made_contact_call_back": "contacted_pitched",
            "contact_attempt_called_no_message": "contacted_pitched",
            "contact_attempt_called_left_message": "contacted_pitched",
            "contact_attempt_called_sent_blind_prop": "contacted_pitched",
            "contact_attempt_called_sent_email": "contacted_pitched",
            "contact_attempt_called_sent_text": "contacted_pitched",
            "rate_watch": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "loan_documents_received": "contacted_loan_documents_received",
            "credit_pulled": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approval": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_loan_documents_received": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "rate_watch": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "contact_attempt_called_no_message": "contacted_loan_documents_received",
            "contact_attempt_called_left_message": "contacted_loan_documents_received",
            "contact_attempt_called_sent_email": "contacted_loan_documents_received",
            "contact_attempt_called_sent_text": "contacted_loan_documents_received",
            "made_contact_call_back": "contacted_loan_documents_received",
            "credit_pulled": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approval": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_credit_pulled": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "rate_watch": "contacted_rate_watch",
            "credit_watch": "contacted_credit_repair",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "credit_pulled": "contacted_loan_documents_received",
            "contact_attempt_called_no_message": "contacted_credit_pulled",
            "contact_attempt_called_left_message": "contacted_credit_pulled",
            "contact_attempt_called_sent_email": "contacted_credit_pulled",
            "contact_attempt_called_sent_text": "contacted_credit_pulled",
            "made_contact_call_back": "contacted_credit_pulled",
            "preliminary_approved": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approved": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_preliminary_approval": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "pre_approved": "contacted_pre_approved",
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "credit_pulled": "contacted_credit_pulled",
            "contact_attempt_called_no_message": "contacted_preliminary_approval",
            "contact_attempt_called_left_message": "contacted_preliminary_approval",
            "contact_attempt_called_sent_email": "contacted_preliminary_approval",
            "contact_attempt_called_sent_text": "contacted_preliminary_approval",
            "made_contact_call_back": "contacted_preliminary_approval",
            "appraisal_ordered": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approved": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_appraisal_ordered": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "credit_pulled": "contacted_loan_documents_received",
            "contact_attempt_called_no_message": "contacted_appraisal_ordered",
            "contact_attempt_called_left_message": "contacted_appraisal_ordered",
            "contact_attempt_called_sent_email": "contacted_appraisal_ordered",
            "contact_attempt_called_sent_text": "contacted_appraisal_ordered",
            "made_contact_call_back": "contacted_appraisal_ordered",
            "appraisal_approved": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approved": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_appraisal_approved": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "credit_pulled": "contacted_loan_documents_received",
            "contact_attempt_called_no_message": "contacted_appraisal_approved",
            "contact_attempt_called_left_message": "contacted_appraisal_approved",
            "contact_attempt_called_sent_email": "contacted_appraisal_approved",
            "contact_attempt_called_sent_text": "contacted_appraisal_approved",
            "made_contact_call_back": "contacted_appraisal_approved",
            "title_ordered": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approved": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_title_ordered": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "credit_pulled": "contacted_loan_documents_received",
            "contact_attempt_called_no_message": "contacted_title_ordered",
            "contact_attempt_called_left_message": "contacted_title_ordered",
            "contact_attempt_called_sent_email": "contacted_title_ordered",
            "contact_attempt_called_sent_text": "contacted_title_ordered",
            "made_contact_call_back": "contacted_title_ordered",
            "title_received": "contacted_title_received",
            "final_approved": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_title_received": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "credit_pulled": "contacted_loan_documents_received",
            "title_ordered": "contacted_title_ordered",
            "contact_attempt_called_no_message": "contacted_title_received",
            "contact_attempt_called_left_message": "contacted_title_received",
            "contact_attempt_called_sent_email": "contacted_title_received",
            "contact_attempt_called_sent_text": "contacted_title_received",
            "made_contact_call_back": "contacted_title_received",
            "final_approved": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_final_approval": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "credit_pulled": "contacted_loan_documents_received",
            "contact_attempt_called_no_message": "contacted_final_approval",
            "contact_attempt_called_left_message": "contacted_final_approval",
            "contact_attempt_called_sent_email": "contacted_final_approval",
            "contact_attempt_called_sent_text": "contacted_final_approval",
            "made_contact_call_back": "contacted_final_approval",
            "clear_to_close": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "contacted_clear_to_close": {
            "made_contact_unable_to_reconnect": "contacted_follow_up",
            "credit_pulled": "contacted_loan_documents_received",
            "contact_attempt_called_no_message": "contacted_clear_to_close",
            "contact_attempt_called_left_message": "contacted_clear_to_close",
            "contact_attempt_called_sent_email": "contacted_clear_to_close",
            "contact_attempt_called_sent_text": "contacted_clear_to_close",
            "made_contact_call_back": "contacted_clear_to_close",
            "not_interested": "nurture_not_interested",
            "application_withdrawn": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "nurture_failed_to_contact": {
            "application_sent": "contacted_application_sent",
            "application_received": "contacted_application_received",
            "application_started": "contacted_application_started",
            "made_contact_call_back": "nurture_failed_to_contact",
            "made_contact_email_only": "nurture_failed_to_contact",
            "made_contact_unable_to_reconnect": "nurture_failed_to_contact",
            "contact_attempt_called_no_message": "nurture_failed_to_contact",
            "contact_attempt_called_left_message": "nurture_failed_to_contact",
            "contact_attempt_called_sent_blind_prop": "nurture_failed_to_contact",
            "contact_attempt_called_sent_email": "nurture_failed_to_contact",
            "contact_attempt_called_sent_text": "nurture_failed_to_contact",
            "not_interested": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_phone_number": "dead_bad_phone_number",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "nurture_not_interested": {
            "made_contact_call_back": "nurture_not_interested",
            "made_contact_email_only": "nurture_not_interested",
            "made_contact_unable_to_reconnect": "nurture_not_interested",
            "contact_attempt_called_no_message": "nurture_not_interested",
            "contact_attempt_called_left_message": "nurture_not_interested",
            "contact_attempt_called_sent_blind_prop": "nurture_not_interested",
            "contact_attempt_called_sent_email": "nurture_not_interested",
            "contact_attempt_called_sent_text": "nurture_not_interested",
            "went_with_another_lender": "dead_went_with_other_lender",
            "bad_lead_return_to_vendor": "dead_return_to_vendor",
            "does_not_qualify": "dead_not_qualified"
          },
          "dead_application_withdrawn": {
            "made_contact_call_back": "nurture_failed_to_contact",
            "made_contact_unable_to_reconnect": "nurture_failed_to_contact",
            "rate_watch": "contacted_rate_watch",
            "pre_approved": "contacted_pre_approved",
            "application_received": "contacted_application_sent",
            "in_contract_negotiations": "contacted_in_contract_negotiations",
            "locked_submitted": "contacted_application_locked",
            "not_interested": "nurture_not_interested",
            "contact_attempt_called_no_message": "dead_application_withdrawn",
            "contact_attempt_called_left_message": "dead_application_withdrawn",
            "contact_attempt_called_sent_email": "dead_application_withdrawn",
            "contact_attempt_called_sent_text": "dead_application_withdrawn",
            "went_with_another_lender": "dead_went_with_other_lender",
            "does_not_qualify": "dead_not_qualified",
            "funded_loan": "customer_funded"
          },
          "dead_went_with_other_lender": {
            "made_contact_call_back": "contacted_follow_up",
            "pre_approved": "contacted_pre_approved",
            "application_received": "contacted_application_sent",
            "locked_submitted": "contacted_application_locked",
            "contact_attempt_called_sent_text": "dead_went_with_other_lender",
            "not_interested": "dead_went_with_other_lender"
          },
          "dead_bad_phone_number": {
            "contact_attempt_called_left_message": "not_contacted_second_attempt_completed",
            "contact_attempt_called_no_message": "not_contacted_second_attempt_completed",
            "made_contact_call_back": "contacted_follow_up",
            "made_contact_email_only": "contacted_follow_up",
            "bad_lead_return_to_vendor": "dead_return_to_vendor"
          },
          "dead_return_to_vendor": {
            "made_contact_call_back": "contacted_follow_up",
            "not_interested": "nurture_not_interested",
            "does_not_qualify": "dead_not_qualified"
          },
          "dead_not_qualified": {
            "made_contact_call_back": "contacted_follow_up",
            "loan_pitched": "contacted_pitched",
            "credit_watch": "contacted_credit_repair",
            "went_with_another_lender": "dead_went_with_other_lender"
          },
          "customer_funded": {
            "made_contact_call_back": "customer_funded",
            "contact_attempt_called_no_message": "customer_funded",
            "contact_attempt_called_left_message": "customer_funded",
            "contact_attempt_called_sent_email": "customer_funded",
            "contact_attempt_called_sent_text": "customer_funded"
          }
        },
        "actions": {
          "contact_attempt_called_no_message": {
            "name": "Contact Attempt: Called/No Message"
          },
          "contact_attempt_called_left_message": {
            "name": "Contact Attempt: Called/Left Message"
          },
          "contact_attempt_called_sent_blind_prop": {
            "name": "Contact Attempt: Called/Sent Blind Prop"
          },
          "contact_attempt_called_sent_email": {
            "name": "Contact Attempt: Called/Sent Email"
          },
          "contact_attempt_called_sent_text": {
            "name": "Contact Attempt: Called/Sent Text"
          },
          "made_contact_call_back": {
            "name": "Made Contact/Call Back"
          },
          "made_contact_email_only": {
            "name": "Made Contact/EMAIL ONLY"
          },
          "made_contact_unable_to_reconnect": {
            "name": "Made Contact/Unable to Reconnect"
          },
          "loan_pitched": {
            "name": "Loan Pitched"
          },
          "rate_watch": {
            "name": "Rate Watch"
          },
          "credit_watch": {
            "name": "Credit Watch"
          },
          "pre_approved": {
            "name": "Pre Approved"
          },
          "application_sent": {
            "name": "Application Sent"
          },
          "application_started": {
            "name": "Application Started"
          },
          "application_received": {
            "name": "Application Received"
          },
          "loan_proposal_sent": {
            "name": "Loan Proposal Sent"
          },
          "not_interested": {
            "name": "Not Interested"
          },
          "went_with_another_lender": {
            "name": "Went With Another Lender"
          },
          "bad_phone_number": {
            "name": "Bad Phone Number"
          },
          "bad_lead_return_to_vendor": {
            "name": "Bad Lead: Return to Vendor"
          },
          "does_not_qualify": {
            "name": "Does Not Qualify"
          },
          "watch_rates": {
            "name": "Watch Rates"
          },
          "in_contract_negotiations": {
            "name": "In Contract Negotiations"
          },
          "locked_submitted": {
            "name": "Locked/Submitted"
          },
          "loan_documents_received": {
            "name": "Loan Documents Received"
          },
          "credit_pulled": {
            "name": "Credit Pulled"
          },
          "preliminary_approved": {
            "name": "Preliminary Approved"
          },
          "appraisal_ordered": {
            "name": "Appraisal Ordered"
          },
          "appraisal_approved": {
            "name": "Appraisal Approved"
          },
          "title_ordered": {
            "name": "Title Ordered"
          },
          "title_received": {
            "name": "Title Received"
          },
          "final_approval": {
            "name": "Final Approval"
          },
          "clear_to_close": {
            "name": "Clear to Close"
          },
          "funded_loan": {
            "name": "Funded Loan"
          },
          "application_withdrawn": {
            "name": "Application Withdrawn"
          },
          "final_approved": {
            "name": "Final Approved"
          }
        },
        "states": {
          "not_contacted_new": {
            "stage": "Not Contacted",
            "status": "New"
          },
          "not_contacted_first_attempt_completed": {
            "stage": "Not Contacted",
            "status": "First Attempt Completed"
          },
          "not_contacted_second_attempt_completed": {
            "stage": "Not Contacted",
            "status": "Second Attempt Completed"
          },
          "not_contacted_third_attempt_completed": {
            "stage": "Not Contacted",
            "status": "Third Attempt Completed"
          },
          "not_contacted_fourth_attempt_completed": {
            "stage": "Not Contacted",
            "status": "Fourth Attempt Completed"
          },
          "not_contacted_fifth_attempt_completed": {
            "stage": "Not Contacted",
            "status": "Fifth Attempt Completed"
          },
          "contacted_follow_up": {
            "stage": "Contacted",
            "status": "Follow Up"
          },
          "contacted_pitched": {
            "stage": "Contacted",
            "status": "Pitched"
          },
          "contacted_rate_watch": {
            "stage": "Contacted",
            "status": "Rate Watch"
          },
          "contacted_credit_repair": {
            "stage": "Contacted",
            "status": "Credit Repair"
          },
          "contacted_pre_approved": {
            "stage": "Contacted",
            "status": "Pre-Approved"
          },
          "contacted_application_received": {
            "stage": "Contacted",
            "status": "Application Received"
          },
          "contacted_application_sent": {
            "stage": "Contacted",
            "status": "Application Sent"
          },
          "contacted_application_started": {
            "stage": "Contacted",
            "status": "Application Started"
          },
          "contacted_in_contract_negotiations": {
            "stage": "Contacted",
            "status": "In contract Negotiations"
          },
          "contacted_application_locked": {
            "stage": "Contacted",
            "status": "Application Locked"
          },
          "contacted_loan_proposal_sent": {
            "stage": "Contacted",
            "status": "Loan Proposal Sent"
          },
          "contacted_loan_documents_received": {
            "stage": "Contacted",
            "status": "Loan Documents Received"
          },
          "contacted_credit_pulled": {
            "stage": "Contacted",
            "status": "Credit Pulled"
          },
          "contacted_preliminary_approval": {
            "stage": "Contacted",
            "status": "Preliminary Approval"
          },
          "contacted_appraisal_ordered": {
            "stage": "Contacted",
            "status": "Appraisal Ordered"
          },
          "contacted_appraisal_approved": {
            "stage": "Contacted",
            "status": "Appraisal Approved"
          },
          "contacted_title_ordered": {
            "stage": "Contacted",
            "status": "Title Ordered"
          },
          "contacted_title_received": {
            "stage": "Contacted",
            "status": "Title Received"
          },
          "contacted_final_approval": {
            "stage": "Contacted",
            "status": "Final Approval"
          },
          "contacted_clear_to_close": {
            "stage": "Contacted",
            "status": "Clear to Close"
          },
          "nurture_failed_to_contact": {
            "stage": "Nurture",
            "status": "Failed to Contact"
          },
          "nurture_not_interested": {
            "stage": "Nurture",
            "status": "Not Interested"
          },
          "dead_application_withdrawn": {
            "stage": "Dead",
            "status": "Application Withdrawn"
          },
          "dead_went_with_other_lender": {
            "stage": "Dead",
            "status": "Went with other lender"
          },
          "dead_bad_phone_number": {
            "stage": "Dead",
            "status": "Bad Phone Number"
          },
          "dead_return_to_vendor": {
            "stage": "Dead",
            "status": "Return To Vendor"
          },
          "dead_not_qualified": {
            "stage": "Dead",
            "status": "Not Qualified"
          },
          "customer_funded": {
            "stage": "Customer",
            "status": "Funded"
          }
        }
      },
      {
        "name": "loanPurpose",
        "label": "Loan Purpose",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "purchase",
            "label": "Purchase"
          },
          {
            "value": "rate_term_refinance",
            "label": "Rate-Term Refinance"
          },
          {
            "value": "cash_out_refinance",
            "label": "Cash-Out Refinance"
          }
        ]
      },
      {
        "name": "loanProduct",
        "label": "Loan Product",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "10_year_fixed",
            "label": "10 year fixed"
          },
          {
            "value": "15_year_fixed",
            "label": "15 year fixed"
          },
          {
            "value": "20_year_fixed",
            "label": "20 year fixed"
          },
          {
            "value": "25_year_fixed",
            "label": "25 year fixed"
          },
          {
            "value": "30_year_fixed",
            "label": "30 year fixed"
          },
          {
            "value": "40_year_fixed",
            "label": "40 year fixed"
          },
          {
            "value": "6_mo_ARM_30_yrs",
            "label": "6 mo. ARM/30 yrs"
          },
          {
            "value": "1_year_ARM_30_yrs",
            "label": "1 year ARM/30 yrs"
          },
          {
            "value": "2_year_ARM_30_yrs",
            "label": "2 year ARM/30 yrs"
          },
          {
            "value": "3_year_ARM_30_yrs",
            "label": "3 year ARM/30 yrs"
          },
          {
            "value": "5_year_ARM_30_yrs",
            "label": "5 year ARM/30 yrs"
          },
          {
            "value": "7_year_ARM_30_yrs",
            "label": "7 year ARM/30 yrs"
          },
          {
            "value": "10_year_ARM_30_yrs",
            "label": "10 year ARM/30 yrs"
          },
          {
            "value": "5_year_balloon_30_years",
            "label": "5 year balloon/30 years"
          },
          {
            "value": "7_year_balloon_30_years",
            "label": "7 year balloon/30 years"
          },
          {
            "value": "10_year_balloon_30_years",
            "label": "10 year balloon/30 years"
          },
          {
            "value": "other_products",
            "label": "Other products"
          }
        ]
      },
      {
        "name": "loanProgram",
        "label": "Loan Program",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "fha",
            "label": "FHA"
          },
          {
            "value": "conventional",
            "label": "Conventional"
          },
          {
            "value": "va",
            "label": "VA"
          },
          {
            "value": "rd",
            "label": "RD"
          }
        ]
      },
      {
        "name": "loanTerm",
        "label": "Loan Term",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "480",
            "label": "480"
          },
          {
            "value": "360",
            "label": "360"
          },
          {
            "value": "300",
            "label": "300"
          },
          {
            "value": "240",
            "label": "240"
          },
          {
            "value": "180",
            "label": "180"
          },
          {
            "value": "120",
            "label": "120"
          }
        ]
      },
      {
        "name": "waiveEscrow",
        "label": "Waive Escrow",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "exemptFromFundingFee",
        "label": "Exempt FromFundingFee",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "firstTimeHomeBuyer",
        "label": "First TimeHomeBuyer",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "firstUseOfVaProgram",
        "label": "First UseOfVaProgram",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "tags",
        "label": "Tags",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "String"
      },
      {
        "name": "borrowers",
        "label": "Borrowers",
        "type": "Array",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "Borrower"
      },
      {
        "name": "costco",
        "label": "Costco",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": "Costco"
      },
      {
        "name": "property",
        "label": "Property",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": "Property"
      },
      {
        "name": "original",
        "label": "Original",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": null
      },
      {
        "name": "realtor",
        "label": "Realtor",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "Contact"
      },
      {
        "name": "secondaryFinancing",
        "label": "Secondary Financing",
        "type": "Choice",
        "component": null,
        "defaultValue": "none",
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "none",
            "label": "None"
          },
          {
            "value": "subordinate_financing",
            "label": "Subordinate financing"
          },
          {
            "value": "sub_fin_community_second",
            "label": "Sub Fin/community second"
          }
        ]
      },
      {
        "name": "view",
        "label": "View",
        "type": "Choice",
        "component": null,
        "defaultValue": "1",
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "1",
            "label": "Single Best Investor"
          },
          {
            "value": "2",
            "label": "Two Best Investors"
          },
          {
            "value": "3",
            "label": "Three Best Investors"
          },
          {
            "value": "4",
            "label": "Four Best Investors"
          },
          {
            "value": "5",
            "label": "Five Best Investors"
          },
          {
            "value": "999",
            "label": "All Investors"
          }
        ]
      },
      {
        "name": "lockInDays",
        "label": "Lock InDays",
        "type": "Choice",
        "component": null,
        "defaultValue": "60",
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "60",
            "label": "60 day"
          },
          {
            "value": "75",
            "label": "75 day"
          }
        ]
      },
      {
        "name": "costcoDiscount",
        "label": "Costco Discount",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "timeZone",
        "label": "Time Zone",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": "TimeZone"
      },
      {
        "name": "duplicates",
        "label": "Duplicates",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "Lead"
      },
      {
        "name": "duplicateOf",
        "label": "Duplicate Of",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "Lead"
      },
      {
        "name": "nbkcApplicationId",
        "label": "Nbkc ApplicationId",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      },
      {
        "name": "assignedTo",
        "label": "Assigned To",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "assignedAt",
        "label": "Assigned At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": true,
          "get": null,
          "create": null,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "sales_manager",
          "find": true,
          "get": null,
          "create": null,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": true,
          "get": null,
          "create": null,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": null,
        "get": true,
        "create": true,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "LeadPartner",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectIcon",
        "label": "Object Icon",
        "type": "String",
        "component": null,
        "defaultValue": "group_work",
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "title",
        "label": "Title",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "leadSources",
        "label": "Lead Sources",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "LeadSource"
      },
      {
        "name": "logo",
        "label": "Logo",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "contacts",
        "label": "Contacts",
        "type": "Array",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "Contact"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "LeadSource",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectIcon",
        "label": "Object Icon",
        "type": "String",
        "component": null,
        "defaultValue": "source",
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "title",
        "label": "Title",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "type",
        "label": "Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "direct_mail",
            "label": "Direct Mail"
          },
          {
            "value": "internet",
            "label": "Internet (Bought Lead)"
          },
          {
            "value": "television",
            "label": "Television"
          },
          {
            "value": "dialer",
            "label": "Dialer"
          },
          {
            "value": "retail",
            "label": "Retail"
          },
          {
            "value": "radio",
            "label": "Radio"
          },
          {
            "value": "inbound_call",
            "label": "Inbound Call"
          },
          {
            "value": "webform",
            "label": "Webform"
          },
          {
            "value": "import",
            "label": "Import"
          },
          {
            "value": "other",
            "label": "Other"
          }
        ]
      },
      {
        "name": "costPerLead",
        "label": "Cost PerLead",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "inboundPhoneNumber",
        "label": "Inbound PhoneNumber",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "PhoneLine"
      },
      {
        "name": "isActive",
        "label": "Is Active",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "adCost",
        "label": "Ad Cost",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "adCostBasis",
        "label": "Ad CostBasis",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "monthly",
            "label": "Monthly"
          },
          {
            "value": "weekly",
            "label": "Weekly"
          },
          {
            "value": "daily",
            "label": "Daily"
          },
          {
            "value": "per_call",
            "label": "Per Call"
          }
        ]
      },
      {
        "name": "leadPartner",
        "label": "Lead Partner",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "LeadPartner"
      },
      {
        "name": "leads",
        "label": "Leads",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "Lead"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Costco",
    "isDocument": false,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "membershipId",
        "label": "Membership Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "membershipType",
        "label": "Membership Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "Business Executive",
            "value": "business_executive"
          },
          {
            "label": "Executive",
            "value": "executive"
          },
          {
            "label": "Gold Star",
            "value": "gold_star"
          },
          {
            "label": "Business",
            "value": "business"
          }
        ]
      },
      {
        "name": "exclusivity",
        "label": "Exclusivity",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "Exclusive",
            "value": "exclusive"
          },
          {
            "label": "Semi-Exclusive",
            "value": "semi_exclusive"
          },
          {
            "label": "Non-Exclusive",
            "value": "non_exclusive"
          }
        ]
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "Note",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "subject",
        "label": "Subject",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaPointerField",
        "targetClassName": "Contact|Lead"
      },
      {
        "name": "text",
        "label": "Text",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "owner",
        "label": "Owner",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "PhoneLine",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "users",
        "label": "Users",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "User"
      },
      {
        "name": "name",
        "label": "Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "number",
        "label": "Number",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "sms",
        "label": "Sms",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "mms",
        "label": "Mms",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "fax",
        "label": "Fax",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "voice",
        "label": "Voice",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "PhoneMessageParticipant",
    "isDocument": false,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "type",
        "label": "Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "Sender",
            "value": "sender"
          },
          {
            "label": "Receiver",
            "value": "receiver"
          }
        ]
      },
      {
        "name": "party",
        "label": "Party",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User|Contact"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "PhoneMessage",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "content",
        "label": "Content",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "dateSent",
        "label": "Date Sent",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "direction",
        "label": "Direction",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "from",
        "label": "From",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "to",
        "label": "To",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "price",
        "label": "Price",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "sid",
        "label": "Sid",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "status",
        "label": "Status",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "unread",
        "label": "Unread",
        "type": "Boolean",
        "component": null,
        "defaultValue": true,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "receiver",
        "label": "Receiver",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User|Contact"
      },
      {
        "name": "participants",
        "label": "Participants",
        "type": "Array",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "PhoneMessageParticipant"
      },
      {
        "name": "scope",
        "label": "Scope",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "Lead"
      },
      {
        "name": "notified",
        "label": "Notified",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "PhoneNumber",
    "isDocument": false,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "number",
        "label": "Number",
        "type": "Phone",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "type",
        "label": "Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "home",
            "label": "Home"
          },
          {
            "value": "work",
            "label": "Work"
          },
          {
            "value": "mobile",
            "label": "Mobile"
          },
          {
            "value": "other",
            "label": "Other"
          }
        ]
      },
      {
        "name": "sms",
        "label": "Sms",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "smsCountryCode",
        "label": "Sms CountryCode",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "nationalFormat",
        "label": "National Format",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "smsOptOut",
        "label": "Sms OptOut",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "callOptOut",
        "label": "Call OptOut",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "carrier",
        "label": "Carrier",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": null
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "Property",
    "isDocument": false,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "propertyAddress",
        "label": "Property Address",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": "Address"
      },
      {
        "name": "type",
        "label": "Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "Single Family Detached",
            "value": "single_family_detached"
          },
          {
            "label": "PUD",
            "value": "pud"
          },
          {
            "label": "Townhome",
            "value": "townhome"
          },
          {
            "label": "Condominium",
            "value": "condominium"
          },
          {
            "label": "Detached Condo",
            "value": "detached_condo"
          },
          {
            "label": "2 Unit",
            "value": "2_unit"
          },
          {
            "label": "3 Unit",
            "value": "3_unit"
          },
          {
            "label": "4 Unit",
            "value": "4_unit"
          },
          {
            "label": "Condo < 5 Stories",
            "value": "condo_lt_5_stories"
          },
          {
            "label": "Condo 5-8 Stories",
            "value": "condo_5_to_8_stories"
          },
          {
            "label": "Condo > 8 Stories",
            "value": "condo_gt_8_stories"
          },
          {
            "label": "Mobile",
            "value": "mobile"
          },
          {
            "label": "Manufactured",
            "value": "manufactured"
          },
          {
            "label": "Co Op",
            "value": "co_op"
          }
        ]
      },
      {
        "name": "occupancy",
        "label": "Occupancy",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "owner_occupied",
            "label": "Owner Occupied"
          },
          {
            "value": "non_owner_occupied",
            "label": "Non-Owner Occupied"
          },
          {
            "value": "second_home",
            "label": "Second Home"
          }
        ]
      },
      {
        "name": "use",
        "label": "Use",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "primary_residence",
            "label": "Primary Residence"
          },
          {
            "value": "second_home",
            "label": "Second / Vacation Home"
          },
          {
            "value": "investment_property",
            "label": "Investment Property"
          }
        ]
      },
      {
        "name": "value",
        "label": "Value",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "currentMortgageBalance",
        "label": "Current MortgageBalance",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "firstLienBalance",
        "label": "First LienBalance",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "secondLienBalance",
        "label": "Second LienBalance",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "annualInsurance",
        "label": "Annual Insurance",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "annualTaxes",
        "label": "Annual Taxes",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "dues",
        "label": "Dues",
        "type": "Number",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaNumberField"
      },
      {
        "name": "monthlyHoa",
        "label": "Monthly Hoa",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "heloc",
        "label": "Heloc",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "PmiPartner",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "slug",
        "label": "Slug",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "title",
        "label": "Title",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "logo",
        "label": "Logo",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "masterPolicyId",
        "label": "Master PolicyId",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Invite",
    "isDocument": false,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "user",
        "label": "User",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "status",
        "label": "Status",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "Suggestion",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "targets",
        "label": "Targets",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": null
      },
      {
        "name": "invites",
        "label": "Invites",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "Invite"
      },
      {
        "name": "status",
        "label": "Status",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Page",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectIcon",
        "label": "Object Icon",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "path",
        "label": "Path",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "tabs",
        "label": "Tabs",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": null
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Task",
    "isDocument": true,
    "isSystem": false,
    "isAssignable": true,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "title",
        "label": "Title",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "description",
        "label": "Description",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "subject",
        "label": "Subject",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaPointerField",
        "targetClassName": "Lead"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "done",
        "label": "Done",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "remind",
        "label": "Remind",
        "type": "Choice",
        "component": null,
        "defaultValue": "10",
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "0",
            "label": "On time"
          },
          {
            "value": "10",
            "label": "10 minutes before"
          },
          {
            "value": "15",
            "label": "15 minutes before"
          },
          {
            "value": "30",
            "label": "30 minutes before"
          },
          {
            "value": "60",
            "label": "1 hour before"
          },
          {
            "value": "1440",
            "label": "1 day before"
          }
        ]
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      },
      {
        "name": "assignedTo",
        "label": "Assigned To",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "assignedAt",
        "label": "Assigned At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": true,
          "get": null,
          "create": null,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "sales_manager",
          "find": true,
          "get": null,
          "create": null,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": true,
          "get": null,
          "create": null,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": null,
        "get": true,
        "create": true,
        "update": null,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Notification",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "message",
        "label": "Message",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaObjectField",
        "targetClassName": "NotificationMessage"
      },
      {
        "name": "data",
        "label": "Data",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": null
      },
      {
        "name": "type",
        "label": "Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "SMS",
            "value": "sms"
          }
        ]
      },
      {
        "name": "user",
        "label": "User",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "status",
        "label": "Status",
        "type": "Array",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "NotificationStatus"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "NotificationMessage",
    "isDocument": false,
    "isSystem": null,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "title",
        "label": "Title",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "body",
        "label": "Body",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "sound",
        "label": "Sound",
        "type": "String",
        "component": null,
        "defaultValue": "default",
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "image",
        "label": "Image",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "NotificationStatus",
    "isDocument": false,
    "isSystem": null,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "deviceId",
        "label": "Device Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "messageId",
        "label": "Message Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "unread",
        "label": "Unread",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "error",
        "label": "Error",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      }
    ],
    "schemaPermissions": null
  },
  {
    "name": "User",
    "isDocument": true,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "objectIcon",
        "label": "Object Icon",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "status",
        "label": "Status",
        "type": "String",
        "component": null,
        "defaultValue": "available",
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "online",
        "label": "Online",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "firstName",
        "label": "First Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "lastName",
        "label": "Last Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "nmlsId",
        "label": "Nmls Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "tags",
        "label": "Tags",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": "String"
      },
      {
        "name": "username",
        "label": "Username",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "password",
        "label": "Password",
        "type": "Password",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "role",
        "label": "Role",
        "type": "Choice",
        "component": null,
        "defaultValue": "loan_officer",
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "engineer",
            "label": "Engineer"
          },
          {
            "value": "admin",
            "label": "Administrator"
          },
          {
            "value": "sales_manager",
            "label": "Sales Manager"
          },
          {
            "value": "team_manager",
            "label": "Team Manager"
          },
          {
            "value": "loan_officer",
            "label": "Loan Officer"
          }
        ]
      },
      {
        "name": "team",
        "label": "Team",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "value": "admins",
            "label": "Administration"
          },
          {
            "value": "sales",
            "label": "Sales Team",
            "parent": "admins"
          },
          {
            "value": "brad",
            "label": "Brad's Team",
            "parent": "sales"
          },
          {
            "value": "chris",
            "label": "Chris's Team",
            "parent": "sales"
          },
          {
            "value": "jeff",
            "label": "Jeff's Team",
            "parent": "sales"
          },
          {
            "value": "justin",
            "label": "Justin's Team",
            "parent": "sales"
          },
          {
            "value": "kirby",
            "label": "Kirby's Team",
            "parent": "sales"
          },
          {
            "value": "tim",
            "label": "Tim's Team",
            "parent": "sales"
          }
        ]
      },
      {
        "name": "licensedStates",
        "label": "Licensed States",
        "type": "MultiChoice",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "Alabama",
            "value": "AL"
          },
          {
            "label": "Alaska",
            "value": "AK"
          },
          {
            "label": "Arizona",
            "value": "AZ"
          },
          {
            "label": "Arkansas",
            "value": "AR"
          },
          {
            "label": "California",
            "value": "CA"
          },
          {
            "label": "Colorado",
            "value": "CO"
          },
          {
            "label": "Connecticut",
            "value": "CT"
          },
          {
            "label": "Delaware",
            "value": "DE"
          },
          {
            "label": "District of Columbia",
            "value": "DC"
          },
          {
            "label": "Florida",
            "value": "FL"
          },
          {
            "label": "Georgia",
            "value": "GA"
          },
          {
            "label": "Hawaii",
            "value": "HI"
          },
          {
            "label": "Idaho",
            "value": "ID"
          },
          {
            "label": "Illinois",
            "value": "IL"
          },
          {
            "label": "Indiana",
            "value": "IN"
          },
          {
            "label": "Iowa",
            "value": "IA"
          },
          {
            "label": "Kansas",
            "value": "KS"
          },
          {
            "label": "Kentucky",
            "value": "KY"
          },
          {
            "label": "Louisiana",
            "value": "LA"
          },
          {
            "label": "Maine",
            "value": "ME"
          },
          {
            "label": "Maryland",
            "value": "MD"
          },
          {
            "label": "Massachusetts",
            "value": "MA"
          },
          {
            "label": "Michigan",
            "value": "MI"
          },
          {
            "label": "Minnesota",
            "value": "MN"
          },
          {
            "label": "Mississippi",
            "value": "MS"
          },
          {
            "label": "Missouri",
            "value": "MO"
          },
          {
            "label": "Montana",
            "value": "MT"
          },
          {
            "label": "Nebraska",
            "value": "NE"
          },
          {
            "label": "Nevada",
            "value": "NV"
          },
          {
            "label": "New Hampshire",
            "value": "NH"
          },
          {
            "label": "New Jersey",
            "value": "NJ"
          },
          {
            "label": "New Mexico",
            "value": "NM"
          },
          {
            "label": "New York",
            "value": "NY"
          },
          {
            "label": "North Carolina",
            "value": "NC"
          },
          {
            "label": "North Dakota",
            "value": "ND"
          },
          {
            "label": "Ohio",
            "value": "OH"
          },
          {
            "label": "Oklahoma",
            "value": "OK"
          },
          {
            "label": "Oregon",
            "value": "OR"
          },
          {
            "label": "Pennsylvania",
            "value": "PA"
          },
          {
            "label": "Rhode Island",
            "value": "RI"
          },
          {
            "label": "South Carolina",
            "value": "SC"
          },
          {
            "label": "South Dakota",
            "value": "SD"
          },
          {
            "label": "Tennessee",
            "value": "TN"
          },
          {
            "label": "Texas",
            "value": "TX"
          },
          {
            "label": "Utah",
            "value": "UT"
          },
          {
            "label": "Vermont",
            "value": "VT"
          },
          {
            "label": "Virginia",
            "value": "VA"
          },
          {
            "label": "Washington",
            "value": "WA"
          },
          {
            "label": "West Virginia",
            "value": "WV"
          },
          {
            "label": "Wisconsin",
            "value": "WI"
          },
          {
            "label": "Wyoming",
            "value": "WY"
          }
        ]
      },
      {
        "name": "history",
        "label": "History",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": null
      },
      {
        "name": "bookmarks",
        "label": "Bookmarks",
        "type": "Array",
        "component": null,
        "defaultValue": [],
        "required": false,
        "__typename": "SchemaArrayField",
        "targetClassName": null
      },
      {
        "name": "emailLines",
        "label": "Email Lines",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "EmailLine"
      },
      {
        "name": "phoneLines",
        "label": "Phone Lines",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "PhoneLine"
      },
      {
        "name": "velocifyId",
        "label": "Velocify Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "email",
        "label": "Email",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "voicemailUrl",
        "label": "Voicemail Url",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "devices",
        "label": "Devices",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "Device"
      },
      {
        "name": "sessions",
        "label": "Sessions",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "Session"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "sales_manager",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "team_manager",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "loan_officer",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Device",
    "isDocument": true,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "deviceId",
        "label": "Device Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "deviceType",
        "label": "Device Type",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "browserName",
        "label": "Browser Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "browserVersion",
        "label": "Browser Version",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "osName",
        "label": "Os Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "osVersion",
        "label": "Os Version",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "platformType",
        "label": "Platform Type",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "platformVendor",
        "label": "Platform Vendor",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "engineName",
        "label": "Engine Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "version",
        "label": "Version",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "apn",
        "label": "Apn",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "fcm",
        "label": "Fcm",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "user",
        "label": "User",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "active",
        "label": "Active",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "sessions",
        "label": "Sessions",
        "type": "Relation",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaRelationField",
        "targetClassName": "Session"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "sales_manager",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "team_manager",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "loan_officer",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Session",
    "isDocument": true,
    "isSystem": false,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "device",
        "label": "Device",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "Device"
      },
      {
        "name": "user",
        "label": "User",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User"
      },
      {
        "name": "active",
        "label": "Active",
        "type": "Boolean",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "sales_manager",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "team_manager",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "loan_officer",
          "find": null,
          "get": null,
          "create": null,
          "update": null,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": [
            "role",
            "team",
            "emailLines",
            "phoneLines"
          ],
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "Activity",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "initiator",
        "label": "Initiator",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User|Contact"
      },
      {
        "name": "receiver",
        "label": "Receiver",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "User|Contact"
      },
      {
        "name": "subject",
        "label": "Subject",
        "type": "Pointer",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaPointerField",
        "targetClassName": "Lead"
      },
      {
        "name": "action",
        "label": "Action",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "meta",
        "label": "Meta",
        "type": "Object",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaObjectField",
        "targetClassName": null
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  },
  {
    "name": "PhoneMessageTemplate",
    "isDocument": true,
    "isSystem": true,
    "isAssignable": null,
    "__typename": "Class",
    "schemaFields": [
      {
        "name": "objectName",
        "label": "Object Name",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "text",
        "label": "Text",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "type",
        "label": "Type",
        "type": "Choice",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaChoiceField",
        "options": [
          {
            "label": "SMS",
            "value": "sms"
          },
          {
            "label": "Call",
            "value": "call"
          }
        ]
      },
      {
        "name": "title",
        "label": "Title",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": true,
        "__typename": "SchemaStringField"
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "Boolean",
        "component": null,
        "defaultValue": false,
        "required": false,
        "__typename": "SchemaBooleanField"
      },
      {
        "name": "objectId",
        "label": "Object Id",
        "type": "String",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaStringField"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "updatedAt",
        "label": "Updated At",
        "type": "Date",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaDateField",
        "isTime": false
      },
      {
        "name": "ACL",
        "label": "ACL",
        "type": "ACL",
        "component": null,
        "defaultValue": null,
        "required": false,
        "__typename": "SchemaACLField"
      }
    ],
    "schemaPermissions": {
      "users": [],
      "roles": [
        {
          "roleName": "admin",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": true,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        },
        {
          "roleName": "engineer",
          "find": null,
          "get": null,
          "create": true,
          "update": true,
          "delete": null,
          "protectedFields": null,
          "readOnlyFields": null,
          "__typename": "SchemaRolePermissions"
        }
      ],
      "authenticated": {
        "find": true,
        "get": true,
        "create": true,
        "update": true,
        "delete": true,
        "protectedFields": [],
        "readOnlyFields": null,
        "__typename": "SchemaAuthPermissions"
      },
      "public": {
        "find": true,
        "get": true,
        "create": null,
        "update": null,
        "delete": null,
        "protectedFields": null,
        "readOnlyFields": null,
        "__typename": "SchemaPublicPermissions"
      },
      "__typename": "SchemaPermissions"
    }
  }
]


 export default Classes;