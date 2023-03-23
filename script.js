const cc = CookiesConsentJS({
    buttons: ["reject", "accept", "settings", "dismiss"],
    expirationDays: 365,
    content: {
        title: "Cookies compliance",
        message: "We use cookies",
        btnAccept: "Accept all",
        btnReject: "Reject all",
        btnDismiss: "Cookies policy",
        btnSettings: "Settings",
        btnSettingsSelectAll: "Select all",
        btnSettingsUnselectAll: "Unselect all",
        btnSettingsAccept: "Accept selection",
        policy: "Privacy Policy",
        align: "left",
        policyLink: "https://alwaysjudgeabookbyitscover.com/privacy/",
    },
    cookies: {
        rightToAccess: {
            name: "right_to_access",
            description: "<h2>Right to access</h2><p>You can contact the website to request more information about their privacy policy</p>",
            checked: true,
            disabled: false,
        },
        rightToRectification: {
            name: "right_to_rectification",
            description: "<h2>Right to rectification</h2><p>You can choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.</p>",
            checked: false,
            disabled: false,
        },
        rightToObject: {
            name: "right_to_object",
            description: "<h2>Right to object</h2><p>You can opt-out of the Common ID tracking cookie by clicking on the provided link.</p>",
            checked: false,
            disabled: false,
        },
        rightToWithdrawConsent: {
            name: "right_to_withdraw_consent",
            description: "<h2>Right to withdraw consent</h2><p>You can revisit or change their consent choices at any time by clicking on the provided link for EU users.</p>",
            checked: false,
            disabled: false,
        },
        rightToBeForgotten: {
            name: "right_to_be_forgotten",
            description: "<h2>Right to be forgotten</h2><p>The website encourages users to contact them if they believe your child has provided personal identifiable information and you will promptly remove such information from your records.</p>",
            checked: false,
            disabled: false,
        },
        rightToDataPortability: {
            name: "right_to_data_portability",
            description: "<h2>Right to data portability</h2><p>Here is no mention of this right in the privacy policy.</p>",
            checked: false,
            disabled: false,
        },
    },
    callback : {
        first_load: null,
        accept: null,
        reject: null,
        load: null,
    },
});

