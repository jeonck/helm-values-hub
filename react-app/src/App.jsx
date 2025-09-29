import { useState, useMemo } from 'react'
import { Search, Filter, ExternalLink, Copy, Check, Settings, Database, BarChart3, Workflow, MessageSquare, Eye, Activity, Server, Zap, BookOpen, TrendingUp, Package, Shield, GitBranch, HardDrive, Key } from 'lucide-react'
import { helmCharts, categories } from './data/helmCharts'

const categoryIcons = {
  'Workflow Orchestration': Workflow,
  'Message Streaming': MessageSquare,
  'Search & Analytics': Search,
  'Visualization': Eye,
  'Monitoring': Activity,
  'Database': Database,
  'Cache': Zap,
  'Data Processing': BarChart3,
  'Analytics': BookOpen,
  'Real-time Analytics': TrendingUp,
  'Artifact Repository': Package,
  'Container Registry': Shield,
  'DevOps Platform': GitBranch,
  'Object Storage': HardDrive,
  'Secret Management': Key
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedChart, setSelectedChart] = useState(null)
  const [copiedField, setCopiedField] = useState(null)

  const filteredCharts = useMemo(() => {
    return helmCharts.filter(chart => {
      const matchesSearch = chart.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          chart.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          chart.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || chart.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const copyToClipboard = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const generateYamlExample = (chart) => {
    const lines = []
    Object.entries(chart.coreValues).forEach(([key, config]) => {
      const comment = `# ${config.description}`
      let value = config.default
      if (config.type === 'string' && value !== '' && !value.toString().match(/^\d+(\.\d+)?[A-Za-z]*$/)) {
        value = `"${value}"`
      }
      lines.push(comment)
      lines.push(`${key}: ${value}`)
      lines.push('')
    })
    return lines.join('\n')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Settings className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold text-white">Helm Values Hub</h1>
          </div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            데이터 플랫폼 구축을 위한 인기 Helm 차트들의 핵심 values.yaml 설정을 한눈에 관리하고 확인하세요
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5 z-10" />
            <input
              type="text"
              placeholder="차트 이름, 설명, 카테고리로 검색..."
              className="w-full pl-10 pr-4 py-3 bg-slate-800/90 border border-blue-400/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 backdrop-blur-sm shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 max-w-4xl">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCharts.map(chart => {
            const IconComponent = categoryIcons[chart.category] || Server
            return (
              <div
                key={chart.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer group hover:scale-105"
                onClick={() => setSelectedChart(chart)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <IconComponent className="h-8 w-8 text-blue-400 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {chart.name}
                      </h3>
                      <span className="text-sm text-blue-300">{chart.category}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    v{chart.latestVersion}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {chart.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {Object.keys(chart.coreValues).length}개 핵심 설정
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Chart Detail Modal */}
        {selectedChart && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {(() => {
                      const IconComponent = categoryIcons[selectedChart.category] || Server
                      return <IconComponent className="h-8 w-8 text-blue-400 mr-3" />
                    })()}
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedChart.name}</h2>
                      <p className="text-blue-300">{selectedChart.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedChart(null)}
                    className="text-gray-400 hover:text-white text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-300 mt-3">{selectedChart.description}</p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <strong className="mr-2">Repository:</strong>
                    <a href={selectedChart.repository} target="_blank" rel="noopener noreferrer"
                       className="text-blue-400 hover:text-blue-300 flex items-center">
                      {selectedChart.repository.replace('https://', '')}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div className="text-gray-400">
                    <strong>Chart:</strong> {selectedChart.chart}
                  </div>
                  <div className="text-gray-400">
                    <strong>Version:</strong> {selectedChart.latestVersion}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Values Configuration */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">핵심 Values 설정</h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {Object.entries(selectedChart.coreValues).map(([key, config]) => (
                        <div key={key} className="bg-slate-700/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <code className="text-blue-300 font-mono text-sm">{key}</code>
                            <button
                              onClick={() => copyToClipboard(key, key)}
                              className="text-gray-400 hover:text-white"
                            >
                              {copiedField === key ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                            </button>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{config.description}</p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded">
                              {config.type}
                            </span>
                            <span className="bg-blue-600 text-white px-2 py-1 rounded">
                              기본값: {config.default?.toString() || 'null'}
                            </span>
                            {config.options && (
                              <span className="bg-purple-600 text-white px-2 py-1 rounded">
                                {config.options.length}개 옵션
                              </span>
                            )}
                          </div>
                          {config.options && (
                            <div className="mt-2 text-xs text-gray-400">
                              옵션: {config.options.join(', ')}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* YAML Example */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">values.yaml 예시</h3>
                      <button
                        onClick={() => copyToClipboard(generateYamlExample(selectedChart), 'yaml')}
                        className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                      >
                        {copiedField === 'yaml' ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            복사됨
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1" />
                            복사
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                      <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap">
                        {generateYamlExample(selectedChart)}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Installation Command */}
                <div className="mt-6 p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">설치 명령어</h4>
                    <button
                      onClick={() => copyToClipboard(`helm repo add ${selectedChart.chart.split('/')[0]} ${selectedChart.repository}\nhelm install my-${selectedChart.id} ${selectedChart.chart}`, 'install')}
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                    >
                      {copiedField === 'install' ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                      복사
                    </button>
                  </div>
                  <code className="text-gray-300 text-sm block">
                    helm repo add {selectedChart.chart.split('/')[0]} {selectedChart.repository}<br/>
                    helm install my-{selectedChart.id} {selectedChart.chart}
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 text-center text-gray-400">
          <p>총 {helmCharts.length}개의 인기 Helm 차트 • {categories.length - 1}개 카테고리</p>
          <p className="mt-2 text-sm">데이터 플랫폼 구축을 위한 필수 도구들의 최신 설정 정보</p>
        </div>
      </div>
    </div>
  )
}

export default App