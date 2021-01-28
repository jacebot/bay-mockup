import TopBar from 'src/components/TopBar/TopBar'
import NavbarContainer from 'src/components/NavbarContainer'

const BaseLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <NavbarContainer />
      {children}
    </>
  )
}

export default BaseLayout
