import{r as t,h as e}from"./index-6a31bb18.js";const i={title:"Registration form",description:"Please enter your personal information",type:"object",required:["name","email","newsletters"],properties:{name:{type:"string",title:"Name",default:"Batman",description:"Enter your heroic name",minLength:5,maxLength:20},email:{type:"string",title:"Email",description:"Enter your email address",format:"email"},home:{type:"string",title:"Home",default:"Earth",readOnly:!0},happiness:{type:"number",title:"Happiness",description:"How happy are you?",minimum:0,maximum:1,multipleOf:.01},bananas:{type:"number",title:"Bananas",description:"How many bananas do you want?",minimum:0,maximum:50,multipleOf:10},date:{type:"string",title:"Birthdate",format:"date",description:"Pick a nice date!"},color:{type:"string",title:"Favorite cape color",description:"Preferably matching your boots",oneOf:[{type:"string",const:"red",title:"Red"},{type:"string",const:"yellow",title:"Yellow"},{type:"string",const:"green",title:"Green"},{type:"string",const:"blue",title:"Blue"},{type:"string",const:"black",title:"Black"}]},sidekicks:{type:"array",title:"Sidekicks",description:"Please select your sidekicks",uniqueItems:!0,minItems:2,items:{title:"Friends",type:"string",anyOf:[{type:"string",const:"super",title:"Superman"},{type:"string",const:"widow",title:"Black Widow"},{type:"string",const:"america",title:"Captain America"},{type:"string",const:"squirrel",title:"Squirrel Girl"},{type:"string",const:"devil",title:"Daredevil"},{type:"string",const:"marvel",title:"Captain Marvel"},{type:"string",const:"fantastic",title:"Mr. Fantastic"}]}},newsletters:{type:"boolean",title:"I want to receive daily newsletters!",default:!1,const:!0},params:{type:"object",title:"Parameters",description:"Additional data to send",additionalProperties:!0}}},n=class{constructor(e){t(this,e),this.formData={date:"1922-12-28",params:{secretHideout:"Cave",hidden:!0,entryCode:[1,1,2,3,5,8]}},this.valid=!0,this.handleFormChange=this.handleFormChange.bind(this),this.handleFormValidate=this.handleFormValidate.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}render(){return[e("limel-form",{onChange:this.handleFormChange,onValidate:this.handleFormValidate,value:this.formData,schema:i}),e("br",null),e("limel-button",{label:"Submit",primary:!0,disabled:!this.valid,onClick:this.handleSubmit}),e("limel-example-value",{value:this.formData})]}handleFormChange(t){this.formData=t.detail}handleFormValidate(t){this.valid=t.detail.valid,console.log("Basic form with validation - handleFormValidate:",t.detail)}handleSubmit(){const t=JSON.stringify(this.formData,null,"    ");alert(`Sending information to villains...\n\n${t}`)}};export{n as limel_example_form}