"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"useList",title:"useList",siderbar_label:"useList",description:"useList data hook from refine is a modified version of react-query's useQuery for retrieving  items from a resource with pagination, search, sort, and filter configurations."},o=void 0,l={unversionedId:"api-reference/core/hooks/data/useList",id:"api-reference/core/hooks/data/useList",title:"useList",description:"useList data hook from refine is a modified version of react-query's useQuery for retrieving  items from a resource with pagination, search, sort, and filter configurations.",source:"@site/docs/api-reference/core/hooks/data/useList.md",sourceDirName:"api-reference/core/hooks/data",slug:"/api-reference/core/hooks/data/useList",permalink:"/docs/api-reference/core/hooks/data/useList",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useList.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1665125173,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{id:"useList",title:"useList",siderbar_label:"useList",description:"useList data hook from refine is a modified version of react-query's useQuery for retrieving  items from a resource with pagination, search, sort, and filter configurations."},sidebar:"someSidebar",previous:{title:"useDeleteMany",permalink:"/docs/api-reference/core/hooks/data/useDeleteMany"},next:{title:"useMany",permalink:"/docs/api-reference/core/hooks/data/useMany"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Query Configuration",id:"query-configuration",level:3},{value:"<code>pagination</code>",id:"pagination",level:4},{value:"<code>sort</code>",id:"sort",level:4},{value:"<code>filters</code>",id:"filters",level:4},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Config parameters",id:"config-parameters",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useList")," is a modified version of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/queries"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery"))," used for retrieving items from a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," with pagination, sort, and filter configurations."),(0,r.kt)("p",null,"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method as the query function from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's say that we have a resource named ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n            status: "draft",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n            status: "published",\n        },\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected",\n        },\n    ];\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useList")," passes the query configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),". We will be using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-simple-rest"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-simple-rest"))),(0,r.kt)("p",null,"First of all, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," without passing any query configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useList } from "@pankod/refine-core";\n\ntype IPost = {\n    id: number;\n    title: string;\n    status: "rejected" | "published" | "draft";\n};\n\nconst postListQueryResult = useList<IPost>({ resource: "posts" });\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="postListQueryResult.data"',title:'"postListQueryResult.data"'},'{\n    data: [\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected"\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n            status: "published"\n        },\n        {\n            id: 1,\n            title: "E-business",\n            status: "draft"\n        },\n    ],\n    total: 3\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Although we didn't pass any sort order configurations to ",(0,r.kt)("inlineCode",{parentName:"p"},"useList"),", data comes in descending order according to ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," since ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," has default values for sort order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    sort: [{ order: "desc", field: "id" }];\n}\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"getList")," also has default values for pagination:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    pagination: { current: 1, pageSize: 10 }\n}\n"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you want to create your own ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method, it will automatically implement default query configurations since ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," can work with no configuration parameters.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"query-configuration"},"Query Configuration"),(0,r.kt)("h4",{id:"pagination"},(0,r.kt)("inlineCode",{parentName:"h4"},"pagination")),(0,r.kt)("p",null,"Allows us to set page and items per page values."),(0,r.kt)("p",null,"For example imagine that we have 1000 post records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    config: {\n        pagination: { current: 3, pageSize: 8 },\n    },\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Listing will start from page 3 showing 8 records.")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sort"},(0,r.kt)("inlineCode",{parentName:"h4"},"sort")),(0,r.kt)("p",null,"Allows us to sort records by the speficified order and field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    config: {\n        sort: [{ order: "asc", field: "title" }],\n    },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="postListQueryResult.data"',title:'"postListQueryResult.data"'},'{\n    data: [\n        {\n            id: 1,\n            title: "E-business",\n            status: "draft"\n        },\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected"\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n            status: "published"\n        },\n    ],\n    total: 3\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Listing starts from ascending alphabetical order on the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," field.")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"filters"},(0,r.kt)("inlineCode",{parentName:"h4"},"filters")),(0,r.kt)("p",null,"Allows us to filter queries using refine's filter operators. It is configured via ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," properites."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    config: {\n        filters: [\n            {\n                field: "status",\n                operator: "eq",\n                value: "rejected",\n            },\n        ],\n    },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="postListQueryResult.data"',title:'"postListQueryResult.data"'},'{\n    data: [\n        {\n            id: 3,\n            title: "Powerful Crypto",\n            status: "rejected"\n        },\n    ],\n    total: 1\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Only lists records whose ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),' equals to "rejected".')),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported operators")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eq")),(0,r.kt)("td",{parentName:"tr",align:null},"Equal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ne")),(0,r.kt)("td",{parentName:"tr",align:null},"Not equal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lt")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gt")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lte")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gte")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"in")),(0,r.kt)("td",{parentName:"tr",align:null},"Included in an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nin")),(0,r.kt)("td",{parentName:"tr",align:null},"Not included in an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contains")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ncontains")),(0,r.kt)("td",{parentName:"tr",align:null},"Doesn't contain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containss")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains, case sensitive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ncontainss")),(0,r.kt)("td",{parentName:"tr",align:null},"Doesn't contain, case sensitive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Is null or not null")))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useList")," can also accept all ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," options as a third parameter.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For example, to disable query from running automatically you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useList } from "@pankod/refine-core";\n\nconst postListQueryResult = useList<IPost>({\n    resource: "posts",\n    queryOptions: { enabled: false },\n});\n'))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useList")," returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties such as ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isFetching"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192"))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(d,{module:"@pankod/refine-core/useList","successNotification-default":"`false`","errorNotification-default":'"Error (status code: `statusCode`)"',mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"config-parameters"},"Config parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface UseListConfig {\n    hasPagination?: boolean;\n    pagination?: {\n        current?: number;\n        pageSize?: number;\n    };\n    sort?: Array<{\n        field: string;\n        order: "asc" | "desc";\n    }>;\n    filters?: Array<{\n        field: string;\n        operator: CrudOperators;\n        value: any;\n    }>;\n}\n')),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," data: TData[];"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," total: number; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," TError>")))))))}m.isMDXComponent=!0}}]);