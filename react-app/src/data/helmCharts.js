export const helmCharts = [
  {
    id: 'apache-airflow',
    name: 'Apache Airflow',
    category: 'Workflow Orchestration',
    description: 'A platform to programmatically author, schedule and monitor workflows',
    repository: 'https://airflow.apache.org/docs/helm-chart/stable/',
    chart: 'apache-airflow/airflow',
    latestVersion: '1.11.0',
    coreValues: {
      executor: {
        type: 'string',
        default: 'CeleryExecutor',
        options: ['LocalExecutor', 'CeleryExecutor', 'KubernetesExecutor', 'CeleryKubernetesExecutor'],
        description: 'Airflow executor type'
      },
      'postgresql.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable PostgreSQL subchart'
      },
      'redis.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Redis subchart'
      },
      'webserver.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of webserver replicas'
      },
      'scheduler.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of scheduler replicas'
      },
      'workers.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of worker replicas'
      },
      'defaultAirflowRepository': {
        type: 'string',
        default: 'apache/airflow',
        description: 'Default Airflow Docker image repository'
      },
      'defaultAirflowTag': {
        type: 'string',
        default: '2.7.1',
        description: 'Default Airflow Docker image tag'
      }
    }
  },
  {
    id: 'kafka',
    name: 'Apache Kafka (Bitnami)',
    category: 'Message Streaming',
    description: 'A distributed streaming platform',
    repository: 'https://charts.bitnami.com/bitnami',
    chart: 'bitnami/kafka',
    latestVersion: '25.3.5',
    coreValues: {
      'replicaCount': {
        type: 'number',
        default: 3,
        description: 'Number of Kafka brokers'
      },
      'zookeeper.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable ZooKeeper subchart'
      },
      'zookeeper.replicaCount': {
        type: 'number',
        default: 3,
        description: 'Number of ZooKeeper replicas'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistence using PVC'
      },
      'persistence.size': {
        type: 'string',
        default: '8Gi',
        description: 'PVC Storage Request'
      },
      'metrics.kafka.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable Kafka metrics'
      },
      'auth.clientProtocol': {
        type: 'string',
        default: 'plaintext',
        options: ['plaintext', 'tls', 'mtls', 'sasl', 'sasl_tls'],
        description: 'Authentication protocol for client connections'
      }
    }
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    category: 'Search & Analytics',
    description: 'A distributed, RESTful search and analytics engine',
    repository: 'https://helm.elastic.co',
    chart: 'elastic/elasticsearch',
    latestVersion: '8.5.1',
    coreValues: {
      'replicas': {
        type: 'number',
        default: 3,
        description: 'Number of Elasticsearch replicas'
      },
      'minimumMasterNodes': {
        type: 'number',
        default: 2,
        description: 'Minimum master nodes'
      },
      'esJavaOpts': {
        type: 'string',
        default: '-Xmx1g -Xms1g',
        description: 'Java options for Elasticsearch'
      },
      'resources.requests.memory': {
        type: 'string',
        default: '2Gi',
        description: 'Memory request'
      },
      'resources.limits.memory': {
        type: 'string',
        default: '2Gi',
        description: 'Memory limit'
      },
      'volumeClaimTemplate.resources.requests.storage': {
        type: 'string',
        default: '30Gi',
        description: 'Storage request for persistent volumes'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage'
      }
    }
  },
  {
    id: 'kibana',
    name: 'Kibana',
    category: 'Visualization',
    description: 'Data visualization dashboard for Elasticsearch',
    repository: 'https://helm.elastic.co',
    chart: 'elastic/kibana',
    latestVersion: '8.5.1',
    coreValues: {
      'replicas': {
        type: 'number',
        default: 1,
        description: 'Number of Kibana replicas'
      },
      'elasticsearchHosts': {
        type: 'string',
        default: 'http://elasticsearch-master:9200',
        description: 'Elasticsearch endpoints'
      },
      'service.type': {
        type: 'string',
        default: 'ClusterIP',
        options: ['ClusterIP', 'NodePort', 'LoadBalancer'],
        description: 'Kubernetes service type'
      },
      'ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress controller resource'
      },
      'resources.requests.memory': {
        type: 'string',
        default: '1Gi',
        description: 'Memory request'
      },
      'resources.limits.memory': {
        type: 'string',
        default: '1Gi',
        description: 'Memory limit'
      }
    }
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    category: 'Monitoring',
    description: 'Systems monitoring and alerting toolkit',
    repository: 'https://prometheus-community.github.io/helm-charts',
    chart: 'prometheus-community/prometheus',
    latestVersion: '25.6.0',
    coreValues: {
      'server.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of Prometheus server replicas'
      },
      'server.retention': {
        type: 'string',
        default: '15d',
        description: 'Data retention period'
      },
      'server.persistentVolume.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage'
      },
      'server.persistentVolume.size': {
        type: 'string',
        default: '8Gi',
        description: 'Storage size'
      },
      'alertmanager.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Alertmanager'
      },
      'pushgateway.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Pushgateway'
      },
      'nodeExporter.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Node Exporter'
      }
    }
  },
  {
    id: 'grafana',
    name: 'Grafana',
    category: 'Visualization',
    description: 'The open observability platform',
    repository: 'https://grafana.github.io/helm-charts',
    chart: 'grafana/grafana',
    latestVersion: '7.0.8',
    coreValues: {
      'replicas': {
        type: 'number',
        default: 1,
        description: 'Number of Grafana replicas'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable persistent storage'
      },
      'persistence.size': {
        type: 'string',
        default: '10Gi',
        description: 'Storage size'
      },
      'adminPassword': {
        type: 'string',
        default: 'admin',
        description: 'Admin user password'
      },
      'service.type': {
        type: 'string',
        default: 'ClusterIP',
        options: ['ClusterIP', 'NodePort', 'LoadBalancer'],
        description: 'Kubernetes service type'
      },
      'ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress controller resource'
      }
    }
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL (Bitnami)',
    category: 'Database',
    description: 'A powerful, open source object-relational database system',
    repository: 'https://charts.bitnami.com/bitnami',
    chart: 'bitnami/postgresql',
    latestVersion: '13.2.24',
    coreValues: {
      'auth.postgresPassword': {
        type: 'string',
        default: '',
        description: 'Password for the postgres admin user'
      },
      'auth.database': {
        type: 'string',
        default: '',
        description: 'Name for a custom database to create'
      },
      'primary.persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistence using PVC'
      },
      'primary.persistence.size': {
        type: 'string',
        default: '8Gi',
        description: 'PVC Storage Request'
      },
      'metrics.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable metrics collection'
      },
      'architecture': {
        type: 'string',
        default: 'standalone',
        options: ['standalone', 'replication'],
        description: 'PostgreSQL architecture'
      }
    }
  },
  {
    id: 'redis',
    name: 'Redis (Bitnami)',
    category: 'Cache',
    description: 'An in-memory data structure store',
    repository: 'https://charts.bitnami.com/bitnami',
    chart: 'bitnami/redis',
    latestVersion: '18.4.0',
    coreValues: {
      'architecture': {
        type: 'string',
        default: 'standalone',
        options: ['standalone', 'replication'],
        description: 'Redis architecture'
      },
      'auth.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable password authentication'
      },
      'auth.password': {
        type: 'string',
        default: '',
        description: 'Redis password'
      },
      'master.persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistence using PVC'
      },
      'master.persistence.size': {
        type: 'string',
        default: '8Gi',
        description: 'PVC Storage Request'
      },
      'metrics.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable metrics collection'
      }
    }
  },
  {
    id: 'spark',
    name: 'Apache Spark (Bitnami)',
    category: 'Data Processing',
    description: 'Unified analytics engine for large-scale data processing',
    repository: 'https://charts.bitnami.com/bitnami',
    chart: 'bitnami/spark',
    latestVersion: '8.1.6',
    coreValues: {
      'master.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of Spark master replicas'
      },
      'worker.replicaCount': {
        type: 'number',
        default: 2,
        description: 'Number of Spark worker replicas'
      },
      'worker.resources.limits.memory': {
        type: 'string',
        default: '2Gi',
        description: 'Worker memory limit'
      },
      'worker.resources.limits.cpu': {
        type: 'string',
        default: '1',
        description: 'Worker CPU limit'
      },
      'service.type': {
        type: 'string',
        default: 'ClusterIP',
        options: ['ClusterIP', 'NodePort', 'LoadBalancer'],
        description: 'Kubernetes service type'
      },
      'metrics.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable metrics collection'
      }
    }
  },
  {
    id: 'jupyterhub',
    name: 'JupyterHub',
    category: 'Analytics',
    description: 'Multi-user Jupyter notebook server',
    repository: 'https://jupyterhub.github.io/helm-chart/',
    chart: 'jupyterhub/jupyterhub',
    latestVersion: '3.1.0',
    coreValues: {
      'proxy.secretToken': {
        type: 'string',
        default: '',
        description: 'Proxy secret token (required)'
      },
      'singleuser.defaultUrl': {
        type: 'string',
        default: '/lab',
        description: 'Default URL for users'
      },
      'singleuser.memory.limit': {
        type: 'string',
        default: '1G',
        description: 'Memory limit per user'
      },
      'singleuser.memory.guarantee': {
        type: 'string',
        default: '1G',
        description: 'Memory guarantee per user'
      },
      'singleuser.cpu.limit': {
        type: 'number',
        default: 1,
        description: 'CPU limit per user'
      },
      'hub.db.type': {
        type: 'string',
        default: 'sqlite-pvc',
        options: ['sqlite-pvc', 'sqlite-memory', 'mysql', 'postgresql'],
        description: 'Database type'
      }
    }
  },
  {
    id: 'pinot',
    name: 'Apache Pinot',
    category: 'Real-time Analytics',
    description: 'A realtime distributed OLAP datastore for analytics at scale',
    repository: 'https://raw.githubusercontent.com/apache/pinot/master/kubernetes/helm',
    chart: 'pinot/pinot',
    latestVersion: '0.12.0',
    coreValues: {
      'cluster.name': {
        type: 'string',
        default: 'pinot',
        description: 'Pinot cluster name'
      },
      'controller.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of controller replicas'
      },
      'controller.persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistence for controller'
      },
      'controller.persistence.size': {
        type: 'string',
        default: '1Gi',
        description: 'Controller persistent volume size'
      },
      'broker.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of broker replicas'
      },
      'server.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of server replicas'
      },
      'server.persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistence for server'
      },
      'server.persistence.size': {
        type: 'string',
        default: '4Gi',
        description: 'Server persistent volume size'
      },
      'minion.persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistence for minion'
      },
      'minion.persistence.size': {
        type: 'string',
        default: '4Gi',
        description: 'Minion persistent volume size'
      },
      'zookeeper.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable ZooKeeper subchart'
      },
      'zookeeper.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of ZooKeeper replicas'
      }
    }
  },
  {
    id: 'opensearch',
    name: 'OpenSearch',
    category: 'Search & Analytics',
    description: 'A community-driven, open source search and analytics suite derived from Elasticsearch',
    repository: 'https://opensearch-project.github.io/helm-charts/',
    chart: 'opensearch/opensearch',
    latestVersion: '3.2.1',
    coreValues: {
      'clusterName': {
        type: 'string',
        default: 'opensearch-cluster',
        description: 'OpenSearch cluster name'
      },
      'nodeGroup': {
        type: 'string',
        default: 'master',
        description: 'Node group name for the pods'
      },
      'roles': {
        type: 'array',
        default: ['master', 'ingest', 'data', 'remote_cluster_client'],
        description: 'OpenSearch roles for this node group'
      },
      'replicas': {
        type: 'number',
        default: 3,
        description: 'Number of OpenSearch replicas'
      },
      'minimumMasterNodes': {
        type: 'number',
        default: 2,
        description: 'Minimum master nodes (should be (replicas/2) + 1)'
      },
      'opensearchJavaOpts': {
        type: 'string',
        default: '-Xmx512M -Xms512M',
        description: 'Java options for OpenSearch JVM'
      },
      'resources.requests.cpu': {
        type: 'string',
        default: '1000m',
        description: 'CPU request per pod'
      },
      'resources.requests.memory': {
        type: 'string',
        default: '100Mi',
        description: 'Memory request per pod'
      },
      'resources.limits.cpu': {
        type: 'string',
        default: '1000m',
        description: 'CPU limit per pod'
      },
      'resources.limits.memory': {
        type: 'string',
        default: '512Mi',
        description: 'Memory limit per pod'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage for data'
      },
      'persistence.size': {
        type: 'string',
        default: '8Gi',
        description: 'Size of persistent volume'
      },
      'persistence.accessModes': {
        type: 'array',
        default: ['ReadWriteOnce'],
        description: 'Access modes for persistent volume'
      },
      'protocol': {
        type: 'string',
        default: 'https',
        options: ['http', 'https'],
        description: 'Protocol for OpenSearch API'
      },
      'httpPort': {
        type: 'number',
        default: 9200,
        description: 'HTTP port for OpenSearch API'
      },
      'transportPort': {
        type: 'number',
        default: 9300,
        description: 'Transport port for cluster communication'
      },
      'config.opensearch.yml': {
        type: 'string',
        default: 'cluster.name: opensearch-cluster\nnetwork.host: 0.0.0.0',
        description: 'OpenSearch configuration in YAML format'
      },
      'securityConfig.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable OpenSearch Security plugin'
      },
      'securityConfig.path': {
        type: 'string',
        default: '/usr/share/opensearch/config/opensearch-security',
        description: 'Path to security configuration directory'
      },
      'securityConfig.config.securityConfigSecret': {
        type: 'string',
        default: '',
        description: 'Secret containing security configuration files'
      },
      'service.type': {
        type: 'string',
        default: 'ClusterIP',
        options: ['ClusterIP', 'NodePort', 'LoadBalancer'],
        description: 'Kubernetes service type'
      },
      'ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress for external access'
      },
      'networkPolicy.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable Kubernetes NetworkPolicy'
      },
      'podSecurityContext.fsGroup': {
        type: 'number',
        default: 1000,
        description: 'File system group for pod security context'
      },
      'serviceAccount.create': {
        type: 'boolean',
        default: true,
        description: 'Create a service account for the deployment'
      },
      'rbac.create': {
        type: 'boolean',
        default: true,
        description: 'Create RBAC resources'
      },
      'plugins.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable additional OpenSearch plugins'
      },
      'antiAffinity': {
        type: 'string',
        default: 'soft',
        options: ['hard', 'soft'],
        description: 'Pod anti-affinity rule (hard/soft)'
      }
    }
  }
];

export const categories = [
  'All',
  'Workflow Orchestration',
  'Message Streaming',
  'Search & Analytics',
  'Visualization',
  'Monitoring',
  'Database',
  'Cache',
  'Data Processing',
  'Analytics',
  'Real-time Analytics'
];