(this["webpackJsonpvoter-participation"]=this["webpackJsonpvoter-participation"]||[]).push([[0],{52:function(e,a,t){e.exports=t(68)},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(48),l=t.n(c),o=(t(57),t(31)),d=(t(58),t(49)),s=t(18),i=(t(59),t(60),function(e){var a=e.proposal;return r.a.createElement("div",null,r.a.createElement("hr",null),"Proposer:",r.a.createElement("br",null),r.a.createElement("p",null,a.proposer),r.a.createElement("br",null),"Number of Voters: ",a.votes.length,a.votes.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("p",null,e.voter))})))}),m=function(e){var a=e.proposal,t=parseInt(a.votesFor)+parseInt(a.votesAgainst),c=Object(n.useState)(!1),l=Object(o.a)(c,2),d=l[0],s=l[1];return r.a.createElement("span",{className:"proposal"},r.a.createElement("div",{className:"container circle left"},r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,a.title,":",r.a.createElement("span",{style:{paddingLeft:"6px",color:"Pass"===a.winningOutcome?"green":"red"}},a.winningOutcome.toUpperCase())),r.a.createElement("p",null,function(e){var a=new Date(1e3*e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],r=a.getDate();return r+" "+n+" "+t+" "+a.getHours()+":"+a.getMinutes()}(a.createdAt)),d&&r.a.createElement(i,{proposal:a}),r.a.createElement("p",{className:"text-button",onClick:function(){return s(!d)}},d?"Close":"Expand"))),r.a.createElement("div",{className:"container right vote-container"},parseInt(a.votesFor)>0&&r.a.createElement("div",{className:"bar",id:"green",style:{backgroundColor:"green",width:"".concat(Math.round(100*parseInt(a.votesFor)/t),"%"),borderRadius:0===parseInt(a.votesAgainst)?"5px":""}}),parseInt(a.votesAgainst)>0&&r.a.createElement("div",{className:"bar",id:"red",style:{backgroundColor:"red",width:"".concat(Math.round(100*parseInt(a.votesAgainst)/t),"%"),borderRadius:0===parseInt(a.votesFor)?"5px":""}}),0===parseInt(a.votesAgainst)&&0===parseInt(a.votesFor)&&r.a.createElement("div",{className:"bar",style:{backgroundColor:"grey",width:"100%",borderRadius:"5px"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"label",style:{color:"green"}},"For: ",a.votesFor)),r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"label",style:{color:"red"}},"Against: ",a.votesAgainst)),r.a.createElement("div",{className:"legend"},r.a.createElement("span",{className:"label",style:{color:"grey"}},"Total: ",t))))};function b(){var e=Object(d.a)(["\n  query GetProposals($daoAddress: Bytes!) {\n    proposals (\n      where: {\n        dao: $daoAddress,\n      },\n      orderBy: createdAt,\n      orderDirection: desc\n    ) {\n      createdAt\n      title\n      winningOutcome\n      votes {\n        voter\n      }\n      description\n      proposer\n      votesFor\n      votesAgainst\n    }\n  }\n"]);return b=function(){return e},e}var u=Object(s.gql)(b()),f=function(e){var a=e.daoAddress,t=Object(s.useQuery)(u,{variables:{daoAddress:a}}),n=t.loading,c=t.error,l=t.data;return c&&console.log("error:",c),r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Loading...")),!n&&r.a.createElement("div",{className:"timeline"},l.proposals.map((function(e,a){return r.a.createElement(m,{proposal:e,key:a})}))))},p=[{id:"0x74504b811bbf357edb6daa8346d51f6dd113113f",name:"BetterBrooklyn"},{id:"0x84c2276acaf67b65bca212c8634688b5b2dc903e",name:"BitFWD blockhathon"},{id:"0x33658686cbefe289b55814d0b3f3d45de6c50fd9",name:"CementDAO"},{id:"0x0b93ba560283350d4216f29dc57e15df38d0eace",name:"CuraDAO"},{id:"0xbe1a98d3452f6da6e0984589e545d4fc25af7526",name:"dOrg"},{id:"0x519b70055af55a007110b4ff99b0ea33071c720a",name:"dxDAO"},{id:"0x3324b516df92e78463d8b0616dd146cf6c58b0b9",name:"efxDAO"},{id:"0x0c88aa3c4fe9f9f8da766e9b8bfbbaa1235928cc",name:"ETHBerlin dHack.io"},{id:"0x2b8c70fffda7f3d7667f7cfede1429313886329c",name:"ETHGlobal"},{id:"0x0ed985925bb42c6719d10dcd1cc02d8cf596c15b",name:"ETHIndia dHack"},{id:"0x8990e11b69403ea53ef2b32434bbd7dbf84b5234",name:"FestDAO"},{id:"0x294f999356ed03347c7a23bcbcf8d33fa41dc830",name:"Genesis Alpha"},{id:"0x02200bfe176e8e5f8dc58103afc8ca42ad863736",name:"i4 Art"},{id:"0x13ea4b5bbc5563b683473412eb525c520a65ce4e",name:" Knicks Fans DAO"},{id:"0x6bee9b81e434f7afce72a43a4016719315069539",name:"Kyber DAO Exp#2"},{id:"0x5c309e9b2134d931b7337abcfbe2a50ff31292f7",name:"Liberland DAO"},{id:"0xbc3ea6c669c7dbbc21d8d7c3a030f63b189da566",name:"LongDAO"},{id:"0x0004a4c02f97a2cdab3628ac4b834ce4c14f5cf7",name:"Meme"},{id:"0x11a96d13789179524104dd1e832bf59c930a9042",name:"necDAO"},{id:"0x440583455bcd85ab2bd429c015d3aabcae135f0a",name:"PolkaDAO"},{id:"0x70c36947837b43665ed5ea85c112aa0f72cf9fb3",name:"Psychedelic Society DAO"},{id:"0x61151f7ef32c920794ed89b2545f1672266d6420",name:"The General Store DAO"},{id:"0x63df13b12bac071ba31b6599b8d97c82cb96a768",name:"The Illuminati"}],v=new s.ApolloClient({uri:"https://api.thegraph.com/subgraphs/name/daostack/alchemy",cache:new s.InMemoryCache});var E=function(){var e=Object(n.useState)("0xbe1a98d3452f6da6e0984589e545d4fc25af7526"),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement(s.ApolloProvider,{client:v},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"dao-header"},"Dao: ",r.a.createElement("select",{className:"dao-select",value:t,onChange:function(e){return c(e.target.value)}},p.map((function(e,a){return r.a.createElement("option",{key:a,value:e.id},e.name)})))),r.a.createElement("hr",null),r.a.createElement("h2",{className:"title-left"},"Proposal"),r.a.createElement("h2",{className:"title-right"},"Vote Distribution"),r.a.createElement(f,{daoAddress:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.c624613d.chunk.js.map