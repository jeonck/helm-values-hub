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
    repository: 'https://github.com/apache/pinot/tree/master/helm/pinot',
    chart: 'Manual Installation Required',
    latestVersion: '0.3.5-SNAPSHOT',
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
  },
  {
    id: 'nexus',
    name: 'Nexus Repository',
    category: 'Artifact Repository',
    description: 'A universal artifact repository manager for DevOps environments',
    repository: 'https://sonatypecommunity.github.io/helm3-charts/',
    chart: 'sonatype/nexus-repository-manager',
    latestVersion: '66.0.0',
    coreValues: {
      'replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of Nexus replicas'
      },
      'deploymentStrategy': {
        type: 'string',
        default: 'Recreate',
        options: ['Recreate', 'RollingUpdate'],
        description: 'Deployment strategy for updates'
      },
      'nexus.resources.requests.cpu': {
        type: 'string',
        default: '4',
        description: 'CPU request for Nexus container'
      },
      'nexus.resources.requests.memory': {
        type: 'string',
        default: '8Gi',
        description: 'Memory request for Nexus container'
      },
      'nexus.resources.limits.cpu': {
        type: 'string',
        default: '4',
        description: 'CPU limit for Nexus container'
      },
      'nexus.resources.limits.memory': {
        type: 'string',
        default: '8Gi',
        description: 'Memory limit for Nexus container'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage'
      },
      'persistence.storageSize': {
        type: 'string',
        default: '500Gi',
        description: 'Size of persistent volume for artifacts'
      },
      'persistence.accessMode': {
        type: 'string',
        default: 'ReadWriteOnce',
        description: 'Access mode for persistent volume'
      },
      'nexus.env': {
        type: 'object',
        default: {
          'INSTALL4J_ADD_VM_PARAMS': '-Xms2703m -Xmx2703m -XX:MaxDirectMemorySize=2703m -Djava.util.prefs.userRoot=/nexus-data/javaprefs'
        },
        description: 'Environment variables for Nexus'
      },
      'service.type': {
        type: 'string',
        default: 'ClusterIP',
        options: ['ClusterIP', 'NodePort', 'LoadBalancer'],
        description: 'Kubernetes service type'
      },
      'service.port': {
        type: 'number',
        default: 8081,
        description: 'Service port for Nexus web interface'
      },
      'ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress controller'
      },
      'ingress.annotations': {
        type: 'object',
        default: {
          'nginx.ingress.kubernetes.io/proxy-body-size': '0'
        },
        description: 'Ingress annotations for large file uploads'
      },
      'nexus.docker.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable Docker repository support'
      },
      'nexus.docker.registries': {
        type: 'array',
        default: [],
        description: 'Docker registry configurations'
      },
      'serviceAccount.create': {
        type: 'boolean',
        default: true,
        description: 'Create service account'
      },
      'securityContext.fsGroup': {
        type: 'number',
        default: 997,
        description: 'File system group for Nexus user'
      }
    }
  },
  {
    id: 'harbor',
    name: 'Harbor',
    category: 'Container Registry',
    description: 'An open source trusted cloud native registry project that stores, signs, and scans content',
    repository: 'https://helm.goharbor.io',
    chart: 'harbor/harbor',
    latestVersion: '1.14.0',
    coreValues: {
      'expose.type': {
        type: 'string',
        default: 'ingress',
        options: ['ingress', 'clusterIP', 'nodePort', 'loadBalancer'],
        description: 'Service exposure method'
      },
      'expose.tls.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable TLS for Harbor services'
      },
      'expose.ingress.hosts.core': {
        type: 'string',
        default: 'core.harbor.domain',
        description: 'Core service hostname'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage'
      },
      'persistence.resourcePolicy': {
        type: 'string',
        default: 'keep',
        options: ['keep', 'delete'],
        description: 'Resource policy for persistent volumes'
      },
      'persistence.persistentVolumeClaim.registry.size': {
        type: 'string',
        default: '5Gi',
        description: 'Registry storage size'
      },
      'persistence.persistentVolumeClaim.database.size': {
        type: 'string',
        default: '1Gi',
        description: 'Database storage size'
      },
      'persistence.persistentVolumeClaim.redis.size': {
        type: 'string',
        default: '1Gi',
        description: 'Redis storage size'
      },
      'harborAdminPassword': {
        type: 'string',
        default: 'Harbor12345',
        description: 'Initial Harbor admin password'
      },
      'database.internal.password': {
        type: 'string',
        default: 'changeit',
        description: 'Internal database password'
      },
      'core.resources.requests.memory': {
        type: 'string',
        default: '256Mi',
        description: 'Core service memory request'
      },
      'core.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'Core service CPU request'
      },
      'registry.resources.requests.memory': {
        type: 'string',
        default: '256Mi',
        description: 'Registry service memory request'
      },
      'registry.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'Registry service CPU request'
      },
      'trivy.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Trivy vulnerability scanner'
      },
      'notary.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Notary for image signing'
      },
      'chartmuseum.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Chart Museum for Helm charts'
      }
    }
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    category: 'DevOps Platform',
    description: 'A complete DevOps platform with Git repository, CI/CD, and project management',
    repository: 'https://charts.gitlab.io/',
    chart: 'gitlab/gitlab',
    latestVersion: '7.7.0',
    coreValues: {
      'global.hosts.domain': {
        type: 'string',
        default: 'example.com',
        description: 'Base domain for GitLab services'
      },
      'global.hosts.externalIP': {
        type: 'string',
        default: '',
        description: 'External IP for GitLab services'
      },
      'global.edition': {
        type: 'string',
        default: 'ce',
        options: ['ce', 'ee'],
        description: 'GitLab edition (Community/Enterprise)'
      },
      'global.initialRootPassword.secret': {
        type: 'string',
        default: 'gitlab-initial-root-password',
        description: 'Secret containing initial root password'
      },
      'global.psql.password.secret': {
        type: 'string',
        default: 'gitlab-postgres-password',
        description: 'PostgreSQL password secret'
      },
      'global.redis.password.secret': {
        type: 'string',
        default: 'gitlab-redis-secret',
        description: 'Redis password secret'
      },
      'postgresql.install': {
        type: 'boolean',
        default: true,
        description: 'Install PostgreSQL as part of GitLab'
      },
      'postgresql.resources.requests.memory': {
        type: 'string',
        default: '1Gi',
        description: 'PostgreSQL memory request'
      },
      'redis.install': {
        type: 'boolean',
        default: true,
        description: 'Install Redis as part of GitLab'
      },
      'gitlab.webservice.resources.requests.memory': {
        type: 'string',
        default: '1.25G',
        description: 'Webservice memory request'
      },
      'gitlab.webservice.resources.requests.cpu': {
        type: 'string',
        default: '300m',
        description: 'Webservice CPU request'
      },
      'gitlab.sidekiq.resources.requests.memory': {
        type: 'string',
        default: '1G',
        description: 'Sidekiq memory request'
      },
      'gitlab.sidekiq.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'Sidekiq CPU request'
      },
      'gitlab.gitaly.resources.requests.memory': {
        type: 'string',
        default: '1G',
        description: 'Gitaly memory request'
      },
      'gitlab.gitaly.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'Gitaly CPU request'
      },
      'gitlab.gitlab-shell.resources.requests.memory': {
        type: 'string',
        default: '100M',
        description: 'GitLab Shell memory request'
      },
      'gitlab.gitlab-shell.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'GitLab Shell CPU request'
      },
      'nginx-ingress.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable NGINX Ingress Controller'
      },
      'certmanager.install': {
        type: 'boolean',
        default: true,
        description: 'Install cert-manager for TLS certificates'
      },
      'global.ingress.class': {
        type: 'string',
        default: 'gitlab-nginx',
        description: 'Ingress class for GitLab services'
      }
    }
  },
  {
    id: 'minio',
    name: 'MinIO',
    category: 'Object Storage',
    description: 'High Performance Object Storage compatible with Amazon S3 APIs',
    repository: 'https://charts.min.io/',
    chart: 'minio/minio',
    latestVersion: '5.1.0',
    coreValues: {
      'mode': {
        type: 'string',
        default: 'distributed',
        options: ['standalone', 'distributed'],
        description: 'MinIO deployment mode'
      },
      'replicas': {
        type: 'number',
        default: 4,
        description: 'Number of MinIO pods (must be even for distributed mode)'
      },
      'rootUser': {
        type: 'string',
        default: 'admin',
        description: 'MinIO root user'
      },
      'rootPassword': {
        type: 'string',
        default: 'minio123',
        description: 'MinIO root password (min 8 chars)'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage'
      },
      'persistence.size': {
        type: 'string',
        default: '500Gi',
        description: 'Size of persistent volume per replica'
      },
      'persistence.storageClass': {
        type: 'string',
        default: '',
        description: 'Storage class for persistent volumes'
      },
      'resources.requests.memory': {
        type: 'string',
        default: '1Gi',
        description: 'Memory request per pod'
      },
      'resources.requests.cpu': {
        type: 'string',
        default: '250m',
        description: 'CPU request per pod'
      },
      'service.type': {
        type: 'string',
        default: 'ClusterIP',
        options: ['ClusterIP', 'NodePort', 'LoadBalancer'],
        description: 'Kubernetes service type'
      },
      'service.port': {
        type: 'number',
        default: 9000,
        description: 'MinIO API port'
      },
      'consoleService.port': {
        type: 'number',
        default: 9001,
        description: 'MinIO Console port'
      },
      'ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress for MinIO API'
      },
      'consoleIngress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress for MinIO Console'
      },
      'buckets': {
        type: 'array',
        default: [],
        description: 'Buckets to create on startup'
      },
      'users': {
        type: 'array',
        default: [],
        description: 'Additional users to create'
      },
      'policies': {
        type: 'array',
        default: [],
        description: 'IAM policies to create'
      },
      'metrics.serviceMonitor.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable Prometheus ServiceMonitor'
      },
      'podSecurityContext.runAsUser': {
        type: 'number',
        default: 1000,
        description: 'User ID for MinIO containers'
      },
      'podSecurityContext.runAsGroup': {
        type: 'number',
        default: 1000,
        description: 'Group ID for MinIO containers'
      }
    }
  },
  {
    id: 'vault',
    name: 'HashiCorp Vault',
    category: 'Secret Management',
    description: 'A tool for securely accessing secrets and protecting sensitive data',
    repository: 'https://helm.releases.hashicorp.com',
    chart: 'hashicorp/vault',
    latestVersion: '0.27.0',
    coreValues: {
      'server.ha.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable high availability mode'
      },
      'server.ha.replicas': {
        type: 'number',
        default: 3,
        description: 'Number of Vault server replicas in HA mode'
      },
      'server.resources.requests.memory': {
        type: 'string',
        default: '256Mi',
        description: 'Memory request for Vault server'
      },
      'server.resources.requests.cpu': {
        type: 'string',
        default: '250m',
        description: 'CPU request for Vault server'
      },
      'server.resources.limits.memory': {
        type: 'string',
        default: '256Mi',
        description: 'Memory limit for Vault server'
      },
      'server.resources.limits.cpu': {
        type: 'string',
        default: '250m',
        description: 'CPU limit for Vault server'
      },
      'server.dataStorage.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage for Vault data'
      },
      'server.dataStorage.size': {
        type: 'string',
        default: '10Gi',
        description: 'Size of persistent volume for Vault data'
      },
      'server.auditStorage.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable persistent storage for audit logs'
      },
      'server.auditStorage.size': {
        type: 'string',
        default: '10Gi',
        description: 'Size of persistent volume for audit logs'
      },
      'server.standalone.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable standalone mode (dev/testing)'
      },
      'server.dev.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable dev mode (insecure, for testing only)'
      },
      'injector.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Vault Agent Injector'
      },
      'injector.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of injector replicas'
      },
      'injector.resources.requests.memory': {
        type: 'string',
        default: '256Mi',
        description: 'Memory request for injector'
      },
      'injector.resources.requests.cpu': {
        type: 'string',
        default: '250m',
        description: 'CPU request for injector'
      },
      'ui.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Vault UI'
      },
      'ui.serviceType': {
        type: 'string',
        default: 'ClusterIP',
        options: ['ClusterIP', 'NodePort', 'LoadBalancer'],
        description: 'Service type for Vault UI'
      },
      'csi.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable Vault CSI Provider'
      }
    }
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    category: 'CI/CD',
    description: 'Open source automation server for building, testing, and deploying code',
    repository: 'https://charts.jenkins.io',
    chart: 'jenkins/jenkins',
    latestVersion: '5.1.9',
    coreValues: {
      'controller.adminPassword': {
        type: 'string',
        default: 'admin',
        description: 'Admin user password'
      },
      'controller.resources.requests.cpu': {
        type: 'string',
        default: '50m',
        description: 'CPU request for Jenkins controller'
      },
      'controller.resources.requests.memory': {
        type: 'string',
        default: '256Mi',
        description: 'Memory request for Jenkins controller'
      },
      'controller.resources.limits.cpu': {
        type: 'string',
        default: '2000m',
        description: 'CPU limit for Jenkins controller'
      },
      'controller.resources.limits.memory': {
        type: 'string',
        default: '4Gi',
        description: 'Memory limit for Jenkins controller'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable persistent storage for Jenkins home'
      },
      'persistence.size': {
        type: 'string',
        default: '8Gi',
        description: 'Size of persistent volume'
      },
      'agent.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Jenkins agents'
      },
      'agent.resources.requests.cpu': {
        type: 'string',
        default: '512m',
        description: 'CPU request for Jenkins agents'
      },
      'agent.resources.requests.memory': {
        type: 'string',
        default: '512Mi',
        description: 'Memory request for Jenkins agents'
      },
      'serviceAccount.create': {
        type: 'boolean',
        default: true,
        description: 'Create service account for Jenkins'
      },
      'rbac.create': {
        type: 'boolean',
        default: true,
        description: 'Create RBAC resources'
      },
      'controller.ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress for Jenkins UI'
      },
      'controller.installPlugins': {
        type: 'array',
        default: ['kubernetes:4029.v5712230ccb_f8', 'workflow-aggregator:596.v8c21c963d92d', 'git:5.0.0'],
        description: 'Plugins to install on startup'
      }
    }
  },
  {
    id: 'argocd',
    name: 'Argo CD',
    category: 'GitOps',
    description: 'Declarative GitOps continuous delivery tool for Kubernetes',
    repository: 'https://argoproj.github.io/argo-helm',
    chart: 'argo/argo-cd',
    latestVersion: '5.51.6',
    coreValues: {
      'server.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of Argo CD server replicas'
      },
      'server.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'CPU request for Argo CD server'
      },
      'server.resources.requests.memory': {
        type: 'string',
        default: '128Mi',
        description: 'Memory request for Argo CD server'
      },
      'server.ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress for Argo CD server'
      },
      'server.config': {
        type: 'object',
        default: {
          'url': 'https://argocd.example.com'
        },
        description: 'Argo CD server configuration'
      },
      'repoServer.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of repo server replicas'
      },
      'repoServer.resources.requests.cpu': {
        type: 'string',
        default: '10m',
        description: 'CPU request for repo server'
      },
      'repoServer.resources.requests.memory': {
        type: 'string',
        default: '64Mi',
        description: 'Memory request for repo server'
      },
      'applicationSet.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable ApplicationSet controller'
      },
      'dex.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Dex for OIDC authentication'
      },
      'redis.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Redis for caching'
      },
      'notifications.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable Argo CD notifications controller'
      },
      'server.rbacConfig': {
        type: 'object',
        default: {},
        description: 'RBAC configuration for Argo CD'
      }
    }
  },
  {
    id: 'tekton',
    name: 'Tekton Pipelines',
    category: 'CI/CD',
    description: 'Cloud-native solution for building CI/CD systems on Kubernetes',
    repository: 'https://storage.googleapis.com/tekton-releases/pipeline/latest',
    chart: 'tekton/tekton-pipelines',
    latestVersion: '0.53.0',
    coreValues: {
      'controller.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of controller replicas'
      },
      'controller.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'CPU request for controller'
      },
      'controller.resources.requests.memory': {
        type: 'string',
        default: '100Mi',
        description: 'Memory request for controller'
      },
      'webhook.replicas': {
        type: 'number',
        default: 1,
        description: 'Number of webhook replicas'
      },
      'webhook.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'CPU request for webhook'
      },
      'webhook.resources.requests.memory': {
        type: 'string',
        default: '100Mi',
        description: 'Memory request for webhook'
      },
      'config.defaults': {
        type: 'object',
        default: {
          'default-timeout-minutes': '60',
          'default-service-account': 'default'
        },
        description: 'Default configuration for Tekton pipelines'
      },
      'config.feature-flags': {
        type: 'object',
        default: {
          'disable-affinity-assistant': 'false',
          'running-in-environment-with-injected-sidecars': 'true'
        },
        description: 'Feature flags for Tekton'
      },
      'rbac.create': {
        type: 'boolean',
        default: true,
        description: 'Create RBAC resources'
      },
      'serviceAccount.create': {
        type: 'boolean',
        default: true,
        description: 'Create service account'
      }
    }
  },
  {
    id: 'sonarqube',
    name: 'SonarQube',
    category: 'Code Quality',
    description: 'Platform for continuous inspection of code quality and security vulnerabilities',
    repository: 'https://SonarSource.github.io/helm-chart-sonarqube',
    chart: 'sonarqube/sonarqube',
    latestVersion: '10.4.1',
    coreValues: {
      'replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of SonarQube replicas'
      },
      'sonarqubeFolder': {
        type: 'string',
        default: '/opt/sonarqube',
        description: 'SonarQube installation directory'
      },
      'resources.requests.cpu': {
        type: 'string',
        default: '400m',
        description: 'CPU request for SonarQube'
      },
      'resources.requests.memory': {
        type: 'string',
        default: '2Gi',
        description: 'Memory request for SonarQube'
      },
      'resources.limits.cpu': {
        type: 'string',
        default: '800m',
        description: 'CPU limit for SonarQube'
      },
      'resources.limits.memory': {
        type: 'string',
        default: '4Gi',
        description: 'Memory limit for SonarQube'
      },
      'persistence.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable persistent storage'
      },
      'persistence.size': {
        type: 'string',
        default: '5Gi',
        description: 'Size of persistent volume'
      },
      'postgresql.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable PostgreSQL subchart'
      },
      'postgresql.auth.postgresPassword': {
        type: 'string',
        default: 'sonarPass',
        description: 'PostgreSQL admin password'
      },
      'postgresql.auth.database': {
        type: 'string',
        default: 'sonarDB',
        description: 'PostgreSQL database name'
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
        description: 'Enable ingress controller'
      },
      'plugins.install': {
        type: 'array',
        default: [],
        description: 'SonarQube plugins to install'
      }
    }
  },
  {
    id: 'jaeger',
    name: 'Jaeger',
    category: 'Observability',
    description: 'End-to-end distributed tracing system for monitoring microservices',
    repository: 'https://jaegertracing.github.io/helm-charts',
    chart: 'jaegertracing/jaeger',
    latestVersion: '2.2.0',
    coreValues: {
      'provisionDataStore.cassandra': {
        type: 'boolean',
        default: true,
        description: 'Provision Cassandra for storage'
      },
      'provisionDataStore.elasticsearch': {
        type: 'boolean',
        default: false,
        description: 'Provision Elasticsearch for storage'
      },
      'storage.type': {
        type: 'string',
        default: 'cassandra',
        options: ['cassandra', 'elasticsearch', 'memory'],
        description: 'Storage backend type'
      },
      'agent.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Jaeger agent'
      },
      'collector.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Jaeger collector'
      },
      'collector.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of collector replicas'
      },
      'collector.resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'CPU request for collector'
      },
      'collector.resources.requests.memory': {
        type: 'string',
        default: '128Mi',
        description: 'Memory request for collector'
      },
      'query.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Jaeger query service'
      },
      'query.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of query replicas'
      },
      'query.ingress.enabled': {
        type: 'boolean',
        default: false,
        description: 'Enable ingress for Jaeger UI'
      },
      'cassandra.config.cluster_size': {
        type: 'number',
        default: 3,
        description: 'Cassandra cluster size'
      },
      'cassandra.config.seed_size': {
        type: 'number',
        default: 1,
        description: 'Cassandra seed size'
      }
    }
  },
  {
    id: 'falco',
    name: 'Falco',
    category: 'Security',
    description: 'Runtime security monitoring for detecting anomalous activities in applications',
    repository: 'https://falcosecurity.github.io/charts',
    chart: 'falcosecurity/falco',
    latestVersion: '4.0.4',
    coreValues: {
      'driver.kind': {
        type: 'string',
        default: 'ebpf',
        options: ['ebpf', 'kmod', 'modern_ebpf'],
        description: 'Driver type for system call monitoring'
      },
      'driver.ebpf.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable eBPF driver'
      },
      'falco.rules_file': {
        type: 'array',
        default: ['/etc/falco/falco_rules.yaml', '/etc/falco/falco_rules.local.yaml', '/etc/falco/rules.d'],
        description: 'Falco rules files'
      },
      'falco.json_output': {
        type: 'boolean',
        default: false,
        description: 'Enable JSON output format'
      },
      'falco.log_stderr': {
        type: 'boolean',
        default: true,
        description: 'Log to stderr'
      },
      'falco.log_syslog': {
        type: 'boolean',
        default: true,
        description: 'Log to syslog'
      },
      'falco.priority': {
        type: 'string',
        default: 'debug',
        options: ['emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug'],
        description: 'Minimum priority of rules to load'
      },
      'resources.requests.cpu': {
        type: 'string',
        default: '100m',
        description: 'CPU request'
      },
      'resources.requests.memory': {
        type: 'string',
        default: '512Mi',
        description: 'Memory request'
      },
      'resources.limits.cpu': {
        type: 'string',
        default: '1000m',
        description: 'CPU limit'
      },
      'resources.limits.memory': {
        type: 'string',
        default: '1024Mi',
        description: 'Memory limit'
      },
      'serviceAccount.create': {
        type: 'boolean',
        default: true,
        description: 'Create service account'
      },
      'rbac.create': {
        type: 'boolean',
        default: true,
        description: 'Create RBAC resources'
      },
      'falcoctl.artifact.install.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable artifact installation via falcoctl'
      }
    }
  },
  {
    id: 'cert-manager',
    name: 'cert-manager',
    category: 'Security',
    description: 'Automatically provision and manage TLS certificates in Kubernetes',
    repository: 'https://charts.jetstack.io',
    chart: 'jetstack/cert-manager',
    latestVersion: '1.13.3',
    coreValues: {
      'installCRDs': {
        type: 'boolean',
        default: false,
        description: 'Install cert-manager CRDs'
      },
      'replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of cert-manager replicas'
      },
      'resources.requests.cpu': {
        type: 'string',
        default: '10m',
        description: 'CPU request for cert-manager'
      },
      'resources.requests.memory': {
        type: 'string',
        default: '32Mi',
        description: 'Memory request for cert-manager'
      },
      'webhook.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of webhook replicas'
      },
      'webhook.resources.requests.cpu': {
        type: 'string',
        default: '10m',
        description: 'CPU request for webhook'
      },
      'webhook.resources.requests.memory': {
        type: 'string',
        default: '32Mi',
        description: 'Memory request for webhook'
      },
      'cainjector.replicaCount': {
        type: 'number',
        default: 1,
        description: 'Number of CA injector replicas'
      },
      'cainjector.resources.requests.cpu': {
        type: 'string',
        default: '10m',
        description: 'CPU request for CA injector'
      },
      'cainjector.resources.requests.memory': {
        type: 'string',
        default: '32Mi',
        description: 'Memory request for CA injector'
      },
      'serviceAccount.create': {
        type: 'boolean',
        default: true,
        description: 'Create service account for cert-manager'
      },
      'rbac.create': {
        type: 'boolean',
        default: true,
        description: 'Create RBAC resources'
      },
      'prometheus.enabled': {
        type: 'boolean',
        default: true,
        description: 'Enable Prometheus metrics'
      },
      'extraArgs': {
        type: 'array',
        default: [],
        description: 'Additional arguments for cert-manager'
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
  'Real-time Analytics',
  'Artifact Repository',
  'Container Registry',
  'DevOps Platform',
  'Object Storage',
  'Secret Management',
  'CI/CD',
  'GitOps',
  'Code Quality',
  'Observability',
  'Security'
];