import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <>
      <div>Page not Found!</div>
      <Link href={"/"}>Go to Home</Link>
    </>
  );
}
