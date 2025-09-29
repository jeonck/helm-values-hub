# 🚀 Helm Values Hub

데이터 플랫폼 구축을 위한 인기 Helm 차트들의 핵심 **values.yaml** 설정을 한눈에 관리하고 확인할 수 있는 웹 애플리케이션입니다.

## 🌟 주요 기능

- **📊 24개 인기 Helm 차트** - 데이터 플랫폼 필수 솔루션들
- **🔍 실시간 검색** - 차트명, 설명, 카테고리별 검색
- **📂 카테고리 필터링** - 21개 카테고리로 체계적 분류
- **⚙️ 핵심 Values 설정** - 각 차트의 중요 설정값 상세 정보
- **📋 YAML 예시 생성** - 즉시 사용 가능한 values.yaml 템플릿
- **📋 원클릭 복사** - 설치 명령어 및 설정값 복사
- **🎨 반응형 디자인** - 모든 디바이스에서 최적화된 UI

## 🛠️ 포함된 솔루션 카테고리

### 📊 데이터 플랫폼
- **Workflow Orchestration**: Apache Airflow
- **Message Streaming**: Apache Kafka, Apache Pulsar
- **Search & Analytics**: Elasticsearch, Apache Solr
- **Real-time Analytics**: Apache Pinot
- **Database**: PostgreSQL, MongoDB, MySQL, Redis
- **Analytics**: Apache Superset, Metabase

### 🔧 DevOps & 인프라
- **CI/CD**: Jenkins, Tekton
- **GitOps**: Argo CD
- **Code Quality**: SonarQube
- **Container Registry**: Harbor
- **Artifact Repository**: Nexus Repository
- **Object Storage**: MinIO
- **Secret Management**: HashiCorp Vault

### 📈 모니터링 & 관찰성
- **Monitoring**: Prometheus, Grafana
- **Observability**: Jaeger
- **Security**: Falco
- **Certificate Management**: cert-manager

## 🚀 빠른 시작

### 로컬 개발 환경

```bash
# 저장소 클론
git clone https://github.com/jeonck/helm-values-hub.git
cd helm-values-hub/react-app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 미리보기
npm run preview
```

## 🌐 온라인 접속

**GitHub Pages**: [https://jeonck.github.io/helm-values-hub/](https://jeonck.github.io/helm-values-hub/)

## 📱 사용법

### 1. 차트 검색
- 상단 검색창에서 차트명, 설명, 카테고리로 검색
- 실시간으로 필터링된 결과 확인

### 2. 카테고리 필터링
- 관심 있는 카테고리 버튼 클릭
- 해당 카테고리의 차트만 표시

### 3. 차트 상세 정보
- 차트 카드 클릭으로 상세 정보 모달 열기
- 핵심 Values 설정값 확인
- values.yaml 예시 코드 복사

### 4. 설치하기
- 설치 명령어 원클릭 복사
- Helm 저장소 추가 및 차트 설치

## 🔧 기술 스택

- **Frontend**: React 18
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 프로젝트 구조

```
helm-values-hub/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages 자동 배포
├── react-app/
│   ├── src/
│   │   ├── App.jsx            # 메인 컴포넌트
│   │   ├── main.jsx           # React 진입점
│   │   ├── index.css          # Tailwind 스타일
│   │   └── data/
│   │       └── helmCharts.js  # Helm 차트 데이터
│   ├── public/
│   │   └── vite.svg          # Favicon
│   ├── package.json          # 의존성 정의
│   ├── vite.config.js        # Vite 설정
│   ├── tailwind.config.js    # Tailwind 설정
│   └── postcss.config.js     # PostCSS 설정
├── CLAUDE.md                 # 개발 가이드
└── README.md                 # 프로젝트 문서
```

## 🎯 대상 사용자

- **데이터 엔지니어**: 데이터 파이프라인 구축
- **DevOps 엔지니어**: 쿠버네티스 환경 구성
- **플랫폼 엔지니어**: 엔터프라이즈 인프라 관리
- **개발팀**: CI/CD 및 모니터링 도구 도입

## 📊 포함된 차트 목록

### 데이터 처리 & 분석
| 차트 | 카테고리 | 설명 |
|------|----------|------|
| Apache Airflow | Workflow Orchestration | 워크플로우 관리 및 스케줄링 |
| Apache Kafka | Message Streaming | 분산 스트리밍 플랫폼 |
| Apache Pulsar | Message Streaming | 클라우드 네이티브 메시징 |
| Elasticsearch | Search & Analytics | 검색 및 분석 엔진 |
| OpenSearch | Search & Analytics | 오픈소스 검색 플랫폼 |
| Apache Pinot | Real-time Analytics | 실시간 분석 데이터베이스 |
| Apache Superset | Analytics | 데이터 시각화 플랫폼 |

### 데이터베이스 & 스토리지
| 차트 | 카테고리 | 설명 |
|------|----------|------|
| PostgreSQL | Database | 관계형 데이터베이스 |
| MongoDB | Database | NoSQL 문서 데이터베이스 |
| MySQL | Database | 관계형 데이터베이스 |
| Redis | Cache | 인메모리 데이터 스토어 |
| MinIO | Object Storage | S3 호환 객체 스토리지 |

### DevOps & 보안
| 차트 | 카테고리 | 설명 |
|------|----------|------|
| Jenkins | CI/CD | 지속적 통합/배포 |
| Argo CD | GitOps | GitOps 지속적 배포 |
| Harbor | Container Registry | 컨테이너 레지스트리 |
| HashiCorp Vault | Secret Management | 시크릿 관리 |
| SonarQube | Code Quality | 코드 품질 분석 |
| Falco | Security | 런타임 보안 모니터링 |

### 모니터링 & 관찰성
| 차트 | 카테고리 | 설명 |
|------|----------|------|
| Prometheus | Monitoring | 메트릭 수집 및 모니터링 |
| Grafana | Visualization | 메트릭 시각화 대시보드 |
| Jaeger | Observability | 분산 트레이싱 |
| cert-manager | Security | TLS 인증서 자동 관리 |

## 🤝 기여하기

새로운 Helm 차트 추가나 기존 정보 업데이트를 원하시면:

1. **이슈 생성**: 추가하고 싶은 차트나 수정사항 제안
2. **Pull Request**: `react-app/src/data/helmCharts.js` 파일 수정
3. **테스트**: 로컬에서 빌드 및 동작 확인

### 새 차트 추가 형식

```javascript
{
  id: 'unique-id',
  name: 'Chart Name',
  category: 'Category Name',
  description: 'Chart description',
  repository: 'https://helm-repo-url',
  chart: 'repo/chart-name',
  latestVersion: '1.0.0',
  coreValues: {
    'key': {
      type: 'string|number|boolean|object',
      default: 'default-value',
      description: 'Setting description',
      options: ['option1', 'option2'] // optional
    }
  }
}
```

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말

이 프로젝트는 쿠버네티스 생태계의 다양한 오픈소스 프로젝트들과 그들의 커뮤니티 덕분에 가능했습니다.

---

**⭐ 이 프로젝트가 도움이 되셨다면 GitHub Star를 눌러주세요!**

## 📞 문의

- **GitHub Issues**: [이슈 등록](https://github.com/jeonck/helm-values-hub/issues)
- **GitHub Discussions**: [토론 참여](https://github.com/jeonck/helm-values-hub/discussions)