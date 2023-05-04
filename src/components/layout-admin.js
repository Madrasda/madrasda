import NavAdmin from "./nav-admin"
import Footer from "./footer"

export default function AdminLayout({ children }) {
  return (
    <>
      <NavAdmin />
      <main className="bg-white font-quest">{children}</main>
    </>
  )
}