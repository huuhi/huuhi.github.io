'use client'

import { MDXRemote } from 'next-mdx-remote'

const MDXRemoteWrapper = ({ source }: { source: any }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote
        {...source}
        components={{
          h2: (props) => <h2 className="text-2xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200" {...props} />,
          p: (props) => <p className="mb-4 text-gray-600 dark:text-gray-300" {...props} />,
          a: (props) => <a className="text-blue-500 hover:underline" {...props} />,
          ul: (props) => <ul className="list-disc list-inside mb-4" {...props} />,
          ol: (props) => <ol className="list-decimal list-inside mb-4" {...props} />,
          li: (props) => <li className="mb-2" {...props} />,
          blockquote: (props) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
          code: (props) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" {...props} />,
          pre: (props) => <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto mb-4" {...props} />,
        }}
      />
    </div>
  )
}

export default MDXRemoteWrapper

