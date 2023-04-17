import NavClient from "./nav-client"
import Footer from "./footer"
import { Suspense } from "react"

export default function ClientLayout({ children }) {
  return (
    <>
      <NavClient />
      <main>{children}</main>
      <Footer />
    </>
  )
}