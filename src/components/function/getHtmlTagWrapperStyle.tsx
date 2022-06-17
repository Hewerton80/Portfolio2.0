import classNames from 'classnames'

const tagsContents = {
  h1: "before:content-['<h1>'] after:content-['</h1>']",
  p: "before:content-['<p>'] after:content-['</p>']",
}

export const getHtmlTagWrapperStyle = (htmlTagWrapper: keyof typeof tagsContents) => {
  return classNames(
    'before:absolute before:font-aurora before:text-gray-700 before:text-lg before:-left-6',
    'after:absolute after:font-aurora after:text-gray-700 after:text-lg after:-left-6',
    'after:translate-y-full before:-translate-y-full after:bottom-0',
    tagsContents[htmlTagWrapper]
  )
}
