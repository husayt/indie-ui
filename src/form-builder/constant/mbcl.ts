import type { FormElementOrList, FormStep } from '@/form-builder/form-types';

export const mbcl: FormElementOrList[] | FormStep[] =
    [
        {
            "id": "1",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "Summary"
                },
                {
                    "name": "paragraph",
                    "fieldType": "P",
                    "static": true,
                    "content": "Please provide product details"
                },
                {
                    "name": "product-name",
                    "description": "",
                    "placeholder": "e.g. LME CAD, OTC EUA in JPY, ICE NBP, EEX TTF etc...",
                    "label": "Product Name",
                    "fieldType": "Input",
                    "required": true
                },
                {
                    "name": "requestor-name",
                    "description": "Please enter the name of the trader or marketer requesting the product",
                    "placeholder": "",
                    "label": "Requestor Name",
                    "fieldType": "Input"
                },
                {
                    "name": "trader-name",
                    "label": "Trader Name",
                    "placeholder": "",
                    "description": "Please enter the name of the trader who will be responsible for risk and pricing",
                    "fieldType": "Input"
                },
                {
                    "name": "commodity",
                    "label": "Commodity",
                    "options": [

                        {
                            "value": "base-metals",
                            "label": "Base Metals"
                        },
                        {
                            "value": "coal",
                            "label": "Coal"
                        },
                        {
                            "value": "crude",
                            "label": "Crude"
                        },
                        {
                            "value": "light-ends",
                            "label": "Light Ends"
                        },
                        {
                            "value": "middle-distillates",
                            "label": "Middle Distillates"
                        },
                        {
                            "value": "heavy-distillates",
                            "label": "Heavy Distillates"
                        },
                        {
                            "value": "na-nat-gas",
                            "label": "NA Nat Gas"
                        },
                        {
                            "value": "eur-nat-gas",
                            "label": "Euro Nat Gas"
                        },
                        {
                            "value": "na-power",
                            "label": "NA Power"
                        },
                        {
                            "value": "eur-power",
                            "label": "Eur Powr & Carbon"
                        },
                        {
                            "value": "freight",
                            "label": "Freight"
                        },
                        {
                            "value": "precious-metals",
                            "label": "Precious Metals"
                        },
                        {
                            "value": "other",
                            "label": "Other"
                        }
                    ],
                    "fieldType": "Select",
                    "placeholder": "",
                    "description": "Please select the Commodity group of the product",
                    "required": true
                },
                {
                    "name": "rationale",
                    "label": "Business Rationale",
                    "placeholder": "",
                    "description": "Please provide a short narrative",
                    "fieldType": "Input"
                },
                {
                    "name": "open-interest",
                    "label": "Open Interest",
                    "placeholder": "",
                    "description": "Please provide value in lots",
                    type: "number",
                    "fieldType": "Input"
                },
                {
                    "name": "internal-warning-limit",
                    "label": "Internal Warning Limit Requested",
                    "placeholder": "",
                    "description": "Please provide value in lots",
                    type: "number",
                    "fieldType": "Input"
                },
                {
                    "name": "warning-limit",
                    "label": "Warning Limit Requested",
                    "placeholder": "",
                    "description": "Please provide value in lots",
                    type: "number",
                    "fieldType": "Input"
                },
                {
                    "name": "tenor",
                    "label": "Tenor Requested",
                    "description": "Please provide value in months",
                    type: "number",
                    "fieldType": "Input"
                }
            ]
        },
        {
            "id": "2",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "General Information"
                },

                {
                    "label": "Product Type",
                    type: "single",
                    "options": [
                        {
                            "value": "etd",
                            "label": "ETD"
                        },
                        {
                            "value": "otc",
                            "label": "OTC"
                        },
                        {
                            "value": "otd-otc",
                            "label": "ETD & OTC"
                        }
                    ],
                    "fieldType": "ToggleGroup",
                    required: true,
                    "name": "product-type"
                }
            ]
        },
        {
            "id": "3",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "Exchange "
                },
                {
                    "name": "exchange-name",
                    "label": "Exchange Name",
                    "placeholder": "e.g. LME, ICE, CME, SGX, ...",
                    "fieldType": "Input"
                },
                {
                    "name": "exchange-product-code",
                    "label": "Exchange Product Code",
                    "placeholder": "e.g. Contract Symbol, Product Code, ...",
                    "fieldType": "Input"
                },
                {
                    "name": "product-specifications-link",
                    "label": "Link to Product Specifications",
                    "description": "Weblink to the product specs on the exchange website",
                    "fieldType": "Textarea"
                },
                {
                    "name": "settlement-type",
                    "fieldType": "RadioGroup",
                    "label": "Exchange Settlement Type",
                    "description": "How does the Exchange settle this product?",
                    "options": [
                        {
                            "label": "Cash Settled",
                            "value": "cash-settled"
                        },
                        {
                            "label": "Physically Settled",
                            "value": "physically-settled"
                        }
                    ]
                }
            ]
        },

        {
            "id": "4",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "Product Specifics"
                },
                {
                    "name": "paragraph",
                    "fieldType": "P",
                    "static": true,
                    "content": "Please specify the contract specs"
                }, 
                {
                    "name": "mbc-settlement-type",
                    "fieldType": "RadioGroup",
                    "label": "MBC Settlement Type",
                    "description": "How does MBC settle this product?",
                    "options": [
                        {
                            "label": "Cash Settled",
                            "value": "cash-settled"
                        },
                        {
                            "label": "Physically Settled",
                            "value": "physically-settled"
                        }
                    ]
                },
              
                {
                    "name": "contract-size",
                    "label": "Contract Size",
                    "placeholder": "Enter your text",
                    "fieldType": "Input",
                    "type": "number"
                  },
                 
                  {
                    "name": "pricing-unit",
                    "label": "Pricing Unit",
                    "placeholder": "Enter your text",
                    "fieldType": "Input",
                    "type": "text"
                  },
                  {
                    "label": "Currency",
                    "options": [
                      {
                        "value": "usd",
                        "label": "USD"
                      },
                      {
                        "value": "eur",
                        "label": "EUR"
                      },
                      {
                        "value": "gbp",
                        "label": "GBP"
                      },
                      {
                        "value": "jpy",
                        "label": "JPY"
                      }
                    ],
                    "fieldType": "RadioGroup",
                    "name": "currency"
                  },
                  [
                    {
                      "label": "Pricing Holiday Calendar",
                      "type": "multiple",
                      "options": [
                        {
                          "value": "uk",
                          "label": "UK"
                        },
                        {
                          "value": "us",
                          "label": "US"
                        },
                        {
                          "value": "sg",
                          "label": "SG"
                        },
                        {
                          "value": "eu",
                          "label": "EU"
                        }
                      ],
                      "fieldType": "ToggleGroup",
                      "name": "pricing-holiday-calendar"
                    },
                    {
                      "name": "pricing-holiday-calendar-x",
                      "label": "Other",
                      "placeholder": "-",
                      "fieldType": "Input"
                    }
                  ],
                  [
                    {
                      "label": "Settlement  Holiday Calendar",
                      "type": "multiple",
                      className: "w-none",
                      "options": [
                        {
                          "value": "uk",
                          "label": "UK"
                        },
                        {
                          "value": "us",
                          "label": "US"
                        },
                        {
                          "value": "sg",
                          "label": "SG"
                        },
                        {
                          "value": "eu",
                          "label": "EU"
                        }
                      ],
                      "fieldType": "ToggleGroup",
                      "name": "settlement-holiday-calendar"
                    },
                    {
                      "name": "settlement-holiday-calendar-x",
                      "label": "Other",
                      "placeholder": "-",
                      "fieldType": "Input"
                    }
                  ],
                  {
                    "label": "Rounding Decimal Points",
                    "description": "",
                    "placeholder": "Enter your text",
                    "fieldType": "Input",
                    "name": "rounding-points"
                  },
                  {
                    "name": "maturity-date-sequence",
                    "fieldType": "Input",
                    "type": "number",
                    "placeholder": "e.g. number of days after expiry",
                    "label": "Maturity Date Sequence"
                  }
            ]
        },
        {
            "id": "5",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "Client Information"
                },
                {
                    "name": "prospective-client-name",
                    "label": "Prospective Client Name",
                    "fieldType": "Input",           
                    "placeholder": "If none, please enter Tokyo"
                }, {
                    "name": "oms-client-code",
                    "label": "OMS Client Code",
                    "fieldType": "Input",                
                    "placeholder": "If none, please enter IHL (Tokyo's OMS code)"
                }
            ]
        },
        {
            "id": "6",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "Market Data"
                },
                {
                    "name": "paragraph",
                    "fieldType": "P",
                    "static": true,
                    "content": "Please specify Pricing details"
                },
                {
                    "name": "settlement-reference-source",
                    "label": "Settlement Reference Source",
                    "fieldType": "Input",
                    "placeholder": ""
                },
                {
                    "name": "is-subscription-purchased",
                    "fieldType": "RadioGroup",
                    "label": "Has the subscription been purchased?",
                    "description": "Has the subscription for the reference source been purchased?",
                    "options": [
                        {
                            "label": "Yes",
                            "value": "yes"
                        },
                        {
                            "label": "No",
                            "value": "no"
                        }
                    ]
                },
                [
                    {
                      "label": "Pricing Source",
                      "type": "multiple",
                      "options": [
                        {
                          "value": "trader-mark",
                          "label": "Trader Mark"
                        },
                        {
                          "value": "exchange",
                          "label": "Exchange"
                        }
                      ],
                      "fieldType": "ToggleGroup",
                      "name": "pricing-source"
                    },
                    {
                      "name": "pricing-source-x",
                      "label": "Other",
                      "placeholder": "-",
                      "fieldType": "Input"
                    }
                  ],
            ]
        },{
            "id": "7",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "IPV"
                },
                {
                    "name": "paragraph",
                    "fieldType": "P",
                    "static": true,
                    "content": "IPV Requirements"
                },
                {
                    "name": "settlement-reference-source",
                    "label": "If Pricing Source is not Exchange, please explain why?",
                    "fieldType": "Input",
                    "placeholder": ""
                },
                {
                    "name": "is-ipv-required",
                    "fieldType": "RadioGroup",
                    "label": "Is IPV required?",
                    "description": "",
                    "options": [
                        {
                            "label": "Yes",
                            "value": "yes"
                        },
                        {
                            "label": "No",
                            "value": "no"
                        }
                    ]
                },
                {
                    "name": "independent-source",
                    "label": "What is the independent source to use for this product?",
                    "fieldType": "Input",
                    "placeholder": ""
                },{
                    "name": "ipv-tolerance-flag",
                    "label": "What is the IPV tolerance flag?",
                    "fieldType": "Input",
                    "placeholder": ""
                },
            ]
        },{
            "id": "8",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "System Configuration"
                },
                {
                    "name": "paragraph",
                    "fieldType": "P",
                    "static": true,
                    "content": "General Information"
                },
                {
                    "name": "openlink-index-name",
                    "label": "Openlink Index Name",
                    "fieldType": "Input",
                    "placeholder": ""
                },{
                    "name": "oms-index-name",
                    "label": "OMS Index Name",
                    "fieldType": "Input",
                    "placeholder": ""
                },
                {
                    "name": "market",
                    "label": "Market",
                    "fieldType": "RadioGroup",
                    "description": "",
                    "options": [
                        {
                            "value": "metals",
                            "label": "Metals"
                        },
                        {
                            "value": "energy",
                            "label": "Energy"
                        }
                    ]
                }
            ]
        },{
            "id": "9",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "System Configuration"
                },
                {
                    "name": "paragraph",
                    "fieldType": "P",
                    "static": true,
                    "content": "Metals specific information"
                },
               
                {
                    "name": "instrument-type",
                    "label": "Instrument Type",
                    "fieldType": "MultiSelect",
                    "placeholder": "",
                    "description": "",
                    "options": [
                        {
                            "value": "outright",
                            "label": "Outright"
                        },
                        {
                            "value": "bullet-swap",
                            "label": "Bullet Swap"
                        },{
                            "value": "fixed-float",
                            "label": "Fixed/Float"
                        },
                        {
                            "value": "float-float",
                            "label": "Float/Float"
                        },{
                            "value": "option",
                            "label": "Option"
                        },
                        {
                            "value": "other",
                            "label": "Other"
                        }
                    ]
                },
                {
                    "name": "portfolio",
                    "label": "Portfolio(s)",
                    "fieldType": "Input",
                    "placeholder": ""
                },{
                    "name": "oms-blotter-tab-name",
                    "label": "OMS Blotter Tab Name",
                    "fieldType": "Input",
                    "placeholder": "",
                    "description": "Please specify if product is to be included to an existing tab or to be setup in a new tab"
                },
            ]
        },{
            "id": "10",
            "stepFields": [
                {
                    "name": "heading-2",
                    "fieldType": "H2",
                    "static": true,
                    "content": "System Configuration"
                },
                {
                    "name": "paragraph",
                    "fieldType": "P",
                    "static": true,
                    "content": "Energy specific information"
                },
               
                {
                    "name": "instrument-type",
                    "label": "Instrument Type",
                    "fieldType": "MultiSelect",
                    "placeholder": "",
                    "description": "",
                    "options": [
                        {
                            "value": "swap",
                            "label": "Swap"
                        },
                       {
                            "value": "future",
                            "label": "Future"
                        }, {
                            "value": "option",
                            "label": "Option"
                        },
                        {
                            "value": "other",
                            "label": "Other"
                        }
                    ]
                }
            ]
        }
    ]