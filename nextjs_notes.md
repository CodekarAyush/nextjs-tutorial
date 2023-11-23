******** INTRO  *******

latest version : 14

Next js k liye PC mei node js install hona chaiye . 

Next app installing command - npx create-next-app App_Name 

Next app server start - npm run dev 

app install krte hue humse kuch questions pucche jaayenge 

unka answer deke app apne aap install ho jaayega

 ***** WRITING THE FIRST PROGRAM IN NEXT JS ******


hume src k ander do files dikhengi . layout. js and page.js 

Page.js mei hi hum components ko use krte hai ya bnaate hai . isme likha hua code render hoke hume dikhaai padta hai . 

component ek piece of code hota hai jo ki ek UI return kr rha hota hai. aur hum isse re use kr skte hai . 

hum components mei props k through data pass kr skte hai . 
eg: <User name="ayush"/> // using the component

//component
const User = (props)=>{
    return (
        <h1>{props.name}</h1>
    )
} 
hum directly props ka naam destructure kr k bhi likh skte hai 
const User = ({name})=>{
    return (
        <h1>{name}</h1>
    )
} 


***** Events Functions and states ****

Agar hum directly kisi jagah pe event handler ya kuch client side functionality dene ki koshish krenge toh error aayegi 

eg       <button onClick={()=>alert("hello next js ")}>Click </button>//by default ye error dega 

qki next js by default components ko as a server component maan k kaam krta hai . iss liye hume usse btaaana padta hai ki wo client component hai .

component ko btaane k liye hum ek directive use krege component k top pe 
'use client'


note : state ek container hai jo ki component k ander hi use ho skta hai . outside access nahi kr skte . 
state or variable mei sbse bada fark ye hota hia ki state data change hone pe component ko re render krta hai pr variable nahi krte


***** File and Folder Structure****

next.config.js :- isme hum next app ki configurations kr skte hai jaise ki ... assets declare krne hai , base path define krna hai , compress krna hai , env btaana hai , dist directory btaani hai toh wo sb hum iss config file mei kr skte hai 

aisehi js config file hogi jisme js ki configurations likh skte hai . jaise cdn add krna hai etc 

readme.md :-  iss file mei hum apne app k baare mei likhte hai . aur koi aur developer humaare app pe kaam krega toh pehle readme file padhega 


eslintrc.json :- ye standard mantain krti hai taaki accha code bann paaye . jaise ye hume bta dega ki kahi pe humaara aisa variable jo declare hua hai pr use nahi ho rha hai, kuch configurations hum likh skte hai 

public kl ander humaare assets rhenge jaise ki images cdn etc 

src - source folder : yahi se files render hoti hai aur hume dikhaai deti hai browser mei . 

layout js :- yahi hai humaare app ka entry point. jaise react mei index.js hoti hai . 

page.js :- ye humaara first page hota hai . aur hum alag alag pages bhi bna skte hai 


***** Everything about components ****

their are 2 types of components in next js . server and client components and they can use together 

server components :-  server basically client se request leta hai aur process kr k response deta hai. 
jis  component ki rendering server side pe hoti hai wo humaare server components hote hai 

Note :- by default next app mei components server components bante hai 



client components :- ye components browser pe render hote hai , aur kisi component ko client component bnaana hai toh use client directive top of the component mei likha jaayega 
'use client'



***** Basic Routing ****

ek specific format hota hai routing krne k liye qki isme file system based routing krte hai 

example k liye maan lo hume ek /login page bnana hai toh hum pehle login folder bnaayenge usme page.js bnaayenge 


***** Linking and Navigations ****

ek anchor tag se bnaai hui link k through hum agar ek page se dusre page pe jaa rhe hai toh wo linking honti hai
linking krne k liye href attribute use hota hai 
eg:       <Link href="/login">Go to login page</Link>


jab button k click pr ek page se dusre page pe jaayenge to wo navifation hoga 
navigation k liye hume useRouter hook ko navigation se import krna padega . jaise react useNavigate ko use krte the waise hi useRouter ko use krenge 
eg:
      <button onClick={()=>{route.push('/login')}>Login</button>


***** Nested Routing  ****

nested routing mei routing k folder k ander naya folder bna k route bnaate hai 

eg /about/about-students 



***** Common Layout   ****

kisi bhi website ka kuch common areas hote hai jaise . header , footer etc . jo ki poori website mei hrr jagah hota hai 

by default hume next mei layout.js milti hai jo apne child elements ko common area profive krti hai . mtlb agar humne layout.js mei kuch bhi daala toh wo uske hrr child elements mei nazar aayega 
eg: hume ek common layout bnaana hai apne login k liye aur login mei login-students and login-teachers hai . 
* iske liye pehle  hum login folder k ander layout 
* layout k ander export default function ({children }){} bna denge 
* children ka mtlb login component k ander k children . 
* ab layout k ander koi bhi code likhenge wo hume nazar aayega hrr login k child component mei 
