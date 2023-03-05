import NavClient from "./nav-client"
import NavVendor from "./nav-vendor"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <>
      <NavVendor />
      <main>{children}</main>
      <Footer />
    </>
  )
}