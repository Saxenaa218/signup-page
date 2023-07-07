const elements = [
    {
        type: "text",
        label: "Page Title",
        placeholder: "Please enter the page title",
        isRequired: true,
        uniqueName: "pageTitle"
    },
    {
        type: "text",
        label: "Subheading",
        placeholder: "Please enter the page title",
        isRequired: true,
        uniqueName: "subHeading"
    },
    {
        type: "upload",
        label: "Brand logo",
        placeholder: "Click to upload",
        isRequired: true,
        uniqueName: "brandLogo"
    },
    {
        type: "text",
        label: "Email input Title",
        placeholder: "Please enter the email input title",
        isRequired: true,
        uniqueName: "emailInputTitle"
    },
    {
        type: "text",
        label: "Email input Placeholder",
        placeholder: "Please enter the email input placeholder title",
        isRequired: true,
        uniqueName: "emailInputPlaceholder"
    },
    {
        type: "text",
        label: "Submit Button Text",
        placeholder: "CTA text",
        isRequired: true,
        uniqueName: "submitButtonText"
    }
];

const initialNodes = [
    { id: "1", position: { x: 300, y: 300 }, data: { label: "HTTP Trigger" } },
    { id: "2", position: { x: 300, y: 400 }, data: { label: "Signup page" } },
    { id: "3", position: { x: 300, y: 500 }, data: { label: "Redirect User" } }
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" }
];

const urlRendererConfig = {
    trigger: {
        heading: "HTTP Trigger",
        label: "URL",
        uniqueName: "url",
        isRequired: true,
        placeholder: "Enter a valid URL",
        type: "url",
        subHeading: "Sandbox URL"
    },
    redirectUser: {
        heading: "Redirect User",
        label: "URL",
        uniqueName: "url",
        isRequired: true,
        placeholder: "Enter a valid URL",
        type: "url",
        subHeading: "Redirect URL"
    }
};

const formData = {
    pageTitle: "some title",
    subHeading: "sub heading",
    brandLogo: "somethinfg",
    emailInputTitle: "email input title",
    emailInputPlaceholder: "email input placeholder",
    submitButtonText: "Submit"
};

export { elements, initialEdges, urlRendererConfig, initialNodes, formData };
