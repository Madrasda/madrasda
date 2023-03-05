import NavClient from "./nav-client"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <>
      <NavClient />
      <main>{children}</main>
      <Footer />
    </>
  )
}