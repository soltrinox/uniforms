(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return s})),n.d(o,"metadata",(function(){return c})),n.d(o,"toc",(function(){return m})),n.d(o,"default",(function(){return d}));var t=n(3),r=n(7),i=(n(0),n(177)),s={id:"examples-custom-form",title:"Custom form"},c={unversionedId:"examples-custom-form",id:"examples-custom-form",isDocsHomePage:!1,title:"Custom form",description:"In uniforms, every form is just an injectable set of functionalities.",source:"@site/../docs/examples-custom-form.md",slug:"/examples-custom-form",permalink:"/docs/examples-custom-form",version:"current",sidebar:"docs",previous:{title:"Custom bridge & validator",permalink:"/docs/examples-custom-bridge"},next:{title:"Forms",permalink:"/docs/api-forms"}},m=[{value:"<code>ModifierForm</code>",id:"modifierform",children:[]}],a={toc:m};function d(e){var o=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},a,n,{components:o,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In uniforms, every form is just an injectable set of functionalities.\nThus, we can live without many higher order components, using composed ones instead.\nIf you want to get a deeper dive into it, we encourage you to read the source of AutoForm or QuickForm in the core package."),Object(i.b)("h3",{id:"modifierform"},Object(i.b)("inlineCode",{parentName:"h3"},"ModifierForm")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { BaseForm } from 'uniforms';\n\nconst Modifier = parent =>\n  class extends parent {\n    // Expose injector.\n    //   It's not required, but recommended.\n    static Modifier = Modifier;\n\n    // Alter component display name.\n    //   It's not required, but recommended.\n    static displayName = `Modifier${parent.displayName}`;\n\n    // Here you can override any form methods or create additional ones.\n    getModel(mode) {\n      if (mode === 'submit') {\n        const doc = super.getModel('submit');\n        const keys = this.getContextSchema().getSubfields();\n\n        const update = keys.filter(key => doc[key] !== undefined);\n        const remove = keys.filter(key => doc[key] === undefined);\n\n        // It's a good idea to omit empty modifiers.\n        const $set = update.reduce(\n          (acc, key) => ({ ...acc, [key]: doc[key] }),\n          {}\n        );\n        const $unset = remove.reduce((acc, key) => ({ ...acc, [key]: '' }), {});\n\n        return { $set, $unset };\n      }\n\n      return super.getModel(mode);\n    }\n  };\n\n// Now we have to inject our functionality. This one is a ModifierForm. Use any\n// form component you want.\nconst ModifierForm = Modifier(BaseForm);\n")))}d.isMDXComponent=!0}}]);