import NavAdmin from "./nav-admin"
import Footer from "./footer"

export default function AdminLayout({ children }) {
  return (
    <>
      <NavAdmin />
      <main>{children}</main>
    </>
  )
}