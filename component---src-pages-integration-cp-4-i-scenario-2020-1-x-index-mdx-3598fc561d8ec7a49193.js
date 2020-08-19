(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{LThC:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),s=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,c={},p=(r="InlineNotification",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:c},l=s.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(l,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(n.b)("h2",null,"Use case 1"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Order processing")),Object(n.b)("p",null,"Integration capabilities for the scenario - APIC + ACE + MQ + and Platform Tracing"),Object(n.b)("img",{src:"/assets/img/integration/usecase1/Snip20190917_1.png",alt:"High level overview"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Scenario"),": The company ABC exposes its invoice processing service as an API.  Invoices are posted into the API in JSON format and consumed by an integration flow that puts it to queue so it can be processed by the back office financial systems."),Object(n.b)("h3",null,"Download artefacts to the developer’s machine"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can download the artefacts from here: ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.ibm.com/CASE/cloudpak-onboard-residency/tree/gh-pages/assets/integration/usecase1-artefacts"}),"Artefacts")),Object(n.b)("li",{parentName:"ul"},"Download all files including ",Object(n.b)("strong",{parentName:"li"},"generateSecret")," subdirectory")),Object(n.b)("h3",null,"Prepare MQ"),Object(n.b)("h3",null,"Configuring MQ artefacts post-deployment"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: The post-deployment configuring of MQ artefacts described here can be used for demo and test environments. For the production we recommend to create a configuration secret to define the MQ configuration as a part of the Helm release or to enable the persistence for the MQ so that the configuration is preserved in case that MQ pods are recreated.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open Platform Navigator: ",Object(n.b)("a",i({parentName:"li"},{href:"https://icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud/integration"}),"https://icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud/integration")),Object(n.b)("li",{parentName:"ul"},"Select mq\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_115.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"In case of error message that the instance did not load correctly, select provided link\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_116.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"The MQ Console will open\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_117.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Select queue manager and the select properties:\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_118.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"On the Communication tab, find the CHLAUTH Records property and make it Disabled\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_119.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Click Save and Close"),Object(n.b)("li",{parentName:"ul"},"Click on Add widget button on top-right…\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_120.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"…and add Queues widget\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_121.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Click on Create\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_122.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Select ",Object(n.b)("strong",{parentName:"li"},"Local")," queue type\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_123.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"and give it a name ",Object(n.b)("strong",{parentName:"li"},"processing")),Object(n.b)("li",{parentName:"ul"},"Add Channels widget\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_126.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Select the ",Object(n.b)("strong",{parentName:"li"},"SYSTEM.DEF.SVRCONN")," channel and click Properties"),Object(n.b)("li",{parentName:"ul"},"On the ",Object(n.b)("strong",{parentName:"li"},"MCA tab"),", for ",Object(n.b)("strong",{parentName:"li"},"MCA User ID")," specify ",Object(n.b)("strong",{parentName:"li"},"mqm"),Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_131.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Click Add widget again and select Authentication Information widget\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_132.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Click on the cogwheel to configure the widget\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_133.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"… and select ",Object(n.b)("strong",{parentName:"li"},"System objects: Show"),Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_134.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Select SYSTEM.DEFAULT.AUTHINFO.IDPWOS and then click Properties\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_135.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"On the User ID + password tab, for both Local connections and for Client connections specify None\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_136.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Select Save and Close"),Object(n.b)("li",{parentName:"ul"},"Select queue manager again and click on “three dots” icon, the select “Refresh security”\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_137.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},"Click on Connection authentication\n",Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_138.png",alt:"usecase1"})))),Object(n.b)("h3",null,"Confirm MQ Listener port"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Still in MQ Console, add Listeners widget\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_139.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Configure widget to see system objects\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_141.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"System objects: Show"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_142.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Check the value of SYSTEM.LISTENER.TCP.1 (default is 1414)\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_143.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate to OpenShift console, select ",Object(n.b)("strong",{parentName:"p"},"mq")," project and the select Application > Services\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_144.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the service whose name starts with the queue manager name and has extension ‘-ibm-mq’\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_145.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Check the NodePort that the listener port is mapped to (in this case it is ",Object(n.b)("strong",{parentName:"p"},"32251"),"):\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_146.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"We can access the listener from the outside of the cluster using the cluster proxy host name and this port.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"However, if we are accessing the mq inside the cluster, we can use <service_name>.svc.cluster.local for the host name and target listener port (not mapped one):\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_154.png",alt:"usecase1"}))))),Object(n.b)("h3",null,"Deploy ACE Flow"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Download")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"Http Header")," node and configure it to delete header\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_152.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"MQ Output")," node, for Queue Name specify ",Object(n.b)("strong",{parentName:"p"},"NEWORDER.MQ"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_153.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the MQ Connect tab define"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"- Connection: **MQ client connection properties**\n- Destination queue manager name: **qmtest4**\n- Queue manager host name: **qm-test4-ibm-mq.mq.svc.cluster.local**\n- Listener port number: **1414**\n- Channel name: **ACE.TO.MQ**\n")),Object(n.b)("img",i({parentName:"li"},{src:"/assets/img/integration/usecase1/Snip20190911_155.png",alt:"usecase1"}))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"Kafka producer")," node.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enter ",Object(n.b)("strong",{parentName:"p"},"NewOrder")," for the topic name and previously noted bootstrap server address, in our case it is ",Object(n.b)("strong",{parentName:"p"},"icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud:32490"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_156.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Under Security tab select ",Object(n.b)("strong",{parentName:"p"},"SASL_SSL")," for the Security protocol and TLSv1.2 for SSL protocol.\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190919_8.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Save the work.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create BAR file. Name it ",Object(n.b)("strong",{parentName:"p"},"orders"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add ",Object(n.b)("strong",{parentName:"p"},"orders")," REST API, optionally select ",Object(n.b)("em",{parentName:"p"},"Compile and in-line resources")," and click on ",Object(n.b)("em",{parentName:"p"},"Build and Save"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190919_9.png",alt:"usecase1"}))))),Object(n.b)("h3",null,"Deploy the BAR file"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open Platform Navigator: ",Object(n.b)("a",i({parentName:"p"},{href:"https://icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud/integration"}),"https://icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud/integration"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ACE instance\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_161.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"On the ACE dashboard navigate to the Servers tab and click Add server\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_163.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select BAR file..\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_164.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"… and click Continue\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_165.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy the Content URL to the clipboard and click Configure release\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190919_10.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Helm chart opens. Click Configure.\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_167.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enter ",Object(n.b)("strong",{parentName:"p"},"orders")," for Helm release name, select ",Object(n.b)("strong",{parentName:"p"},"ace")," namespace, ",Object(n.b)("strong",{parentName:"p"},"local-cluster")," and accept license agreement:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_62.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Scroll down and select ",Object(n.b)("strong",{parentName:"p"},"All parameters"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_169.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Paste previously copied Content Server URL.\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190919_13.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Scroll down and for Image pull secret enter ",Object(n.b)("strong",{parentName:"p"},"deployer-dockercfg-wmwxh")," (this secret is created during the pak installation, use OpenShift web console or ",Object(n.b)("strong",{parentName:"p"},"oc get secrets -n ace")," command to obtain the exact name)\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190911_171.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Scroll down and enter your proxy node doman name for the Node port IP. For example:\n",Object(n.b)("strong",{parentName:"p"},"icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_66.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enter keystore and truststore aliases and secret name as defined previously in the step for generating secrets for accessing Event Streams. In our case, the keystore alias is ",Object(n.b)("strong",{parentName:"p"},"mykey"),", the truststore alias is ",Object(n.b)("strong",{parentName:"p"},"Cert-mykey")," and secret name is ",Object(n.b)("strong",{parentName:"p"},"my-secret"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190919_14.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Scroll down once more and disable persistence\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190919_15.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the ",Object(n.b)("strong",{parentName:"p"},"Install")," button.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The installation can take several minutes.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate back to ACE dashboard, click on ",Object(n.b)("em",{parentName:"p"},"Done")," and wait until the server is ready.\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190919_16.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can also navigate to the OpenShift console and select ",Object(n.b)("strong",{parentName:"p"},"ace")," project, Applications > Pods to see the pods.\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_76.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Or check the pods using CLI\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_75.png",alt:"usecase1"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"As the result you will see the running server in the Dashoard:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_78.png",alt:"usecase1"}))))),Object(n.b)("h3",null,"Test the deployed ACE APIs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the Cloud Pak Navigator and select the App Connect instance\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_34.png",alt:"Navigator"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"ordersapi")," server that we have just deployed\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_36.png",alt:"Server"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The list of artefacts deployed on server appears. In our case we have only the API called ",Object(n.b)("strong",{parentName:"p"},"orders"),". Click on it:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_37.png",alt:"API"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The page that appears shows the ",Object(n.b)("strong",{parentName:"p"},"REST API base URL"),", link to the ",Object(n.b)("strong",{parentName:"p"},"OpenAPI document")," (swagger) file, and list of operations. In our case there is only one POST operation and the route of that operation is ",Object(n.b)("strong",{parentName:"p"},"/create"),":\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_38.png",alt:"Operations"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Prepare a JSON file with the following content. Name it, for example ",Object(n.b)("strong",{parentName:"p"},"order.json"),":"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  "accountid": "A-10000",\n  "order": {\n    "orderDate": "2004-01-19T04:25:25.938Z",\n    "contractId": "00000100",\n    "orderDetails": [\n      {\n        "lineItemNumber": 1,\n        "productId": "AJ1-05",\n        "quantity": "20"\n      }\n    ]\n  }\n}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate to the terminal window and run (note that URL is built from REST API base URL and operation path ",Object(n.b)("strong",{parentName:"p"},"/orders"),"):"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"curl -k -X POST http://orders.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud:30753/orders/v1/create -d @order.json\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The response similar to the following should be returned:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),'{"accountid":"A-10000","orderid":"1632603"}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the Platform Navigator and select MQ instance\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_122.png",alt:"Check MQ"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select queue widget, refresh if necessary, the queue depth should be increased\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_123.png",alt:"Check MQ"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("em",{parentName:"p"},"Browse messages")," to see the content\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_124.png",alt:"Check MQ"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using the Platform Navigator, select the Event Streams instance\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_125.png",alt:"Check ES"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("em",{parentName:"p"},"Topics"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_126.png",alt:"Check ES"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select topic\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_127.png",alt:"Check ES"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"then check the messages\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_128.png",alt:"Check ES"}))))),Object(n.b)("h3",null,"Expose the API using API Connect"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open once again the ACE dashboard\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_34.png",alt:"Navigator"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on our ",Object(n.b)("strong",{parentName:"p"},"ordersapi")," server\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_36.png",alt:"Server"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"And finally select our API:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190920_37.png",alt:"API"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"As already mentioned there will be a link to the OpenAPI (swagger) document on the right side of the page:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_129.png",alt:"OpenAPI"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on it to open the document in  browser\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_130.png",alt:"Document"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using the browser, save the document to some directory on your local disk. The default name of the file is ",Object(n.b)("strong",{parentName:"p"},"swagger.json"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go back to the Platform Navigator and select the API Connect instance\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_131.png",alt:"API Connect"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Login to the API Manager\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_132.png",alt:"API Manager"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"Develop APIs and Products"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_133.png",alt:"APIs"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add new API:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_134.png",alt:"API"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select to create API ",Object(n.b)("strong",{parentName:"p"},"From existing OpenAPI service")," and click ",Object(n.b)("strong",{parentName:"p"},"Next"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_135.png",alt:"API"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select previously downloaded ",Object(n.b)("strong",{parentName:"p"},"swagger.json")," and click ",Object(n.b)("strong",{parentName:"p"},"Next"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_136.png",alt:"JSON"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Keep default values on the next page and click ",Object(n.b)("strong",{parentName:"p"},"Next"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_137.png",alt:"Create API"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"Activate API")," and click ",Object(n.b)("strong",{parentName:"p"},"Next"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_139.png",alt:"Activate API"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Wait until API is prepared and click ",Object(n.b)("strong",{parentName:"p"},"Edit API"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_141.png",alt:"Edit API"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"Assemble"),":\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_143.png",alt:"Assemble"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run API test\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_144.png",alt:"Test"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"post/create")," operation:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_145.png",alt:"Operation"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy/paste the same JSON structure that you prepared in the ",Object(n.b)("em",{parentName:"p"},"Test the deployed ACE APIs")," step:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_149.png",alt:"JSON"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"Invoke"),"\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_151.png",alt:"Invoke"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In case of CORS error click on the provided link:\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_152.png",alt:"CORS"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Confirm to open the page, navigate back to the test tool and click ",Object(n.b)("strong",{parentName:"p"},"Invoke")," again\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_154.png",alt:"Invoke"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You should receive HTTP 201 status code\n",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/integration/usecase1/Snip20190925_155",alt:"Response"}))))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-scenario-2020-1-x-index-mdx-3598fc561d8ec7a49193.js.map