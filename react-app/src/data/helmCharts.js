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
  'Analytics'
];