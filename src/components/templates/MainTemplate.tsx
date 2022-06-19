import NavBar from '../common/NabBar'

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
