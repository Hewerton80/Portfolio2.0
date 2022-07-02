import NavBar from '../common/NavBar'

interface MainTemplateProps extends GlobalProps {}

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default MainTemplate
