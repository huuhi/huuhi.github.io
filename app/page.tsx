import Welcome from './components/Welcome'
import ArticleList from './components/ArticleList'
import ProjectsAndLinks from './components/ProjectsAndLinks'
import Comments from './components/Comments'
import OperationTimer from './components/OperationTimer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Welcome />
      <ArticleList />
      <ProjectsAndLinks />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Comments />
      </div>
      <OperationTimer />
    </main>
  )
}

