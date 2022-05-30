
import {MainLayout} from '../../components/layouts/MainLayout'
import Link from 'next/link'

export default function index() {

  return (
    <MainLayout>
        <h2>Pricing Page</h2>
      <h1 className={"title"}>
       Ir  <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{' '}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>

    </MainLayout>
  )
}
