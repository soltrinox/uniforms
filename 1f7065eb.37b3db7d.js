(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(177)),c={id:"api-context-data",title:"Context data"},o={unversionedId:"api-context-data",id:"api-context-data",isDocsHomePage:!1,title:"Context data",description:"Some components might need to know a current form state, which is passed as React context.",source:"@site/../docs/api-context-data.md",slug:"/api-context-data",permalink:"/docs/api-context-data",version:"current",sidebar:"docs",previous:{title:"Bridges",permalink:"/docs/api-bridges"},next:{title:"Helpers",permalink:"/docs/api-helpers"}},d=[{value:"Accessing context data",id:"accessing-context-data",children:[]},{value:"Available context data",id:"available-context-data",children:[{value:"<code>changed</code>",id:"changed",children:[]},{value:"<code>changedMap</code>",id:"changedmap",children:[]},{value:"<code>error</code>",id:"error",children:[]},{value:"<code>model</code>",id:"model",children:[]},{value:"<code>name</code>",id:"name",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onSubmit</code>",id:"onsubmit",children:[]},{value:"<code>randomId</code>",id:"randomid",children:[]},{value:"<code>schema</code>",id:"schema",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>submitting</code>",id:"submitting",children:[]},{value:"<code>validating</code>",id:"validating",children:[]}]}],b={toc:d};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Some components might need to know a current form state, which is passed as ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context"),".\nProperties stored in the context relates either to the form values or the form instance itself.\nThat means, besides current form state, you can access form methods or encounter some metadata, e.g. about the used schema.\nSome of them were designed for internal use, but you can still take advantage of them."),Object(r.b)("h2",{id:"accessing-context-data"},"Accessing context data"),Object(r.b)("p",null,"A convenient way to access context is to use the ",Object(r.b)("inlineCode",{parentName:"p"},"useForm")," hook:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { useForm } from 'uniforms';\n\nfunction MyComponent() {\n  const uniforms = useForm();\n}\n")),Object(r.b)("p",null,"If you want to access only field-relevant part, use ",Object(r.b)("inlineCode",{parentName:"p"},"useField(name, props)")," hook, where ",Object(r.b)("inlineCode",{parentName:"p"},"name")," is the target field name and ",Object(r.b)("inlineCode",{parentName:"p"},"props")," are the props of it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { useField } from 'uniforms';\n\nfunction MyCustomField(rawProps) {\n  const [props, uniforms] = useField(rawProps.name, rawProps);\n}\n")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"useField")," allows you to create components that combine values of multiple fields:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { useField } from 'uniforms';\n\nfunction ArePasswordsEqual() {\n  const [{ value: passwordA }] = useField('passwordA', {});\n  const [{ value: passwordB }] = useField('passwordB', {});\n  const areEqual = passwordA === passwordB;\n  return <div>{`Passwords are ${areEqual ? 'equal' : 'not equal'}`}</div>;\n}\n")),Object(r.b)("p",null,"Additionally, ",Object(r.b)("inlineCode",{parentName:"p"},"useField")," accept third, optional parameter: ",Object(r.b)("inlineCode",{parentName:"p"},"options"),":"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"Option"),Object(r.b)("th",{parentName:"tr",align:"center"},"Default"),Object(r.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"absoluteName")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:"center"},"Whether the field name should be treated as a top-level one, ignoring parent fields.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"initialValue")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:"center"},"Initial value check. If ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", then after the first render the default value is set as value if no value is provided (",Object(r.b)("inlineCode",{parentName:"td"},"undefined"),").")))),Object(r.b)("h2",{id:"available-context-data"},"Available context data"),Object(r.b)("h3",{id:"changed"},Object(r.b)("inlineCode",{parentName:"h3"},"changed")),Object(r.b)("p",null,"Indicates whether there was a change on form."),Object(r.b)("h3",{id:"changedmap"},Object(r.b)("inlineCode",{parentName:"h3"},"changedMap")),Object(r.b)("p",null,"A map of changed fields. Rather internal one, used for checking if ",Object(r.b)("em",{parentName:"p"},"other")," fields has changed."),Object(r.b)("h3",{id:"error"},Object(r.b)("inlineCode",{parentName:"h3"},"error")),Object(r.b)("p",null,"An object with a ",Object(r.b)("inlineCode",{parentName:"p"},"details")," field, which is an array of any validation errors."),Object(r.b)("h3",{id:"model"},Object(r.b)("inlineCode",{parentName:"h3"},"model")),Object(r.b)("p",null,"An object with current form fields values structured ",Object(r.b)("inlineCode",{parentName:"p"},"{field: value}"),"."),Object(r.b)("h3",{id:"name"},Object(r.b)("inlineCode",{parentName:"h3"},"name")),Object(r.b)("p",null,"It is an array of the parent fields names:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"<Field name=\"x\">\n  // name = []\n  <Field name=\"y.z\">\n    // name = ['x']\n    <Field name=\"a\" /> // name = ['x', 'y', 'z']\n  </Field>\n</Field>\n")),Object(r.b)("p",null,"For example if we define a ",Object(r.b)("inlineCode",{parentName:"p"},"CompositeField"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const Composite = () => (\n  <section>\n    <AutoField name="firstName" />\n    <AutoField name="lastName" />\n  </section>\n);\n')),Object(r.b)("p",null,"And use it like that:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'<AutoForm schema={schema}>\n  <CompositeField name="personA" />\n  <SubmitField />\n</AutoForm>\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"name")," array of the nested ",Object(r.b)("inlineCode",{parentName:"p"},"AutoFields")," will store a ",Object(r.b)("inlineCode",{parentName:"p"},"personA")," value."),Object(r.b)("h3",{id:"onchange"},Object(r.b)("inlineCode",{parentName:"h3"},"onChange")),Object(r.b)("p",null,"You can directly access to the ",Object(r.b)("inlineCode",{parentName:"p"},"onChange")," method. E.g. ",Object(r.b)("inlineCode",{parentName:"p"},"onChange(field, value)"),"."),Object(r.b)("h3",{id:"onsubmit"},Object(r.b)("inlineCode",{parentName:"h3"},"onSubmit")),Object(r.b)("p",null,"Access to ",Object(r.b)("inlineCode",{parentName:"p"},"onSubmit")," method."),Object(r.b)("h3",{id:"randomid"},Object(r.b)("inlineCode",{parentName:"h3"},"randomId")),Object(r.b)("p",null,"Access to ",Object(r.b)("inlineCode",{parentName:"p"},"randomId")," method. Similar to ",Object(r.b)("a",{parentName:"p",href:"/docs/api-helpers#randomidsprefix"},"randomIds()"),"."),Object(r.b)("h3",{id:"schema"},Object(r.b)("inlineCode",{parentName:"h3"},"schema")),Object(r.b)("p",null,"A bridge class instance with ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," and ",Object(r.b)("inlineCode",{parentName:"p"},"validator")," properties."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," is simply your schema object and ",Object(r.b)("inlineCode",{parentName:"p"},"validator")," is your validating function."),Object(r.b)("h3",{id:"state"},Object(r.b)("inlineCode",{parentName:"h3"},"state")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"state")," is an object representing your current form status."),Object(r.b)("p",null,"The state properties are:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"Name"),Object(r.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"disabled")),Object(r.b)("td",{parentName:"tr",align:"center"},"Indicates whether the form is disabled.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"label")),Object(r.b)("td",{parentName:"tr",align:"center"},"Indicates whether the labels should be shown.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"placeholder")),Object(r.b)("td",{parentName:"tr",align:"center"},"Indicates whether the placeholders should be shown.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"readOnly")),Object(r.b)("td",{parentName:"tr",align:"center"},"Indicates whether the form is read-only.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"showInlineError")),Object(r.b)("td",{parentName:"tr",align:"center"},"Indicates whether the inline errors should be shown.")))),Object(r.b)("h3",{id:"submitting"},Object(r.b)("inlineCode",{parentName:"h3"},"submitting")),Object(r.b)("p",null,"Indicates whether the form is in the ",Object(r.b)("inlineCode",{parentName:"p"},"submitting")," state. Helpful when handling asynchronous submission."),Object(r.b)("h3",{id:"validating"},Object(r.b)("inlineCode",{parentName:"h3"},"validating")),Object(r.b)("p",null,"Indicates whether the form is in the ",Object(r.b)("inlineCode",{parentName:"p"},"validating")," state. Helpful when handling asynchronous validation."))}l.isMDXComponent=!0}}]);