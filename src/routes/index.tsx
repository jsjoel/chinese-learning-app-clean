import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  component: Index,
})

function Index() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Chinese Learning App</h1>
        <p className="text-xl text-gray-600 mb-8">Welcome to your learning journey</p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Start Learning
        </button>
      </div>
    </div>
  )
}
