import Link from 'next/link'

import { Head } from '@/components/layout/Head'
import { SITE_DESCRIPTION, SITE_EMOJI, SITE_NAME, SITE_TITLE } from '@/utils/config'

export default function Home() {
  return (
    <>
      <Head />
      <main className="flex flex-1">
        <div className="flex-center flex h-full flex-1 flex-col items-center justify-center">
          <div className="w-full text-center">
            <h3 className="text-6xl font-normal">{SITE_EMOJI}</h3>
            <h3 className="text-3xl font-bold lg:text-5xl">{SITE_NAME}</h3>
            <h5 className="my-4 text-xl">{SITE_DESCRIPTION}</h5>
          </div>

          <div className="content container mx-auto mt-10 flex max-w-screen-lg items-center gap-6">
            <div className="grid w-full grid-cols-12 gap-5">
              <Card href="enforcer/blocknumber" title="BlockNumber" description="Limit when a transaction can execute using the timestamp" />
              <Card href="enforcer/timestamp" title="Timestamp " description="Limit when a transaction can execute using the blockNumber." />
              <Card href="enforcer/allow-methods" title="Allowed Methods " description="Limit..." />
              <Card href="enforcer/limited-calls" title="Limited Calls " description="Limit..." />
              <Card href="enforcer/revocation" title="Revocation " description="Limit..." />
              <Card href="enforcer/erc20" title="ERC20 " description="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

const Card = (props) => {
  return (
    <div className="card col-span-6">
      <h3 className="text-xl font-semibold lg:text-3xl">{props.title} </h3>
      <p className="">{props.description}</p>
      <Link className="btn btn-light btn-sm mt-4 font-bold" href={props.href}>
        Example
      </Link>
    </div>
  )
}
