import NavClient from "./nav-client"
import Footer from "./footer"
import { Suspense } from "react"

export default function ClientLayout({ children, client }) {
  return (
    <>
      <NavClient client={client} />
      <main>{children}</main>
      <Footer />
    </>
  )
}