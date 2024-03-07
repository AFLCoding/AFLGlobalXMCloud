import { useForm, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../core/atoms/FormControls/Input';
import props from '../../data/contactUs.json';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';

export type FormControlValue = string | number | boolean | null;
export interface energySavingProps {
    totalEnergySavings: string;
    totalEnergySavingsInCAD: string;
    totalRebate: string;
    totalGreenHouseGasSavings: string;
    totalEquivalentCarsAndTrucks: string;
    totalEquivalentLitresOfGasoline: string;
    totalEquivalentPeopleInAYear: string;
    totalEquivalentAcresOfForest: string;
    totalEquivalentTonnesOfWaste: string;
}
export interface SendEmailProps {
    type?: string;
    to: string;
    subject?: string;
    params?: { [key: string]: string | number } | energySavingProps;
    files?: Array<File | null>;
}
export enum MAIL_TYPE {
    SUBSCRIBE = 'SUBSCRIBE',
    ENERGY_CALCULATOR = 'ENERGY_CALCULATOR',
    CONTACT_US_FORM = 'CONTACT_US_FORM',
    MORE_INFO_FORM = 'MORE_INFO_FORM',
    PERSONA_CTA_FORM = 'PERSONA_CTA_FORM',
    SERVICE_PERSONA_FORM = 'SERVICE_PERSONA_FORM',
    DEFAULT = 'DEFAULT',
}
type EmailResponse = {
    success: boolean;
    message: string;
};
const validationSchema = yup.object({
    Service: yup.string(),
    FirstName: yup.string().required('This Field is Required'),
    LastName: yup.string().required('This Field is Required'),
});
const getBase64 = async (file: File | null) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        if (file) {
            reader.onload = () => {
                const dataUrlPrefix = `data:${file.type};base64,`;
                resolve(String(reader.result).replace(dataUrlPrefix, ''));
            };
            reader.readAsDataURL(file);
        } else resolve(null);
    });
};
const sendEmail = async ({
    type,
    to,
    subject,
    params,
    files,
}: SendEmailProps): Promise<EmailResponse> => {
    try {
        const attachments = [];

        for (const file of files || []) {
            const content = await getBase64(file);
            attachments.push({
                filename: file?.name,
                type: file?.type,
                disposition: 'attachment',
                content: content,
            });
        }

        const config = {
            to,
            subject: subject || 'AFL',
            params,
            type,
            attachments: attachments,
        };

        console.log('Message', config);
        // Send the email to the API route for email
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(config),
        });
        if (response.status === 200) {
            return { success: true, message: 'Email sent successfully' };
        } else {
            return { success: false, message: 'Error sending email' };
        }
    } catch (error) {
        return { success: false, message: 'Error sending email' };
    }
};
const ContactUs = () => {
    const formMethods = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = async (data: { [key: string]: FormControlValue }) => {
        const contactUsEmailConfig: SendEmailProps = {
            type: MAIL_TYPE.CONTACT_US_FORM,
            to: data.EmailAddress as string,
            params: data as { [key: string]: string | number },
        };
        const contactEmail = await sendEmail(contactUsEmailConfig);
        if (contactEmail.success) {
            console.log('form submitted');
        } else {
            console.log('error', contactEmail.message);
        }
    };


    // Sitecore Item Data
    const sitecoreItemData = {
        fields: {
            myRichTextField: {
                value: "<!--Pulling interactive map content-->\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://webapps.aflglobal.com/InteractiveMaps/Edge_Solutions/css/webmap_10-14.css\">\r\n\r\n\r\n<script src=\"https://code.createjs.com/1.0.0/createjs.min.js\"></script>\r\n<script src=\"https://webapps.aflglobal.com/video/maps/can/CAN_web.js\"></script>\r\n<script src=\"https://webapps.aflglobal.com/InteractiveMaps/web_map_links.js\"></script>\r\n\r\n<body>\r\n  \r\n  \r\n    \r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          \r\n          <!--start-new-->\r\n  \r\n          <!--end-new-->\r\n          \r\n        </div>\r\n    \r\n   \r\n    <!--adding row-->\r\n    <div class=\"row\">\r\n      \r\n      <div class=\"col-12\">\r\n          <!--Adding HTML Code-->\r\n<script>\r\n// Global Scripts\r\n\tvar iconArray = [\"\"];\r\nvar holder = \"\";\r\nvar holderSet = \"nothing\";\r\nfunction zoomClick()\r\n{\r\n\tlinksVis(0);\r\n\texportRoot.main_mc.visible = true;\r\n\teval(\"this.gotoAndStop('start')\");\t\r\n\teval(\"exportRoot.\"+holder+\"_mc.visible = false\");\r\n\tfilterResetClick(1);\r\n\tholderSet = \"nothing\";\r\n\t//removes event listeners from icons\r\n\tfor(x=0; x < iconArray.length; x++)\r\n\t{ eval('this.'+iconArray[x]+'_mc._listeners.click.splice(0,1)'); }\r\n\t//removes event listener from zoom out button\r\n\tthis.zoomOut._listeners.click.splice(0,1);\r\n\tbgChange(\"main\"); //NEW\r\n}\r\nfunction addListenersFunction()\r\n{\r\n\tvar shortCut = \"exportRoot.\"+holder+\"_mc\";\r\n\t//add event listeners to icons\r\n\tfor(y=0; y < iconArray.length; y++)\r\n\t{\t\t\r\n\t\teval(shortCut+'.'+iconArray[y]+'_mc.addEventListener(\"click\", iconClick.bind(shortCut, \"'+iconArray[y]+'\"))');\r\n\t}\r\n\t//add event listener to zoom out button\r\n\teval(shortCut+'.zoomOut.addEventListener(\"click\", zoomClick.bind('+shortCut+'))');\r\n}\r\nfunction cursorSet()\r\n{\r\n\tfor(y=0; y < iconArray.length; y++)\r\n\t{\r\n\t\teval('exportRoot.'+holder+'_mc.'+iconArray[y]+'_mc.cursor = \"pointer\"');\r\n\t}\r\n}\r\nfunction iconClick(icon)\r\n{\t\r\n\tvar shortCut = \"exportRoot.\"+holder+\"_mc\";\t\r\n\teval(shortCut+\".\"+icon+\"_mc.gotoAndPlay('start')\");\r\n\tif((icon == \"titanA\") || (icon == \"titanB\") || (icon == \"titanPo\") || (icon == \"titanPe\")) {icon = \"titan\";}\r\n\tif((icon == \"wall1\") || (icon == \"wall2\")) {icon = \"wall\";}\r\n//code for dom overlay container\t\t\r\n\r\n\tvar m = \"\";\r\n\tvar n = \"\";\r\n\tvar r = \"\";\r\n\tvar linkLength = \"\";\r\n\tvar linkTitle = \"\";\r\n\tvar linkWeb = \"\";\r\n\tm = \"links.\"+icon+\".length\";\r\n\tlinkLength = eval(m);\r\n\tfor(p = 0; p < linkLength; p++)\r\n\t\t{\r\n\t\t\tr = \"links.\"+icon+\"[\"+p+\"].title\";\r\n\t\t\tlinkTitle = eval(r);\r\n\t\t\tr = \"links.\"+icon+\"[\"+p+\"].web\";\r\n\t\t\tlinkWeb = eval(r);\r\n\t\t\tn += '<p class=\"link\"><a href=\"'+linkWeb+'\" target=\"_blank\">'+linkTitle+'</a></p>';\r\n\t\t}\r\n\tdocument.getElementById(\"dom_overlay_container\").innerHTML = n;\t\t\r\n\r\n\tif(holderSet == \"nothing\")\r\n\t\t{ eval(\"exportRoot.\"+holder+\"_mc.gotoAndPlay('blueBox')\"); holderSet = \"something\"; }\r\n}\r\nfunction linksVis(value)\r\n{\r\n\tif(value == 1){ document.getElementById(\"dom_overlay_container\").style.visibility = \"visible\"; }\r\n\tif(value == 0){ document.getElementById(\"dom_overlay_container\").style.visibility = \"hidden\"; }\r\n}\r\nfunction bgChange(bg)//NEW\r\n{\r\n\tvar replacement = \"https://webapps.aflglobal.com/video/maps/can/images/\"+bg+\".jpg\";\r\n\tdocument.getElementById(\"canvas\").style.backgroundImage = \"url(\"+replacement+\")\";\r\n}\r\nfunction filterClick(filter)\r\n{\r\n\tshowLength = filter.length;\r\n\tfilterResetClick(0);\t\r\n\tfor (x = 0; x < showLength; x++)\r\n\t\t{\r\n\t\t\teval('exportRoot.'+holder+'_mc.'+filter[x]+'_mc.visible = true');\r\n\t\t}\r\n}\r\nfunction filterResetClick(see)\r\n{\r\n\tvar allLength = 0;\r\n\tallLength = iconArray.length;\r\n\tfor(x = 0; x < allLength; x++)\r\n\t\t{ \r\n\t\t\tif(see == 1){eval('exportRoot.'+holder+'_mc.'+iconArray[x]+'_mc.visible = true');}\r\n\t\t\tif(see == 0){eval('exportRoot.'+holder+'_mc.'+iconArray[x]+'_mc.visible = false');}\r\n\t\t}\r\n}</script>\r\n<script>\r\nvar canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;\r\nfunction init() {\r\n\tcanvas = document.getElementById(\"canvas\");\r\n\tanim_container = document.getElementById(\"animation_container\");\r\n\tdom_overlay_container = document.getElementById(\"dom_overlay_container\");\r\n\tvar comp=AdobeAn.getComposition(\"F3574088C2052747A142ABBF8232AD94\");\r\n\tvar lib=comp.getLibrary();\r\n\thandleComplete({},comp);\r\n}\r\nfunction handleComplete(evt,comp) {\r\n\t//This function is always called, irrespective of the content. You can use the variable \"stage\" after it is created in token create_stage.\r\n\tvar lib=comp.getLibrary();\r\n\tvar ss=comp.getSpriteSheet();\r\n\texportRoot = new lib.CAN_web_2();\r\n\tstage = new lib.Stage(canvas);\r\n\tstage.enableMouseOver();\t\r\n\t//Registers the \"tick\" event listener.\r\n\tfnStartAnimation = function() {\r\n\t\tstage.addChild(exportRoot);\r\n\t\tcreatejs.Ticker.framerate = lib.properties.fps;\r\n\t\tcreatejs.Ticker.addEventListener(\"tick\", stage);\r\n\t}\t    \r\n\t//Code to support hidpi screens and responsive scaling.\r\n\tAdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);\t\r\n\tAdobeAn.compositionLoaded(lib.properties.id);\r\n\tfnStartAnimation();\r\n}\r\n</script>\r\n            \r\n            <script> \r\n            $(document).ready(function () {\r\n            init();\r\n            });\r\n            </script>\r\n            <!--StartNew-->\r\n            \r\n            <a id=\"map\"></a>\r\n             \r\n           \r\n            <!--EndNew-->\r\n            <body onload=\"init();\" style=\"margin:0px;\">\r\n<div id=\"animation_container\" style=\"width:100%;\">\r\n                    <canvas id=\"canvas\" style=\"background-image: url('https://webapps.aflglobal.com/video/maps/can/images/main.jpg');\"></canvas>\r\n                    <!--ADD--><div id=\"dom_overlay_container\" class=\"newLinks\"></div>\r\n                </div>\r\n            <p></p>\r\n            \r\n            \r\n            <!--start table container-->\r\n            <div class=\"container top\">\r\n            <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n            <!--Start Table-->\r\n<h2 style=\"font-size: 23; color: #0089c2; font-weight: 500; letter-spacing: 1.2px; line-height: 30px; margin: 0.67em 0;\">Converged Access Network</h2>\r\n            <p class=\"afl-subPages\">The access network of today and tomorrow is not an FTTH network. It is not a 5G Backhaul and Fronthaul network. And it is not a set of point-to-point connections for business services. It is all these things at once and more. It is a platform&mdash;a highway of the future connecting service providers to their customers. It is a highway that must carry all the traffic of today, and all the traffic that will be there tomorrow.</p>\r\n<p class=\"afl-subPages\">However, we don&rsquo;t know what the traffic of tomorrow will look like. How much will home data traffic grow compared to others? What will future versions of PON (Passive Optical Networks) require for wavelengths and split ratios? How dense will 5G, or someday 6G, small cells be? What will be their bandwidth requirements? How will enterprise connectivity demands change over 20 years? These questions are impossible to answer definitively. But we can still build the access network today which will be able to handle the answers&mdash;the&nbsp;AFL Converged Access Network.</p>\r\n<p class=\"afl-subPages\">AFL&rsquo;s fiber and equipment solutions can help you build an expandable, flexible, and accessible network in a range of application areas including:</p>\r\n<ul class=\"afl-subPages\" style=\"padding-left: 2.5rem; list-style-type: disc; margin: 1.5rem; line-height: 20px;\">\r\n    <li><a href=\"~/link.aspx?_id=4B99FE07BC584510BD052431D2DFE5B9&amp;_z=z\">5G/Wireless Fronthaul/Backhaul</a></li>\r\n    <li><a href=\"~/link.aspx?_id=E2BF9E86774E40CD9566F885B1563A18&amp;_z=z\">Fiber to the Home/Business (FTTX)</a></li>\r\n    <li><a href=\"~/link.aspx?_id=5F0F2D1785634950992C1C71A092F42A&amp;_z=z\">Multiple Dwelling Unit/Multiple Tenant Units (MXU)</a></li>\r\n    <li><a href=\"~/link.aspx?_id=D2AD649AF7494372BD4A1F140D5C5FB4&amp;_z=z\">Campuses and Venues</a></li>\r\n    <li><a href=\"~/link.aspx?_id=F183CD9C13F14070A9AF15408992FCAC&amp;_z=z\">Enterprise</a></li>\r\n    <li><a href=\"~/link.aspx?_id=EA68E536836E4673B4397F0C9E44A1A9&amp;_z=z\">Small Cell</a></li>\r\n</ul>\r\n\r\n<p class=\"afl-subPages\">\r\nThe AFL Converged Access Network meets the demands of the present and the future through three key characteristics: <strong>Expandability</strong>, <strong>Flexibility</strong> and <strong>Accessibility</strong>.</p>\r\n<p class=\"afl-subPages\">\r\n<strong>Expandability</strong> refers to the ability of a network to handle increased traffic in the future. The simplest way to do this is to deploy more fiber, but there is an expense to this. AFL solves this problem in several ways. One of the most dramatic ways is by providing the most compact ribbon cables available&mdash;AFL&rsquo;s Wrapping Tube Cable (WTC) using SpiderWeb Ribbon&reg; (SWR&reg;) technology. This cable allows more fiber to be deployed in the same pathways so that network operators can deploy far more fiber with only an incremental increase in cost. These higher density fiber cables allow operators to use a portion of the fibers to support current needs while allowing for further growth with the remaining dark fibers. AFL also accomplishes expandability through modular solutions such as <a href=\"~/link.aspx?_id=9AC63218727E4DB0AE818611E9007A64&amp;_z=z\">IDEAA&reg; distribution cabinets</a>&nbsp;and <a href=\"~/link.aspx?_id=DB44898475AB4B0B9D36E60964EFD850&amp;_z=z\">ASCEND&reg; fiber panels</a>.</p>\r\n<p class=\"afl-subPages\">\r\n<strong>Flexibility</strong> refers to the ability of a network to adapt to changes. The specific nature of network demands is hard to predict. What if a disruptive wireless service provider installs 5G nodes at certain locations, and needs fronthaul and backhaul services? Merely having fibers near the locations is not enough. Fortunately, AFL splice closures, terminals, hubs and other components provide modular and highly flexible solutions which allow the network to adapt. Need to make a new fiber connection somewhere? 12 fibers? 24? Change the wavelengths used in the network? With AFL solutions, the network can be redesigned to accommodate these scenarios.</p>\r\n<p class=\"afl-subPages\">\r\n<strong>Accessibility</strong> refers to the ability of technicians to go into the field and make network changes. It is one thing to make design changes on a computer image; however, making those changes in the field can be a challenge. Here, too, AFL provides solutions including highly modular, craft-friendly connections, industry-leading fusion splicers and test equipment which also make documentation simple, and even the design of <a href=\"~/link.aspx?_id=740F36E4074A417CBAB68839104B5517&amp;_z=z\">SpiderWeb Ribbon (SWR</a>) makes craft interaction easier.</p>\r\n<iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" frameborder=\"0\" src=\"https://www.youtube.com/embed/Ac0V33629Ms\" title=\"YouTube video player\" width=\"625\" height=\"352\" id=\"yt-293b8b72-4e3b-4047-8d71-f89655e5efbd\"></iframe>\r\n \r\n            \r\n            <p>&nbsp;</p>\r\n            \r\n            </div>\r\n            </div>\r\n            </div>\r\n   \r\n<style>\r\n              .animation_container {\r\n              background-color: none !important;\r\n              }\r\n              \r\n              #animation_container {\r\n                  \r\n                  height: none !important;\r\n                  \r\n              }\r\n              p {\r\n  font-size: 15px;\r\n  line-height: 22px;\r\n  letter-spacing: .2px;\r\n  margin: 0 0 0.95rem !important;\r\n  }\r\n  ul {\r\n  font-size: 16px;\r\n  }\r\n  body {\r\n  line-height: normal;\r\n  }\r\n  a {\r\n      text-decoration: none;\r\n      color: #00c0f3;\r\n  }\r\n  \r\n   .afl-subPages ul  {\r\n      padding-left: 2.5rem;\r\n      list-style-type: disc;\r\n      margin: 1.5rem;\r\n      line-height: 20px;\r\n  }\r\n\t</style>\r\n<style>\r\n#animation_container {\r\n    width: 100% !important;\r\n    }\r\n#canvas {\r\nbackground-repeat: round;\r\n}\r\n    .top {\r\n    }\r\n    #animation_container {\r\n        \r\n        height: none !important;\r\n        \r\n    }\r\n     h1 {\r\nfont-size: 3rem;\r\nletter-spacing: 1.2px;\r\nline-height: 36px;\r\nfont-weight: bold;\r\nmargin: 0.67em 0;\r\ncolor: #00c0f3 !important;\r\n}\r\n\r\np {\r\npadding: 0 !important;\r\nmargin: 0 0 0.95rem !important;\r\nline-height: 22px;\r\nletter-spacing: normal;\r\nfont-size: 1.5rem !important;\r\ncolor: #333;\r\n}\r\n.link {\r\npadding: 0 !important;\r\nmargin: 0 !important;\r\nline-height: normal !important;\r\nfont-size: 1.1rem !important;\r\n}\r\n\r\n</style>\r\n\r\n      \r\n\r\n<style>\r\n            .animation_container {\r\n            background-color: none !important;\r\n            }\r\n            \r\n            #animation_container {\r\n                \r\n                height: auto !important;\r\n                \r\n            }\r\n#canvas {\r\nbackground-repeat: round;\r\n}\r\n            \r\n.afl-subPages p {\r\n    padding: 0 !important;\r\n    margin: 0 0 0.95rem !important;\r\n}\r\n\r\n\r\nbody {\r\nline-height: normal;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: #00c0f3;\r\n}\r\n.afl-subPages ul li a {\r\n    font-size: 1.4rem;\r\n    line-height: 23px;\r\n}\r\n.link {\r\nmargin: 0 !important;\r\n}\r\n            </style>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n\r\n",
            },
        },
    };


    return (<>

        <FormProvider {...formMethods}>
            <form noValidate>
                <div>
                    <h3 className="text-center">Contact Us Form</h3>;
                </div>

                <div className="row">
                    <Input
                        name="FirstName"
                        label={props.fields.FirstName}
                        required
                        max={25}
                        className="col-md-6 mb-5"
                    />
                    <Input
                        name="LastName"
                        label={props.fields.LastName}
                        required
                        max={25}
                        className="col-md-6 mb-5"
                    />
                </div>
                <div className="row">
                    <button type="submit" className="" onClick={formMethods.handleSubmit(onSubmit)}>Submit</button>
                </div>
            </form>
        </FormProvider >
        <div>
            {sitecoreItemData.fields.myRichTextField && (
                <RichText field={sitecoreItemData.fields.myRichTextField} />
            )}
        </div>
    </>



    )
}
export default ContactUs