"use strict";(self.webpackChunknetworkmanager_docs=self.webpackChunknetworkmanager_docs||[]).push([[1032],{9612:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(5893),t=i(1151);const r={sidebar_position:5},d="Ping Monitor",o={id:"application/ping-monitor",title:"Ping Monitor",description:"With the Ping Monitor you can monitor one or multiple hosts with ICMP echo requests to determine if the specific host is reachable.",source:"@site/docs/application/ping-monitor.md",sourceDirName:"application",slug:"/application/ping-monitor",permalink:"/NETworkManager/docs/application/ping-monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/ping-monitor.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Port Scanner",permalink:"/NETworkManager/docs/application/port-scanner"},next:{title:"Traceroute",permalink:"/NETworkManager/docs/application/traceroute"}},c={},l=[{value:"Profile",id:"profile",level:2},{value:"Inherit host from general",id:"inherit-host-from-general",level:3},{value:"Host",id:"host",level:3},{value:"Settings",id:"settings",level:2},{value:"Timeout (ms)",id:"timeout-ms",level:3},{value:"Buffer",id:"buffer",level:3},{value:"TTL",id:"ttl",level:3},{value:"Don&#39;t fragment",id:"dont-fragment",level:3},{value:"Time (ms) to wait between each ping",id:"time-ms-to-wait-between-each-ping",level:3},{value:"Expand host view",id:"expand-host-view",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ping-monitor",children:"Ping Monitor"}),"\n",(0,s.jsxs)(n.p,{children:["With the ",(0,s.jsx)(n.strong,{children:"Ping Monitor"})," you can monitor one or multiple hosts with ICMP echo requests to determine if the specific host is reachable."]}),"\n",(0,s.jsx)(n.p,{children:"Example inputs:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Host"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"10.0.0.1"})}),(0,s.jsxs)(n.td,{children:["Single IP address (",(0,s.jsx)(n.code,{children:"10.0.0.1"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"10.0.0.100 - 10.0.0.199"})}),(0,s.jsxs)(n.td,{children:["All IP addresses in a given range (",(0,s.jsx)(n.code,{children:"10.0.0.100"}),", ",(0,s.jsx)(n.code,{children:"10.0.0.101"}),", ..., ",(0,s.jsx)(n.code,{children:"10.0.0.199"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"10.0.0.0/23"})}),(0,s.jsxs)(n.td,{children:["All IP addresses in a subnet (",(0,s.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,s.jsx)(n.code,{children:"10.0.1.255"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"10.0.0.0/255.255.254.0"})}),(0,s.jsxs)(n.td,{children:["All IP addresses in a subnet (",(0,s.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,s.jsx)(n.code,{children:"10.0.1.255"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"10.0.[0-9,20].[1-2]"})}),(0,s.jsxs)(n.td,{children:["Multipe IP address like (",(0,s.jsx)(n.code,{children:"10.0.0.1"}),", ",(0,s.jsx)(n.code,{children:"10.0.0.2"}),", ",(0,s.jsx)(n.code,{children:"10.0.1.1"}),", ...,",(0,s.jsx)(n.code,{children:"10.0.9.2"}),", ",(0,s.jsx)(n.code,{children:"10.0.20.1"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"borntoberoot.net"})}),(0,s.jsxs)(n.td,{children:["Single IP address resolved from a host (",(0,s.jsx)(n.code,{children:"10.0.0.1"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"borntoberoot.net/24"})}),(0,s.jsxs)(n.td,{children:["All IP addresses in a subnet resolved from a host (",(0,s.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,s.jsx)(n.code,{children:"10.0.0.255"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"borntoberoot.net/255.255.255.0"})}),(0,s.jsxs)(n.td,{children:["All IP addresses in a subnet resolved from a host (",(0,s.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,s.jsx)(n.code,{children:"10.0.0.255"}),")"]})]})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Multiple inputs can be combined with a semicolon (",(0,s.jsx)(n.code,{children:";"}),")."]}),(0,s.jsxs)(n.p,{children:["Example: ",(0,s.jsx)(n.code,{children:"10.0.0.0/24; 10.0.[10-20]1"})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Ping Monitor",src:i(6048).Z+"",width:"1200",height:"800"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Right-click on the result to copy or export the information."})}),"\n",(0,s.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,s.jsx)(n.h3,{id:"inherit-host-from-general",children:"Inherit host from general"}),"\n",(0,s.jsx)(n.p,{children:"Inherit the host from the general settings."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If this option is enabled, the ",(0,s.jsx)(n.a,{href:"#host",children:"Host"})," is overwritten by the host from the general settings and the ",(0,s.jsx)(n.a,{href:"#host",children:"Host"})," is disabled."]})}),"\n",(0,s.jsx)(n.h3,{id:"host",children:"Host"}),"\n",(0,s.jsx)(n.p,{children:"Hostname or IP address to ping."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"String"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"Empty"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"server-01.borntoberoot.net"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1.1.1.1"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(n.h3,{id:"timeout-ms",children:"Timeout (ms)"}),"\n",(0,s.jsx)(n.p,{children:"Timeout in milliseconds for the icmp packet after which the packet is considered lost."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Integer"})," [Min ",(0,s.jsx)(n.code,{children:"100"}),", Max ",(0,s.jsx)(n.code,{children:"15000"}),"]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"4000"})]}),"\n",(0,s.jsx)(n.h3,{id:"buffer",children:"Buffer"}),"\n",(0,s.jsx)(n.p,{children:"Buffer size of the icmp packet."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Integer"})," [Min ",(0,s.jsx)(n.code,{children:"1"}),", Max ",(0,s.jsx)(n.code,{children:"65535"}),"]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"32"})]}),"\n",(0,s.jsx)(n.h3,{id:"ttl",children:"TTL"}),"\n",(0,s.jsx)(n.p,{children:"Time to live of the icmp packet."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Integer"})," [Min ",(0,s.jsx)(n.code,{children:"1"}),", Max ",(0,s.jsx)(n.code,{children:"255"}),"]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"64"})]}),"\n",(0,s.jsx)(n.h3,{id:"dont-fragment",children:"Don't fragment"}),"\n",(0,s.jsx)(n.p,{children:"Don't fragment the icmp packet."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.h3,{id:"time-ms-to-wait-between-each-ping",children:"Time (ms) to wait between each ping"}),"\n",(0,s.jsx)(n.p,{children:"Time in milliseconds to wait between each ping."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Integer"})," [Min ",(0,s.jsx)(n.code,{children:"100"}),", Max ",(0,s.jsx)(n.code,{children:"15000"}),"]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"1000"})]}),"\n",(0,s.jsx)(n.h3,{id:"expand-host-view",children:"Expand host view"}),"\n",(0,s.jsx)(n.p,{children:"Expand the host view to show more information when the host is added."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6048:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/ping-monitor-6b8a6423d38b4eea2399956dcec19fd6.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var s=i(7294);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);