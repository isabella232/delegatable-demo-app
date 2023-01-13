import Link from 'next/link'

import { Head } from '@/components/layout/Head'

export default function Page() {
  return (
    <>
      <Head />
      <div className="flex flex-1">
        <div className="flex-center flex h-full flex-1 flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-normal">Block Number Enforcer</h3>
        </div>
      </div>
    </>
  )
}
