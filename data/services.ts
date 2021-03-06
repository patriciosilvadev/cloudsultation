import { CloudService } from "../types/types";

const data: {items: CloudService[]} = {
  items: [
    {
      provider: "azure",
      displayName: "App Service",
      logo: "/img/infrastructure/azure/App Services.svg",
      useIf: [
        "You want out of the box scale out, including scheduled and usage based scale out",
        "You want out of the box scale up capabilities",
      ],
      doNotUseIf: [
        "You need root access to the file system, for example Windows folder",
        "You need to migrate an on-premise VM to the cloud",
      ],
      colorScheme: "blue",
    },
    {
      provider: "azure",
      displayName: "Blob Storage",
      logo: "/img/infrastructure/azure/Blob Storage.svg",
      useIf: [
        "You need a safe way to store files",
        "You need redundancy and failover capabilities",
      ],
      doNotUseIf: ["You need to mount the files as a local drive"],
      colorScheme: "teal",
    },
    {
      provider: "azure",
      displayName: "Load Balancer",
      logo: "/img/infrastructure/azure/Load Balancers.svg",
      useIf: [
        "You need to balance traffic between multiple VMs",
        "You need to balance traffic from public networks, or inside a virtual network",
      ],
      doNotUseIf: [
        "You need to balance traffic based on URL paths",
        "You need to route traffic outside of Azure services",
      ],
      colorScheme: "green",
    },
    {
      provider: "aws",
      displayName: "DynamoDB",
      logo: "/img/infrastructure/aws/aws-dynamodb.svg",
      useIf: ["You need a reliable NoSQL key-value storage"],
      doNotUseIf: ["You need a relational database"],
      colorScheme: "orange",
    },

    {
      provider: "gcp",
      displayName: "Cloud Storage",
      logo: "/img/infrastructure/gcp/Google_Storage-Logo.wine.svg",
      useIf: ["You need a good free tier to prototype apps"],
      doNotUseIf: ["You are using other clouds"],
      colorScheme: "teal",
    },
    {
      provider: "azure",
      displayName: "Service Bus",
      logo: "/img/infrastructure/azure/Azure Service Bus.svg",
      useIf: [
        "You need a publish and subscribe messaging service",
        "You need to decouple your applications from each other",
        "You need to enable existing Java Message Service (JMS) applications to talk to Service Bus",
        "You need to Protect your application from temporary spikes in traffic",
      ],
      doNotUseIf: [
        "You need more than 99.9% uptime",
        "You need messages more than 1 MB in size",
        "You need transactional message allowing more than 100 message in a transaction",
      ],
    },
    {
      provider: "azure",
      displayName: "Cosmos DB",
      logo: "/img/infrastructure/azure/Azure Cosmos DB.svg",
      useIf: [
        "You need a geo-redundant database",
        "You need a tunable consistency model",
        "You need to be able to scale your database in an instant",
        "You need guaranteed read speeds at any scale",
        "You need a database with multiple data access API (SQL, Cassandra and MongoDB)",
      ],
      doNotUseIf: [
        "Your use case can be solved with Azure Table Storage or Blob Storage - Cosmos DB can get quite expensive if used for the wrong purpose",
        "You need more than 99.999% uptime",
      ],
      colorScheme: "orange",
    },
    {
      provider: "azure",
      displayName: "Bot Service",
      logo: "/img/infrastructure/azure/Bot Services.svg",
      useIf: [
        "You need a managed chat bot framework",
        "You need the possibility for proactive messaging",
        "You need to incorporated bot to human handoff",
        "You need to add natural language and speech to your bot",
        "You need many messaging platforms supported out of the box",
        "You are already invested in the Microsoft ecosystem",
      ],
      doNotUseIf: [
        "You need an out of the box WhatsApp integration",
        "You need an out of the box Viber integration",
        "You need a self hosted bot service",
      ],
      colorScheme: "blue",
    },
    {
      provider: "azure",
      displayName: "IoT Hub",
      logo: "/img/infrastructure/azure/Azure IoT Hub.svg",
      useIf: [
        "You need a cloud-hosted solution back end for IoT",
        "You need per-device authentication",
        "You need scaled provisioning",
        "You need bi-drectional communication between your backend and devices",
        "You need basic MQTT protocol support",
      ],
      doNotUseIf: [
        "You can get by by using regular messaging services",
        "You need messages larger than 256 KB",
        "You need a full-feature MQTT broker",
        "You need SDK support for languages and frameworks other than: C#, C, Java, Node.js, Python",
      ],
      colorScheme: "teal",
    },
    {
      provider: "azure",
      displayName: "Functions",
      logo: "/img/infrastructure/azure/Function Apps.svg",
      useIf: [
        "You need serverless functions written in C#, F#, Java, Javascript, PowerShell, Python, TypeScript",
        "You need one-off quick operations",
        "You need near infinite burst scaling",
        "You need complex orchestration scenarios",
      ],
      doNotUseIf: [
        "You need too write serverless code in unsupported languages",
        "You need an on-premise self-hosted serverless environment",
        "You need long-running operations",
      ],
      colorScheme: "yellow",
    },
    {
      provider: "azure",
      displayName: "Azure Cache for Redis",
      logo: "/img/infrastructure/azure/Azure Cache Redis Product icon.svg",
      useIf: [
        "You need a managed scalable distributed caching solution",
        "You need a way to store session, or and kind of transient data",
        "You need RedisBloom, RediSearch and RedisTimeSeries module integration",
      ],
      doNotUseIf: [
        "You need more than 99.99% uptime",
        "You need to have the Redis instance on premise",
      ],
      colorScheme: "red",
    },
    {
      provider: "azure",
      displayName: "Table Storage",
      logo: "/img/infrastructure/azure/Table Storage.svg",
      useIf: [
        "You need storage for semi-structured data",
        "You need a flexible data schema",
      ],
      doNotUseIf: [
        "You need a relational database",
        "You need entities (table rows) larger than 1 MB",
        "You need more than 255 properties on a single entity (table row)",
      ],
      colorScheme: "blue",
    },
    {
      provider: "azure",
      displayName: "API Management",
      logo: "/img/infrastructure/azure/API Management Services.svg",
      useIf: [
        "You need a managed API Gateway",
        "You need to selectively expose data to clients",
        "You need a solution for creating a developer experience for your APIs",
        "You need an API facade for legacy systems",
        "You need API Versioning",
        "You need to add authorization to existing APIs",
      ],
      doNotUseIf: [
        "You only intend on using the url routing",
        "You need only load balancing",
      ],
      colorScheme: "green",
    },
    {
      provider: "azure",
      displayName: "Application Gateway",
      logo: "/img/infrastructure/azure/Application Gateway.svg",
      useIf: [
        "You need a customizable OSI L7 load balancing solution",
        "You need support for cookie-base session affinity",
        "You need centralized SSL ofloading",
        "You need a web application firewall",
      ],
      doNotUseIf: [
        "You need more than 99.95 percent SLA",
        "You only need OSI L4 load balancing",
      ],
      colorScheme: "green",
    },
    {
      provider: "azure",
      displayName: "Logic Apps",
      logo: "/img/infrastructure/azure/Logic Apps.svg",
      useIf: [
        "You need to integrate many different systems together",
        "You need rapid scaling of your workflow or process",
        "You need to be able to quickly respond to business changes",
      ],
      doNotUseIf: ["You need to write a lot of custom code for your workflow"],
      colorScheme: "green",
    },
    {
      provider: "azure",
      displayName: "Kubernetes Service",
      logo: "/img/infrastructure/azure/Kubernetes.svg",
      useIf: [
        "You already have a dockerized application",
        "You are already using Kubernetes and need a hosted orchestration platform",
      ],
      doNotUseIf: ["You need to lift and shift an app to the cloud"],
      colorScheme: "blue",
    },
    {
      provider: "azure",
      displayName: "Service Fabric",
      logo: "/img/infrastructure/azure/Service Fabric Clusters.svg",
      useIf: [
        "You need to lift and shift an on on-premise system to the cloud",
        "You are mostly using the Microsoft stack",
      ],
      doNotUseIf: [
        "You already have a containerized Docker app and use Kubernetes",
      ],
      colorScheme: "orange",
    },
  ],
};

export default data;
