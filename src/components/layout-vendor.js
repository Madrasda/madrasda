import NavVendor from "./nav-vendor"
import Footer from "./footer"

export default function VendorLayout({ children }) {
  return (
    <>
      <NavVendor />
      <main>{children}</main>
      <Footer />
    </>
  )
}